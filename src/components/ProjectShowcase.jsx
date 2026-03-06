import { ArrowUpRight, Code2 } from "lucide-react";

const ProjectShowcase = () => {
  const projects = [
    {
      name: "ccoco",
      tag: "Go / CLI",
      desc: "Change configurations on checkout.",
      url: "https://github.com/xarunoba/ccoco",
      img: "https://opengraph.githubassets.com/1/xarunoba/ccoco",
    },
    {
      name: "clai",
      tag: "JS / Utility",
      desc: "Check lockfiles and install.",
      url: "https://github.com/xarunoba/clai",
      img: "https://opengraph.githubassets.com/1/xarunoba/clai",
    },
    {
      name: "env-struct.zig",
      tag: "Zig / Lib",
      desc: "Parse env vars to typed structs in Zig.",
      url: "https://github.com/xarunoba/env-struct.zig",
      img: "https://opengraph.githubassets.com/1/xarunoba/env-struct.zig",
    },
    {
      name: "Davao Oriental State University Library",
      tag: "Vue.js / Portal",
      desc: "A handmade library portal for DOrSU.",
      url: "https://dorsulibrary.net",
      img: "/dorsu_library.png",
    },
  ];

  return (
    <section id="showcase" className="py-32 bg-dark text-primary px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="font-data text-sm text-primary/50 uppercase tracking-widest mb-16 flex items-center gap-4">
          <Code2 size={16} /> Showcase
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <article
              key={i}
              className="showcase-card group block border border-primary/20 bg-dark hover:border-accent transition-colors relative overflow-hidden"
            >
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="aspect-video bg-dark/50 border-b border-primary/20 p-2 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex items-center justify-between z-10 relative bg-dark">
                  <div>
                    <div className="font-data text-xs text-accent uppercase tracking-widest mb-2">
                      {p.tag}
                    </div>
                    <h3 className="font-heading font-bold text-2xl uppercase tracking-tighter">
                      {p.name}
                    </h3>
                    <p className="font-data text-sm text-primary/60 mt-2">
                      {p.desc}
                    </p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center border border-primary/20 group-hover:bg-accent group-hover:border-accent group-hover:text-dark transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
