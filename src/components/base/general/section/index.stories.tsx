import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./";

export const ActionsData = {};

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/General/Section",
  component: Section,
  excludeStories: /.*Data$/,
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Square: Story = {
  args: {
    square: true,
    children: "Seção sem bordas arredondadas",
  },
};

export const Article: Story = {
  args: {
    as: "article",
    children: "Seção como um <article>",
  },
};

export const CustomStyle: Story = {
  args: {
    className: "p-6 bg-blue-500 text-white",
    children: "Seção com estilos personalizados",
  },
};
