import { serve, file } from "bun";
import index from "./index.html";

const server = serve({
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    if (pathname !== "/") {
      const publicFile = file(`public${pathname}`);
      if (await publicFile.exists()) {
        return new Response(publicFile);
      }
    }

    return new Response(index, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
