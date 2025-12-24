import "./index.css";

import { Hero } from "./components/hero.tsx"
import { SocialMedia } from "./components/social-media.tsx"
import { Footer } from "./components/footer.tsx"
import logo from "./logo.svg";
import reactLogo from "./react.svg";

const ARTICLES = [
  {
    title: "Why I Switched to Go",
    description: "An in-depth look at performance improvements and developer experience comparing Node.js vs Golang for backend services.",
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "System Design 101",
    description: "Understanding the trade-offs in distributed systems: CAP theorem, consistency patterns, and scaling strategies.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "My Linux Terminal Setup",
    description: "A tour of my dotfiles, explaining how I use Neovim, Tmux, and Zsh to maximize productivity.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop"
  }
];

export function App() {
  return (
    <div id="container" className="w-[1100px] h-full flex flex-col rounded-md border border-zinc-300 mb-10">
      <Hero />
      <SocialMedia />

      <section className=" p-8 flex flex-col space-y-12">
        {ARTICLES.map((article, index) => (
          <div key={index} className="flex gap-8 h-[250px] rounded-xl border border-dashed border-zinc-800 cursor-pointer hover:bg-zinc-50 transition-colors group">
            <img
              src={article.image}
              className="flex-[0.7] rounded-l-xl bg-zinc-800 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              alt={article.title}
            />

            <div className="flex flex-col space-y-2 flex-2 p-8 justify-center">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Article</span>
              <h2 className="text-3xl font-bold uppercase text-zinc-800 group-hover:text-primary transition-colors">{article.title}</h2>
              <p className="text-zinc-600 leading-relaxed line-clamp-3">{article.description}</p>
            </div>
          </div>

        ))}
      </section>

      <Footer />
    </div >
  );
}
