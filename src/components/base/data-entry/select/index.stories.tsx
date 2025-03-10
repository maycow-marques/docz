import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { Select } from "./";

export const ActionsData = {
  onChange: fn(),
};

const meta = {
  tags: ["autodocs"],
  args: {
    id: "select-example",
    label: "Escolha uma opção",
    children: (
      <>
        <option value="">Selecione...</option>
        <option value="option1">Opção 1</option>
        <option value="option2">Opção 2</option>
        <option value="option3">Opção 3</option>
      </>
    ),
    onChange: ActionsData.onChange,
  },
  title: "Base UI/Data Entry/Select",
  component: Select,
  excludeStories: /.*Data$/,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "Documentação interativa do Select",
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: true,
    helpText: "Selecione uma opção válida.",
  },
};

export const Interaction: Story = {
  args: {
    label: "Escolha uma opção",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simula clique para abrir o select
    await userEvent.selectOptions(canvas.getByRole("combobox"), "option2");
  },
};
