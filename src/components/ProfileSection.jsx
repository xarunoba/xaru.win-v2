import { User } from "lucide-react";
import PHClock from "./PHClock";

const ProfileSection = () => {
  const techStack = [
    "Go (Golang)",
    "Zig",
    "TypeScript",
    "JavaScript",
    "Vue.js",
    "Nuxt",
    "React.js",
    "Next.js",
    "Node.js",
    "Bun",
    "Electron",
    "Tailwind CSS",
    "Docker",
    "Git",
  ];

  return (
    <section id="profile" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Individual Details & Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-32">
        <aside className="md:col-span-4 font-data text-sm text-dark/50 uppercase tracking-widest flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <User size={16} /> Profile
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-dark/20 px-4 py-2 font-data text-xs uppercase text-dark bg-dark/5 flex items-center justify-between">
              <span>Location:</span>
              <span>Philippines</span>
            </div>
            <div className="border border-dark/20 px-4 py-2 font-data text-xs uppercase text-dark bg-dark/5 flex items-center justify-between">
              <span>Time:</span>
              <PHClock />
            </div>
            <div className="border border-dark/20 px-4 py-2 font-data text-xs uppercase text-dark bg-dark/5 flex items-center justify-between">
              <span>Focus:</span>
              <span>Developer Tooling & DevOps</span>
            </div>
          </div>
        </aside>

        <div className="md:col-span-8">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 tracking-tight uppercase">
            Jude.
          </h2>
          <p className="font-data text-lg text-dark/80 leading-relaxed mb-12 max-w-2xl">
            A programming enthusiast hailing from the Philippines. When I'm not
            busy with life, you can find me tinkering with open-source software
            or developing projects for the community.
          </p>

          {/* Tech Stack Grid */}
          <div>
            <div className="font-data text-xs text-dark/40 uppercase tracking-widest mb-4">
              Core Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-dark/10 bg-white px-3 py-1 font-data text-xs text-dark/70 hover:border-accent hover:text-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
