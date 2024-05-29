import { ExternalLinkIcon, ReaderIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const soliner: ProjectType = {
    title: 'Soliner',
    date: 'Des 2022',
    picture: '/soliner.png',
    description: 'An company profile website of PT.Soliner. Includes managing user form in contact page',
    skills: ['React', 'JavaScript', 'Bootstrap'],
    links: [
        {
            title: 'Website',
            href: 'https://soliner.co.id',
            icon: ExternalLinkIcon
        }
    ]
}