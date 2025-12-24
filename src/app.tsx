import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div id="container" className="w-[1000px] h-[800px] p-8 relative bg-dots border">

      <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-primary" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-primary" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-primary" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-primary" />

      <div className="w-full h-full border-dashed-white p-8">

        {/* HERO */}
        <section className="w-full h-full">
          <div className="flex gap-8 h-full">
            <aside className="flex-1 flex flex-col justify-start">
              <div className="flex flex-col space-y-2 mt-10">
                <span className="text-primary font-mono text-sm mb-4">HUMAN NAME:</span>
                <h1 className="text-7xl font-black text-primary leading-[0.8] uppercase tracking-tighter">
                  VICTOR ALBUQUERQUE
                </h1>
              </div>

              <div className="mt-20">
                <p className="text-primary text-xl font-medium max-w-md leading-relaxed">
                  salve
                </p>
              </div>
            </aside>

            <aside className="flex flex-col border justify-start flex-1 w-full relative">
              <div className="bg-white shadow-2xl p-4 rotate-2 hover:rotate-0 transition-all duration-500 w-fit mx-auto ">
                <div className="w-[350px] h-[350px] overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    alt="Victor Albuquerque"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="pt-6 pb-2">
                  <p className="text-primary font-mono text-xl font-bold">VICTOR ALBUQUERQUE</p>
                  <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">DEVELOPER + DESIGNER 2025</p>
                </div>
              </div>

            </aside>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
