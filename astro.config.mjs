import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "DaddyTimeMono",
      cssVariable: "--font-daddy-time",
      options: {
        variants: [
          {
            src: ["./src/fonts/DaddyTimeMonoNerdFontPropo-Regular.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});

