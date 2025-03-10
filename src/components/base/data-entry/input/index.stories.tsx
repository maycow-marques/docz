import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import { Input } from "./";

export const ActionsData = {};

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/Data Entry/Input",
  component: Input,
  excludeStories: /.*Data$/,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel"],
    },
    error: {
      control: "boolean",
    },
    helpText: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "story",
    placeholder: "Story",
  },
};

export const WithHelpText: Story = {
  args: {
    id: "story",
    placeholder: "Story",
    helpText: "Esse é um texto de ajuda",
  },
};

export const WithError: Story = {
  args: {
    id: "story",
    error: true,
    placeholder: "Story",
    helpText: "Campo obrigatório!",
  },
};

export const PasswordInput: Story = {
  args: {
    id: "story",
    type: "password",
    showHide: true,
    placeholder: "Digite sua senha",
  },
};

export const InputInteraction: Story = {
  args: {
    id: "name",
    placeholder: "Digite seu nome",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Digite seu nome");
    await userEvent.type(input, "João");
  },
};
