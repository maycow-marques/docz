import { DetailedHTMLProps, HTMLAttributes } from "react";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type PlanetProps = BaseProps & {
  orbitSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  orbitSpeed?: "1" | "2" | "3" | "4" | "5";
  orbitReverse?: boolean;
};

export function Planet({
  orbitSize = "md",
  orbitSpeed = "1",
  orbitReverse = false,
  ...rest
}: PlanetProps) {
  const styleSize = rest.children ? "p-2 text-3xl" : `h-2 w-2`;
  const styleDefault = "absolute rounded-full bg-gradient-to-r from-blue-800 to-blue-700";
  const styleDirection = `animate-orbit${orbitReverse ? "-reverse" : ""}`;

  return (
    <span
      className={`${styleDefault} ${styleDirection} ${styleSize} orbit-${orbitSize} orbit-${orbitSpeed}`}
      {...rest}
    >
      {rest.children}
    </span>
  );
}
