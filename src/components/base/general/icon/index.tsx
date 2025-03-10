import * as PiIcons from "react-icons/pi";

import { DuoToneIconName } from "./duotone-icons";

interface IconProps {
  name: DuoToneIconName; // Agora só aceita ícones da lista!
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = "" }: IconProps) {
  const IconComponent = PiIcons[name as keyof typeof PiIcons];

  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado na biblioteca react-icons/pi.`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
}
