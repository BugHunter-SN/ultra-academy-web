import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onEnroll: () => void;
}

const SLIDES = [
  '/images/Hero-image-1.jpeg',
  '/images/Hero-image-2.jpeg',
  '/images/Hero-image-3.jpeg',
  '/images/Hero-image-4.jpeg',
  '/images/Hero-image-5.jpeg',
];

const INTERVAL_MS = 5000;

export default function Hero({ onEnroll }: HeroProps) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(((idx % SLIDES.length) + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const step = useCallback((dir: number) => {
    goTo(current + dir);
  }, [current, goTo]);

  /* Auto-advance */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background slides (crossfade) ── */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              background: `linear-gradient(rgba(0,0,0,0.72),rgba(0,0,0,0.72)),
                           url('${src}') center/cover no-repeat`,
            }}
            aria-hidden={i !== current}
          />
        ))}
      </div>

      {/* ── Prev arrow ── */}
      <button
        onClick={() => step(-1)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 sm:w-11 sm:h-11 rounded-full
                   bg-white/20 hover:bg-white/40 active:scale-95
                   backdrop-blur-sm flex items-center justify-center
                   transition-all duration-200"
      >
        <i className="fas fa-chevron-left text-white text-xs sm:text-sm" />
      </button>

      {/* ── Next arrow ── */}
      <button
        onClick={() => step(1)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 sm:w-11 sm:h-11 rounded-full
                   bg-white/20 hover:bg-white/40 active:scale-95
                   backdrop-blur-sm flex items-center justify-center
                   transition-all duration-200"
      >
        <i className="fas fa-chevron-right text-white text-xs sm:text-sm" />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300
              ${i === current
                ? 'bg-white w-6'
                : 'bg-white/40 hover:bg-white/70 w-2'
              }`}
          />
        ))}
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="max-w-3xl">

          {/* Location pill */}
          <div className="hero-fade hero-divider mb-6 w-fit">
            <span className="bg-green-400 w-2 h-2 rounded-full animate-pulse inline-block" />
            Monrovia, Liberia &nbsp;·&nbsp; Est. 2025
          </div>

          {/* Headline */}
          <h1 className="hero-fade text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Professional Skills for<br />
            <span className="hero-accent">Liberia's Future</span>
          </h1>

          {/* Sub-tagline */}
          <p className="hero-fade text-base sm:text-lg text-orange-300 font-semibold tracking-wide mb-5 uppercase">
            Gain · Improve · Produce
          </p>

          {/* Body copy */}
          <p className="hero-fade text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed max-w-2xl">
            Industry-recognized certificate programs in{' '}
            <strong className="text-white">Business</strong> and{' '}
            <strong className="text-white">Information Technology</strong> —
            hands-on training, expert instructors, and career-ready graduates.
          </p>

          {/* Secondary line */}
          <p className="hero-fade text-sm sm:text-base text-gray-400 mb-10 max-w-xl">
            Unlock your potential with Ultra Academy's professional development
            training programs — built for Liberia's growing economy.
          </p>

          {/* CTAs */}
          <div className="hero-fade flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
            <button
              onClick={() => navigate('/courses')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600
                         font-semibold rounded-2xl hover:bg-orange-50
                         flex items-center gap-3 text-base sm:text-lg transition-all"
            >
              Browse Courses <i className="fas fa-arrow-right" />
            </button>
            <button
              onClick={onEnroll}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/70
                         font-semibold rounded-2xl hover:bg-white/10
                         hover:border-white flex items-center gap-3
                         text-base sm:text-lg transition-all"
            >
              <i className="fas fa-graduation-cap" /> Start Your Journey
            </button>
          </div>

          {/* Stats */}
          <div className="hero-fade grid grid-cols-3 gap-3 sm:gap-5 max-w-lg">
            {[
              { value: '50+', label: 'Certified Graduates' },
              { value: '12+', label: 'Professional Programs' },
              { value: '98%', label: 'Employment Rate' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="text-2xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}