import type { Student } from "../types/student";

export const students: Student[] = [
  {
    id: "STU001",
    name: "Alex Rivera",
    year: 1,
    status: "Full-time",
    interests: ["coding", "rock climbing", "coffee"],
    gitUsername: "alex-codes-99",
    funfact: "I have a twin brother who is also a programmer.",
  },
  {
    id: "STU002",
    name: "Samira Patel",
    year: 3,
    status: "Full-time",
    interests: ["photography", "pens", "digital art"],
    gitUsername: "samira-p",
    // funfact and github are optional, leaving funfact out here
  },
  {
    id: "STU003",
    name: "Marcus Vance",
    year: 2,
    status: "Part-time",
    interests: ["rocks", "hiking", "geology"],
    funfact: "I once found a geode shaped exactly like a heart.",
    // gitUsername is optional
  },
  {
    id: "STU004",
    name: "Chloe Zhao",
    year: 4,
    status: "Full-time",
    interests: ["pencils", "animation", "gaming"],
    gitUsername: "chloe-z-draws",
    funfact: "I can speak four languages fluently.",
  },
  {
    id: "STU005",
    name: "Jordan Davies",
    year: 1,
    status: "Part-time",
    interests: ["none", "cooking"], // Keeping the "none" interest option from your list!
    gitUsername: "jordan-devs",
    funfact: "I used to be a professional pastry chef.",
  },
  {
    id: "STU006",
    name: "Elena Rostova",
    year: 2,
    status: "Full-time",
    interests: ["chess", "coffee", "cybersecurity"],
    gitUsername: "elena-rostov",
    funfact: "I can solve a Rubik's cube blindfolded.",
  },
  {
    id: "STU007",
    name: "Tyler Nguyen",
    year: 3,
    status: "Part-time",
    interests: ["music production", "skateboarding"],
    funfact: "I built my own electric guitar from scratch.",
  },
  {
    id: "STU008",
    name: "Aisha Touré",
    year: 4,
    status: "Full-time",
    interests: ["machine learning", "robotics", "scuba diving"],
    gitUsername: "aisha-t-ai",
    funfact: "I have dived with whale sharks in the Maldives.",
  },
];
