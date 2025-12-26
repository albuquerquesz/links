import "./index.css";

import { Hero } from "./components/hero.tsx"
import { SocialMedia } from "./components/social-media.tsx"
import { LinkCard } from "./components/link-card.tsx"
import { Footer } from "./components/footer.tsx"

const links = [
  {
    type: "other",
    title: "Portfolio",
    description: "Explore minha trajetória profissional, projetos full-stack e expertise técnica em desenvolvimento backend e arquitetura de sistemas.",
    image: "https://me.albuquerquesz.com.br/logo-portfolio-2.svg",
    url: "https://me.albuquerquesz.com.br",
  },
  {
    type: "article",
    title: "Meu Ambiente de Desenvolvimento",
    description: "Um tour pela minha trajetória, mostrando como construí meu ambiente atual com o objetivo de maximizar minha produtividade e bem-estar.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop",
    url: "https://albuquerquesz.medium.com/como-organizar-meu-ambiente-me-torna-um-desenvolvedor-melhor-do-que-você-ecc348b1f94e",
  },
  {
    type: "article",
    title: "Por que usar Go?",
    description: "Uma análise aprofundada sobre o hype crescente em torno do ecossistema Go, comparando-o com outras linguagens e avaliando sua experiência de desenvolvimento.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mCLuSVdlUaXce2fcvDfILw.png",
    url: "https://albuquerquesz.medium.com/por-que-usar-go-69361e39800a",
  },
  {
    type: "article",
    title: "A Epidemia do Bun",
    description: "Bun é só hype ou o futuro do runtime JavaScript? Uma comparação direta com o Node.js.",
    image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*Qisn0s5XVyC0P4GWfkHy-w.png",
    url: "",
  },
];

export function App() {
  return (
    <div id="container" className="w-full max-w-5xl mx-auto flex flex-col rounded-md border border-zinc-300 bg-white">
      <Hero />
      <SocialMedia />
      <LinkCard links={links} />
      <Footer />
    </div >
  );
}
