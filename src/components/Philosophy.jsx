const Philosophy = ({ philosophyRef }) => {
  return (
    <section
      id="philosophy"
      ref={philosophyRef}
      className="relative bg-background text-dark py-40 px-6 md:px-12 overflow-hidden flex items-center border-t border-dark/5"
    >
      {/* Parallax Texture */}
      <div
        className="absolute inset-0 opacity-[0.10] bg-cover bg-center grayscale mix-blend-multiply will-change-transform"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1600&auto=format&fit=crop")',
          transform: 'translateZ(0)'
        }}
        data-speed="0.5"
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <h2 className="phil-text-1 font-drama italic text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
          I build experiences that <br />
          <span className="text-accent underline decoration-4 underline-offset-8">people actually want to use.</span>
        </h2>
        <div className="phil-text-2 mt-12 max-w-2xl">
          <p className="font-data text-sm text-dark/50 uppercase tracking-widest leading-relaxed">
            There's something magical about turning a blank file into a fully functional application that solves real problems. Whether it's crafting responsive interfaces that work seamlessly across devices or architecting backends that scale, I'm driven by the challenge of making complex technology feel simple and intuitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
