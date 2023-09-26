import { BlogList } from "@/blog"
import { BlogListSection } from "./blogListSection"

export const MyBlog = () => {
    return (
        <BlogListSection
            category={BlogList}
        />
    )
}