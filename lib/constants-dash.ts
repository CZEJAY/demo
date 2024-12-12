import { CardOption, StyleOption, ExamplePrompt } from "@/types/generate";
import { WorkspaceMember } from "@/types/settings";

export const CARD_OPTIONS: CardOption[] = [
  { value: 1, label: "1 card" },
  { value: 2, label: "2 cards" },
  { value: 3, label: "3 cards" },
  { value: 4, label: "4 cards" },
  { value: 5, label: "5 cards" },
  { value: 6, label: "6 cards" },
  { value: 7, label: "7 cards" },
  { value: 8, label: "8 cards" },
  { value: 9, label: "9 cards" },
  { value: 10, label: "10 cards" },
  { value: 15, label: "15 cards", isPro: true },
  { value: 20, label: "20 cards", isPro: true },
  { value: 25, label: "25 cards", isPro: true },
  { value: 30, label: "30 cards", isPro: true },
];

export const STYLE_OPTIONS: StyleOption[] = [
  {
    value: "default",
    label: "Default",
    description:
      "Flexible cards that expand with your content. Great for informal presentations.",
    fluid: true,
  },
  {
    value: "traditional",
    label: "Traditional",
    description:
      "Fixed-size cards with consistent spacing. Perfect for formal presentations.",
  },
  {
    value: "tall",
    label: "Tall",
    description: "Vertical cards for showcasing long-form content or images.",
  },
];

export const EXAMPLE_PROMPTS: ExamplePrompt[] = [
  {
    id: "1",
    title: "Ethics in software engineering",
    icon: "📝",
    type: "presentation",
  },
  {
    id: "2",
    title: "Explain the big bang to a 17th century pirate",
    icon: "🌌",
    type: "presentation",
  },
  {
    id: "3",
    title: "Course syllabus",
    icon: "📚",
    type: "presentation",
  },
  {
    id: "4",
    title: "Sales proposal for a b2b software company",
    icon: "💼",
    type: "presentation",
  },
  {
    id: "5",
    title: "Pitch deck for a startup that makes organic dog food",
    icon: "🐕",
    type: "presentation",
  },
  {
    id: "6",
    title: "The evolution of fashion trends over the decades",
    icon: "👗",
    type: "presentation",
  },
  // Webpage examples
  {
    id: "7",
    title: "Website for handmade jewelry",
    icon: "💎",
    type: "webpage",
  },
  {
    id: "8",
    title: "Landing page for a marketing agency that helps real estate agents",
    icon: "🏠",
    type: "webpage",
  },
  {
    id: "9",
    title: "One-page website promoting a dog cafe",
    icon: "☕",
    type: "webpage",
  },
  {
    id: "10",
    title: "Landing page for a healthcare consultant",
    icon: "👨‍⚕️",
    type: "webpage",
  },
  {
    id: "11",
    title: "Personal site for a product designer",
    icon: "🎨",
    type: "webpage",
  },
  {
    id: "12",
    title: "Zodiac signs",
    icon: "✨",
    type: "webpage",
  },
  // Document examples
  {
    id: "13",
    title: "A journey through the rainforest",
    icon: "🌴",
    type: "document",
  },
  {
    id: "14",
    title: "Color psychology",
    icon: "🎨",
    type: "document",
  },
  {
    id: "15",
    title: "Classic movie monsters",
    icon: "🎬",
    type: "document",
  },
  {
    id: "16",
    title: "Investor update for [company]",
    icon: "📊",
    type: "document",
  },
  {
    id: "17",
    title: "Exploring different types of rocks",
    icon: "🪨",
    type: "document",
  },
  {
    id: "18",
    title:
      "Statement of work for a building contractor working on Willie Wonka's factory",
    icon: "🏭",
    type: "document",
  },
];

export const defaultMembers: WorkspaceMember[] = [
  {
    id: "you",
    name: "John Doe",
    email: "johndoe@example.com",
    role: "admin",
    joinedAt: new Date("2024-10-01T22:56:00"),
  },
];
