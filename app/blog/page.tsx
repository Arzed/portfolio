import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/layout/header"
// import { Overview } from "@/app/examples/dashboard/components/overview"
// import { RecentSales } from "@/app/examples/dashboard/components/recent-sales"
// import { Search } from "@/app/examples/dashboard/components/search"
// import TeamSwitcher from "@/app/examples/dashboard/components/team-switcher"
// import { UserNav } from "@/app/examples/dashboard/components/user-nav"
import icon from '@/public/logo.png'
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BlogCategoryType, BlogList } from "@/blog"
import { MyBlog } from "@/components/blog/blogList"

export default function Blog() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="fixed backdrop-blur-sm bg-slate-900/75 dark:bg-slate-100/75 z-50 top-0 left-0 right-0 py-2 border-b border-slate-700 dark:border-slate-300 shadow-sm items-center justify-between">
          <div className="flex h-16 items-center px-4">
            <Link href={'/'} className="mx-10">
                <Image src={icon} alt="Logo" width={300} height={300} className="w-10" />
            </Link>
            <div className="flex container items-center justify-end space-x-4">
                <MainNav className="mx-6" />
            </div>
          </div>
        </div>
        <div className="flex items-center pt-24 px-5 ml-14 gap-4">
          <div className="w-3/12 bg-slate-300/50 overflow-auto rounded-md">
            <h1 className="text-red-500 text-lg pt-5 pl-5 pb-2 ">ALL POST</h1>
            <ScrollArea className='h-[70vh] w-full px-10'>
                {BlogCategoryType.map(c => (
                    <div key={c} className="cursor-pointer text-gray-500 hover:text-red-500 my-1 flex flex-row">{c}</div>  
                ))}
            </ScrollArea>
          </div>
            <ScrollArea className='h-[80vh] w-9/12 overflow-auto px-5 rounded-md'>
                <MyBlog />
            </ScrollArea>
        </div>
      </div>
    </>
  )
}