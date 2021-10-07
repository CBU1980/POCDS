import { html, css, LitElement, unsafeCSS } from 'lit';
import {
  POCDS_CARD_FONT_FAMILY,
  POCDS_CARD_HEADING_SIZE,
  POCDS_CARD_SPACE,
  POCDS_CARD_LINK_COLOR,
  POCDS_CARD_LINK_HOVER,
  POCDS_CARD_ELEVATION,
} from 'pocds-design-tokens/build/default/js/esm/';

export class PocdsCard extends LitElement {
  static get styles() {
    return css`
      :host {
        --space: var(--pocds-card-space, ${unsafeCSS(POCDS_CARD_SPACE)});
        --fontFamily: var(
          --pocds-card-font-family,
          ${unsafeCSS(POCDS_CARD_FONT_FAMILY)}
        );
        --heading: var(
          --pocds-card-heading-size,
          ${unsafeCSS(POCDS_CARD_HEADING_SIZE)}
        );

        --linkColor: var(
          --pocds-card-link-color,
          ${unsafeCSS(POCDS_CARD_LINK_COLOR)}
        );

        --linkColorHover: var(
          --pocds-card-link-hover,
          ${unsafeCSS(POCDS_CARD_LINK_HOVER)}
        );

        --shadow: var(
          --pocds-card-elevation,
          ${unsafeCSS(POCDS_CARD_ELEVATION)}
        );

        font-family: var(--fontFamily);
      }

      .pocds-card {
        display: flex;
        flex-direction: column;
        box-shadow: var(--shadow);
        border-radius: 1rem;
        overflow: hidden;
        height: 100%;
      }

      .pocds-card ::slotted(img) {
        max-width: 100%;
        display: block;
        width: 100%;
      }

      .pocds-card ::slotted(a) {
        margin-top: auto;
        max-width: 100%;
        display: block;
        width: 100%;
        color: var(--linkColor);
        font-weight: bold;
      }

      .pocds-card ::slotted(a:hover) {
        color: var(--linkColorHover);
      }

      .pocds-card__heading {
        margin: 0 0 var(--space);
        font-size: var(--heading);
      }

      .pocds-card__text {
        margin-bottom: var(--space);
      }

      .pocds-card__body {
        display: flex;
        flex-direction: column;
        margin: var(--space);
        flex: 1;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  render() {
    return html`<article class="pocds-card">
      <slot name="image"></slot>
      <div class="pocds-card__body">
        <h2 class="pocds-card__heading">${this.title}</h2>
        <div class="pocds-card__text">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    </article>`;
  }
}
