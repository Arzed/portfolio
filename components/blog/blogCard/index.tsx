import { BlogCategoryType, CategoryType } from "@/blog"
import { BlogHeader } from "./blogHeader"
import { Badge } from "@/components/ui/badge"
import { ButtonIconLink } from "@/components/ui/buttonIconLink"
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import { ArrowRight } from "lucide-react"


type SkillBadgeProps = {
    blogCategory: BlogCategoryType
}
const CategoryBadge = ({ blogCategory }: SkillBadgeProps) => {
    return (
        <Badge variant='skill'>{blogCategory}</Badge>
    )
}

export const BlogCard = ({ title, date, description, href, blogCategory }: CategoryType) => {
    return (
        <Card className=' w-full relative shadow-transparent shadow-xl h-fit
        hover:bg-slate-300/20 hover:shadow-slate-300/30 transition ease-in
        after:h-20 after:w-px after:absolute after:-left-px after:top-3/4 after:opacity-0 after:bg-gradient-to-b after:from-transparent after:via-green-900/80 after:to-transparent
        hover:after:top-[.2rem] hover:after:opacity-100
        after:transition-all after:duration-700 after:ease-in-out
        lg:group-hover/list:opacity-60
        lg:hover:!opacity-100 bg-slate-200 border-slate-300
        '>
            <CardHeader>
                <BlogHeader
                    title={title}
                    date={date}
                />
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-2 justify-center drop-shadow-sm'>
                {blogCategory.map((b, i) => <CategoryBadge key={i} blogCategory={b} />)}
            </CardContent>
            <CardFooter className='flex-col [&>*]:w-full gap-4 h-full'>
                <ButtonIconLink
                    href={href}
                    icon={<ArrowRight className='scale-50' />}
                    title={'Selengkapnya'}
                    variant={'default'}
                    linkProps={{
                        target: '_blank'
                    }}
                >
                    {title}
                </ButtonIconLink>
            </CardFooter>
        </Card>
    )
}