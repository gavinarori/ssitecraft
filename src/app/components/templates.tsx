"use client";

import React from "react";
import DotPattern from "@/app/components/ui/dot";
import BlurFade from "@/app/components/ui/blur-fade";
import { cn } from "@/utils/cn";

// Product data
const products = [
  {
    id: 1,
    title: "Soleworthy",
    price: "$30",
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6638fc5db95cf1175bd394ef_Untitled%20design.png",
  },
  {
    id: 2,
    title: "Fitness Website",
    price: "$45",
    imgSrc: "/soleworthy/dark_2.png",
  },
  {
    id: 3,
    title: "Food Catering",
    price: "$24",
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/663904668f8979077697f0fd_Untitled%20design%20(1).png",
  },
];

function HeroParallaxWithBlurFade() {
  return (
    <div className="py-16">
      <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:space-x-12">
          <div className="mb-6 lg:mb-0 lg:w-6/12 space-y-6">
            <h1 className="mb-4 text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
              Purchase High-Quality Templates{" "}
              <span className="text-primary dark:text-sky-300">
                For Your Website
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-balance  text-lg font-medium tracking-tight text-foreground/80">
              Carefully crafted website templates that are performance optimized, modern, and easy to customize. Perfect for startups and businesses that want a standout website.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="/components/collections"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-foreground dark:text-dark">
                  Shop now
                </span>
              </a>
              <a
                href="/components/collections"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  More about
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Gallery with BlurFade */}
        <section id="photos" className="mt-12">
          <div className="columns-2 gap-4 sm:columns-3"> 
            {products.map((product, idx) => (
              <BlurFade key={product.id} delay={0.5 + idx * 0.05} inView>
                <img
                  className="mb-4 w-full h-auto rounded-lg object-cover"
                  src={product.imgSrc}
                  alt={product.title}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroParallaxWithBlurFade;
