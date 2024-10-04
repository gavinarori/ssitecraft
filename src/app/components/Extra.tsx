"use client";
import React, { useState } from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Image from "next/image";

const Extra = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const openModal = (platform:any) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlatform("");
  };

  return (
    <div className="relative lg:pt-44">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-foreground text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl pb-3">
          Schedule a Call with Us Today!
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="sm:text-lg text-foreground/80 lg:w-11/12">
              Are you ready to take the next step and discuss how we can help you achieve your goals? We'd love to schedule a call with you to explore how our services can benefit your business.
            </p>
            <span className="block font-semibold text-gray-500">
              The best platforms to schedule with us.
            </span>
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              {/* Google Meet Button */}
              <button
                onClick={() => openModal("Google Meet")}
                className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/640px-Google_Meet_icon_%282020%29.svg.png"
                    alt="Google Meet logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Google Meet
                  </span>
                </div>
              </button>

              {/* Zoom Button */}
              <button 
                onClick={() => openModal("Zoom")}
                className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png"
                    alt="Zoom logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Zoom
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 lg:mt-0 lg:w-7/12 lg:pl-10">
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
              ></div>
              <div className="flex flex-col overflow-hidden">
                <LampContainer>
                  <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                  >
                    Don't hesitate <br /> to reach out
                  </motion.h1>
                </LampContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Schedule a Meeting with {selectedPlatform}
            </h2>
            <div className="w-full h-80">
              <iframe
                src={`https://cal.com/gavin-code-arori-fmwfxa`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="camera; microphone"
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extra;
