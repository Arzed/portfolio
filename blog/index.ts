// import { jaringankomputer } from "./jaringanKomputer"
import { networking } from "./networking"

export type CategoryType = {
    title: string,
    description: string,
    date: string,
    blogCategory: BlogCategoryType[]
    href: string
}

export type BlogType = {
    title: string,
    date: string,
    slug: string,
    firstP: string,
    firstImg: string,
    secondP: string,
    secondImg: string,
    thirdImg: string,
    thirdP: string
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

// export const BlogContent = [
//     jaringankomputer,
// ]
