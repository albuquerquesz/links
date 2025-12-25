export const MeCard = () => {
  return (
    <div className="bg-white shadow-2xl p-4 rotate-2 hover:rotate-0 transition-all duration-500 w-fit mx-auto mt-4 md:mt-0">
      <div className="w-[280px] h-[280px] md:w-[350px] md:mb-2 md:h-[350px] overflow-hidden bg-gray-100">
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
  )
}
