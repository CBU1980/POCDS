import { html, css, LitElement } from 'lit';
import icons from 'pocds-icons/build/icons';

export class PocdsIcon extends LitElement {
  static get styles() {
    return css`
      :host {
        --fill: var(--pocds-icon-fill, tomato);
      }

      svg {
        fill: var(--fill);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  render() {
    return this.title
      ? html`<div
          class="pocds-icon"
          .innerHTML="${icons[this.title].svg}"
        ></div>`
      : html`No icon set`;
  }
}
