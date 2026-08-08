"use client";

import { motion } from "framer-motion";

const journeys = [
  {
    title: "Rajgir",
    subtitle: "Ancient hills & timeless stories",
    duration: "2 Days",
    image: "/rajgir.jpg",
  },
  {
    title: "Bodh Gaya",
    subtitle: "A journey into stillness",
    duration: "2 Days",
    image: "/bodh-gaya.jpg",
  },
  {
    title: "Barabar Caves",
    subtitle: "India's oldest rock-cut caves",
    duration: "1 Day",
    image: "/barabar.jpg",
  },
];

export default function FeaturedJourneys() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Featured Journeys
          </p>

          <h2 className="font-[var(--font-playfair)] text-4xl leading-tight md:text-5xl">
            Places worth
            <br />
            slowing down for.
          </h2>

          <p className="mt-5 text-muted-foreground">
            Go beyond the usual tourist trail. Discover places,
            people and stories that make Bihar unforgettable.
          </p>

        </div>


        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {journeys.map((journey, index) => (

            <motion.div
              key={journey.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group cursor-pointer"
            >

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">

                <img
                  src={journey.image}
                  alt={journey.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <p className="mb-2 text-xs uppercase tracking-widest text-white/70">
                    {journey.duration}
                  </p>

                  <h3 className="font-[var(--font-playfair)] text-3xl">
                    {journey.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/80">
                    {journey.subtitle}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}