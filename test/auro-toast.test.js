import { aTimeout, elementUpdated, expect, fixture, html } from "@open-wc/testing";
import sinon from "sinon";
import "../src/registered.js";

import {
  watchLiveRegion,
  expectAnnouncement,
  expectNoAnnouncement,
  assertLiveRegionPresent,
  announcesTo,
} from "./live-region-helpers.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Resolve the aria-live element inside auro-toaster's shadow root.
 * Returns null if not found (intentional — lets tests assert its presence).
 */
function getToasterLiveRegion(toasterEl) {
  return toasterEl.shadowRoot?.querySelector("[aria-live]") ?? null;
}

/**
 * Render a toaster with a visible toast and return both elements.
 */
async function fixtureWithVisibleToast(variant = "success") {
  const root = await fixture(html`
    <div>
      <auro-toaster id="toaster">
        <auro-toast id="toast" variant="${variant}" visible>
          Test message
        </auro-toast>
      </auro-toaster>
    </div>
  `);

  const toaster = root.querySelector("auro-toaster");
  const toast = root.querySelector("auro-toast");
  await elementUpdated(toaster);
  await elementUpdated(toast);

  return { toaster, toast };
}

/**
 * Parse an rgb() string into [r, g, b] numbers.
 * e.g. "rgb(251, 198, 198)" → [251, 198, 198]
 */
function parseRgb(rgbString) {
  return rgbString.match(/\d+/g).map(Number);
}

/**
 * Calculate relative luminance of an RGB color per WCAG 2.1.
 */
function luminance(r, g, b) {
  return [r, g, b].reduce((sum, c, i) => {
    c = c / 255;
    c = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    return sum + c * [0.2126, 0.7152, 0.0722][i];
  }, 0);
}

/**
 * Calculate WCAG contrast ratio between two RGB colors.
 */
