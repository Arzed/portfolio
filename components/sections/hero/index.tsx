import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { HeroButtonLink } from "./heroButtonLink";

export const Hero = () => (
    <header className='flex flex-col h-screen relative'>
        <div className='m-auto px-5 text-center
        before:-z-10 before:absolute before:inset-0 gradient-dot
        after:absolute'>
            <h1 className='text-6xl sm:text-8xl text-black font-black'>I&apos;m Arzed</h1>
            <h2 className='text-4xl sm:text-6xl my-4 font-bold'>
                <span className='from-green-500 via-cyan-400 to-blue-400 bg-[length:200%] hover:bg-right transition-all duration-500 bg-gradient-to-r bg-clip-text text-transparent'>Frontend</span> <span className="whitespace-nowrap text-black">web-developer</span></h2>
            <div className="flex gap-4 justify-center mt-5">
                <HeroButtonLink
                    href="https://github.com/Arzed"
                    title="Github"
                    icon={<GitHubLogoIcon className="scale-200" />}
                />
                <HeroButtonLink
                    href="https://www.linkedin.com/in/irsyad-mushaddaq-75b92a26b/"
                    title="LinkedIn"
                    icon={<LinkedInLogoIcon className="scale-200" />}
                />
                <HeroButtonLink
                    href="mailto:me.irsadmushadaq@gmail.com"
                    title="Email"
                    icon={<EnvelopeClosedIcon className="scale-200" />}
                />
            </div>
        </div>
    </header>
)