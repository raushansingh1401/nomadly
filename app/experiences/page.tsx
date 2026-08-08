import Image from "next/image";
import Link from "next/link";

const stories = [

  {
    number: "02",
    name: "Vikram",
    origin: "Bengaluru, Karnataka",
    trip: "Nalanda · 1 day",
    tag: "Walking through history",
    image:
      "https://drishtiias.com/hindi/images/uploads/1719214801_image6.png",
    imageAlt: "Nalanda archaeological ruins",
    quote:
      "I had read about Nalanda for years. Walking through it made the history feel real.",
    story:
      "I expected a collection of old ruins. Instead, I found myself imagining what it must have been like when students and teachers were moving through these courtyards every day.",
    memory:
      "Our guide told us stories about scholars who travelled from distant parts of Asia to study here. That completely changed the way I looked at the ruins. They stopped being old bricks and started feeling like the remains of a living university.",
  },

  {
    number: "03",
    name: "Neha & Aditya",
    origin: "Delhi",
    trip: "Rajgir · 2 days",
    tag: "Into the hills",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rajgir_4_Vipulagiri%2C_Suraj_Kund_and_Chandrama_Kund_%2830970555824%29.jpg/1280px-Rajgir_4_Vipulagiri%2C_Suraj_Kund_and_Chandrama_Kund_%2830970555824%29.jpg",
    imageAlt: "Hills and landscape around Rajgir",
    quote:
      "Rajgir was the unexpected highlight of our trip. We hadn't realised how beautiful the hills would be.",
    story:
      "We spent most of our first day exploring the old parts of Rajgir and then walked up through the hills. The further we went, the quieter everything became.",
    memory:
      "We found a place overlooking the valley and just sat there. No sightseeing checklist, no rush to get somewhere else. It was probably the first time in months that neither of us looked at our phones for almost an hour.",
  },

  {
    number: "04",
    name: "Siddharth",
    origin: "Jaipur, Rajasthan",
    trip: "Barabar · Half day",
    tag: "A hidden chapter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Barabar_Caves_inside_Lomas_Rishi.jpg/1280px-Barabar_Caves_inside_Lomas_Rishi.jpg",
    imageAlt: "Interior of Lomas Rishi Cave at Barabar",
    quote:
      "You walk into the cave and suddenly you understand how little you know about ancient India.",
    story:
      "Barabar wasn't originally part of my plan. A local recommendation convinced me to go, and I'm glad it did. The inside of the cave was unlike anything I had seen before.",
    memory:
      "The polished walls and the strange acoustics were incredible. Our guide asked everyone to stay silent for a few minutes. It was surprisingly powerful — standing inside something carved into the rock more than two thousand years ago.",
  },

  {
    number: "05",
    name: "Amit",
    origin: "Lucknow, Uttar Pradesh",
    trip: "Gahlor · 1 day",
    tag: "A human story",
    image:
      "https://static2.tripoto.com/media/filter/tst/img/838133/TripDocument/1629107470_dashrath_manjhi_5.jpg.webp",
    imageAlt: "Entrance to the Dashrath Manjhi memorial at Gehlaur",
    quote:
      "I knew the story of Dashrath Manjhi. I didn't understand it until I stood in front of that mountain.",
    story:
      "I'd heard about the Mountain Man many times, but I had never imagined the scale of the hill he worked through. Seeing the landscape around Gahlor made his story feel much more human.",
    memory:
      "We spoke with people around the village and heard stories about Manjhi. The most memorable part wasn't the memorial. It was understanding what the mountain meant to the people who lived around it.",
  },

  {
    number: "06",
    name: "Priya & Kunal",
    origin: "Mumbai, Maharashtra",
    trip: "Village Life · 1 day",
    tag: "A day in rural Bihar",
    image:
      "https://im.rediff.com/news/2015/oct/13iam-bihar3.jpg?h=450&w=450",
    imageAlt: "Everyday village life in rural Bihar",
    quote:
      "The village wasn't something we came to photograph. It became the part of the trip we talked about most.",
    story:
      "We spent a day away from the monuments and travelled into a nearby village. There was no grand attraction waiting for us — just farms, homes, small lanes, children playing and people going about their everyday lives.",
    memory:
      "We had tea with a local family and ended up talking for much longer than planned. We learned about farming, festivals, school and everyday life. It reminded us that travelling isn't always about finding something extraordinary. Sometimes it is simply about seeing how someone else lives.",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#1c211c]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-[#ddd8cc]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">
                The Nomadly Journal
              </p>

              <h1 className="font-serif text-6xl leading-[0.88] tracking-tight md:text-8xl">
                Stories from
                <br />
                <span className="italic text-[#6c756b]">
                  the road.
                </span>
              </h1>

            </div>

            <div className="lg:col-span-4">

              <p className="max-w-md text-base leading-7 text-[#62675f]">
                Every journey leaves something behind — a conversation,
                a taste, a landscape, or a memory you didn't expect.
              </p>

              <div className="mt-6 h-px w-16 bg-[#9a8a72]" />

              <p className="mt-5 text-sm leading-6 text-[#777b73]">
                A collection of illustrative traveler stories showing
                the kind of journeys Nomadly hopes to create.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          INTRO QUOTE
      ========================================================= */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">

        <p className="font-serif text-2xl leading-relaxed text-[#4e554d] md:text-3xl">
          "The best journeys aren't measured by how many places
          you visit, but by the moments you still remember when
          you've returned home."
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#8a8f86]">
          The Nomadly philosophy
        </p>

      </section>


      {/* =========================================================
          TRAVELER STORIES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-10">

        <div className="space-y-36">

          {stories.map((story) => (

            <article key={story.number}>

              {/* Story header */}
              <div className="mb-10 flex items-end justify-between border-b border-[#d8d3c7] pb-5">

                <div className="flex items-center gap-4">

                  <span className="font-serif text-2xl text-[#9a8a72]">
                    {story.number}
                  </span>

                  <div className="h-px w-8 bg-[#c9c3b6]" />

                  <div>

                    <p className="text-sm font-medium">
                      {story.name}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#898d84]">
                      {story.origin}
                    </p>

                  </div>

                </div>

                <div className="hidden text-right md:block">

                  <p className="text-xs uppercase tracking-[0.15em] text-[#8b8f87]">
                    Journey
                  </p>

                  <p className="mt-1 text-sm text-[#555b53]">
                    {story.trip}
                  </p>

                </div>

              </div>


              {/* Story */}
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">

                {/* Image */}
                <div className="lg:col-span-7">

                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">

                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-5 left-5">

                      <span className="rounded-full bg-[#f5f2ea]/90 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#4f554d] backdrop-blur">
                        {story.tag}
                      </span>

                    </div>

                  </div>

                </div>


                {/* Story text */}
                <div className="flex flex-col justify-center lg:col-span-5">

                  <blockquote className="font-serif text-3xl leading-tight md:text-4xl">
                    “{story.quote}”
                  </blockquote>

                  <div className="mt-8 space-y-5 text-[15px] leading-7 text-[#60655d]">

                    <p>
                      {story.story}
                    </p>

                    <p>
                      {story.memory}
                    </p>

                  </div>

                  <div className="mt-8 border-t border-[#d8d3c7] pt-5">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-[0.15em] text-[#8a8f86]">
                          Traveler
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {story.name}
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-xs uppercase tracking-[0.15em] text-[#8a8f86]">
                          From
                        </p>

                        <p className="mt-1 text-sm">
                          {story.origin}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================================
          VILLAGE EXPERIENCE FEATURE
      ========================================================= */}
      <section className="overflow-hidden bg-[#e7e1d4]">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

          <div className="grid items-center gap-14 lg:grid-cols-12">

            {/* Text */}
            <div className="lg:col-span-5">

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">
                Beyond the monuments
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
                A day in
                <br />
                <span className="italic text-[#697167]">
                  village Bihar.
                </span>
              </h2>

              <p className="mt-8 text-base leading-7 text-[#5f645d]">
                Some of the most meaningful travel experiences don't happen
                at famous monuments. They happen around a kitchen table,
                on a farm, beside a village pond, or during a conversation
                with someone who has lived in the same place all their life.
              </p>

              <p className="mt-5 text-base leading-7 text-[#5f645d]">
                Our village experiences are designed around respectful,
                small-group encounters with everyday rural life.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full border border-[#999286] px-6 py-3 text-sm font-medium transition hover:bg-[#1d271f] hover:text-white"
              >
                Ask about village tours
              </Link>

            </div>


            {/* Image composition */}
            <div className="relative lg:col-span-7">

              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">

                <Image
                  src="https://im.rediff.com/news/2015/oct/13iam-bihar3.jpg?h=450&w=450"
                  alt="Everyday life in a village in Bihar"
                  fill
                  unoptimized
                  className="object-cover"
                />

              </div>

              <div className="absolute -bottom-6 -left-4 hidden w-52 bg-[#f5f2ea] p-5 shadow-xl md:block">

                <p className="font-serif text-xl leading-tight">
                  "The village became
                  <br />
                  our favourite part."
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#898d84]">
                  Priya · Mumbai
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHAT VILLAGE TOUR CAN INCLUDE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">

            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6f47]">
              The experience
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Come curious.
              <br />
              Leave connected.
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">

            {[
              {
                title: "Meet local families",
                text: "Spend time with people and hear stories about everyday village life.",
              },
              {
                title: "Farm & field",
                text: "Walk through agricultural landscapes and learn about local crops and seasonal work.",
              },
              {
                title: "Cook together",
                text: "Share a simple local meal and learn how familiar ingredients become regional food.",
              },
              {
                title: "Local crafts",
                text: "Discover traditional skills such as pottery, weaving and other village crafts.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-[#d8d3c7] p-7"
              >

                <h3 className="font-serif text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#686d65]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          STORY BREAK
      ========================================================= */}
      <section className="border-y border-[#d8d3c7] bg-[#ebe7dc]">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8b6f47]">
            A different way to travel
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            We don't want to show you
            <br />
            <span className="italic text-[#697167]">
              everything.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#62675f]">
            We want to show you the things you'll remember. A conversation
            with a local. A quiet road. Food you didn't know existed.
            An old story told in a small village. The view you weren't
            expecting.
          </p>

        </div>

      </section>


      {/* =========================================================
          YOUR STORY
      ========================================================= */}
      <section className="bg-[#1d271f] px-6 py-28 text-white md:py-36">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                Your turn
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
                Your story
                <br />
                <span className="italic text-white/60">
                  could be next.
                </span>
              </h2>

            </div>

            <div>

              <p className="leading-7 text-white/60">
                Tell us what you're curious about. We'll help you turn
                it into a journey worth remembering.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#1d271f] transition hover:bg-white/90"
              >
                Start a conversation
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          TRANSPARENCY NOTE
      ========================================================= */}
      <footer className="border-t border-[#d8d3c7] bg-[#f5f2ea] px-6 py-6 text-center">

        <p className="mx-auto max-w-3xl text-[11px] leading-5 text-[#92958e]">
          The traveler names, quotes and stories on this page are
          illustrative examples created for the Nomadly website.
          They are not real customer testimonials. Real traveler
          stories will replace these examples as Nomadly journeys
          begin.
        </p>

      </footer>

    </main>
  );
}