function contrastRatio(rgb1, rgb2) {
  const l1 = luminance(...rgb1);
  const l2 = luminance(...rgb2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// ---------------------------------------------------------------------------
// Live region structure
// ---------------------------------------------------------------------------

describe("auro-toaster — live region structure", () => {
  it("auro-toaster shadow root contains an aria-live region", async () => {
    const toaster = await fixture(html`<auro-toaster></auro-toaster>`);
    const liveRegion = getToasterLiveRegion(toaster);

    assertLiveRegionPresent(toaster, undefined, liveRegion);
  });

  it("aria-live region has politeness of 'polite'", async () => {
    const toaster = await fixture(html`<auro-toaster></auro-toaster>`);
    const liveRegion = getToasterLiveRegion(toaster);

    assertLiveRegionPresent(toaster, "polite", liveRegion);
  });

  it("aria-live is on a <div> wrapper, not directly on a <slot> element", async () => {
    const toaster = await fixture(html`<auro-toaster></auro-toaster>`);
    const slotWithLive = toaster.shadowRoot?.querySelector("slot[aria-live]");
    const divWithLive = toaster.shadowRoot?.querySelector("div[aria-live]");

    if (slotWithLive) {
      expect.fail(
        'aria-live is placed directly on a <slot> element. ' +
        'Move it to a <div> wrapper for reliable AT support: ' +
        '<div aria-live="polite" aria-atomic="false"><slot></slot></div>'
      );
    }

    expect(divWithLive, 'Expected a <div> with aria-live in auro-toaster shadow root').to.exist;
    expect(divWithLive.getAttribute('aria-live')).to.equal('polite');
    expect(divWithLive.getAttribute('aria-atomic')).to.equal('false');
  });

  it("toastContainer does not contain any live region attributes or roles that would create a nested live region", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success" visible disableautohide>Test</auro-toast>
      </auro-toaster>
    `);
    await elementUpdated(el);

    const toast = el.querySelector("auro-toast");
    const toastContainer = toast.shadowRoot.querySelector(".toastContainer");

    expect(toastContainer.getAttribute("role")).to.not.equal("status");
    expect(toastContainer.getAttribute("role")).to.not.equal("alert");
    expect(toastContainer.getAttribute("aria-live")).to.not.equal("polite");
    expect(toastContainer.getAttribute("aria-live")).to.not.equal("assertive");
    expect(toastContainer.getAttribute("aria-live")).to.not.equal("off");
    expect(toastContainer.getAttribute("aria-atomic")).to.not.equal("true");
  });

  it("close button has an aria label that describes its purpose", async () => {
    const el = await fixture(html`
      <auro-toast variant="success" visible disableautohide>Flight booked</auro-toast>
    `);
    await elementUpdated(el);

    const ariaLabel = el.shadowRoot.querySelector('[slot="ariaLabel"]');

    expect(ariaLabel, "Expected an ariaLabel slot in the close button").to.exist;
    expect(ariaLabel.textContent?.trim()).to.equal("Close this notification.");
  });
});

describe("auro-toaster — live region structure integrity", () => {
  it("maintains correct aria-live structure after a toast becomes visible", async () => {
    const { toaster } = await fixtureWithVisibleToast("success");
    const divWithLive = toaster.shadowRoot?.querySelector("div[aria-live]");

    expect(divWithLive).to.exist;
    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");
    expect(divWithLive.getAttribute("aria-atomic")).to.equal("false");
  });

  it("maintains correct aria-live structure after an error toast becomes visible", async () => {
    const { toaster } = await fixtureWithVisibleToast("error");
    const divWithLive = toaster.shadowRoot?.querySelector("div[aria-live]");

    expect(divWithLive).to.exist;
    expect(divWithLive.getAttribute("aria-atomic")).to.equal("false");
  });

  it("maintains correct aria-live structure after a toast is dismissed", async () => {
    const { toaster, toast } = await fixtureWithVisibleToast("success");

    toast.visible = false;
    await elementUpdated(toast);

    const divWithLive = toaster.shadowRoot?.querySelector("div[aria-live]");
    expect(divWithLive).to.exist;
    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");
    expect(divWithLive.getAttribute("aria-atomic")).to.equal("false");
  });
});

// ---------------------------------------------------------------------------
// Standalone live region
// ---------------------------------------------------------------------------

describe("auro-toast — standalone live region", () => {
  it("fires toast-request-announce when connected to the DOM", async () => {
    const wrapper = await fixture(html`<div></div>`);

    let eventFired = false;
    wrapper.addEventListener('toast-request-announce', () => { eventFired = true; });

    const toast = document.createElement('auro-toast');
    toast.setAttribute('variant', 'success');
    wrapper.appendChild(toast);
    await elementUpdated(toast);

    expect(eventFired).to.be.true;
  });

  it("toast-request-announce event is cancelable, bubbles, and is composed", async () => {
    const wrapper = await fixture(html`<div></div>`);

    let capturedEvent;
    wrapper.addEventListener('toast-request-announce', (e) => { capturedEvent = e; });

    const toast = document.createElement('auro-toast');
    toast.setAttribute('variant', 'success');
    wrapper.appendChild(toast);
    await elementUpdated(toast);

    expect(capturedEvent.bubbles).to.be.true;
    expect(capturedEvent.cancelable).to.be.true;
    expect(capturedEvent.composed).to.be.true;
  });

  it("sets role='status' on host at connection time — before visible is set", async () => {
    const el = await fixture(html`
      <auro-toast variant="success" disableautohide>Flight booked</auro-toast>
    `);

    // Role must already be present — no visibility change needed
    expect(el.getAttribute('role')).to.equal('status');
  });

  it("sets role='alert' on host at connection time for error variant", async () => {
    const el = await fixture(html`
      <auro-toast variant="error" disableautohide>Something went wrong</auro-toast>
    `);

    expect(el.getAttribute('role')).to.equal('alert');
  });

  it("updates role when variant changes after connection", async () => {
    const el = await fixture(html`
      <auro-toast variant="success" disableautohide>Message</auro-toast>
    `);

    expect(el.getAttribute('role')).to.equal('status');

    el.variant = 'error';
    await elementUpdated(el);

    expect(el.getAttribute('role')).to.equal('alert');
  });

  it("does not set role when inside a div with aria-live='polite'", async () => {
    const el = await fixture(html`
      <div aria-live="polite">
        <auro-toast variant="success" disableautohide>Flight booked</auro-toast>
      </div>
    `);
    const toast = el.querySelector('auro-toast');
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.be.null;
  });

  it("does not set role when inside a div with aria-live='assertive'", async () => {
    const el = await fixture(html`
      <div aria-live="assertive">
        <auro-toast variant="error" disableautohide>Something went wrong</auro-toast>
      </div>
    `);
    const toast = el.querySelector('auro-toast');
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.be.null;
  });

  it("does not set role when inside a container with role='status'", async () => {
    const el = await fixture(html`
      <div role="status">
        <auro-toast variant="success" disableautohide>Flight booked</auro-toast>
      </div>
    `);
    const toast = el.querySelector('auro-toast');
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.be.null;
  });

  it("does not set role when inside a container with role='alert'", async () => {
    const el = await fixture(html`
      <div role="alert">
        <auro-toast variant="error" disableautohide>Something went wrong</auro-toast>
      </div>
    `);
    const toast = el.querySelector('auro-toast');
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.be.null;
  });

  it("sets role when inside a div with aria-live='off' — off is not an active live region", async () => {
    const el = await fixture(html`
      <div aria-live="off">
        <auro-toast variant="success" disableautohide>Flight booked</auro-toast>
      </div>
    `);
    const toast = el.querySelector('auro-toast');
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.equal('status');
  });

  it("does not set role on host when inside auro-toaster", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success" disableautohide>Flight booked</auro-toast>
      </auro-toaster>
    `);
    const toast = el.querySelector('auro-toast');
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.be.null;
  });

  it("does not set role on host for error toast when inside auro-toaster", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="error" disableautohide>Something went wrong</auro-toast>
      </auro-toaster>
    `);
    const toast = el.querySelector('auro-toast');
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.be.null;
  });

  // Edge case: a toast that was standalone (role set) is moved into a live
  // region container and reconnected. The stale role must be removed so it
  // does not create a nested live region.
  it("removes role when reconnected inside a container that owns a live region", async () => {
    const wrapper = await fixture(html`
      <div>
        <auro-toast variant="success" disableautohide>Flight booked</auro-toast>
        <div id="liveContainer" aria-live="polite"></div>
      </div>
    `);

    const toast = wrapper.querySelector('auro-toast');
    await elementUpdated(toast);

    // Standalone — role should be set
    expect(toast.getAttribute('role')).to.equal('status');

    // Move into live region container — triggers connectedCallback
    const liveContainer = wrapper.querySelector('#liveContainer');
    liveContainer.appendChild(toast);
    await elementUpdated(toast);

    expect(toast.getAttribute('role')).to.be.null;
  });
});

// ---------------------------------------------------------------------------
// Accessibility — axe-core
// ---------------------------------------------------------------------------

describe("auro-toast — axe accessibility", () => {
  it("passes axe when toast is visible", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success" visible>Successfully added lap infant</auro-toast>
      </auro-toaster>
    `);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it("passes axe when toast is not visible", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success">Successfully added lap infant</auro-toast>
      </auro-toaster>
    `);

    await expect(el).to.be.accessible();
  });

  it("passes axe for error variant", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="error" visible>Something went wrong</auro-toast>
      </auro-toaster>
    `);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it("passes axe for noIcon variant", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success" noicon visible>Saved</auro-toast>
      </auro-toaster>
    `);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});

// ---------------------------------------------------------------------------
// Live region — announcement on show
// ---------------------------------------------------------------------------

describe("auro-toast — live region announcements on show", () => {
  it("announces message text when toast becomes visible", async () => {
    const toaster = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success" disableautohide>Flight booked</auro-toast>
      </auro-toaster>
    `);
    const toast = toaster.querySelector("auro-toast");

    await announcesTo(
      toast,
      async () => {
        toast.visible = true;
        await elementUpdated(toast);
      },
      /Flight booked/,
      { region: toast }
    );
  });

  it("announces updated message when toast content changes while visible", async () => {
    const { toaster, toast } = await fixtureWithVisibleToast();
    const liveRegion = getToasterLiveRegion(toaster);
    const watcher = watchLiveRegion(toaster, liveRegion);

    toast.textContent = "Update: seat confirmed";
    await elementUpdated(toast);

    expectAnnouncement(watcher, /Update: seat confirmed/);
    watcher.disconnect();
  });

  it("message text is delivered via slot, not hardcoded in shadow DOM", async () => {
    const el = await fixture(html`
      <auro-toast variant="success" visible disableautohide>Flight booked</auro-toast>
    `);
    await elementUpdated(el);

    const messageDiv = el.shadowRoot.querySelector(".message");
    const slot = messageDiv?.querySelector("slot");

    // slot must exist inside .message
    expect(slot, "Expected a <slot> inside .message div").to.exist;

    // the slotted text must match what was passed in
    const assignedNodes = slot.assignedNodes({ flatten: true });
    const slottedText = assignedNodes.map(n => n.textContent?.trim()).join("").trim();

    expect(slottedText).to.equal("Flight booked");

    // shadow DOM must not contain the message text hardcoded —
    // the text lives in the light DOM (slot), not in the shadow template
    expect(el.shadowRoot.innerHTML).to.not.include("Flight booked");
  });
});


