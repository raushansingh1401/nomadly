import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Bodh Gaya",
    subtitle: "Where silence changed the world",
    location: "Gaya, Bihar",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bodh_gaya_Mahabodhi_Temple.jpg",
    imageAlt: "Mahabodhi Temple in Bodh Gaya",
    number: "01",
    story: `Few places in the world carry the quiet weight of Bodh Gaya. 
    More than two thousand years ago, Siddhartha Gautama is believed to have 
    attained enlightenment beneath the Bodhi Tree here, becoming the Buddha.`,
    history: `Emperor Ashoka visited the sacred site centuries later and established 
    an early shrine in the 3rd century BCE. The temple that stands today largely 
    reflects the architecture of the 5th–6th centuries, when Buddhism flourished 
    under the Gupta period. Over generations, pilgrims from across Asia have 
    continued to return to this small corner of Bihar to meditate, pray and sit 
    beneath the descendant of the ancient Bodhi Tree.`,
    highlight: "Mahabodhi Temple · Bodhi Tree · Vajrasana",
  },
  {
    name: "Nalanda",
    subtitle: "Where the ancient world came to learn",
    location: "Nalanda, Bihar",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ruins_of_Nalanda_University_At_Nalanda_Bihar_in_India.jpg",
    imageAlt: "Ancient ruins of Nalanda",
    number: "02",
    story: `Before universities became institutions spread across the modern world, 
    Nalanda was already imagining something remarkably similar: a vast residential 
    centre where students and scholars could live, debate and pursue knowledge.`,
    history: `Nalanda grew into one of the great intellectual centres of ancient Asia, 
    flourishing from around the 5th century CE for roughly eight centuries. Monks, 
    philosophers and students travelled long distances to study Buddhist philosophy, 
    logic, medicine, mathematics, astronomy and other fields of knowledge. 
    Its monasteries, temples and libraries formed an extraordinary scholarly landscape. 
    Today, the surviving brick ruins allow visitors to walk through the remains of 
    that intellectual world.`,
    highlight: "Nalanda Mahavihara · Ancient monasteries · Archaeological ruins",
  },
  {
    name: "Rajgir",
    subtitle: "The ancient city surrounded by hills",
    location: "Nalanda, Bihar",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rajgir_Vishwa_Shanti_Stupa.jpg",
    imageAlt: "Vishwa Shanti Stupa in Rajgir",
    number: "03",
    story: `Rajgir feels different from the plains around it. Hills rise around the 
    ancient city, creating a natural amphitheatre that has attracted kings, monks 
    and seekers for centuries.`,
    history: `Known in ancient times as Rajagriha, or the "house of kings", Rajgir was 
    an important early capital of Magadha. It is closely associated with both the 
    Buddha and Mahavira, and Buddhist traditions remember the surrounding hills as 
    places where the Buddha taught and spent time. The city's landscape still carries 
    traces of its ancient fortifications, caves, monasteries and pilgrimage routes. 
    Today, the white Vishwa Shanti Stupa sits high above the valley, creating a striking 
    contrast between the ancient hills and the modern symbol of peace.`,
    highlight: "Vulture's Peak · Vishwa Shanti Stupa · Ancient Rajagriha",
  },
  {
    name: "Barabar",
    subtitle: "Stone polished like glass",
    location: "Jehanabad, Bihar",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Barabar_Caves_1.JPG",
    imageAlt: "Barabar Caves in Bihar",
    number: "04",
    story: `Hidden among the granite hills of Bihar are chambers that seem almost 
    impossible for their age. The Barabar Caves were cut directly into hard granite 
    more than two thousand years ago.`,
    history: `The caves belong to the Mauryan period and several were dedicated to the 
    Ajivika ascetic tradition during the reigns of Ashoka and his successor Dasharatha. 
    Their interiors are famous for an exceptionally smooth polish, while the entrance 
    of Lomas Rishi preserves one of India's earliest surviving examples of the 
    chaitya-arch form. Walking inside, the simplicity is striking: bare stone, curved 
    walls and a remarkable echo that makes the ancient craftsmanship feel surprisingly 
    immediate.`,
    highlight: "Lomas Rishi Cave · Sudama Cave · Mauryan craftsmanship",
  },
  {
    name: "Gahlor",
    subtitle: "The mountain one man refused to accept",
    location: "Gehlaur, Gaya, Bihar",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Dashrath_Manjhi_01.jpg",
    imageAlt: "Statue of Dashrath Manjhi at Gehlaur",
    number: "05",
    story: `Gahlor is not ancient in the way Bodh Gaya or Nalanda is. Its story belongs 
    to modern India — and it is a story about one person's determination to change 
    the geography around him.`,
    history: `Dashrath Manjhi, a labourer from Gehlaur, began cutting a passage through 
    the rocky hills after the death of his wife, who could not receive timely medical 
    help because of the difficult journey around the mountain. With little more than 
    a hammer and chisel, he continued working for about 22 years. The passage he 
    created eventually shortened the route between communities and essential services 
    dramatically. Today, Gehlaur remembers him as the "Mountain Man" — a reminder that 
    sometimes a destination's most powerful monument is not a temple or palace, but 
    the work of a determined human being.`,
    highlight: "Dashrath Manjhi Memorial · Mountain Road · Gehlaur Hills",
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1c211c]">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#182019]">
        <div className="absolute inset-0">
          <Image
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Rajgir_Vishwa_Shanti_Stupa.jpg"
            alt="Bihar landscape"
            fill
            priority
            unoptimized
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#182019] via-[#182019]/50 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-white/70">
            Nomadly · Destinations
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
            Places that
            <br />
            <span className="italic">remember.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Bihar is more than a place on a map. It is a landscape layered with
            kingdoms, monasteries, ideas, faith and extraordinary human stories.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="text-sm uppercase tracking-[0.25em] text-[#687064]">
          The Nomadly perspective
        </p>

        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
          Travel slowly enough
          <br />
          <span className="italic">to hear the past.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#5f655d]">
          We believe a destination becomes meaningful when you understand the
          stories beneath its surface. These are five places in Bihar that
          deserve more than a quick photograph and a checklist.
        </p>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-10">
        <div className="space-y-32">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#dedbd1]">
                  <Image
                    src={destination.image}
                    alt={destination.imageAlt}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-medium tracking-wider backdrop-blur">
                    {destination.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#8b6f47]">
                  {destination.location}
                </p>

                <h2 className="mt-3 font-serif text-5xl md:text-6xl">
                  {destination.name}
                </h2>

                <p className="mt-4 font-serif text-xl italic text-[#667064]">
                  {destination.subtitle}
                </p>

                <div className="mt-8 space-y-5 text-[15px] leading-7 text-[#5d625b]">
                  <p>{destination.story}</p>
                  <p>{destination.history}</p>
                </div>

                <div className="mt-8 border-t border-[#d8d4c9] pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#7a8076]">
                    Explore
                  </p>

                  <p className="mt-2 text-sm text-[#454b44]">
                    {destination.highlight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#1d271f] px-6 py-28 text-center text-white md:py-36">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Your journey starts here
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Come for the places.
          <br />
          <span className="italic text-white/70">
            Stay for their stories.
          </span>
        </h2>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1d271f] transition hover:bg-white/90"
        >
          Plan your journey
        </Link>
      </section>
    </main>
  );
}