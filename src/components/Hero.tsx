import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onEnroll: () => void;
}

export default function Hero({ onEnroll }: HeroProps) {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-bg text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
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

          <p className="hero-fade text-sm sm:text-base text-gray-400 mb-10 max-w-xl">
            Unlock your potential with Ultra Academy's professional development
            training programs — built for Liberia's growing economy.
          </p>

          {/* CTAs */}
          <div className="hero-fade flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
            <button
              onClick={() => navigate('/courses')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 font-semibold rounded-2xl hover:bg-orange-50 flex items-center gap-3 text-base sm:text-lg transition-all"
            >
              Browse Courses <i className="fas fa-arrow-right" />
            </button>
            <button
              onClick={onEnroll}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/70 font-semibold rounded-2xl hover:bg-white/10 hover:border-white flex items-center gap-3 text-base sm:text-lg transition-all"
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
                <div className="text-2xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-300 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}