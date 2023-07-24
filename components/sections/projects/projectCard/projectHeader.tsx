import { CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type ProjectHeaderProps = {
    title: string,
    date: string
}
export const ProjectHeader = ({ title, date }: ProjectHeaderProps) => {
    return (
        <header className="flex gap-4 items-center">
            <CardTitle className="text-black">{title}</CardTitle>
            <Separator orientation="vertical" className="h-8" />
            <span className="text-black">{date}</span>
        </header>
    )
}