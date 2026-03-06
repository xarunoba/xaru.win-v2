import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = ({ heroRef, heroTextRef }) => {
  return (
    <section
      ref={heroRef}
      className="relative h-svh w-full flex flex-col justify-end p-8 md:p-16 overflow-hidden"
    >
      {/* Background - Industrial / Concrete Theme */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 grayscale will-change-transform"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=1600&auto=format&fit=crop")',
          transform: 'translateZ(0)'
        }}
      ></div>
      {/* Heavy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent z-10"></div>

      <div className="relative z-20 w-full max-w-5xl mx-auto" ref={heroTextRef}>
        <div className="hero-text-part font-data text-accent tracking-widest uppercase mb-6 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-accent"></span>
          Software Engineer
        </div>

        <h1 className="hero-text-part font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-primary tracking-tighter leading-[0.9] mb-2 uppercase">
          Learning and
        </h1>
        <p className="hero-text-part font-drama italic text-7xl md:text-9xl lg:text-[10rem] text-primary tracking-tight leading-[0.8] mb-12">
          Building.
        </p>

        <div className="hero-cta">
          <a
            href="https://github.com/xarunoba"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex overflow-hidden bg-accent text-primary px-8 py-4 font-sans font-bold text-lg transition-transform duration-300 hover:scale-[1.03]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Access Repositories <ArrowUpRight size={20} />
            </span>
            <div className="absolute inset-0 bg-white text-dark w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
