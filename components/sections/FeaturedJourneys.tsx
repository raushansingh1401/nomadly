"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { packages } from "@/data/packages";

export default function FeaturedJourneys() {
  // Show these three packages on the homepage.
  // The complete list remains available at /packages.
  const featuredPackages = [
    packages.find((pkg) => pkg.slug === "a-night-in-real-bihar"),
    packages.find((pkg) => pkg.slug === "magadh-roots"),
    packages.find((pkg) => pkg.slug === "forgotten-magadh"),
  ].filter(Boolean);

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

          {featuredPackages.map((journey, index) => {

            if (!journey) return null;

            return (
              <motion.div
                key={journey.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                <Link
                  href={`/packages/${journey.slug}`}
                  className="group block cursor-pointer"
                >

                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">

                    <img
                      src={journey.images[0]}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                      <div className="mb-3 flex items-center justify-between gap-4">

                        <p className="text-xs uppercase tracking-widest text-white/70">
                          {journey.duration}
                        </p>

                        {journey.featured && (
                          <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-wider backdrop-blur-md">
                            Most Popular
                          </span>
                        )}

                      </div>

                      <h3 className="font-[var(--font-playfair)] text-3xl">
                        {journey.title}
                      </h3>

                      <p className="mt-1 text-sm text-white/80">
                        {journey.tagline}
                      </p>

                      <div className="mt-5 flex items-center justify-between">

                        <p className="text-sm text-white/80">
  From{" "}
  <span className="font-medium text-white">
    ₹
    {journey.pricing.fourGuests.toLocaleString("en-IN")}
  </span>
  <span className="ml-2 text-xs text-white/60">
    · Private/Family Trip
  </span>
</p>

                        <span className="text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                          Explore →
                        </span>

                      </div>

                    </div>

                  </div>

                </Link>

              </motion.div>
            );
          })}

        </div>


        {/* View all packages */}
        <div className="mt-10 text-center">

          <Link
            href="/packages"
            className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
          >
            Explore all journeys →
          </Link>

        </div>

      </div>

    </section>
  );
}