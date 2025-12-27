import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const SocialMedia = () => {
  return (
    <section className="h-16 md:h-20 flex border-r-2 border-zinc-300">
      <div className="w-full h-full border-t-2 border-b-2 border-zinc-300 flex justify-center items-center hover:bg-zinc-50 transition-colors group">
        <a href="https://x.com/byalbuquerquesz" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
          <RiTwitterXFill className="size-6 md:size-8 group-hover:scale-110 transition-transform" />
        </a>
      </div>
      <div className="w-full h-full border-t-2 border-b-2 border-l-2 border-zinc-300 flex justify-center items-center hover:bg-zinc-50 transition-colors group">
        <a href="https://linkedin.com/in/albuquerquesz" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
          <FaLinkedinIn className="size-6 md:size-8 group-hover:scale-110 transition-transform" />
        </a>
      </div>
      <div className="w-full h-full border-t-2 border-b-2 border-l-2 border-zinc-300 flex justify-center items-center hover:bg-zinc-50 transition-colors group">
        <a href="https://github.com/albuquerquesz" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
          <FiGithub className="size-6 md:size-8 group-hover:scale-110 transition-transform" />
        </a>
      </div>
      <div className="w-full h-full border-t-2 border-b-2 border-l-2 border-zinc-300 flex justify-center items-center hover:bg-zinc-50 transition-colors group">
        <a href="https://medium.com/@albuquerquesz" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
          <FaMediumM className="size-6 md:size-8 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  )
}
