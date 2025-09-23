"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/app/_components/ui/button";

import HeroImage from "@/public/heroimage.jpg";
import openHero from "@/public/openhero.jpg";
import soft from "@/public/soft.png";
import roadTrip from "@/public/roadTrip.png";
import GenerateSection from "./GenerateSection";

const Home = () => {
  const [firstSlide, setFirstSlide] = useState(0);
  const [secondSlide, setSecondSlide] = useState(0);

  const slide1 = [
    {
      id: 1,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      badge: "NEW IMAGE MODEL",
      image: HeroImage,
    },
    {
      id: 2,
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Download Model",
      badge: "OPEN IMAGE MODEL",
      image: openHero,
    },
  ];

  const slide2 = [
    {
      id: 1,
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Download Model",
      badge: "OPEN IMAGE MODEL",
      image: soft,
    },
    {
      id: 2,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      badge: "NEW IMAGE MODEL",
      image: roadTrip,
    },
  ];

  const nextSlide = () => {
    setSecondSlide((prev) => (prev + 1) % slide2.length);
  };

  const prevSlide = () => {
    setSecondSlide((prev) => (prev - 1 + slide2.length) % slide2.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex flex-col gap-4 px-4 md:py-8 md:px-6"
    >
      <div className="relative flex flex-col gap-4 lg:flex-row">
        {/* Left Slide  */}
        <div className="h-[250px] md:h-[400px] lg:w-1/2 w-full">
          <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-2xl">
            <AnimatePresence mode="wait">
              {slide1.map(
                (slide, index) =>
                  index === firstSlide && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="grid flex-shrink-0 w-full h-full grid-cols-1 gap-3 "
                    >
                      <motion.div
                        className="relative w-full overflow-hidden rounded-lg cursor-pointer md:rounded-2xl bg-gradient-to-br from-card to-muted group"
                        style={{
                          backgroundImage: ` url(${slide.image.src})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                        <div className="relative flex flex-col justify-between h-full p-4 md:p-8">
                          <div className="text-white w-fit backdrop-blur-sm">
                            {slide.badge}
                          </div>
                          <div className="flex items-end justify-center">
                            <div className="">
                              <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl font-bold text-left text-white md:text-center md:mb-6 md:text-7xl"
                              >
                                {slide.title}
                              </motion.h2>
                              <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-3 font-semibold text-md text-white/90"
                              >
                                {slide.subtitle}
                              </motion.h3>
                              <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-sm leading-tight md:leading-relaxed text-white/80"
                              >
                                {slide.description}
                              </motion.p>
                            </div>
                            <div className="">
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                              >
                                <Button className="text-black transition-all duration-300 rounded-full bg-white/90 hover:bg-white">
                                  {slide.buttonText}
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-end gap-2 mt-6">
            {slide1.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === firstSlide
                    ? "bg-primary w-3"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setFirstSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Slide  */}
        <div className="h-[250px] md:h-[400px] lg:w-1/2 w-full">
          <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-2xl">
            <AnimatePresence mode="wait">
              {slide2.map(
                (slide, index) =>
                  index === secondSlide && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="grid flex-shrink-0 w-full h-full grid-cols-1 gap-3 "
                    >
                      <motion.div
                        className="relative w-full overflow-hidden rounded-lg cursor-pointer md:rounded-2xl bg-gradient-to-br from-card to-muted group"
                        style={{
                          backgroundImage: ` url(${slide.image.src})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                        <div className="relative flex flex-col justify-between h-full p-4 md:p-8">
                          <div className="text-white w-fit backdrop-blur-sm">
                            {slide.badge}
                          </div>
                          <div className="flex items-end justify-center">
                            <div className="">
                              <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl font-bold text-left text-white lg:mb-6 md:text-center md:text-7xl"
                              >
                                {slide.title}
                              </motion.h2>
                              <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-3 font-semibold text-md md:text-xl text-white/90"
                              >
                                {slide.subtitle}
                              </motion.h3>
                              <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-sm leading-tight md:leading-relaxed text-white/80"
                              >
                                {slide.description}
                              </motion.p>
                            </div>
                            <div className="">
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                              >
                                <Button className="text-black transition-all duration-300 rounded-full bg-white/90 hover:bg-white">
                                  {slide.buttonText}
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-black dark:text-white bg-gray-100 dark:bg-[#181818] hover:bg-white hover:dark:bg-black rounded-full backdrop-blur-sm border-background/30"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-black dark:text-white bg-gray-100 dark:bg-[#181818] hover:bg-white hover:dark:bg-black rounded-full backdrop-blur-sm border-background/30"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <GenerateSection />
    </motion.section>
  );
};

export default Home;
