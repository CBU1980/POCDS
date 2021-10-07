import { html, css, LitElement } from "lit";

export class Colors extends LitElement {
  static get styles() {
    return css`
      ul {
        list-style: none;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
      }

      li {
        text-align: center;
      }

      li span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
        width: 100%;
        height: 5rem;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      }
    `;
  }

  static get properties() {
    return {
      colors: { type: Array },
      title: { type: String },
    };
  }

  renderColors(title, colors) {
    return html` <h2>${title}</h2>
      <ul class="spacing">
        ${colors
          .filter((color) => !color.name.includes("brand"))
          .map(
            (color) =>
              html`<li>
                <span style="background-color: ${color.value};"
                  >${color.value}</span
                >${color.name}
              </li>`
          )}
      </ul>`;
  }

  render() {
    return html`${this.renderColors(this.title, this.colors)}`;
  }
}

window.customElements.define("doc-colors", Colors);
