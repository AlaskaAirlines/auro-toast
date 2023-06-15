import { fixture, html, expect, aTimeout, elementUpdated } from '@open-wc/testing';
import '../src/auro-toast';

describe('auro-toast', () => {
  it('auro-toast is accessible', async () => {
    const el = await fixture(html`
      <auro-toast></auro-toast>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-toast custom element is defined', async () => {
    const el = !!customElements.get("auro-toast");

    expect(el).to.be.true;
  });

  it('close the toast when the X icon button is clicked on', async () => {
    const el = await fixture(html`
    <auro-toast id="2" visible> Hello I am a toast! </auro-toast>
  `);
    const closeButton = el.shadowRoot.querySelector('button');
    closeButton.click();

    setTimeout(() => expect(el.visible).to.be.false, 1000);
  });

  it('auro-toast is hidden after five seconds', async () => {
    const el = await fixture(html`
    <auro-toast visible>Something</auro-toast>
  `);

  await aTimeout(5050);
  const root = el.shadowRoot;
  const toastContainer = root.querySelector('#toastContainer');

  expect(toastContainer.classList.contains('hidden')).to.be.true;
  await aTimeout(310);
  expect(el.visible).to.be.false;
  }).timeout(5400);

  it('error auro-toast should not auto dismiss', async () => {
    const el = await fixture(html`
    <auro-toast variant="error" visible>Something</auro-toast>
  `);

  await aTimeout(5050);
  const root = el.shadowRoot;
  const toastContainer = root.querySelector('#toastContainer');

  expect(toastContainer.classList.contains('hidden')).to.be.false;
  expect(el.visible).to.be.true;
  }).timeout(5060);

  it('sets auro-toast to noIcon style', async () => {
    const el = await fixture(html`
      <auro-toast variant="success" noIcon visible> Success </auro-toast>
    `);
    const root = el.shadowRoot;
    expect(root.querySelector('.icon')).to.not.exist;

  });

});
