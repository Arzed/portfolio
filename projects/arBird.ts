import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import picture from "../public/ARBird.webp";

export const arBird: ProjectType = {
  title: "AR Bird",
  alt: "AR Bird",
  date: "Jan 2025",
  description:
    "An Android Augmented Reality (AR) Bird Simulation Game Using Unity and Lightship ",
  picture: picture,
  skills: [
    "C++",
    "C#",
    "Unity"
  ],
  links: [
    {
      title: "Github",
      href: "https://github.com/Arzed/ARBird",
      icon: GitHubLogoIcon,
    },
  ],
};
