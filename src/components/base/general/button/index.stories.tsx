import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { PiChatCenteredDotsDuotone } from "react-icons/pi";

import { Button, style } from "./";

export const ActionsData = {
  onClick: fn(),
};

const sizeOptions = Object.keys(style.variants.size) as Array<keyof typeof style.variants.size>;
const shapeOptions = Object.keys(style.variants.shape) as Array<keyof typeof style.variants.shape>;
const variantOptions = Object.keys(style.variants.variant) as Array<
  keyof typeof style.variants.variant
>;

const meta = {
  component: Button,
  title: "Base UI/General/Button",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  argTypes: {
    size: {
      description: "Define o tamanho do botão",
      control: "select",
      options: sizeOptions,
    },
    shape: {
      description: "Define o formato do botão",
      control: "select",
      options: shapeOptions,
    },
    block: {
      description: "Se verdadeiro, o botão ocupará 100% da largura do contêiner pai.",
      control: "boolean",
    },
    variant: {
      description: "Define a aparência do botão",
      control: "select",
      options: variantOptions,
    },
    soft: {
      description: "Se verdadeiro, aplica um estilo mais suave ao botão",
      control: "boolean",
    },
    disabled: {
      description: "Se verdadeiro, desabilita o botão",
      control: "boolean",
    },
    loading: {
      description: "Se verdadeiro, mostra um spinner",
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click Here",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Click Here",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Click Here",
    variant: "danger",
  },
};

export const Success: Story = {
  args: {
    children: "Click Here",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Click Here",
    variant: "warning",
  },
};

export const Ghost: Story = {
  args: {
    children: "Click Here",
    variant: "ghost",
  },
};

export const Rounded: Story = {
  args: {
    children: <PiChatCenteredDotsDuotone size={28} />,
    shape: "rounded",
  },
};

export const Loading: Story = {
  render: () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => setLoading(!isLoading)}>
            Click Here
          </Button>
        </div>
      </div>
    );
  },
};

export const Interaction: Story = {
  args: {
    children: "Click Here",
    variant: "primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Click Here" }));
  },
};
