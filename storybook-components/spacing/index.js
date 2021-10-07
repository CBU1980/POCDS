import { html, css, LitElement } from "lit";

export class Spacing extends LitElement {
  static get styles() {
    return css`
      ul {
        list-style: none;
        display: grid;
        grid-gap: 2rem;
      }

      li span {
        display: flex;
        align-items: center;
        margin-bottom: 0.35rem;
      }

      li span > :first-child {
        background-color: #333;
        height: 2rem;
      }

      li span > :last-child {
        margin-left: 0.25rem;
        font-weight: bold;
      }
    `;
  }

  static get properties() {
    return {
      spaces: { type: Array },
    };
  }

  render() {
    return html`<ul class="spacing">
      ${this.spaces.map(
        (space) =>
          html`<li>
            <span>
              <span style="width: ${space.value};"></span>
              <span>${space.value}</span>
            </span>
            ${space.name}
          </li>`
      )}
    </ul>`;
  }
}

window.customElements.define("doc-spacing", Spacing);
