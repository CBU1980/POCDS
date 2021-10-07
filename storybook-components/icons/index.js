import { html, css, LitElement } from "lit";
import "pocds-icon/pocds-icon";

export class Icons extends LitElement {
  static get styles() {
    return css`
      ul {
        list-style: none;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(4, 6rem);
      }

      li {
        text-align: center;
      }

      li div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 6rem;
        height: 6rem;
        margin-bottom: 0.5rem;
        border: solid 1px rgba(0, 0, 0, 0.2);
      }
    `;
  }

  static get properties() {
    return {
      icons: { type: Array },
    };
  }

  render() {
    return html`<ul>
      ${Object.keys(this.icons).map(
        (icon) =>
          html`<li>
            <div><pocds-icon title="${icon}"></pocds-icon></div>
            <span>${icon}</span>
          </li>`
      )}
    </ul>`;
  }
}

window.customElements.define("doc-icons", Icons);
