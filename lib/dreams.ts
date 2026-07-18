import { Dream } from "@/types/dream";

const dreams: Dream[] = [
  {
    id: "australia",
    title: "Australia",
    emoji: "🇦🇺",
    description: "Working Holiday Visa Journey",

    category: "Australia",

    current: 7500000,
    target: 35000000,
    deadline: "2029-12-31",

    targetYear: 2029,

    status: "in-progress",

    coverImage:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",

    budget: {
      target: 35000000,
      saved: 7500000,
    },

    checklist: [
      {
        id: "passport",
        title: "Passport",
        completed: true,
      },
      {
        id: "ielts",
        title: "IELTS",
        completed: false,
      },
      {
        id: "cv",
        title: "Prepare CV",
        completed: true,
      },
      {
        id: "whv",
        title: "Working Holiday Visa",
        completed: false,
      },
      {
        id: "flight",
        title: "Flight Ticket",
        completed: false,
      },
    ],

    timeline: [
      {
        id: "1",
        year: 2026,
        title: "Start IELTS",
        completed: true,
      },
      {
        id: "2",
        year: 2027,
        title: "Prepare WHV",
        completed: false,
      },
      {
        id: "3",
        year: 2029,
        title: "Move to Australia",
        completed: false,
      },
    ],

    notes:
      "Every small progress today brings me closer to Australia.",

    gallery: [],
  },

  {
    id: "tablet",
    title: "Huawei MatePad 12X",
    emoji: "💻",
    description: "Buy my dream tablet",

    category: "Tablet",

    current: 2500000,
    target: 9000000,
    deadline: "2026-12-31",

    targetYear: 2026,

    status: "planning",

    budget: {
      target: 9000000,
      saved: 2500000,
    },

    checklist: [],

    timeline: [],

    notes: "",

    gallery: [],
  },

  {
    id: "ut",
    title: "Universitas Terbuka",
    emoji: "🎓",
    description: "Bachelor Degree",

    category: "Study",

    current: 1500000,
    target: 6000000,
    deadline: "2026-08-01",

    targetYear: 2026,

    status: "planning",

    budget: {
      target: 6000000,
      saved: 1500000,
    },

    checklist: [],

    timeline: [],

    notes: "",

    gallery: [],
  },

  {
    id: "house",
    title: "Dream House",
    emoji: "🏡",
    description: "Minimalist House",

    category: "House",

    current: 0,
    target: 500000000,
    deadline: "2032-12-31",

    targetYear: 2032,

    status: "planning",

    budget: {
      target: 500000000,
      saved: 0,
    },

    checklist: [],

    timeline: [],

    notes: "",

    gallery: [],
  },
];

export default dreams;