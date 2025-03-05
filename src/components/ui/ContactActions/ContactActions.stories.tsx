import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import { ContactAction, ContactActions } from ".";

export const ActionsData = {};

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/ContactActions",
  component: ContactActions,
  excludeStories: /.*Data$/,
  argTypes: {
    children: {
      description: "Os itens de contato que serão exibidos dentro do componente.",
      control: "text",
    },
    className: {
      description: "Classes adicionais para estilização do componente.",
      control: "text",
    },
  },
} satisfies Meta<typeof ContactActions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ContactAction action="bitrix" />
        <ContactAction action="email" />
        <ContactAction action="phone" />
        <ContactAction action="whatsapp" />
      </>
    ),
  },
};

export const Interactions: Story = {
  args: {
    children: (
      <>
        <ContactAction action="bitrix" />
        <ContactAction action="email" />
        <ContactAction action="phone" />
        <ContactAction action="whatsapp" />
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.findByRole("button");
    await userEvent.click(toggleButton);
  },
};
