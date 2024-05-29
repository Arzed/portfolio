import { jaringankomputer } from "./jaringanKomputer"
import { networking } from "./networking"
import { test } from "./test"

export type CategoryType = {
    title: string,
    description: string,
    date: string,
    blogCategory: BlogCategoryType[]
    href: string
}

export type BlogContentType = {
    title: string,
    date: string,
    slug: string,
    firstHeadline: string,
    firstParagraph: [string, string?, string?, string?],
    list?: [string, string, string?, string?, string?],
    secondHeadline: string,
    firstImg: [string, string?],
    secondP: [string, string?, string?, string?],
    thirdHeadline: string,
    secondImg: [string, string?],
    thirdP: [string, string?, string?, string?]
    fourHeadline?: string,
    thirdImg?: [string, string?],
    fourP?: [string],
    fifthHeadline?: string,
    fourImg?: [string, string?],
    fifthP?: [string, string?, string?, string?],
    sixHeadline?: string,
    fifthImg?: [string, string?],
    sixP?: [string, string?, string?, string?],
}

export const BlogCategoryType = [
    'IT Networking',
    
    'Guide',
    'Feature',

    'JavaScript',
    'TypeScript',
    'Python',
    'React',
    'Next.js',
    'Gatsby',
    'Electron',
    'HTML',

    'Tailwind',
    'Chakra UI',
    'shadcn/ui',
    'CSS',
    'Bootstrap',

    'Jest',

    'MySQL',
    'MongoDB',
    'SQLite',
    'Prisma',

    'Docker',
    'NPM Package',
    'Pusher',
    'AWS S3',
]


export const BlogList = [
    networking,
]

export const BlogContent = [
    jaringankomputer,
    test,
]