// ---------------------------------------------------------------------------
// Live region — no spurious announcements
// ---------------------------------------------------------------------------

describe("auro-toast — no spurious announcements", () => {
  it("does not announce anything when toast is not visible", async () => {
    const toaster = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success">Silent message</auro-toast>
      </auro-toaster>
    `);
    const liveRegion = getToasterLiveRegion(toaster);
    const watcher = watchLiveRegion(toaster, liveRegion);

    await aTimeout(100);
    expectNoAnnouncement(watcher);
    watcher.disconnect();
  });

  it("does not announce after toast is closed", async () => {
    const { toaster, toast } = await fixtureWithVisibleToast();
    const liveRegion = getToasterLiveRegion(toaster);

    toast.visible = false;
    await elementUpdated(toast);

    const watcher = watchLiveRegion(toaster, liveRegion);
    await aTimeout(100);
    expectNoAnnouncement(watcher);
    watcher.disconnect();
  });
});

// ---------------------------------------------------------------------------
// Live region — politeness by variant
// ---------------------------------------------------------------------------

describe("auro-toast — live region politeness", () => {
  it("uses aria-live='polite' for success toasts", async () => {
    const { toaster } = await fixtureWithVisibleToast("success");
    const liveRegion = getToasterLiveRegion(toaster);

    expect(liveRegion?.getAttribute("aria-live")).to.equal("polite");
  });

  it("uses aria-live='assertive' for error toasts", async () => {
    const { toaster } = await fixtureWithVisibleToast("error");
    const liveRegion = getToasterLiveRegion(toaster);

    expect(liveRegion?.getAttribute("aria-live")).to.equal("assertive");
  });

  it("aria-live resets to 'polite' after 3 seconds even when error toast remains visible", async () => {
    const clock = sinon.useFakeTimers();

    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="error" visible disableautohide>Persistent error</auro-toast>
      </auro-toaster>
    `);
    await elementUpdated(el);

    const divWithLive = el.shadowRoot?.querySelector("div[aria-live]");

    expect(divWithLive.getAttribute("aria-live")).to.equal("assertive");

    // Advance time instead of waiting real time
    clock.tick(3500);
    await elementUpdated(el);

    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");

    const toast = el.querySelector("auro-toast");
    expect(toast.hasAttribute("visible")).to.be.true;

    clock.restore();
  });

  it("does not trigger assertive when a non-auro-toast element with variant='error' and visible changes", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <div id="otherElement" variant="error">Not a toast</div>
      </auro-toaster>
    `);
    await elementUpdated(el);

    const divWithLive = el.shadowRoot?.querySelector("div[aria-live]");
    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");

    // This element has variant="error" and is gaining visible — without the
    // localName guard, isErrorToast and becameVisible would both be true and
    // _setAssertiveTemporarily() would fire. The guard must prevent that.
    const otherElement = el.querySelector("#otherElement");
    otherElement.setAttribute("visible", "");
    await elementUpdated(el);

    // localName guard should prevent assertive from firing
    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");
  });

  it("does not trigger assertive when auro-toaster itself gains a visible attribute", async () => {
    const el = await fixture(html`
      <auro-toaster></auro-toaster>
    `);
    await elementUpdated(el);

    const divWithLive = el.shadowRoot?.querySelector("div[aria-live]");
    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");

    // auro-toaster shares the auro-toast prefix — the regex guard must
    // exclude it so setting visible on the toaster itself does not fire assertive.
    el.setAttribute("visible", "");
    await elementUpdated(el);

    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");
  });

  it("second error toast re-triggers assertive after politeness has reset to polite", async () => {
    const root = await fixture(html`
      <div>
        <auro-toaster id="toaster">
          <auro-toast id="toast1" variant="error" visible disableautohide>First error</auro-toast>
          <auro-toast id="toast2" variant="error" disableautohide>Second error</auro-toast>
        </auro-toaster>
      </div>
    `);

    const toaster = root.querySelector("auro-toaster");
    const toast2 = root.querySelector("#toast2");
    const divWithLive = toaster.shadowRoot?.querySelector("div[aria-live]");

    await elementUpdated(toaster);

    // wait for assertive to reset back to polite
    await aTimeout(3500);
    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");

    // second error toast becomes visible — should re-trigger assertive.
    // Await toast2's own update (the reactive change happens there, not on
    // toaster), then flush a microtask to ensure the MutationObserver
    // callback has run before asserting.
    toast2.visible = true;
    await elementUpdated(toast2);
    await aTimeout(0);

    expect(divWithLive.getAttribute("aria-live")).to.equal("assertive");
  }).timeout(4500);

  it("resets aria-live to polite on disconnect when live region is assertive", async () => {
    const wrapper = await fixture(html`
      <div>
        <auro-toaster>
          <auro-toast variant="error" visible disableautohide>Something went wrong</auro-toast>
        </auro-toaster>
      </div>
    `);

    const toaster = wrapper.querySelector("auro-toaster");
    await elementUpdated(toaster);

    const divWithLive = toaster.shadowRoot?.querySelector("div[aria-live]");
    expect(divWithLive.getAttribute("aria-live")).to.equal("assertive");

    // Disconnect before the 3-second reset timer fires
    wrapper.removeChild(toaster);

    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");

    // Reconnect — live region should still be polite
    wrapper.appendChild(toaster);
    await elementUpdated(toaster);

    expect(divWithLive.getAttribute("aria-live")).to.equal("polite");
  });

  it("triggers assertive when a visible toast changes variant to error (defensive fallback)", async () => {
    const el = await fixture(html`
      <auro-toaster>
        <auro-toast variant="success" visible disableautohide>Saved</auro-toast>
      </auro-toaster>
    `);

    const liveRegion = el.shadowRoot.querySelector("div[aria-live]");

    // Initial state should be polite
    expect(liveRegion.getAttribute("aria-live")).to.equal("polite");

    const toast = el.querySelector("auro-toast");

    // Mutate AFTER visible (unsupported pattern, but must be handled safely)
    toast.setAttribute("variant", "error");
    await elementUpdated(toast);

    // Let MutationObserver flush
    await Promise.resolve();
    await elementUpdated(el);

    expect(liveRegion.getAttribute("aria-live")).to.equal("assertive");
  });
});

// ---------------------------------------------------------------------------
// onToastClose event
// ---------------------------------------------------------------------------

describe("auro-toast — onToastClose event", () => {
  it("fires onToastClose when X button is clicked", async () => {
    const el = await fixture(html`
      <auro-toast visible disableautohide>Close me</auro-toast>
    `);

    let eventFired = false;
    el.addEventListener("onToastClose", () => { eventFired = true; });

    const closeButton = el.shadowRoot.querySelector('[part="close-button"]');
    closeButton.click();
    await elementUpdated(el);

    expect(eventFired).to.be.true;
  });

  it("fires onToastClose after auto-hide timeout", async () => {
    const el = await fixture(html`
      <auro-toast visible timetilhide="500">Auto close me</auro-toast>
    `);

    let eventFired = false;
    el.addEventListener("onToastClose", () => { eventFired = true; });

    await aTimeout(1000);
    expect(eventFired).to.be.true;
  }).timeout(2000);

  it("does NOT fire onToastClose for error toast after timeout", async () => {
    const clock = sinon.useFakeTimers();

    const el = await fixture(html`
      <auro-toast variant="error" visible>Persistent error</auro-toast>
    `);

    let eventFired = false;
    el.addEventListener("onToastClose", () => { eventFired = true; });

    clock.tick(6000);

    expect(eventFired).to.be.false;

    clock.restore();
  });
});

// ---------------------------------------------------------------------------
// toast-close event
// ---------------------------------------------------------------------------

describe("auro-toast — toast-close event", () => {
  it("fires toast-close when X button is clicked", async () => {
    const el = await fixture(html`
      <auro-toast visible disableautohide>Close me</auro-toast>
    `);

    let eventFired = false;
    el.addEventListener("toast-close", () => { eventFired = true; });

    const closeButton = el.shadowRoot.querySelector('[part="close-button"]');
    closeButton.click();
    await elementUpdated(el);

    expect(eventFired).to.be.true;
  });

  it("fires toast-close after auto-hide timeout", async () => {
    const el = await fixture(html`
      <auro-toast visible timetilhide="500">Auto close me</auro-toast>
    `);

    let eventFired = false;
    el.addEventListener("toast-close", () => { eventFired = true; });

    await aTimeout(1000);
    expect(eventFired).to.be.true;
  }).timeout(2000);

  it("does NOT fire toast-close for error toast after timeout", async () => {
    const clock = sinon.useFakeTimers();

    const el = await fixture(html`
      <auro-toast variant="error" visible>Persistent error</auro-toast>
    `);

    let eventFired = false;
    el.addEventListener("toast-close", () => { eventFired = true; });

    clock.tick(6000);

    expect(eventFired).to.be.false;

    clock.restore();
  });
});

// ---------------------------------------------------------------------------
// lowercase attribute binding
// ---------------------------------------------------------------------------

describe("auro-toast — lowercase attribute binding", () => {
  it("disableautohide HTML attribute sets disableAutoHide property", async () => {
    const el = await fixture(html`<auro-toast disableautohide visible>test</auro-toast>`);
    expect(el.disableAutoHide).to.be.true;
  });

  it("noicon HTML attribute sets noIcon property", async () => {
    const el = await fixture(html`<auro-toast noicon visible>test</auro-toast>`);
    expect(el.noIcon).to.be.true;
  });

  it("timetilhide HTML attribute sets timeTilHide property", async () => {
    const el = await fixture(html`<auro-toast timetilhide="3000" visible>test</auro-toast>`);
    expect(el.timeTilHide).to.equal(3000);
  });
});

// ---------------------------------------------------------------------------
// disableAutoHide
// ---------------------------------------------------------------------------

describe("auro-toast — disableAutoHide", () => {
  it("stays visible past the default timeout when disableAutoHide is set", async () => {
    const el = await fixture(html`
      <auro-toast visible disableautohide>Persistent</auro-toast>
    `);

    // Let Lit initialize + updated() run
    await elementUpdated(el);
    await Promise.resolve();

    // Wait a short buffer to allow any accidental timers to fire
    await new Promise((r) => setTimeout(r, 50));

    expect(el.visible).to.be.true;
  });

  it("does not fire onToastClose automatically when disableAutoHide is set", async () => {
    const el = await fixture(html`
      <auro-toast visible disableautohide>Persistent</auro-toast>
    `);

    let eventFired = false;
    el.addEventListener("onToastClose", () => {
      eventFired = true;
    });

    await elementUpdated(el);
    await Promise.resolve();

    // small buffer instead of full timeout window
    await new Promise((r) => setTimeout(r, 50));

    expect(eventFired).to.be.false;
  });
});

// ---------------------------------------------------------------------------
// Default functional tests
// ---------------------------------------------------------------------------

describe("auro-toast", () => {
  it("auro-toast custom element is defined", async () => {
    const el = !!customElements.get("auro-toast");

    expect(el).to.be.true;
  });

  it("close the toast when the X icon button is clicked on", async () => {
    const el = await fixture(html`
      <auro-toast id="2" visible> Hello I am a toast! </auro-toast>
    `);

    const closeButton = el.shadowRoot.querySelector('[part="close-button"]');
    closeButton.click();

    setTimeout(() => expect(el.visible).to.be.false, 1000);
  });

  it("auro-toast is hidden after five seconds", async () => {
    const el = await fixture(html`
      <auro-toast visible>Something</auro-toast>
    `);

    await aTimeout(5500);
    const _root = el.shadowRoot;

    expect(el.visible).to.be.false;
  }).timeout(6000);

  it("error auro-toast should not auto dismiss", async () => {
    const el = await fixture(html`
      <auro-toast variant="error" visible>Something</auro-toast>
    `);

    await aTimeout(5050);
    const root = el.shadowRoot;
    const _toastContainer = root.querySelector(".toastContainer");

    expect(el.visible).to.be.true;
  }).timeout(5060);

  it("sets auro-toast to noIcon style", async () => {
    const el = await fixture(html`
      <auro-toast variant="success" noicon visible> Success </auro-toast>
    `);
    const root = el.shadowRoot;

    expect(root.querySelector(".typeIcon")).to.not.exist;
  });

  describe("auro-toast — focus management", () => {
    it("returns focus to trigger element via trigger attribute", async () => {
      const root = await fixture(html`
        <div>
          <button id="triggerBtn">Show toast</button>
          <auro-toast trigger="triggerBtn" visible disableautohide>Message</auro-toast>
        </div>
      `);

      const btn = root.querySelector("#triggerBtn");
      const el = root.querySelector("auro-toast");
      await elementUpdated(el);

      const closeButton = el.shadowRoot.querySelector('[part="close-button"]');
      closeButton.click();
      await elementUpdated(el);

      expect(document.activeElement).to.equal(btn);
    });

    it("returns focus to trigger element via triggerElement property", async () => {
      const root = await fixture(html`
        <div>
          <button id="triggerBtn">Show toast</button>
          <auro-toast visible disableautohide>Message</auro-toast>
        </div>
      `);

      const btn = root.querySelector("#triggerBtn");
      const el = root.querySelector("auro-toast");
      el.triggerElement = btn;
      await elementUpdated(el);

      const closeButton = el.shadowRoot.querySelector('[part="close-button"]');
      closeButton.click();
      await elementUpdated(el);

      expect(document.activeElement).to.equal(btn);
    });

    it("trigger attribute takes precedence over triggerElement when both are set", async () => {
      const root = await fixture(html`
        <div>
          <button id="attrBtn">Attribute target</button>
          <button id="propBtn">Property target</button>
          <auro-toast trigger="attrBtn" visible disableautohide>Message</auro-toast>
        </div>
      `);

      const attrBtn = root.querySelector("#attrBtn");
      const propBtn = root.querySelector("#propBtn");
      const el = root.querySelector("auro-toast");
      el.triggerElement = propBtn;
      await elementUpdated(el);

      const closeButton = el.shadowRoot.querySelector('[part="close-button"]');
      closeButton.click();
      await elementUpdated(el);

      expect(document.activeElement).to.equal(attrBtn);
    });

    it("does not throw when no trigger is set and close is clicked", async () => {
      const el = await fixture(html`
        <auro-toast visible disableautohide>Message</auro-toast>
      `);
      await elementUpdated(el);

      const closeButton = el.shadowRoot.querySelector('[part="close-button"]');
      expect(() => closeButton.click()).to.not.throw;
    });
  });

  it("renders custom variant with icon container but no default variant svg", async () => {
    const el = await fixture(html`
      <auro-toast variant="custom" visible disableautohide>Custom</auro-toast>
    `);
    await elementUpdated(el);

    // The icon container is present but no variant-specific svg is rendered inside it
    const typeIcon = el.shadowRoot.querySelector(".typeIcon");
    expect(typeIcon).to.exist;
    expect(typeIcon.querySelector('svg')).to.not.exist;
  });

  it("handleSlotContent mirrors custom SVG into typeIcon", async () => {
    const el = await fixture(html`
      <auro-toast variant="custom" visible disableautohide>
        <svg slot="customSvg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        Custom message
      </auro-toast>
    `);
    await elementUpdated(el);

    const typeIcon = el.shadowRoot.querySelector(".typeIcon");
    expect(typeIcon).to.exist;
    expect(typeIcon.querySelector('[slot="svg"]')).to.exist;
  });
});

// ---------------------------------------------------------------------------
// Color contrast
// ---------------------------------------------------------------------------

describe("auro-toast — color contrast", () => {
  ["success", "error"].forEach((variant) => {
    it(`${variant} — message text meets WCAG AA contrast ratio of 4.5:1 against host background`, async () => {
      const el = await fixture(html`
        <auro-toast variant="${variant}" visible disableautohide>Test message</auro-toast>
      `);
      await elementUpdated(el);

      const background = parseRgb(getComputedStyle(el).backgroundColor);
      const textColor = parseRgb(getComputedStyle(el).color);
      const ratio = contrastRatio(textColor, background);

      expect(ratio, `Text contrast ratio ${ratio.toFixed(2)} does not meet WCAG AA (4.5:1)`).to.be.at.least(4.5);
    });

    it(`${variant} — type icon meets WCAG SC 1.4.11 contrast ratio of 3:1 against host background`, async () => {
      const el = await fixture(html`
        <auro-toast variant="${variant}" visible disableautohide>Test message</auro-toast>
      `);
      await elementUpdated(el);

      const background = parseRgb(getComputedStyle(el).backgroundColor);
      const icon = el.shadowRoot.querySelector(".typeIcon");
      const iconColor = parseRgb(getComputedStyle(icon).color);
      const ratio = contrastRatio(iconColor, background);

      expect(ratio, `Icon contrast ratio ${ratio.toFixed(2)} does not meet WCAG SC 1.4.11 minimum (3:1)`).to.be.at.least(3);
    });
  });
});
