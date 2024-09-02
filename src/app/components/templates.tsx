"use client";

import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { motion } from "framer-motion";
import BlurFade from "@/app/components/ui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

 function HeroParallaxWithBlurFade() {
  return (
    <div className="py-16">
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
              Purchase High-Quality Templates{" "}
              <span className="text-primary dark:text-sky-300">
                For Your Website
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Carefully crafted website templates that are performance optimized, modern, and easy to customize. Perfect for startups and businesses that want a standout website.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="/components/collections"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-black/50 dark:text-dark">
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
   {/* Additional BlurFade Image Gallery Section */}
   <section id="photos" className="mt-12">
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.5 + idx * 0.05} inView>
              <img
                className="mb-4 w-full h-auto rounded-lg object-cover"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

        </div>
      </div>

    </div>
  );
}

export default HeroParallaxWithBlurFade;