import { fixture, html, expect, aTimeout } from '@open-wc/testing';
import '../src/auro-toast';

describe('auro-toast', () => {
  it('auro-toast is accessible', async () => {
    const el = await fixture(html`
      <auro-toast></auro-toast>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-toast custom element is defined', async () => {
    const el = await !!customElements.get("auro-toast");

    await expect(el).to.be.true;
  });

  it('close the toast when the X icon button is clicked on', async () => {
    const el = await fixture(html`
    <auro-toast visible> Hello I am a toast! </auro-toast>
  `);
    const closeButton = el.shadowRoot.querySelector('button');
    closeButton.click()
    expect(el.visible).to.be.false
  })

  it('auro-toast is hidden after five seconds', async () => {
    const el = await fixture(html`
    <auro-toast>Something</auro-toast>
  `);

  el.setAttribute("visible", true)

  await aTimeout(5050);
  const root = el.shadowRoot;
  const toastContainer = root.querySelector('#toastContainer');

  expect(toastContainer.classList.contains('hidden')).to.be.true;
  }).timeout(5060);
});
