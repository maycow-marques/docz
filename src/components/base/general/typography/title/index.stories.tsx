import { Meta, StoryObj } from "@storybook/react";

import { Title } from "./";

const meta = {
  tags: ["autodocs"],
  title: "Base UI/General/Title",
  component: Title,
  excludeStories: /.*Data$/,
  args: {
    as: "h1",
    children: "Título de Exemplo",
    className: "",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    as: "h3",
    children: "Título Personalizado",
    className: "text-blue-500",
  },
};
