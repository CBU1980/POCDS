import { html } from "lit";
import "../../storybook-components/icons";
import items from "pocds-icons/build/icons";

export default {
  title: "Icons/All",
  component: "doc-icons",
};

function Template({ icons }) {
  return html`<doc-icons .icons="${icons}"></doc-icons>`;
}

export const Default = Template.bind({});
Default.args = {
  icons: items,
};
