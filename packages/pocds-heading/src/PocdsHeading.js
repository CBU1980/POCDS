import { html, css, LitElement, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  POCDS_HEADING_FONT_FAMILY,
  POCDS_HEADING_SIZE_LEVEL_1,
  POCDS_HEADING_SIZE_LEVEL_2,
  POCDS_HEADING_SIZE_LEVEL_3,
  POCDS_HEADING_SIZE_LEVEL_4,
  POCDS_HEADING_SIZE_LEVEL_5,
  POCDS_HEADING_SIZE_LEVEL_6,
} from 'pocds-design-tokens/build/default/js/esm/heading';

export class PocdsHeading extends LitElement {
  static get styles() {
    return css`
      :host {
        --fontFamily: var(
          --pocds-heading-font-family,
          ${unsafeCSS(POCDS_HEADING_FONT_FAMILY)}
        );
        --level1Size: var(
          --pocds-heading-size-level-1,
          ${unsafeCSS(POCDS_HEADING_SIZE_LEVEL_1)}
        );
        --level2Size: var(
          --pocds-heading-size-level-2,
          ${unsafeCSS(POCDS_HEADING_SIZE_LEVEL_2)}
        );
        --level3Size: var(
          --pocds-heading-size-level-3,
          ${unsafeCSS(POCDS_HEADING_SIZE_LEVEL_3)}
        );
        --level4Size: var(
          --pocds-heading-size-level-4,
          ${unsafeCSS(POCDS_HEADING_SIZE_LEVEL_4)}
        );
        --level5Size: var(
          --pocds-heading-size-level-5,
          ${unsafeCSS(POCDS_HEADING_SIZE_LEVEL_5)}
        );
        --level6Size: var(
          --pocds-heading-size-level-6,
          ${unsafeCSS(POCDS_HEADING_SIZE_LEVEL_6)}
        );
        --margin: var(--pocds-heading-margin, 0);

        font-family: var(--fontFamily);
      }

      .pocds-heading {
        margin: var(--margin);
        font-weight: bold;
      }

      h1 {
        font-size: var(--level1Size);
      }

      h2 {
        font-size: var(--level2Size);
      }

      h3 {
        font-size: var(--level3Size);
      }

      h4 {
        font-size: var(--level4Size);
      }

      h5 {
        font-size: var(--level5Size);
      }

      h6 {
        font-size: var(--level6Size);
      }
    `;
  }

  static get properties() {
    return {
      level: { type: Number },
    };
  }

  render() {
    const heading = `
    <h${this.level} class="pocds-heading">
      <slot></slot>
    </h${this.level}>
  `;

    return html` ${unsafeHTML(heading)} `;
  }
}
