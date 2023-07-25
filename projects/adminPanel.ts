import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const adminPanel: ProjectType = {
    title: 'Admin Panel',
    date: 'July 2023',
    description: 'An Admin panel for managing products and categories an ecommerce website',
    picture: '/admin-panel.png',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'MongoDB', 'AWS S3'],
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Arzed/admin-panel',
            icon: GitHubLogoIcon
        }
    ]
}
