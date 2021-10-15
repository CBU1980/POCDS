import { html } from "lit";
import "../../storybook-components/spacing";
import { items } from "pocds-design-tokens/build/default/js/cjs/core/space";

export default {
  title: "Design Tokens/Space",
  component: "doc-spacing",
};

function Template({ spaces }) {
  return html`<doc-spacing .spaces="${spaces}"></doc-spacing>`;
}

export const Default = Template.bind({});
Default.args = {
  spaces: items,
};
