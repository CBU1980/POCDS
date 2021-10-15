import { html } from "lit";
import "../../storybook-components/typography";
import { items } from "pocds-design-tokens/build/default/js/cjs/core/fontSize";

export default {
  title: "Design Tokens/Typography",
  component: "doc-typography",
};

function Template({ sizes, text }) {
  return html`<doc-typography
    .sizes="${sizes}"
    text="${text}"
  ></doc-typography>`;
}

export const Default = Template.bind({});
Default.args = {
  sizes: items,
  text: "Example text",
};
