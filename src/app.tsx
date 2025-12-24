import "./index.css";

import { Hero } from "./components/hero.tsx"
import { SocialMedia } from "./components/social-media.tsx"
import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div id="container" className="w-[1100px] h-full flex flex-col rounded-md border border-zinc-300">
      <Hero />
      <SocialMedia />

      <section className="mt-8 p-8 flex flex-col space-y-12">

        <div className="flex gap-8 h-[200px] rounded-xl border border-dashed border-zinc-800">
          <div className="flex-[0.5] rounded-l-xl bg-zinc-800 h-full w-full"></div>

          <div className="flex flex-col space-y-2 flex-2 p-8">
            <h2 className="text-2xl font-bold">SALVE</h2>

            <p>lorem ipsum.</p>
          </div>
        </div>

      </section>
    </div >


  );
}

export default App;
