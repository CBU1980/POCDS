import { html, css, LitElement } from "lit";

export class Typography extends LitElement {
  static get styles() {
    return css`
      ul {
        list-style: none;
        display: grid;
        grid-gap: 2rem;
      }

      li {
        font-weight: bold;
      }

      li span {
        margin-top: 0.25rem;
        display: block;
        font-weight: normal;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.75);
      }
    `;
  }

  static get properties() {
    return {
      sizes: { type: Array },
      text: { type: String },
    };
  }

  render() {
    return html`<ul>
      ${this.sizes.map(
        (size) =>
          html`<li style="font-size: ${size.value}">
            ${this.text}
            <span>${size.name}</span>
            <span>${size.value}</span>
          </li>`
      )}
    </ul>`;
  }
}

window.customElements.define("doc-typography", Typography);
