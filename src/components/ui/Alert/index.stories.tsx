import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { Alert, style } from "./";

export const ActionsData = {
  onClose: fn(),
};

const severityOptions = Object.keys(style.variants.severity) as Array<
  keyof typeof style.variants.severity
>;

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/Alert",
  component: Alert,
  excludeStories: /.*Data$/,
  argTypes: {
    title: {
      description: "O título do alerta, exibido em destaque no componente.",
      control: "text",
    },
    message: {
      description: "O texto informativo exibido abaixo do título no alerta.",
      control: "text",
    },
    severity: {
      description: "Define a severidade do alerta, que afeta sua aparência.",
      control: "select",
      options: severityOptions,
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: "Deleniti ratione",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    severity: "info",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const closeButtons = await canvas.findAllByRole("button");
    closeButtons.map(async (button) => await userEvent.click(button));
  },
};

export const Danger: Story = {
  args: {
    title: "Deleniti ratione",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    severity: "danger",
  },
};

export const Success: Story = {
  args: {
    title: "Deleniti ratione",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    severity: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "Deleniti ratione",
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    severity: "warning",
  },
};
