import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const dummyJSON: ProjectType = {
    title: 'DummyJSON API example',
    date: 'April 2023',
    description: 'Ecommerce Web Application to show implementation of DummyJSON API . Includes Authentication, Cart function using React Context, and filtering products by Category',
    picture: '/dummyjson.png',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Arzed/dummyJSON-ecommerce',
            icon: GitHubLogoIcon
        },
        {
            title: 'Website',
            href: 'https://zed-ecommerce.netlify.app',
            icon: ExternalLinkIcon
        }
    ]
}