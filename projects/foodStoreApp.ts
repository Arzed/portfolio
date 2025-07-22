import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import picture from "../public/food-store.png";

export const foodStoreApp: ProjectType = {
  title: "Food Store App",
  alt: "Food Store App",
  date: "Des 2023",
  description:
    "An Food Store App for managing menu and categories of foods and drinks",
  picture: picture,
  skills: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "shadcn/ui",
    "PostgreSQL",
    "Uploadthing",
  ],
  links: [
    {
      title: "Github",
      href: "https://github.com/Arzed/Food-Store-App",
      icon: GitHubLogoIcon,
    },
  ],
};
