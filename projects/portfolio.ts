import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const portfolio: ProjectType = {
    title: 'Portfolio',
    date: 'July 2023',
    description: 'My personal website',
    picture: '/portfolio.png',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Arzed/portfolio',
            icon: GitHubLogoIcon
        }
    ]
}