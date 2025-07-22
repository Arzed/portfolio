import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import picture from "../public/admin-panel.png";

export const adminPanel: ProjectType = {
  title: "Admin Panel",
  alt: "Admin Panel",
  date: "July 2023",
  description:
    "An Admin panel for managing products and categories an ecommerce website",
  picture: picture,
  skills: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "shadcn/ui",
    "MongoDB",
    "AWS S3",
  ],
  links: [
    {
      title: "Github",
      href: "https://github.com/Arzed/admin-panel",
      icon: GitHubLogoIcon,
    },
  ],
};
