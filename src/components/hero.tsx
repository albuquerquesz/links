export const Hero = () => {
  return (
    <div className="p-2">
      <section className="w-full min-h-[600px] bg-dots p-4 relative">
        <div className="w-full h-full border-dashed-white p-4 md:p-8">

          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-primary" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-primary" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-primary" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-primary" />

          <div className="flex flex-col md:flex-row gap-8 h-full items-center md:items-stretch">
            <aside className="flex-1 flex flex-col justify-center md:justify-start text-center md:text-left z-10">
              <div className="flex flex-col space-y-2 mt-10 md:mt-20">
                <h1 className="text-5xl md:text-7xl mt-2 font-black text-primary leading-tight md:leading-18 tracking-tighter">
                  VICTOR ALBUQUERQUE
                </h1>
              </div>

              <div className="mt-8 mx-auto md:mx-0">
                <p className="text-primary font-mono max-w-sm leading-relaxed opacity-90 tracking-tight">
                  Transformando lógica complexa em sistemas resilientes. Especialista em Backend com foco em Go e TypeScript, focado em arquitetura e performance.
                </p>
              </div>
            </aside>

            <aside className="flex flex-col justify-center md:justify-start flex-1 w-full relative items-center">
              <div className="bg-white shadow-2xl p-4 rotate-2 hover:rotate-0 transition-all duration-500 w-fit mx-auto mt-8 md:mt-0">
                <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] overflow-hidden bg-gray-100">
                  <img
                    src="/foto2.jpeg"
                    alt="Victor Albuquerque"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="pt-6 pb-2 flex flex-col space-y-1">
                  <p className="text-primary font-mono text-xl font-bold">VICTOR ALBUQUERQUE</p>
                  <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">BACKEND DEVELOPER * TS * GO</p>
                </div>
              </div>

            </aside>
          </div>
        </div >
      </section>

    </div>
  )
}
