import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./";

export const ActionsData = {};

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/Card",
  component: Card,
  excludeStories: /.*Data$/,
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Este é um card básico.",
    className: "p-10",
  },
};
