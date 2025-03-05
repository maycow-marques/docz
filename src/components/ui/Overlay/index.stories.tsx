import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useState } from "react";

import { Button } from "../Button";
import { Overlay, style } from "./";

export const ActionsData = {};

const positionOptions = Object.keys(style.variants.position) as Array<
  keyof typeof style.variants.position
>;

const meta = {
  tags: ["autodocs"],
  args: { ...ActionsData },
  title: "Base UI/Overlay",
  component: Overlay,
  excludeStories: /.*Data$/,
  argTypes: {
    children: {
      description: "O conteúdo que será exibido dentro do overlay.",
      control: "text",
    },
    position: {
      description: "Posição que o conteúdo será exibido dentro do overlay.",
      control: "select",
      options: positionOptions,
    },
  },
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

function OverlayDefault({
  children,
  position,
}: {
  children: ReactNode;
  position?: keyof typeof style.variants.position | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Overlay</Button>
      {isOpen && (
        <Overlay position={position}>
          <div className="rounded-md bg-white p-6 shadow-lg">
            <p>{children}</p>
            <Button onClick={() => setIsOpen(false)}>Fechar</Button>
          </div>
        </Overlay>
      )}
    </>
  );
}

export const Default: Story = {
  args: {
    children: "Este é um conteúdo dentro do Overlay.",
  },
  render: (args) => <OverlayDefault {...args} />,
};

// export const Center: Story = {
//   args: {
//     position: "center",
//     children: "Este é um conteúdo dentro do Overlay.",
//   },
//   render: (args) => <OverlayTemplate {...args} />,
// };

// export const Interactions: Story = {
//   args: {
//     children: "Este é um conteúdo dentro do Overlay.",
//   },
//   render: (args) => <OverlayTemplate {...args} />,
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const openButton = await canvas.findByRole("button", { name: /Abrir Overlay/i });
//     await userEvent.click(openButton);
//     const closeButton = await canvas.findByRole("button", { name: /Fechar/i });
//     await userEvent.click(closeButton);
//   },
// };
