import { html } from "lit";
import "pocds-icon/pocds-icon";

export default {
  title: "Components/Icon",
  component: "pocds-icon",
};

function Template({ title }) {
  return html`<pocds-icon title="${title}"></pocds-icon>`;
}

export const Default = Template.bind({});
Default.args = {
  title: "arrow-left",
};
