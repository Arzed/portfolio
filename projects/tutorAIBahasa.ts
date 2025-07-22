import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import picture from "../public/Tutor.jpg";

export const tutorAIBahasa: ProjectType = {
  title: "TutorAI Bahasa",
  alt: "TutorAI Bahasa",
  date: "Apr 2025",
  description:
    "Need a personal Indonesian tutor? TutorAI assists you 24/7! Study grammar, practice writing, and test your skills with an expert chatbot. Learn anytime, anywhere!",
  picture: picture,
  skills: [
    "Dart",
    "Flutter",
    "Open AI"
  ],
  links: [
    {
      title: "Github",
      href: "https://github.com/Arzed/TutorAI-Bahasa",
      icon: GitHubLogoIcon,
    },
  ],
};
