import LogoMarquee from "./PatnersMarquee";

const PartnersSection = ({patnersRef,isVisible}) => {
  return (
    <section
      id="partners"
      className="relative z-10 py-8 px-8 lg:px-16 bg-gray-800/60 backdrop-blur-md"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 w-28 h-28 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full animate-pulse transform -rotate-12"></div>
        <div
          className="absolute bottom-12 right-16 w-20 h-20 bg-gradient-to-r from-purple-500/15 to-orange-500/15 rounded-full animate-bounce transform rotate-45"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/4 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full animate-pulse transform rotate-90"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={patnersRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-theronked font-heading font-medium mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              PARTNERS
            </span>
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <LogoMarquee />
      </div>
    </section>
  );
};

export default PartnersSection;
