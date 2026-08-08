export type Package = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  category: string;
  featured?: boolean;

  pricing: {
    fourGuests: number;
    sevenGuests: number;
  };

  highlights: string[];

  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];

  images: string[];

  inclusions: string[];
  exclusions: string[];
};

export const packages: Package[] = [
  {
    slug: "a-night-in-real-bihar",
    title: "A Night in Real Bihar",
    tagline: "Leave the city behind. Spend a night in the real Bihar.",
    duration: "2 Days / 1 Night",
    category: "Village Experience",

    pricing: {
      fourGuests: 22999,
      sevenGuests: 31999,
    },

    highlights: [
      "Authentic village homestay",
      "Traditional village lunch & dinner",
      "Fields, orchards & village walks",
      "River-side sunset",
      "Local folklore & stories",
      "Rooftop stargazing",
      "Optional farming experience",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Patna → Arai Village",
        description:
          "Pickup from Patna Airport or Railway Station and drive towards Arai. Enjoy a traditional village lunch followed by walks through fields, orchards and village lanes. Visit a local market before heading towards the river for sunset. Return to the village home for dinner, local stories and rooftop stargazing.",
      },
      {
        day: "Day 2",
        title: "Village Morning → Patna",
        description:
          "Wake up to the sounds of the village. Take an early morning walk along the river, enjoy breakfast and optionally experience traditional farming. After breakfast, begin the journey back to Patna for your Airport or Railway Station drop.",
      },
    ],

    images: [
      "/packages/village-1.jpg",
      "/packages/village-2.jpg",
      "/packages/village-3.jpg",
      "/packages/village-4.jpg",
    ],

    inclusions: [
      "Patna Airport/Railway Station pickup & drop",
      "Private vehicle",
      "Village accommodation",
      "Village lunch & dinner",
      "Breakfast",
      "Village experience",
      "Local host",
    ],

    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Anything not specifically mentioned",
    ],
  },

  {
    slug: "village-to-rajgir",
    title: "Village to Rajgir",
    tagline: "From village life to the ancient hills of Rajgir.",
    duration: "3 Days / 2 Nights",
    category: "Village + Heritage",

    pricing: {
      fourGuests: 31999,
      sevenGuests: 44999,
    },

    highlights: [
      "Authentic village experience",
      "Rajgir hills",
      "Vishwa Shanti Stupa",
      "Nalanda Mahavihara",
      "Local markets",
      "Private transportation",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Patna → Arai",
        description:
          "Pickup from Patna and travel to Arai. Experience village life through traditional food, fields, orchards, local markets, a river-side evening and an overnight stay at a village home.",
      },
      {
        day: "Day 2",
        title: "Arai → Rajgir",
        description:
          "Begin with a village sunrise walk and breakfast. After the optional farming experience, leave for Rajgir. Explore the hills, Vishwa Shanti Stupa and local surroundings. Overnight stay in Rajgir.",
      },
      {
        day: "Day 3",
        title: "Rajgir → Nalanda → Patna",
        description:
          "Explore Rajgir in the morning before travelling to Nalanda Mahavihara. After exploring the ancient university ruins, continue towards Patna for your Airport or Railway Station drop.",
      },
    ],

    images: [
      "/packages/rajgir-1.jpg",
      "/packages/rajgir-2.jpg",
      "/packages/nalanda-1.jpg",
      "/packages/village-2.jpg",
    ],

    inclusions: [
      "Patna Airport/Railway Station pickup & drop",
      "Private vehicle",
      "Village accommodation",
      "Rajgir accommodation",
      "Meals mentioned in itinerary",
      "Sightseeing",
    ],

    exclusions: [
      "Entry tickets",
      "Ropeway tickets",
      "Personal expenses",
      "Anything not mentioned",
    ],
  },

  {
    slug: "sacred-bihar",
    title: "Sacred Bihar",
    tagline: "A journey through faith, history and ancient landscapes.",
    duration: "3 Days / 2 Nights",
    category: "Spiritual + Heritage",

    pricing: {
      fourGuests: 29999,
      sevenGuests: 42999,
    },

    highlights: [
      "Gaya",
      "Bodh Gaya",
      "Mahabodhi Temple",
      "Dungeshwari",
      "Barabar Caves",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Patna → Gaya → Bodh Gaya",
        description:
          "Pickup from Patna and travel towards Gaya. Explore the Vishnupad area before continuing to Bodh Gaya. Visit the Mahabodhi Temple and surrounding monasteries. Overnight stay in Bodh Gaya.",
      },
      {
        day: "Day 2",
        title: "Bodh Gaya → Dungeshwari",
        description:
          "Explore Bodh Gaya in the morning followed by a visit to Dungeshwari Hills. Spend the evening experiencing the atmosphere of Bodh Gaya.",
      },
      {
        day: "Day 3",
        title: "Barabar → Patna",
        description:
          "Travel towards the ancient Barabar Caves. Explore the Mauryan-era rock-cut caves and surrounding landscape before continuing back to Patna for your departure.",
      },
    ],

    images: [
      "/packages/bodh-gaya-1.jpg",
      "/packages/bodh-gaya-2.jpg",
      "/packages/barabar-1.jpg",
      "/packages/barabar-2.jpg",
    ],

    inclusions: [
      "Patna Airport/Railway Station pickup & drop",
      "Private vehicle",
      "Accommodation",
      "Breakfast",
      "Sightseeing",
    ],

    exclusions: [
      "Entry tickets",
      "Personal expenses",
      "Meals not mentioned",
    ],
  },

  {
    slug: "forgotten-magadh",
    title: "Forgotten Magadh",
    tagline: "Ancient kingdoms, forgotten stories and the Mountain Man.",
    duration: "4 Days / 3 Nights",
    category: "History + Culture",

    pricing: {
      fourGuests: 37999,
      sevenGuests: 52999,
    },

    highlights: [
      "Rajgir",
      "Nalanda",
      "Gahlor Ghati",
      "Dashrath Manjhi",
      "Gaya",
      "Bodh Gaya",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Patna → Rajgir",
        description:
          "Pickup from Patna and travel to Rajgir. Explore the ancient hills, Vishwa Shanti Stupa and local surroundings. Overnight in Rajgir.",
      },
      {
        day: "Day 2",
        title: "Rajgir → Nalanda → Gahlor",
        description:
          "Visit Nalanda Mahavihara before travelling towards Gahlor Ghati. Explore the landscape connected with Dashrath Manjhi and his remarkable story.",
      },
      {
        day: "Day 3",
        title: "Gahlor → Gaya → Bodh Gaya",
        description:
          "Travel towards Gaya and explore Vishnupad and the Falgu region before continuing to Bodh Gaya and the Mahabodhi Temple.",
      },
      {
        day: "Day 4",
        title: "Bodh Gaya → Patna",
        description:
          "Enjoy a relaxed morning in Bodh Gaya before beginning the journey back to Patna Airport or Railway Station.",
      },
    ],

    images: [
      "/packages/gahlor-main.jpg",
      "/packages/rajgir-1.jpg",
      "/packages/nalanda-1.jpg",
      "/packages/gahlor-1.jpg",
      "/packages/bodh-gaya-1.jpg",
    ],

    inclusions: [
      "Patna Airport/Railway Station pickup & drop",
      "Private vehicle",
      "Accommodation",
      "Breakfast",
      "Sightseeing",
    ],

    exclusions: [
      "Entry tickets",
      "Personal expenses",
      "Meals not mentioned",
    ],
  },

  {
    slug: "magadh-roots",
    title: "Magadh Roots",
    tagline: "The complete journey through the heart of Bihar.",
    duration: "5 Days / 4 Nights",
    category: "Signature Journey",
    featured: true,

    pricing: {
      fourGuests: 46999,
      sevenGuests: 64999,
    },

    highlights: [
      "Arai village",
      "Rajgir",
      "Nalanda",
      "Gahlor Ghati",
      "Gaya",
      "Bodh Gaya",
      "Barabar Caves",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Patna → Arai",
        description:
          "Begin your Nomadly journey with a private transfer from Patna to Arai. Experience authentic village life, local food, fields, river-side sunset, folklore and rooftop stargazing.",
      },
      {
        day: "Day 2",
        title: "Arai → Rajgir",
        description:
          "Experience the village morning before travelling to Rajgir. Explore Rajgir hills, Vishwa Shanti Stupa and the local landscape.",
      },
      {
        day: "Day 3",
        title: "Rajgir → Nalanda → Gahlor",
        description:
          "Explore Rajgir and Nalanda before travelling towards Gahlor Ghati. Discover the story of Dashrath Manjhi and the landscape around the Mountain Man's village.",
      },
      {
        day: "Day 4",
        title: "Gahlor → Gaya → Bodh Gaya",
        description:
          "Continue towards Gaya. Explore the Vishnupad region and then experience Bodh Gaya and the Mahabodhi Temple.",
      },
      {
        day: "Day 5",
        title: "Barabar → Patna",
        description:
          "Visit the ancient Barabar Caves before beginning the return journey to Patna Airport or Railway Station.",
      },
    ],

    images: [
      "/hero.jpg",
      "/packages/village-1.jpg",
      "/packages/rajgir-1.jpg",
      "/packages/nalanda-1.jpg",
      "/packages/gahlor-1.jpg",
      "/packages/bodh-gaya-1.jpg",
      "/packages/barabar-1.jpg",
    ],

    inclusions: [
      "Patna Airport/Railway Station pickup & drop",
      "Private vehicle",
      "Village homestay",
      "Hotel accommodation",
      "Breakfast",
      "Selected meals",
      "Sightseeing",
      "Local village experience",
    ],

    exclusions: [
      "Entry tickets",
      "Ropeway tickets",
      "Personal expenses",
      "Meals not mentioned",
    ],
  },

  {
    slug: "grand-magadh",
    title: "Grand Magadh",
    tagline: "Six days. One unforgettable journey through Bihar.",
    duration: "6 Days / 5 Nights",
    category: "Premium Journey",

    pricing: {
      fourGuests: 54999,
      sevenGuests: 74999,
    },

    highlights: [
      "Arai village",
      "Rajgir",
      "Nalanda",
      "Gahlor",
      "Gaya",
      "Bodh Gaya",
      "Barabar",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Patna → Arai",
        description:
          "Begin with an authentic village experience including local food, fields, river-side evening, folklore and rooftop stargazing.",
      },
      {
        day: "Day 2",
        title: "Arai → Rajgir",
        description:
          "Village sunrise and optional farming experience followed by travel to Rajgir. Explore the hills and Shanti Stupa.",
      },
      {
        day: "Day 3",
        title: "Rajgir → Nalanda",
        description:
          "Spend the day exploring Rajgir and Nalanda's ancient heritage.",
      },
      {
        day: "Day 4",
        title: "Nalanda → Gahlor → Gaya",
        description:
          "Travel through Gahlor Ghati and discover the story of Dashrath Manjhi before continuing to Gaya.",
      },
      {
        day: "Day 5",
        title: "Gaya → Bodh Gaya",
        description:
          "Explore Gaya and Bodh Gaya, including the Mahabodhi Temple and surrounding monasteries.",
      },
      {
        day: "Day 6",
        title: "Barabar → Patna",
        description:
          "Explore Barabar Caves before returning to Patna Airport or Railway Station.",
      },
    ],

    images: [
      "/packages/rajgir-2.jpg",
      "/packages/village-1.jpg",
      "/packages/rajgir-1.jpg",
      "/packages/nalanda-1.jpg",
      "/packages/gahlor-1.jpg",
      "/packages/bodh-gaya-1.jpg",
      "/packages/barabar-1.jpg",
    ],

    inclusions: [
      "Patna Airport/Railway Station pickup & drop",
      "Private vehicle",
      "Accommodation",
      "Breakfast",
      "Selected meals",
      "Sightseeing",
      "Village experience",
    ],

    exclusions: [
      "Entry tickets",
      "Ropeway tickets",
      "Personal expenses",
      "Anything not mentioned",
    ],
  },
];