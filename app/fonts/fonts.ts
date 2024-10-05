import localFont from "next/font/local";

export const postGroteskFont = localFont({
  src: [
    {
      path: "./PostGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./post-grotesk-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PostGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PostGrotesk-Black.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
