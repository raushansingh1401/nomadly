import Link from "next/link";
import Image from "next/image";

import { packages } from "@/data/packages";

export default function PackagesPage() {
  return (
    <main className="bg-white">

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">

        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Nomadly Journeys
        </p>

        <h1 className="mt-4 max-w-3xl font-[var(--font-playfair)] text-5xl leading-tight md:text-7xl">
          Travel Bihar differently.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Private journeys through villages, ancient kingdoms,
          spiritual landscapes and stories that deserve to be remembered.
        </p>


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {packages.map((pkg) => (

            <Link
              key={pkg.slug}
              href={`/packages/${pkg.slug}`}
              className="group"
            >

              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">

                <Image
                  src={pkg.images[0]}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {pkg.featured && (
                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-medium">
                    Most Popular
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {pkg.duration}
                  </p>

                  <h2 className="mt-2 font-[var(--font-playfair)] text-3xl md:text-4xl">
                    {pkg.title}
                  </h2>

                  <p className="mt-2 max-w-lg text-sm text-white/80">
                    {pkg.tagline}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-sm">
                      From{" "}
                      <strong>
                        ₹{pkg.pricing.fourGuests.toLocaleString("en-IN")}
                      </strong>
                      <span className="ml-2 text-xs text-white/60">
                        · For Private/Family Trip
                      </span>
                    </span>

                    <span className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black">
                      Explore
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}