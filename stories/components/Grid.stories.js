import { html } from "lit";
import "pocds-grid/pocds-grid";
import "pocds-card/pocds-card";

export default {
  title: "Components/Grid",
  component: "pocds-grid",
};

function Template({ slot }) {
  return html`<pocds-grid>${slot}</pocds-grid>`;
}

export const Plain = Template.bind({});
Plain.args = {
  slot: html`<pocds-card title="Card 1"></pocds-card>
    <pocds-card title="Card 2"></pocds-card>
    <pocds-card title="Card 3"></pocds-card>`,
};

function ModifiedColumnsTemplate({ slot, columns }) {
  return html`<style>
      :root {
        --pocds-grid-columns: ${columns};
      }</style
    ><pocds-grid>${slot}</pocds-grid>`;
}

export const ModifiedColumns = ModifiedColumnsTemplate.bind({});
ModifiedColumns.args = {
  columns: "1fr 1fr 1fr 1fr",
  slot: html`<pocds-card title="Card 1"></pocds-card>
    <pocds-card title="Card 2"></pocds-card>
    <pocds-card title="Card 3"></pocds-card
    ><pocds-card title="Card 4"></pocds-card
    ><pocds-card title="Card 5"></pocds-card
    ><pocds-card title="Card 6"></pocds-card>`,
};
