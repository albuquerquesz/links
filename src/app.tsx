import "./index.css";

import { Hero } from "./components/hero.tsx"
import { SocialMedia } from "./components/social-media.tsx"
import { LinkCard } from "./components/link-card.tsx"
import { Footer } from "./components/footer.tsx"
import logo from "./logo.svg";
import reactLogo from "./react.svg";

const links = [
  {
    type: "other",
    title: "Portfolio",
    description: "Explore my professional journey, full-stack projects, and technical expertise in backend development and system architecture.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    url: "salve",
  },
  {
    type: "article",
    title: "Why I Switched to Go",
    description: "An in-depth look at performance improvements and developer experience comparing Node.js vs Golang for backend services.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    url: "salve",
  },
  {
    type: "article",
    title: "System Design 101",
    description: "Understanding the trade-offs in distributed systems: CAP theorem, consistency patterns, and scaling strategies.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    url: "salve",
  },
  {
    type: "article",
    title: "My Linux Terminal Setup",
    description: "A tour of my dotfiles, explaining how I use Neovim, Tmux, and Zsh to maximize productivity.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop",
    url: "salve",
  }
];

export function App() {
  return (
    <div id="container" className="w-full max-w-5xl mx-auto h-full flex flex-col rounded-md border border-zinc-300 mb-10 bg-white">
      <Hero />
      <SocialMedia />
      <LinkCard links={links} />
      <Footer />
    </div >
  );
}
