import { html } from "lit";
import "pocds-icon/pocds-icon";

export default {
  title: "Components/Icon",
  component: "pocds-icon",
};

function Template({ title, fill }) {
  return html` <style>
      :root {
        --pocds-icon-fill: ${fill};
      }
    </style>
    <pocds-icon .title="${title}"></pocds-icon>`;
}

export const Default = Template.bind({});
Default.args = {
  title: "arrow-left",
  fill: "#000",
};
