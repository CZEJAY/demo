import React, { PropsWithChildren } from "react";
import "cal-sans";

import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export default function DocLayout({ children }: PropsWithChildren) {
  return <div className="flex flex-col h-svh">{children}</div>;
}
