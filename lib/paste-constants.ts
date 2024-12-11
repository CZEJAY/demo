import { StyleOption } from "@/types/paste";

export const PAGE_STYLE_OPTIONS: StyleOption[] = [
  {
    value: "default",
    label: "Default",
    description: "Good for online docs and content.",
    fluid: true,
  },
  {
    value: "pageless",
    label: "Pageless",
    description: "Continuous flow without page breaks.",
  },
  {
    value: "letter",
    label: "Letter",
    description: "Standard 8.5 × 11 inch format.",
  },
  {
    value: "a4",
    label: "A4",
    description: "Standard 210 × 297mm format.",
  },
];
