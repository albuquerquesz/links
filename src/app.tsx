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
    description: "Explore minha trajetória profissional, projetos full-stack e expertise técnica em desenvolvimento backend e arquitetura de sistemas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    url: "salve",
  },
  {
    type: "article",
    title: "Por que mudei para Go",
    description: "Uma análise profunda sobre melhorias de performance e experiência de desenvolvimento comparando Node.js vs Golang para serviços backend.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    url: "salve",
  },
  {
    type: "article",
    title: "System Design 101",
    description: "Entendendo os trade-offs em sistemas distribuídos: teorema CAP, padrões de consistência e estratégias de escalabilidade.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    url: "salve",
  },
  {
    type: "article",
    title: "Meu Setup de Terminal Linux",
    description: "Um tour pelos meus dotfiles, explicando como utilizo Neovim, Tmux e Fish para maximizar minha produtividade.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop",
    url: "salve",
  }
];

export function App() {
  return (
    <div id="container" className="w-full max-w-5xl mx-auto h-full flex flex-col rounded-md border border-zinc-300 mt-10 mb-10 bg-white">
      <Hero />
      <SocialMedia />
      <LinkCard links={links} />
      <Footer />
    </div >
  );
}
