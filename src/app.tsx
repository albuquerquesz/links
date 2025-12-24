import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div id="container" className="w-[1000px] h-screen p-4">

      {/* HERO */}
      <section className="w-full">

        <div className="flex gap-4">
          <aside className="flex-1 border-2 h-[600px]">
            <h1>VICTOR ALBUQUERQUE</h1>
          </aside>

          <aside className="flex-1 w-full h-[600px]">
            <div className="rounded-md w-full h-[300px] p-4 border border-yellow-300">
              <div className="rounded-xl h-[250px] w-full bg-green-200"></div>
            </div>
          </aside>
        </div>

      </section>

    </div>
  );
}

export default App;
