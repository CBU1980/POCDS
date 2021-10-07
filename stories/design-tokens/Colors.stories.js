import { html } from "lit";
import "../../storybook-components/colors";
import { items as defaultColors } from "pocds-design-tokens/build/default/js/cjs/color";
import { items as brand1Colors } from "pocds-design-tokens/build/brand-1/js/cjs/color";

export default {
  title: "Design Tokens/Colors",
  component: "doc-colors",
};

function Template({ colors, title }) {
  return html`<doc-colors .title="${title}" .colors="${colors}"></doc-colors>`;
}

export const Default = Template.bind({});
Default.args = {
  colors: defaultColors,
  title: "Default",
};

export const Brand1 = Template.bind({});
Brand1.args = {
  title: "Brand 1",
  colors: brand1Colors,
};
