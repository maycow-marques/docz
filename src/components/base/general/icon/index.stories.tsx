import { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./";
import { duoToneIcons } from "./duotone-icons";

const meta = {
  title: "Base UI/General/Icon",
  component: Icon,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    name: duoToneIcons[0], // Ícone padrão (primeiro da lista)
    size: 32,
    className: "text-blue-500",
  },
  argTypes: {
    name: {
      control: "select",
      options: duoToneIcons, // Usa a lista filtrada de DuoTones
    },
    size: {
      control: { type: "range", min: 16, max: 128, step: 8 },
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
