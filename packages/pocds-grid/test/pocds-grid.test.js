import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../pocds-grid.js';

describe('PocdsGrid, () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html`<pocds-card></pocds-card>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
