/**
 * live-region-helpers.js
 *
 * Accessibility testing utilities for aria-live regions.
 * Designed for use with @open-wc/testing + @web/test-runner + Lit.
 *
 * Usage:
 *   import { watchLiveRegion, expectAnnouncement, expectAnnouncementCount, announcesTo } from './live-region-helpers.js';
 */

import { elementUpdated, waitUntil } from '@open-wc/testing';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Resolve a live region element from either a selector string, an Element,
 * or the host element itself (if it IS the live region).
 *
 * @param {Element} host
 * @param {string|Element|undefined} regionOrSelector
 * @returns {Element}
 */
function resolveRegion(host, regionOrSelector) {
  if (!regionOrSelector) {
    if (host.hasAttribute('aria-live')) return host;
    const root = host.shadowRoot ?? host;
    const found = root.querySelector('[aria-live]');
    if (!found) throw new Error(`No aria-live region found in <${host.localName}>`);
    return found;
  }
  if (typeof regionOrSelector === 'string') {
    const root = host.shadowRoot ?? host;
    const found = root.querySelector(regionOrSelector);
    if (!found) throw new Error(`No element matching "${regionOrSelector}" found in <${host.localName}>`);
    return found;
  }
  return regionOrSelector;
}

/**
 * Return the politeness level of a live region element.
 * @param {Element} region
 * @returns {'polite'|'assertive'|'off'|null}
 */
export function getLivePoliteness(region) {
  return region.getAttribute('aria-live') ?? null;
}

// ---------------------------------------------------------------------------
// watchLiveRegion
// ---------------------------------------------------------------------------

/**
 * Attach a MutationObserver to a live region and collect every text change.
 *
 * @param {Element} host            - The component under test
 * @param {string|Element} [region] - Selector or element for the live region.
 *                                    Defaults to the first [aria-live] found.
 * @returns {{ announcements: string[], disconnect: () => void }}
 *
 * @example
 *   const watcher = watchLiveRegion(el);
 *   el.triggerSomething();
 *   await elementUpdated(el);
 *   expectAnnouncement(watcher, 'Item saved');
 *   watcher.disconnect();
 */
export function watchLiveRegion(host, region) {
  const liveEl = resolveRegion(host, region);
  const announcements = [];

  // If the live region is inside a shadow root, mutations to slotted content
  // happen in the host's light DOM — a shadow DOM observer never fires for them.
  // Observe the host instead so we catch slotted content changes.
  const isInShadowRoot = liveEl.getRootNode() !== document;
  const target = isInShadowRoot ? host : liveEl;

  // When the target has a shadow root (e.g. auro-toast), the DOM mutation we
  // care about — toastContainer appearing — happens inside the shadow root.
  // Observe that directly so the callback fires.
  const observeTarget = target.shadowRoot ?? target;

  const observer = new MutationObserver(() => {
    // Shadow root mutation tells us the toast rendered,
    // but the message text lives in the host's light DOM (slotted content)
    const text = host.textContent?.trim();
    if (text) announcements.push(text);
  });

  observer.observe(observeTarget, {
    subtree: true,
    childList: true,
    characterData: true,
  });

  // Also observe the host's light DOM directly for slotted content changes
  if (observeTarget !== host) {
    observer.observe(host, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  return {
    /** All text snapshots captured since observation started. */
    announcements,
    /** The live region element being observed. */
    element: liveEl,
    /** The actual DOM node the MutationObserver is watching. */
    observedTarget: observeTarget,
    /** Stop observing. Call this in afterEach to avoid leaks. */
    disconnect: () => observer.disconnect(),
  };
}

// ---------------------------------------------------------------------------
// expectAnnouncement
// ---------------------------------------------------------------------------

export function expectAnnouncement(watcher, expected) {
  const { announcements } = watcher;

  const matched =
    expected instanceof RegExp
      ? announcements.some(a => expected.test(a))
      : announcements.includes(expected);

  if (!matched) {
    const received = announcements.length
      ? announcements.map(a => `  "${a}"`).join('\n')
      : '  (none)';
    throw new Error(
      `Expected live region to announce ${String(expected)}, but got:\n${received}`
    );
  }
}

// ---------------------------------------------------------------------------
// expectNoAnnouncement
// ---------------------------------------------------------------------------

export function expectNoAnnouncement(watcher, unexpected) {
  const { announcements } = watcher;

  if (!unexpected) {
    if (announcements.length > 0) {
      throw new Error(
        `Expected no live region announcements, but got:\n${announcements.map(a => `  "${a}"`).join('\n')}`
      );
    }
    return;
  }

  const matched =
    unexpected instanceof RegExp
      ? announcements.some(a => unexpected.test(a))
      : announcements.includes(unexpected);

  if (matched) {
    throw new Error(`Expected live region NOT to announce ${String(unexpected)}, but it did.`);
  }
}

// ---------------------------------------------------------------------------
// expectAnnouncementCount
// ---------------------------------------------------------------------------

export function expectAnnouncementCount(watcher, count) {
  const actual = watcher.announcements.length;
  if (actual !== count) {
    throw new Error(
      `Expected ${count} live region announcement(s), but got ${actual}:\n` +
      watcher.announcements.map(a => `  "${a}"`).join('\n')
    );
  }
}

// ---------------------------------------------------------------------------
// announcesTo
// ---------------------------------------------------------------------------

export async function announcesTo(host, action, expected, opts = {}) {
  const { region, timeout = 1000 } = opts;
  const watcher = watchLiveRegion(host, region);

  try {
    await action();
    await elementUpdated(host);

    await waitUntil(
      () => {
        const { announcements } = watcher;
        return expected instanceof RegExp
          ? announcements.some(a => expected.test(a))
          : announcements.includes(expected);
      },
      `Live region never announced "${String(expected)}"`,
      { timeout }
    );
  } finally {
    watcher.disconnect();
  }
}

// ---------------------------------------------------------------------------
// assertLiveRegionPresent
// ---------------------------------------------------------------------------

export function assertLiveRegionPresent(host, politeness, region) {
  const liveEl = resolveRegion(host, region);
  const actual = getLivePoliteness(liveEl);

  if (!actual) {
    throw new Error(`Element <${liveEl.localName}> is missing an aria-live attribute.`);
  }

  if (politeness && actual !== politeness) {
    throw new Error(
      `Expected aria-live="${politeness}" but found aria-live="${actual}" on <${liveEl.localName}>.`
    );
  }
}
