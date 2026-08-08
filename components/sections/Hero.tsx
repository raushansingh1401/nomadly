"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >

      {/* Dark overlay */}
      <div className="
        absolute
        inset-0
        bg-black/40
      " />

    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        text-white
      ">

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="
            font-[var(--font-playfair)]
            text-5xl
            md:text-7xl
            leading-tight
            max-w-4xl
          "
        >
          Discover Bihar
          <br />
          Beyond the Ordinary
        </motion.h1>


        <p className="
          mt-6
          text-lg
          max-w-xl
          text-white/90
        ">
          Experience forgotten stories,
          ancient heritage and authentic journeys
          through the heart of Bihar.
        </p>


        <Link
  href="/packages"
  className="
    mt-8
    inline-block
    rounded-full
    bg-white
    px-8
    py-3
    text-black
    transition
    hover:bg-gray-200
  "
>
  Explore Journeys →
</Link>

      </div>

    </section>
  );
}