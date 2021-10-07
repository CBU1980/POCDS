import { html } from "lit";
import "pocds-heading/pocds-heading";

export default {
  title: "Components/Heading",
  component: "pocds-heading",
};

function Template({ text, level }) {
  return html`<pocds-heading .level="${level}">${text}</pocds-heading>`;
}

export const Level1 = Template.bind({});
Level1.args = {
  text: "Heading level 1",
  level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
  text: "Heading level 2",
  level: 2,
};

export const Level3 = Template.bind({});
Level3.args = {
  text: "Heading level 3",
  level: 3,
};

export const Level4 = Template.bind({});
Level4.args = {
  text: "Heading level 4",
  level: 4,
};

export const Level5 = Template.bind({});
Level5.args = {
  text: "Heading level 5",
  level: 5,
};

export const Level6 = Template.bind({});
Level6.args = {
  text: "Heading level 6",
  level: 6,
};
