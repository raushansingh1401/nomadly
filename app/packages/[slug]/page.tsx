import { notFound } from "next/navigation";
import Link from "next/link";

import { packages } from "@/data/packages";
import PackageGallery from "@/components/sections/PackageGallery";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default async function PackagePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const packageData = packages.find(
    (pkg) => pkg.slug === slug
  );

  if (!packageData) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-10">

        <Link
          href="/packages"
          className="text-sm text-muted-foreground hover:text-black"
        >
          ← All packages
        </Link>

        <div className="mt-8">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {packageData.category}
          </p>

          <h1 className="mt-3 font-[var(--font-playfair)] text-5xl leading-tight md:text-7xl">
            {packageData.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {packageData.tagline}
          </p>

          <p className="mt-4 text-sm font-medium">
            {packageData.duration} · Private journey from Patna
          </p>

        </div>

      </section>


      {/* Gallery */}
      <section className="mx-auto mt-10 max-w-7xl px-6">

        <PackageGallery
          images={packageData.images}
          title={packageData.title}
        />

      </section>


      {/* Highlights */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_350px]">

        <div>

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            The journey
          </p>

          <h2 className="mt-3 font-[var(--font-playfair)] text-4xl">
            What you'll experience
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {packageData.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border p-5"
              >
                <p className="text-sm">
                  {highlight}
                </p>
              </div>
            ))}

          </div>

        </div>


        {/* Price card */}
        <div className="h-fit rounded-2xl border p-6 shadow-sm">

          <p className="text-sm text-muted-foreground">
            Private trip
          </p>

          <h3 className="mt-2 font-[var(--font-playfair)] text-3xl">
            Up to 4 guests
          </h3>

          <p className="mt-2 text-2xl font-semibold">
            ₹{packageData.pricing.fourGuests.toLocaleString("en-IN")}
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Or travel with up to 7 guests
          </p>

          <p className="mt-1 text-xl font-semibold">
            ₹{packageData.pricing.sevenGuests.toLocaleString("en-IN")}
          </p>

          <a
            href={`https://wa.me/919934007077?text=${encodeURIComponent(
              `Hi Nomadly, I am interested in the "${packageData.title}" package.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-black/80"
          >
            Plan this journey
          </a>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Starting and ending in Patna
          </p>

        </div>

      </section>


      {/* Itinerary */}
      <section className="bg-neutral-50 px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Itinerary
          </p>

          <h2 className="mt-3 font-[var(--font-playfair)] text-4xl">
            Your journey, day by day
          </h2>


          <div className="mt-12 space-y-10">

            {packageData.itinerary.map((day) => (

              <div
                key={day.day}
                className="grid gap-4 md:grid-cols-[100px_1fr]"
              >

                <p className="text-sm font-medium">
                  {day.day}
                </p>

                <div>

                  <h3 className="font-[var(--font-playfair)] text-2xl">
                    {day.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {day.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Included */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div>

            <h2 className="font-[var(--font-playfair)] text-3xl">
              What's included
            </h2>

            <ul className="mt-6 space-y-3">

              {packageData.inclusions.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground"
                >
                  ✓ {item}
                </li>
              ))}

            </ul>

          </div>


          <div>

            <h2 className="font-[var(--font-playfair)] text-3xl">
              Not included
            </h2>

            <ul className="mt-6 space-y-3">

              {packageData.exclusions.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground"
                >
                  — {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}