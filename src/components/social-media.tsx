import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <section className="h-[64px] flex">

      <div className="w-full h-full border-t-2 border-b-2 border-zinc-300 flex justify-center items-center">
        <a href="">
          <RiTwitterXFill size={32} />
        </a>
      </div>
      <div className="w-full h-full border-t-2 border-b-2 border-l-2 border-zinc-300 flex justify-center items-center">
        <a href="">
          <FaLinkedinIn size={32} />
        </a>
      </div>
      <div className="w-full h-full border-t-2  border-b-2 border-l-2 border-zinc-300 flex justify-center items-center">
        <a href="">
          <FaInstagram size={32} />
        </a>
      </div>
      <div className="w-full h-full border-t-2 border-b-2 border-l-2  border-zinc-300 flex justify-center items-center">
        <a href="">
          <FaMediumM size={32} />
        </a>
      </div>

    </section >

  )
}
