import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { GrLinkedin, GrInstagram, GrTwitter } from "react-icons/gr";


import React from 'react'
import { 
  Zap, 
  Layout, 
  Rocket, 
  FolderOpen, 
  Scissors, 
  FileOutput, 
  Smartphone, 
  BarChart2, 
  Users, 
  Image, 
  LineChart, 
  File 
} from 'lucide-react'

export const useCases = [
  {
    title: "Your Personal AI Design & Copywriting Assistant",
    features: [
      {
        icon: React.createElement(Zap),
        text: "Get instant, personalized text and visuals.",
      },
      {
        icon: React.createElement(Layout),
        text: "Professional layouts are applied in one click.",
      },
      {
        icon: React.createElement(Rocket),
        text: "Rewrite or autocomplete your content fast to stay ahead.",
      },
    ],
  },
  {
    title: "Seamless Design & Copywriting Updates for Quick Edits",
    features: [
      {
        icon: React.createElement(FolderOpen),
        text: "Easily import files or presentations.",
      },
      {
        icon: React.createElement(Scissors),
        text: "Copy and paste text with zero hassle.",
      },
      {
        icon: React.createElement(FileOutput),
        text: "Export polished PDFs and PPTs instantly.",
      },
    ],
  },
  {
    title: "Share, Publish, and Track—Anywhere",
    features: [
      {
        icon: React.createElement(Smartphone),
        text: "Ensure your content looks great on any device.",
      },
      {
        icon: React.createElement(BarChart2),
        text: "See what works with real-time analytics.",
      },
      {
        icon: React.createElement(Users),
        text: "Collaborate live with your team for fast feedback and updates.",
      },
    ],
  },
  {
    title: "Collaborate live with your team for fast feedback and updates.",
    features: [
      {
        icon: React.createElement(Image),
        text: "Drag-and-drop galleries, videos, and embeds.",
      },
      {
        icon: React.createElement(LineChart),
        text: "Turn your data into easy-to-read charts and tables.",
      },
      {
        icon: React.createElement(File),
        text: "Start with templates that save time—just add your touch.",
      },
    ],
  },
]


export const addressLinks = [
  { label: "701 Tillery Street, Austin, Texas, United States", href: "#" },
];

export const contactLink = [
  { label: "Email: hello@patexa.atoovis.com", href: "#" },
];

export const productLinks = [
  { label: "Help", href: "#" },
  { label: "Pricing", href: "#" },
];

export const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
];

export const footerSocialIcons = [
  { icon: <FaFacebookF size={20} />, href: "#" },
  { icon: <GrTwitter size={20} />, href: "#" },
  { icon: <GrInstagram size={20} />, href: "#" },
  { icon: <FaTiktok size={20} />, href: "#" },
  { icon: <GrLinkedin size={20} />, href: "#" },
];

export const navLinks = [
  { label: "Login", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Language", href: "#" },
];

export const features = [
  { label: "AI-Powered Design Assistant ", text: " Uses artificial intelligence to suggest and enhance designs, automating the creation process and ensuring professional-quality results with minimal effort." },
  { label: "Branded Content, Ideas Generator & Optimizer ", text: "Generates personalized content ideas and optimizes them to fit your brand’s voice and style, streamlining the creative process." },
  { label: "Drag-and-Drop Editor", text: "Generates personalized content ideas and optimizes them to fit your brand’s voice and style, streamlining the creative process."},
  { label: "Real-Time Collaborative Tools  ", text: "Allows multiple team members to collaborate on the same project simultaneously, ensuring smooth teamwork and instant updates." },
  { label: "No-Code Customizable Templates ", text: "Ready-made, customizable templates that don’t require coding, letting users quickly create tailored designs." },
  { label: "Data Visualization  ", text: "Transforms complex data into visual charts and graphs, making it easy to interpret and present information clearly." },
];

export const whatWillYouCreate = [
  {
    label: "Presentations",
    content: "Design engaging slide decks for meetings, pitches, or lectures.",
    src: "presentation",
  },
  {
    label: "Documents",
    content:
      "Create professional resumes, reports, proposals, and white papers.",
    src: "document",
  },
  {
    label: "Websites",
    content: "Create a website with great design and compelling copy to enhance user experience and increase conversions.",
    src: "website",
  },
  {
    label: "Marketing Content and Visuals",
    content:
      "Create captivating content, interactive charts, and infographics that simplify complex information.",
    src: "visualization",
  },
];

export const teamWork = [
  {
    label: "Centralized Communication",
    content:
      "The platform serves as a hub for discussions related to specific projects, reducing the need for separate messaging apps and keeping all relevant information in one place.",
    src: "communication",
  },
  {
    label: "Centralized Feedback and Iteration",
    content:
      "Team members can leave comments and suggestions directly on the document, facilitating quick revisions. This feature helps teams efficiently incorporate feedback, ensuring all ideas are considered and projects are refined effectively.",
    src: "feedback",
  },
  {
    label: "Shared Branded Templates",
    content:
      "Teams can create and store-branded templates for consistent messaging and design across all materials. This not only saves time but also helps maintain a cohesive brand identity in presentations, reports, and marketing content.",
    src: "share",
  },
];


export const reviews = [
  {
    src: "user",
    altText: "JBells",
    reviewText:
      "This tool has streamlined our project proposals and client presentations. The templates are versatile and easy to customize, allowing us to maintain a consistent brand image. We've noticed an increase in client engagement and feedback since we started using it. It's an invaluable resource for our team.",
  },
  {
    src: "user",
    altText: "cynthia obi",
    reviewText:
      "As a small business owner, I needed a tool that could help me present my ideas clearly and with eye-catching marketing materials without breaking the bank. This platform has exceeded my expectations! It’s intuitive and offers great templates, allowing me to produce high-quality graphics and content effortlessly. It’s become my go-to resource!",
  },
  {
    src: "user",
    altText: "Mark John",
    reviewText:
      "I love how easy it is to use. Whether I’m creating a resume, planning a presentation or pitch deck, everything is straightforward and effective. It has made my work so much easier!",
  },
];

export const solutions = [
  {
    imageSrc: "Entrepreneur",
    altText: "Entrepreneurs",
    title: "Entrepreneurs",
    description:
      "Create compelling pitch decks that attract investors and showcase your vision.",
  },
  {
    imageSrc: "business",
    altText: "Businesses",
    title: "Businesses",
    description:
      "Effortlessly generate presentations, marketing materials, and reports to drive your projects forward.",
  },
  {
    imageSrc: "professional",
    altText: "Individual Professionals",
    title: "Individual Professionals",
    description:
      "Build visually stunning presentations, resumes, and portfolios that highlight your skills and experience.",
  },
  {
    imageSrc: "institutions",
    altText: "Educational Institutions",
    title: "Educational Institutions",
    description:
      "Design tailored lesson plans and engaging educational content that cater to diverse learning needs.",
  },
];
