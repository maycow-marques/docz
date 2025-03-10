import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { DatePicker } from ".";

export const ActionsData = {
  onChange: fn(),
};

const meta = {
  tags: ["autodocs"],
  title: "Base UI/Data Entry/DatePicker",
  component: DatePicker,
  excludeStories: /.*Data$/,
  args: {
    label: "Selecionar Data",
    value: { startDate: undefined, endDate: undefined },
    onChange: ActionsData.onChange,
  },
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "Documentação interativa do DatePicker",
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSelectedDates: Story = {
  args: {
    value: { startDate: new Date(2024, 3, 10), endDate: new Date(2024, 3, 20) },
  },
};

export const Interaction: Story = {
  args: {
    label: "Selecionar Data",
    value: { startDate: undefined, endDate: undefined },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simula clique para abrir o calendário
    await userEvent.click(canvas.getByRole("button"));

    // Simula seleção de datas
    const firstDate = canvas.getByText("10");
    const secondDate = canvas.getByText("20");

    await userEvent.click(firstDate);
    await userEvent.click(secondDate);
  },
};
