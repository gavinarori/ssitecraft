import * as React from "react";

import { Registry } from "./schema";

const ui: Registry = {
  "magic-card": {
    name: "magic-card",
    type: "components:magicui",
    files: ["app/components/componentPacks/registry/components/magicui/magic-card.tsx"],
  },
  "neon-gradient-card": {
    name: "neon-gradient-card",
    type: "components:magicui",
    files: ["app/components/componentPacks/registry/components/magicui/neon-gradient-card.tsx"],
  },
  meteors: {
    name: "meteors",
    type: "components:magicui",
    files: ["app/components/componentPacks/registry/components/magicui/meteors.tsx"],
  },
};

const example: Registry = {
  "magic-card-demo": {
    name: "magic-card-demo",
    type: "components:example",
    registryDependencies: ["magic-card"],
    files: ["app/components/componentPacks/registry/components/example/magic-card-demo.tsx"],
    component: React.lazy(
      () => import("@/app/components/componentPacks/registry/components/example/magic-card-demo"),
    ),
  },
  "neon-gradient-card-demo": {
    name: "neon-gradient-card-demo",
    type: "components:example",
    files: ["app/components/componentPacks/registry/components/example/neon-gradient-card-demo.tsx"],
    component: React.lazy(
      () => import("@/app/components/componentPacks/registry/components/example/neon-gradient-card-demo"),
    ),
  },
  "meteors-demo": {
    name: "meteors-demo",
    type: "components:example",
    registryDependencies: ["meteors"],
    files: ["app/components/componentPacks/registry/components/example/meteors-demo.tsx"],
    component: React.lazy(
      () => import("@/app/components/componentPacks/registry/components/example/meteors-demo"),
    ),
  },
  "grid-pattern-demo": {
    name: "grid-pattern-demo",
    type: "components:example",
    registryDependencies: ["grid-pattern"],
    files: ["app/components/componentPacks/registry/components/example/grid-pattern-demo.tsx"],
    component: React.lazy(
      () => import("@/app/components/componentPacks/registry/components/example/grid-pattern-demo"),
    ),
  },
  
};
export const registry: Registry = {
  ...ui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);
export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);
