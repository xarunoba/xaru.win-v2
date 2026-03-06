import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center justify-between px-6 py-3 w-[90%] max-w-4xl border border-transparent ${scrolled
          ? 'bg-background/80 backdrop-blur-md border-dark/10 shadow-lg text-dark'
          : 'bg-transparent text-primary mix-blend-difference'
          }`}
      >
        <a
          href="#"
          className="font-heading font-bold tracking-tighter text-xl cursor-pointer hover:opacity-70 transition-opacity"
        >
          xarunoba
        </a>

        <div className="hidden md:flex items-center gap-8 font-data text-sm">
          <a
            href="#profile"
            className="hover:-translate-y-[1px] transition-transform cursor-pointer"
          >
            Profile
          </a>
          <a
            href="#showcase"
            className="hover:-translate-y-[1px] transition-transform cursor-pointer"
          >
            Showcase
          </a>
          <a
            href="#philosophy"
            className="hover:-translate-y-[1px] transition-transform cursor-pointer"
          >
            Philosophy
          </a>
        </div>

        <a
          href="https://github.com/xarunoba"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden px-5 py-2 font-sans font-bold text-sm flex items-center gap-2 transition-all duration-500 hover:scale-[1.03] active:scale-95 ${scrolled
            ? 'bg-accent text-background'
            : 'bg-primary/20 text-primary backdrop-blur-sm grayscale hover:grayscale-0'
            }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            View GitHub <ArrowUpRight size={16} />
          </span>
          <div className={`absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0 ${scrolled ? 'bg-dark' : 'bg-primary/40'
            }`}></div>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
