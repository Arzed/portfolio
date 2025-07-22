import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import picture from "../public/dummyjson.png";

export const dummyJSON: ProjectType = {
  title: "DummyJSON API example",
  alt: "DummyJSON API",
  date: "April 2023",
  description:
    "Ecommerce Web Application to show implementation of DummyJSON API . Includes Authentication, Cart function using React Context, and filtering products by Category",
  picture: picture,
  skills: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
  links: [
    {
      title: "Github",
      href: "https://github.com/Arzed/dummyJSON-ecommerce",
      icon: GitHubLogoIcon,
    },
    {
      title: "Website",
      href: "https://zed-ecommerce.netlify.app",
      icon: ExternalLinkIcon,
    },
  ],
};
