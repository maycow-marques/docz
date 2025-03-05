import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import { Input } from "./";

export const ActionsData = {};

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/Input",
  component: Input,
  excludeStories: /.*Data$/,
  argTypes: {
    id: {
      description: "O identificador único do campo de input.",
      control: "text",
    },
    placeholder: {
      description: "O texto que será exibido dentro do input antes do usuário digitar.",
      control: "text",
    },
    helpText: {
      description: "Texto auxiliar exibido abaixo do campo de input.",
      control: "text",
    },
    error: {
      description: "Define se o input está em estado de erro.",
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "input-default",
    placeholder: "Digite algo...",
  },
};

export const WithHelpText: Story = {
  args: {
    id: "input-help",
    placeholder: "Seu nome",
    helpText: "Insira seu nome completo.",
  },
};

export const WithError: Story = {
  args: {
    id: "input-error",
    placeholder: "E-mail",
    helpText: "O e-mail inserido não é válido.",
    error: true,
  },
};

export const Interactions: Story = {
  args: {
    id: "input-interaction",
    placeholder: "Digite aqui...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("Digite aqui...");
    await userEvent.type(input, "Teste de digitação");
  },
};
