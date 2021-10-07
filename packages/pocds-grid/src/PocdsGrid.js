import { html, css, LitElement, unsafeCSS } from 'lit';
import { POCDS_SPACE_SIZE_450 } from 'pocds-design-tokens/build/default/js/esm/';

export class PocdsGrid extends LitElement {
  static get styles() {
    return css`
      :host {
        --space: var(--pocds-grid-space, ${unsafeCSS(POCDS_SPACE_SIZE_450)});
        --columns: var(--pocds-grid-columns, 1fr 1fr 1fr);
      }

      .pocds-grid {
        display: grid;
        grid-template-columns: var(--columns);
        grid-gap: var(--space);
      }
    `;
  }

  render() {
    return html` <div role="group" class="pocds-grid"><slot></slot></div>`;
  }
}
