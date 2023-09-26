import { BlogCategoryType, CategoryType } from "@/blog"
import { BlogCard } from "../blogCard"
import clsx from "clsx"

const gridGap = "gap-8 md:gap-5"

type WithChildrenProps = {
    children: React.ReactNode
}
const MasonryWrapper = ({ children }: WithChildrenProps) => {
    return (
        <div className={clsx(gridGap, "grid h-fit")}>
            {children}
        </div>
    )
}

const generateArrayChunks = <T,>(arr: T[], size: number) => {
    const arrayCopy = [...arr];
    const chunks: T[][] = [];

    const chunkSize = Math.ceil(arrayCopy.length / size);

    for (let i = 0; i < size; i++) {
        chunks.push(arrayCopy.splice(0, chunkSize));
    }

    return chunks;
}

type BlogListSectionProps = {
    category: CategoryType[]
}
export const BlogListSection = ({ category }: BlogListSectionProps) => {
    const masonryArray = generateArrayChunks(category, 2);

    return (
        <section className='bg-slate-200 max-w-7xl p-6'>
            <div className={clsx(gridGap, "grid w-full group/list")}>
                {masonryArray.map((projects, wi) => (
                    <MasonryWrapper key={wi}>
                        {projects.map((p, i) => (
                            <BlogCard
                                key={i}
                                {...p}
                            />
                        ))}
                    </MasonryWrapper>
                ))}
            </div>
        </section>
    )
}