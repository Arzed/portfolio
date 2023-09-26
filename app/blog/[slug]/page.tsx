"use client";
import Link from "next/link";
import Image from "next/image";
import icon from "@/app/favicon.ico";
import { MainNav } from "@/components/layout/header";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import pan from '@/public/pan-foto.jpg'
import can from '@/public/can-2.png'
import lan from '@/public/LAN.jpg'
import man from '@/public/man.jpeg'
import wan from '@/public/wan.png'
// import { BlogContent } from "@/blog";

export default function Page({ params }: { params: { slug: string } }) {
  // console.log(BlogContent)
  return (
    <>
      <ScrollArea className='h-[100vh] w-full'>
        <div className="hidden flex-col md:flex">
          <div className="fixed backdrop-blur-sm bg-slate-900/75 dark:bg-slate-100/75 z-50 top-0 left-0 right-0 py-2 border-b border-slate-700 dark:border-slate-300 shadow-sm items-center justify-between">
            <div className="flex h-16 items-center px-4">
              <Link href={"/"} className="flex gap-10 container">
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
            <h3 className="text-lg text-gray-600">September 23, 2023</h3>
            <h1 className="text-5xl font-bold">Memahami Jenis - Jenis Jaringan Pada Komputer</h1>
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
              <h2 className="text-3xl font-medium my-8">Jaringan Komputer</h2>
              <div className="flex flex-col ml-2 my-2 gap-4">
                <p>Apa itu jaringan komputer?</p>
                <p>Mungkin kalian pernah dengar istilah jaringan komputer, mari kita akan mengutip seputar tentang jaringan komputer</p>
                <p>Secara harfiah Jaringan komputer adalah kumpulan perangkat keras (komputer, router, switch, dan lainnya) dan perangkat lunak (protokol, sistem operasi jaringan, aplikasi, dan lainnya) yang bekerja sama untuk menghubungkan komputer dan perangkat elektronik lainnya dalam suatu area tertentu.</p>
                <p>Di pembahasan kali ini kita hanya akan membahas seputar jenis-jenis jaringan komputer yang terdiri dari: </p>
                <div className="m-10">
                  <ul className="list-disc">
                    <li className="my-1">PAN ( Personal Area Network )</li>
                    <li className="my-1">LAN ( Local Area Network )</li>
                    <li className="my-1">CAN ( Controller Area Network )</li>
                    <li className="my-1">MAN ( Metropolitan Area Network )</li>
                    <li className="my-1">WAN ( Wide Area Network )</li>
                  </ul>
                </div>
              </div>
              <h3 className="text-2xl my-8">PAN ( Personal Area Network )</h3>
              <div className="flex flex-col ml-2 my-2 gap-4">
                <Image src={pan} alt="IMAGE" />
                <p>Seperti namanya PAN adalah jenis jaringan komputer yang bersifat personal atau mencakup area yang sangat terbatas, biasanya hanya mencakup jarak beberapa meter hingga beberapa puluh meter. PAN digunakan untuk menghubungkan perangkat elektronik pribadi, seperti komputer, smartphone, tablet, headset Bluetooth, printer, dan perangkat lainnya yang digunakan oleh satu individu atau dalam suatu ruangan atau area kecil</p>
              </div>
              <h3 className="text-2xl my-8">LAN ( Local Area Network )</h3>
              <div className="flex flex-col ml-2 my-2 gap-4">
                <Image src={lan} alt="IMAGE" />
                <p>Local Area Network (LAN) adalah jaringan komputer yang mencakup area geografis terbatas, seperti sebuah kantor, gedung, sekolah, atau rumah. LAN dirancang untuk menghubungkan perangkat-perangkat komputer dan sumber daya bersama di dalam area yang relatif kecil</p>
              </div>
              <h3 className="text-2xl my-8">CAN ( Campus Area Network )</h3>
              <div className="flex flex-col ml-2 my-2 gap-4">
                <Image src={can} alt="IMAGE" />
                <p>Campus Area Network (CAN) adalah jenis jaringan komputer yang dirancang untuk menghubungkan berbagai bangunan atau fasilitas di suatu lokasi geografis yang terbatas akan tetapi sedikit lebih luas di bandingkan local area network ( LAN ), seperti sebuah kampus universitas, perusahaan, atau lembaga pendidikan. akan CAN tetapi lebih kecil daripada Metropolitan Area Network (MAN).</p>
              </div>
              <h3 className="text-2xl my-8">MAN ( Metropolitan Area Network )</h3>
              <div className="flex flex-col ml-2 my-2 gap-4">
                <Image src={man} alt="IMAGE" />
                <p>Metropolitan Area Network (MAN) adalah jenis jaringan komputer yang mencakup area geografis yang lebih besar daripada Local Area Network (LAN) tetapi lebih kecil daripada Wide Area Network (WAN). MAN dirancang untuk menghubungkan beberapa LAN yang terletak dalam suatu kota atau wilayah metropolitan tertentu. Ini memungkinkan organisasi dan lembaga yang memiliki beberapa lokasi atau cabang di dalam kota atau wilayah metropolitan untuk berbagi sumber daya dan informasi dengan lebih efisien.</p>
              </div>
              <h3 className="text-2xl my-8">WAN ( Wide Area Network )</h3>
              <div className="flex flex-col ml-2 my-2 gap-4">
                <Image src={wan} alt="IMAGE" />
                <p>Wide Area Network (WAN) adalah jaringan komputer yang menghubungkan komputer dan perangkat jaringan yang terletak pada lokasi geografis yang berjauhan. WAN dirancang untuk menghubungkan area yang luas, seperti kota, negara bagian, negara, atau bahkan benua yang berbeda. WAN memungkinkan organisasi atau individu untuk mengirim dan menerima data, pesan, dan informasi antar lokasi yang terpisah dengan menggunakan berbagai teknologi komunikasi, termasuk kabel, serat optik, radio gelombang mikro, satelit, dan lainnya</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex w-full items-center justify-center p-5 bg-slate-300">
          <div>&copy; Copyright September 2023</div>
        </footer>
      </ScrollArea>
    </>
  );
}
