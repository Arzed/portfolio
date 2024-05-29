import { soliner } from "./soliner"
import { dummyJSON } from "./dummyJSON"
import { portfolio } from "./portfolio"
import { adminPanel } from "./adminPanel"
import { foodStoreApp } from "./foodStoreApp"

export type ProjectType = {
    title: string,
    description: string,
    date: string,
    skills: SkillType[]
    links: LinkType[]
    picture: string
}

export type LinkType = {
    href: string,
    title: string,
    icon: React.ForwardRefExoticComponent<any>
}


export const projectsList = [
    foodStoreApp,
    portfolio,
    dummyJSON,
    adminPanel,
    soliner,
]
