import { ProjectType } from "@/projects"
import { ProjectHeader } from "./projectHeader"
import { Badge } from "@/components/ui/badge"
import { ButtonIconLink } from "@/components/ui/buttonIconLink"
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'


type SkillBadgeProps = {
    skill: SkillType
}
const SkillBadge = ({ skill }: SkillBadgeProps) => {
    return (
        <Badge variant='skill'>{skill}</Badge>
    )
}

export const ProjectCard = ({ title, date, description, links, skills, picture }: ProjectType) => {
    return (
        <Card className='max-w-md md:max-w-xl w-full relative shadow-transparent shadow-xl h-fit
        hover:bg-slate-300/20 hover:shadow-slate-300/30 transition ease-in
        after:h-20 after:w-px after:absolute after:-left-px after:top-3/4 after:opacity-0 after:bg-gradient-to-b after:from-transparent after:via-green-900/80 after:to-transparent
        hover:after:top-[.2rem] hover:after:opacity-100
        after:transition-all after:duration-700 after:ease-in-out
        lg:group-hover/list:opacity-60
        lg:hover:!opacity-100 bg-slate-200 border-slate-300
        '>
            <CardHeader>
                <ProjectHeader
                    title={title}
                    date={date}
                />
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-2 justify-center drop-shadow-sm'>
                <Image src={picture} alt={picture} width={900} height={900} />
                {skills.map((s, i) => <SkillBadge key={i} skill={s} />)}
            </CardContent>
            <CardFooter className='flex-col [&>*]:w-full gap-4 h-full'>
                {links.map(l => {
                    const Icon = l.icon;
                    return (
                        <ButtonIconLink
                            href={l.href}
                            icon={<Icon className='scale-150' />}
                            title={l.title}
                            variant={'default'}
                            key={l.title}
                            linkProps={{
                                target: '_blank'
                            }}
                        >
                            {l.title}
                        </ButtonIconLink>
                    )
                })}
            </CardFooter>
        </Card>
    )
}