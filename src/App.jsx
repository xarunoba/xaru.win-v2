import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileSection from "./components/ProfileSection";
import ProjectShowcase from "./components/ProjectShowcase";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const philosophyRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animation
      const heroTl = gsap.timeline();
      heroTl
        .from(".hero-text-part", {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        })
        .from(
          ".hero-cta",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        );

      // Showcase Scroll Animation
      gsap.from(".showcase-card", {
        scrollTrigger: {
          trigger: "#showcase",
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 3. Philosophy Section Animation
      gsap.from(".phil-text-1", {
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".phil-text-2", {
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: "top 40%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero heroRef={heroRef} heroTextRef={heroTextRef} />
        <ProfileSection />
        <ProjectShowcase />
        <Philosophy philosophyRef={philosophyRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
