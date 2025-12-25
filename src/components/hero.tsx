import { MeCard } from "./me-card.tsx"

export const Hero = () => {
  return (
    <div className="p-2">
      <section className="w-full min-h-[600px] bg-dots p-4 relative">
        <div className="w-full h-full border-dashed-white p-4 md:p-8">

          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-primary" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-primary" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-primary" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-primary" />

          <div className="flex flex-col md:flex-row md:gap-4 gap-4 h-full items-center md:items-stretch">
            <aside className="flex-1 flex flex-col justify-start text-center md:text-left z-10">
              <div className="flex flex-col md:space-y-1 space-y-2 mt-4 md:mt-20">
                <h1 className="text-5xl md:text-7xl mt-2 font-black text-primary leading-tight md:leading-18 tracking-tighter">
                  VICTOR ALBUQUERQUE
                </h1>
              </div>

              <div className="mt-4 mx-auto md:mx-0">
                <p className="text-primary font-mono max-w-sm leading-relaxed opacity-90 tracking-tight">
                  Transformando lógica complexa em sistemas resilientes. Especialista em Backend com foco em <strong>Go</strong> e <strong>TypeScript</strong>, focado em arquitetura e performance.
                </p>
              </div>
            </aside>

            <aside className="flex flex-col justify-center md:justify-start flex-1 w-full relative items-center">
              <MeCard />
            </aside>
          </div>
        </div >
      </section>

    </div>
  )
}
