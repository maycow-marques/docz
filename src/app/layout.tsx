import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { ReactNode } from "react";

type Props = Readonly<{ children: ReactNode }>;

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
