import { fixture, html, expect } from '@open-wc/testing';
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
  
});