import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { Alert } from "./";

export const ActionsData = {
  onClose: fn(),
};

const meta = {
  tags: ["autodocs"],
  args: {
    title: "Informação",
    message: "Esta é uma mensagem de alerta.",
    severity: "info",
    onClose: ActionsData.onClose,
  },
  title: "Base UI/Feedback/Alert",
  component: Alert,
  excludeStories: /.*Data$/,
  argTypes: {
    severity: {
      control: { type: "select" },
      options: ["info", "danger", "success", "warning"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    severity: "info",
  },
};

export const Danger: Story = {
  args: {
    severity: "danger",
    title: "Erro",
    message: "Ocorreu um erro inesperado.",
  },
};

export const Success: Story = {
  args: {
    severity: "success",
    title: "Sucesso",
    message: "A ação foi concluída com êxito!",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    title: "Atenção",
    message: "Cuidado ao prosseguir com esta ação.",
  },
};

export const Interaction: Story = {
  args: {
    title: "Informação",
    message: "Clique no botão para fechar o alerta.",
    severity: "info",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simula clique no botão de fechar
    const closeButton = canvas.getByRole("button", { name: /fechar/i });
    await userEvent.click(closeButton);
  },
};
