import Image from "next/image";
import { PiBarcodeDuotone, PiFilesDuotone, PiFingerprintDuotone } from "react-icons/pi";

import Z from "@/public/logo-condensed.png";

import { Planet } from "./planet";

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

      {/* Círculos concêntricos com tamanhos responsivos */}
      <div
        className="relative flex h-64 w-64 items-center justify-center rounded-full border-2
        border-dashed border-slate-300 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96"
      >
        <div
          className="flex h-52 w-52 items-center justify-center rounded-full border
          border-blue-700/10 bg-blue-500/10 lg:h-60 lg:w-60 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80"
        >
          <div
            className="flex h-36 w-36 items-center justify-center rounded-full border
            border-blue-600/20 bg-blue-500/20 lg:h-40 lg:w-40 xl:h-44 xl:w-44 2xl:h-48 2xl:w-48"
          >
            <div
              className="flex h-20 w-20 items-center justify-center
              rounded-full bg-white lg:h-24 lg:w-24 xl:h-28 xl:w-28 2xl:h-32 2xl:w-32"
            >
              <Image src={Z} alt="Docz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
