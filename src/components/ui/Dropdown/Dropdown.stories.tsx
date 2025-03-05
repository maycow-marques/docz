import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import { Dropdown, DropdownItem } from ".";

export const ActionsData = {};

const directionOptions = ["top-left", "top-right", "bottom-left", "bottom-right"] as const;

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/Dropdown",
  component: Dropdown,
  excludeStories: /.*Data$/,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      description: "O rótulo do botão que abre o dropdown.",
      control: "text",
    },
    direction: {
      description: "A direção na qual o dropdown será exibido.",
      control: "select",
      options: directionOptions,
    },
    children: {
      description: "Os itens exibidos dentro do dropdown.",
      control: "text",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Opções",
    children: (
      <>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </>
    ),
  },
};

export const WithCustomDirection: Story = {
  args: {
    label: "Direção Customizada",
    direction: "top-right",
    children: (
      <>
        <DropdownItem>Item A</DropdownItem>
        <DropdownItem>Item B</DropdownItem>
        <DropdownItem>Item C</DropdownItem>
      </>
    ),
  },
};

export const Interactions: Story = {
  args: {
    label: "Abrir Dropdown",
    children: (
      <>
        <DropdownItem>Item X</DropdownItem>
        <DropdownItem>Item Y</DropdownItem>
        <DropdownItem>Item Z</DropdownItem>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.findByRole("button");
    await userEvent.click(toggleButton);
  },
};
