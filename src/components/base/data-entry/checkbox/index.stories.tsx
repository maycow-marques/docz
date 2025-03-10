import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import { Checkbox } from "./";

const meta = {
  tags: ["autodocs"],
  title: "Base UI/Data Entry/Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox-example",
    label: "Aceito os termos",
    checked: false,
    error: false,
  },
  argTypes: {
    checked: { control: "boolean" },
    error: { control: "boolean" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    label: "Você deve aceitar os termos!",
  },
};

export const Interaction: Story = {
  args: {
    id: "terms",
    label: "Aceitar Termos",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByLabelText("Aceitar Termos");
    await userEvent.click(toggle);
  },
};
