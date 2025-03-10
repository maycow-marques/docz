import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./";

const meta = {
  tags: ["autodocs"],
  title: "Base UI/General/Text",
  component: Text,
  excludeStories: /.*Data$/,
  args: {
    as: "p",
    children: "Texto de Exemplo",
    muted: false,
    className: "",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span"],
    },
    muted: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MutedText: Story = {
  args: {
    muted: true,
    children: "Texto com estilo muted",
  },
};

export const CustomText: Story = {
  args: {
    as: "span",
    children: "Texto Personalizado",
    className: "text-green-500",
  },
};
