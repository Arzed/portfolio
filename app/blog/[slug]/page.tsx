"use client";
import Link from "next/link";
import Image from "next/image";
import icon from "@/public/logo.png";
import { MainNav } from "@/components/layout/header";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import can from '@/public/can-2.png'
import lan from '@/public/LAN.jpg'
import man from '@/public/man.jpeg'
import wan from '@/public/wan.png'
import { BlogContent, BlogContentType } from "@/blog";

export default function Page({ params }: { params: { slug: string } }) {
  const filtered = BlogContent.filter(content =>
    content.slug.includes(params.slug)
  )
  return (
    <>
      <ScrollArea className='h-[100vh] w-full'>
        {filtered.map ((f, i) => (
          <div className="flex-col md:flex" key={i}>
            <div className="fixed backdrop-blur-sm bg-slate-900/75 dark:bg-slate-100/75 z-50 top-0 left-0 right-0 py-2 border-b border-slate-700 dark:border-slate-300 shadow-sm items-center justify-between">
              <div className="flex h-16 items-center px-4">
                <Link href={"/"} className="mx-10">
                  <Image
                    src={icon}
                    alt="Logo"
                    width={300}
                    height={300}
                    className="w-10"
                  />
                </Link>
                <div className="flex container items-center justify-end space-x-4">
                  <MainNav className="mx-6" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-32 px-5 mx-20 gap-4">
              <h3 className="text-lg text-gray-600">{f.date}</h3>
              <h1 className="text-5xl font-bold">{f.title}</h1>
              <Separator />
            </div>
            <div className="flex mx-20 p-5">
              <div className="basis-3/12 mr-10">
                <div className="p-5 flex">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocJvGZiVAWJfX0BR5ePr0boss6NItLsGaYL8F4y5Po0Hz3w=s192-c-mo" alt="@shadcn" />
                    <AvatarFallback>Arzed</AvatarFallback>
                  </Avatar>
                  <div className="ml-2 py-4">
                    <h3>M.Irsyad Mushaddaq</h3>
                  </div>
                </div>
                <Separator />
                <button className="outline-none"></button>
              </div>
              <div className="basis-9/12 m-4">
                <h2 className="text-3xl font-medium my-8">{f.firstHeadline}</h2>
                <div className="flex flex-col ml-2 my-2 gap-4">
                  {f.firstParagraph.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="m-10">
                    <ul className="list-disc">
                      {f.list?.map((l, i) => (
                        <li className="my-1" key={i}>{l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <h2 className="text-2xl my-8">{f.secondHeadline}</h2>
                <div className="flex flex-col ml-2 my-2 gap-4">
                  {f.firstImg.map((img, i) => (
                    <Image key={i} src={img as string} alt="" width={800} height={500} />
                  ))}
                  {f.secondP.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <h3 className="text-2xl my-8">{f.thirdHeadline}</h3>
                <div className="flex flex-col ml-2 my-2 gap-4">
                  {f.secondImg.map((img, i) => (
                    <Image key={i} src={img as string} alt="IMAGE" width={800} height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"/>
                  ))}
                  {f.thirdP.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <h3 className="text-2xl my-8">{f.fourHeadline}</h3>
                <div className="flex flex-col ml-2 my-2 gap-4">
                  {f.thirdImg?.map((img, i) => (
                    <Image key={i} src={img as string} alt="IMAGE" width={800} height={500} />
                    ))}
                  {f.fourP?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <h3 className="text-2xl my-8">{f.fifthHeadline}</h3>
                <div className="flex flex-col ml-2 my-2 gap-4">
                  {f.fourImg?.map((img, i) => (
                    <Image key={i} src={img as string} alt="IMAGE" width={800} height={500} />
                    ))}
                  {f.fifthP?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <h3 className="text-2xl my-8"></h3>
                <div className="flex flex-col ml-2 my-2 gap-4">
                  {f.fifthImg?.map((img, i) => (
                    <Image key={i} src={img as string} alt="IMAGE" width={800} height={500} />
                    ))}
                  {f.sixP?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <footer className="flex w-full items-center justify-center p-5 bg-slate-300">
          <div>&copy; Copyright September 2023</div>
        </footer>
      </ScrollArea>
    </>
  );
}
