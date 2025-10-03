import { aTimeout, expect, fixture, html } from "@open-wc/testing";
import "../index.js";

describe("auro-toast", () => {
  it("auro-toast is accessible", async () => {
    const el = await fixture(html`
      <auro-toast></auro-toast>
    `);

    await expect(el).to.be.accessible();
  });

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
      <auro-toast variant="success" noIcon visible> Success </auro-toast>
    `);
    const root = el.shadowRoot;

    console.warn(el.shadowRoot.querySelector(".typeIcon"));
    expect(root.querySelector(".typeIcon")).to.not.exist;
  });
});
