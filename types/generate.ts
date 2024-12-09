export type ContentType = "presentation" | "webpage" | "document";
export type StyleType = "default" | "traditional" | "tall";

export interface ExamplePrompt {
  id: string;
  title: string;
  icon: string;
  type: ContentType;
}

export interface CardOption {
  value: number;
  label: string;
  isPro?: boolean;
}

export interface StyleOption {
  value: StyleType;
  label: string;
  description: string;
  fluid?: boolean;
}
