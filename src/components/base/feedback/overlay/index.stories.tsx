import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { Overlay } from "./";

export const ActionsData = {
  onClose: fn(),
};

const meta = {
  tags: ["autodocs"],
  args: {
    position: "center",
    transparent: false,
    onClose: ActionsData.onClose,
    children: (
      <div className="flex h-40 w-60 items-center justify-center rounded-lg bg-white p-4 shadow-lg">
        <p className="text-black">Conteúdo do Overlay</p>
      </div>
    ),
  },
  title: "Base UI/Feedback/Overlay",
  component: Overlay,
  excludeStories: /.*Data$/,
  argTypes: {
    position: {
      control: { type: "select" },
      options: [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
      ],
    },
    transparent: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Transparent: Story = {
  args: {
    transparent: true,
  },
};

export const TopRight: Story = {
  args: {
    position: "top-right",
  },
};

export const BottomLeft: Story = {
  args: {
    position: "bottom-left",
  },
};

export const Interaction: Story = {
  args: {
    position: "center",
    transparent: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simula o clique para fechar o Overlay
    await userEvent.click(canvas.getByRole("dialog"));
  },
};
