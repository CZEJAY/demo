export type PageStyle = "default" | "pageless" | "letter" | "a4";

export interface StyleOption {
  value: PageStyle;
  label: string;
  description: string;
  fluid?: boolean;
}
