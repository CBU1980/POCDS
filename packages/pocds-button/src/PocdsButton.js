import { html, css, LitElement, unsafeCSS } from 'lit';
import {
  POCDS_BUTTON_PADDING,
  POCDS_BUTTON_TEXT_COLOR,
  POCDS_BUTTON_BACKGROUND_COLOR_HOVER,
  POCDS_BUTTON_BACKGROUND_COLOR,
  POCDS_BUTTON_FONT_FAMILY,
  POCDS_BUTTON_RADIUS,
  POCDS_BUTTON_FONT_SIZE,
} from 'pocds-design-tokens/build/default/js/esm/components/button';

export class PocdsButton extends LitElement {
  static get styles() {
    return css`
      :host {
        --font-family: var(
          --pocds-button-font-family,
          ${unsafeCSS(POCDS_BUTTON_FONT_FAMILY)}
        );
        --font-size: var(
          --pocds-button-font-size,
          ${unsafeCSS(POCDS_BUTTON_FONT_SIZE)}
        );
        --background-color: var(
          --pocds-button-background-color,
          ${unsafeCSS(POCDS_BUTTON_BACKGROUND_COLOR)}
        );
        --background-color-hover: var(
          --pocds-button-background-color-hover,
          ${unsafeCSS(POCDS_BUTTON_BACKGROUND_COLOR_HOVER)}
        );
        --padding: var(
          --pocds-button-padding,
          ${unsafeCSS(POCDS_BUTTON_PADDING)}
        );
        --radius: var(--pocds-button-radius, ${unsafeCSS(POCDS_BUTTON_RADIUS)});
        --text-color: var(
          --pocds-button-text-color,
          ${unsafeCSS(POCDS_BUTTON_TEXT_COLOR)}
        );
      }

      .pocds-button {
        display: inline-block;
        padding: var(--padding);
        background-color: var(--background-color);
        color: white;
        border: 0;
        border-radius: var(--radius);
        cursor: pointer;
        font-family: var(--font-family);
        font-size: var(--font-size);
      }

      .pocds-button:hover {
        background-color: var(--background-color-hover);
      }

      .pocds-button:focus {
        outline: dotted 2px var(--background-color-hover);
        outline-offset: 0.2em;
      }
    `;
  }

  render() {
    return html` <button class="pocds-button"><slot></slot></button>`;
  }
}
