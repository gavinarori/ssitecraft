import * as React from "react";
import { Registry } from "./schema";

const ui: Registry = {
  "magic-card": {
    name: "magic-card",
    type: "components:magicui",
    files: ["registry/components/magicui/magic-card.tsx"],
  },
  "neon-gradient-card": {
    name: "neon-gradient-card",
    type: "components:magicui",
    files: ["registry/components/magicui/neon-gradient-card.tsx"],
  },
  meteors: {
    name: "meteors",
    type: "components:magicui",
    files: ["registry/components/magicui/meteors.tsx"],
  },
};

export const registry: Registry = ui;


export type ComponentName = keyof typeof ui;
