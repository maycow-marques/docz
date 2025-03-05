import Image from "next/image";
import { PiBarcodeDuotone, PiFilesDuotone, PiFingerprintDuotone } from "react-icons/pi";

import Z from "@/public/logo-condensed.png";

import { Planet } from "./Planet";

export function Orbit() {
  const icons = {
    etiqPress: <PiBarcodeDuotone color="white" />,
    eAssinador: <PiFingerprintDuotone color="white" />,
    fileService: <PiFilesDuotone color="white" />,
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Efeito de luz no fundo */}
      <div className="absolute inset-0 rounded-full bg-neutral-400 opacity-20 blur-3xl"></div>

      {/* Planetas em órbita */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Planet orbitSpeed="3" orbitSize="sm" orbitReverse>
          {icons.fileService}
        </Planet>
        <Planet orbitSpeed="4" orbitSize="lg">
          {icons.etiqPress}
        </Planet>
        <Planet orbitSpeed="1" orbitSize="3xl">
          {icons.eAssinador}
        </Planet>
      </div>

      {/* Círculos concêntricos */}
      <div className="relative flex h-96 w-96 items-center justify-center rounded-full border-2 border-dashed border-slate-300">
        <div className="flex h-80 w-80 items-center justify-center rounded-full border border-blue-700/10 bg-blue-500/10">
          <div className="flex h-44 w-44 items-center justify-center rounded-full border border-blue-600/20 bg-blue-500/20">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white">
              <Image src={Z} alt="Docz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
