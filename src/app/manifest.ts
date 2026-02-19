import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OpenClaw AI Agency - Enterprise AI Agent Deployment",
    short_name: "OpenClaw",
    description:
      "Enterprise-grade AI agent deployment and automation services. We transform experimental AI agents into production-ready business automation systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
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
