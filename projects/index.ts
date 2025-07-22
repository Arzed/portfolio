import { soliner } from "./soliner";
import { dummyJSON } from "./dummyJSON";
import { portfolio } from "./portfolio";
import { adminPanel } from "./adminPanel";
import { foodStoreApp } from "./foodStoreApp";
import { StaticImageData } from "next/image";
import { tutorAIBahasa } from "./tutorAIBahasa";
import { arBird } from "./arBird";

export type ProjectType = {
  title: string;
  alt: string;
  description: string;
  date: string;
  skills: SkillType[];
  links: LinkType[];
  picture: StaticImageData;
};

export type LinkType = {
  href: string;
  title: string;
  icon: React.ForwardRefExoticComponent<any>;
};

export const projectsList = [
  tutorAIBahasa,
  foodStoreApp,
  portfolio,
  dummyJSON,
  arBird,
  adminPanel,
  soliner,
];
