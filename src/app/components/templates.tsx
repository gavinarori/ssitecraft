"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

export function HeroParallaxDemo() {
  return (

    <div className="py-16"> 
    <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
      <div
        className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16"
      >
        <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
            Purchase High Quality Template <span className="text-primary dark:text-sky-300">For Your Website</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
          Carefully crafted website templates that are performance optimized, modern and easy to customize. Perfect for startups and business that want a standout website.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-black/50 dark:text-dark"
                >Shop now</span>
            </a>
            <a
              href="#"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                className="relative text-base font-semibold text-primary dark:text-white"
                >More about</span>
              
          </a>
        </div>
        </div>
        <div className="grid grid-cols-5 grid-rows-4 gap-2 md:w-5/12 lg:w-6/12 ">
          <div className="col-span-2 row-span-4">
            <img
              src="https://aceternity.com/images/products/thumbnails/new/editrix.png"
              className="rounded-full"
              width="640"
              height="960"
              alt="shoes"
              loading="lazy"
            />
            
          </div>
          <div className="col-span-2 row-span-2">
            <img
              src="https://aceternity.com/images/products/thumbnails/new/cursor.png"
              className="h-full w-full rounded-xl object-cover object-top"
              width="640"
              height="640"
              alt="shoe"
              loading="lazy"
            />
          </div>
          
          <div className="col-span-3 row-span-3">
            <img
              src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
              className="h-full w-full rounded-xl object-cover object-top"
              width="640"
              height="427"
              alt="shoes"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              src="https://aceternity.com/images/products/thumbnails/new/rogue.png"
              className="h-full w-full rounded-xl object-cover object-top"
              width="640"
              height="427"
              alt="shoes"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
                                      
  )
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
