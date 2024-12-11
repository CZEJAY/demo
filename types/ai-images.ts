export interface AIImage {
  id: string;
  url: string;
  prompt: string;
  createdAt: Date;
  style?: string;
  aspectRatio: "square" | "portrait" | "landscape";
  model: "flux-fast" | "flux-pro";
}

export interface GenerateImageParams {
  prompt: string;
  style?: string;
  aspectRatio: "square" | "portrait" | "landscape";
  model: "flux-fast" | "flux-pro";
}
