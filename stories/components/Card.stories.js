import { html } from "lit";
import "pocds-card/pocds-card";

export default {
  title: "Components/Card",
  component: "pocds-card",
};

// Default

function DefaultTemplate({ title, slot }) {
  return html`<pocds-card title="${title}"
    >${slot}
    <a slot="footer" href="https://google.com">Link here</a></pocds-card
  >`;
}

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: "Card",
  slot: "Here is some text content",
};

// With image

function WithImageTemplate({ title, slotImage }) {
  return html`<pocds-card title="${title}"
    ><img slot="image" src="${slotImage}" alt="" />
    <a slot="footer" href="https://google.com">Link here</a></pocds-card
  >`;
}

export const WithImage = WithImageTemplate.bind({});
WithImage.args = {
  title: "Card with image",
  slotImage: "https://www.fillmurray.com/600/400",
};
