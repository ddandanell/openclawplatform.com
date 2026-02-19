import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI agency Claw",
    short_name: "Claw",
    description:
      "Custom AI employee solutions for businesses worldwide. Based in Canggu, Bali.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#FF6B2B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
