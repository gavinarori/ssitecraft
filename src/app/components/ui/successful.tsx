"use client";
import Image from "next/image";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Successful = () => {
    const words = [
        {
          text: "Payment",
        },
        {
          text: "Confirmed",
        },
        {
          text: "Successfully.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
    return (
      <>
          return (
            <div
              className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
            >
                <Image
                src="https://clipart-library.com/images/qcBBexbc5.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
              <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <TypewriterEffectSmooth words={words} />
              </p>
            </div>
          );
      </>
    );
  };
   

  export default Successful;
  