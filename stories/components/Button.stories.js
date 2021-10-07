import { html } from "lit";
import "pocds-button/pocds-button";

export default {
  title: "Components/Button",
  component: "pocds-button",
};

function Template({ label }) {
  return html`<pocds-button>${label}</pocds-button>`;
}

export const Default = Template.bind({});
Default.args = {
  label: "This is a button",
};

function AdjustableValuesTemplate({
  label,
  backgroundColor,
  backgroundColorHover,
  padding,
  fontSize,
  radius,
}) {
  return html` <style>
      :root {
        --pocds-button-padding: ${padding};
        --pocds-button-background-color: ${backgroundColor};
        --pocds-button-background-color-hover: ${backgroundColorHover};
        --pocds-button-font-size: ${fontSize};
        --pocds-button-radius: ${radius};
      }
    </style>
    <pocds-button>${label}</pocds-button>`;
}

export const AdjustableValues = AdjustableValuesTemplate.bind({});
AdjustableValues.args = {
  label: "Click me",
  backgroundColor: "#FF3A20",
  backgroundColorHover: "#B81500",
  padding: "1rem 3.75rem",
  fontSize: "2rem",
  radius: "3rem",
};
