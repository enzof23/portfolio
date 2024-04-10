import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

// TODO : colors
import coloradix, { mauve, lime } from "@coloradix/tailwindcss";

const radix = coloradix({
  mauve,
  lime,
})
  .alias({
    neutral: "mauve",
    primary: "lime",
  })
  .build();

export default {
  content: ["./src/**/*.{ts,tsx,astro}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
    extend: {
      fontFamily: {
        // TODO : fonts
        sans: ["Inter"].concat(defaultTheme.fontFamily.sans),
        mono: ["Roboto Mono"].concat(defaultTheme.fontFamily.mono),
        orbitron: "Orbitron",
      },
      gridTemplateRows: {
        "layout-sm": "repeat(6, fit-content)",
        "layout-md": "repeat(4, fit-content)",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [radix.plugin],
} satisfies Config;
