import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            Plan Your Journey
          </p>

          <h2 className="font-[var(--font-playfair)] text-4xl leading-tight md:text-5xl">
            Let's take you
            <br />
            somewhere memorable.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-white/60">
            Tell us what kind of Bihar experience you're looking for.
            Whether it's a village stay, a heritage journey or a
            completely private itinerary, we'll help you plan it.
          </p>

        </div>


        {/* Contact information */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* Phone */}
          <a
            href="tel:+919934007077"
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Call us
            </p>

            <h3 className="mt-4 text-xl font-medium">
              +91 9934 007 077
            </h3>

            <p className="mt-2 text-sm text-white/50">
              Speak with our travel team
            </p>

            <span className="mt-6 inline-block text-sm text-white/70 transition-transform duration-300 group-hover:translate-x-1">
              Call now →
            </span>
          </a>


          {/* Email */}
          <a
            href="mailto:nomadly365@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Email us
            </p>

            <h3 className="mt-4 break-all text-xl font-medium">
              nomadly365@gmail.com
            </h3>

            <p className="mt-2 text-sm text-white/50">
              Send us your travel plans
            </p>

            <span className="mt-6 inline-block text-sm text-white/70 transition-transform duration-300 group-hover:translate-x-1">
              Send an email →
            </span>
          </a>


          {/* Office */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">

            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Visit us
            </p>

            <h3 className="mt-4 text-xl font-medium">
              Nomadly Office
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Gali No. 2, Aitwarpur,
              <br />
              Sipara, Patna – 800001,
              <br />
              Bihar, India
            </p>

          </div>

        </div>


        {/* WhatsApp CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:flex-row md:items-center">

          <div>

            <h3 className="font-[var(--font-playfair)] text-2xl">
              Have a journey in mind?
            </h3>

            <p className="mt-2 text-sm text-white/50">
              The easiest way to start is simply to talk to us.
            </p>

          </div>

          <a
            href={`https://wa.me/919934007077?text=${encodeURIComponent(
              "Hi Nomadly, I would like to plan a journey in Bihar."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
          >
            WhatsApp us →
          </a>

        </div>

      </div>
    </section>
  );
}