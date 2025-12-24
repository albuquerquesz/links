type LinkCardProps = {
  links: {
    type: "other" | "article",
    title: string,
    description: string,
    image: string,
    url: string
  }[]
}

export const LinkCard = ({ links }: LinkCardProps) => {
  return (
    <section className=" p-4 md:p-8 flex flex-col space-y-12">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row gap-8 h-auto md:h-[250px] rounded-xl border border-dashed border-zinc-800 cursor-pointer hover:bg-zinc-50 transition-colors group no-underline overflow-hidden"
        >
          <img
            src={link.image}
            className="w-full md:w-[320px] shrink-0 h-48 md:h-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none md:rounded-tl-xl bg-zinc-800 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            alt={link.title}
          />

          <div className="flex flex-col space-y-2 flex-2 p-6 md:p-8 justify-center">
            <span className="font-mono text-zinc-400 uppercase tracking-widest text-xs">
              {link.type === "article" ? "Article" : "Featured"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-zinc-800 group-hover:text-primary transition-colors">
              {link.title}
            </h2>
            <p className="text-zinc-600 leading-relaxed line-clamp-3 text-sm md:text-base">
              {link.description}
            </p>
          </div>
        </a>
      ))}
    </section>

  )
}
