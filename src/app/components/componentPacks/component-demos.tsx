import { Mdx } from "./components/mdx-components";

import "./styles/mdx.css";



export default function ComponentDemos() {
  return (
    <section id="component-demos" className="container py-14 max-w-5xl">
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        Component Demos
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Here are some of the components that you can use to build your landing
        pages.
      </h3>
    </section>
  );
}