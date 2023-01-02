import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        // current: "currentColor",
        // "black": "#000000",
        "gunmetal": "#223445",
        "slategray": "#708090",
        "white": "#ECF0F1",
      },
    },
  },
} as Options;
