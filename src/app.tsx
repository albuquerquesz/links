import "./index.css";

import { Hero } from "./components/hero.tsx"
import { SocialMedia } from "./components/social-media.tsx"
import { Footer } from "./components/footer.tsx"
import logo from "./logo.svg";
import reactLogo from "./react.svg";

const PROJECTS = [
  {
    title: "Task Manager API",
    description: "A robust REST API built with Node.js and PostgreSQL, featuring JWT authentication and automated documentation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Go Microservices",
    description: "Distributed system architecture using gRPC and Go, implementing event-driven patterns with RabbitMQ.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Real-time Dashboard",
    description: "Live data visualization with WebSockets and React, providing instant insights into system performance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  }
];

export function App() {
  return (
    <div id="container" className="w-[1100px] h-full flex flex-col rounded-md border border-zinc-300">
      <Hero />
      <SocialMedia />

      <section className=" p-8 flex flex-col space-y-12">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex gap-8 h-[250px] rounded-xl border border-dashed border-zinc-800">
            <img
              src={project.image}
              className="flex-[0.7] rounded-l-xl bg-zinc-800 h-full w-full object-cover"
              alt={project.title}
            />

            <div className="flex flex-col space-y-2 flex-2 p-8">
              <h2 className="text-4xl font-bold uppercase">{project.title}</h2>
              <p className="text-zinc-600 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div >
  );
}
