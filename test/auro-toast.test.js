import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-toast';

describe('auro-toast', () => {
  it('sets the CSS class on auro-toast > div element', async () => {
    const el = await fixture(html`
      <auro-toast cssclass="testClass"></auro-toast>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-toast is accessible', async () => {
    const el = await fixture(html`
      <auro-toast cssclass="testClass"></auro-toast>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-toast custom element is defined', async () => {
    const el = await !!customElements.get("auro-toast");

    await expect(el).to.be.true;
  });
});
