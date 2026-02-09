import Button from '../ui/Button';
import AnimatedGrid from '../ui/AnimatedGrid';
import FloatingAvatars from '../ui/FloatingAvatars';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      <AnimatedGrid />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 sm:mb-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#004838] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                ⚡ Create for fast
              </span>
            </div>
          </div>

          <FloatingAvatars />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 sm:mb-6 leading-[1.1] max-w-5xl px-4">
            One tool to manage
            <br />
            contracts and{' '}
            <span className="relative inline-block">
              <span className="relative z-10">your team</span>
              <span className="absolute bottom-2 left-0 w-full h-3 sm:h-4 bg-[#E2FB6C] -z-10" />
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-9 max-w-2xl leading-relaxed px-4">
            Clause helps legal teams work faster, smarter and more efficiently, delivering the visibility
            and data-driven insights to mitigate risk and ensure compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <Button variant="secondary" size="lg" href='/start'>
              Start now
            </Button>

            <Button variant="second_ghost" size="lg" href='/demo'>
              Get a Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;