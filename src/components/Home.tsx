import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WhatWeDo from './WhatWeDo';

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

const REASONS = [
  {
    num: '01',
    icon: 'fa-industry',
    title: 'Industry-Relevant Training',
    desc: 'Programs designed with employers in mind — what you learn is immediately applicable on the job.',
  },
  {
    num: '02',
    icon: 'fa-chalkboard-teacher',
    title: 'Expert Instructors',
    desc: 'Learn from seasoned professionals with real-world experience across Business and IT fields.',
  },
  {
    num: '03',
    icon: 'fa-clock',
    title: 'Flexible Schedules',
    desc: 'Morning and evening classes available so you can learn without disrupting your work life.',
  },
  {
    num: '04',
    icon: 'fa-chart-line',
    title: 'Proven Track Record',
    desc: 'Over 50 certified graduates already working across Liberia\'s private and public sectors.',
  },
  {
    num: '05',
    icon: 'fa-briefcase',
    title: 'Career Support',
    desc: 'From internship placement to CV writing and interview coaching — we support you beyond class.',
  },
  {
    num: '06',
    icon: 'fa-users',
    title: 'Community & Network',
    desc: 'Join a growing community of motivated professionals, mentors, and Ultra Academy alumni.',
  },
];

const EVENTS = [
  {
    date: 'July 7, 2026',
    title: 'New Intake Orientation',
    location: '5th Street Sinkor, Monrovia',
    icon: 'fa-calendar-check',
  },
  {
    date: 'July 14, 2026',
    title: 'IT Programs Kickoff',
    location: 'Ultra Academy Computer Lab',
    icon: 'fa-laptop-code',
  },
  {
    date: 'August 2, 2026',
    title: 'Business Track Seminar',
    location: '5th Street Sinkor, Monrovia',
    icon: 'fa-briefcase',
  },
];

const NEWS = [
  {
    tag: 'Announcement',
    title: 'Ultra Academy Opens Registration for July 2026 Intake',
    excerpt: 'Applications are now open for our next cohort across all Business and IT programs. Limited seats available.',
    date: 'June 10, 2026',
  },
  {
    tag: 'Achievement',
    title: 'Graduates Secure Roles Across Monrovia\'s Top Organizations',
    excerpt: 'Latest cohort graduates are now working at NGOs, tech firms, and government agencies across Liberia.',
    date: 'May 28, 2026',
  },
  {
    tag: 'Partnership',
    title: 'Ultra Academy Partners with Local Tech Companies for Internships',
    excerpt: 'New industry partnerships ensure students gain hands-on experience before they even graduate.',
    date: 'May 15, 2026',
  },
];

// ── Replace with your actual YouTube video ID ──
// e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ → 'dQw4w9WgXcQ'
const CEO_VIDEO_ID = 'https://www.youtube.com/watch?v=HyTYhzQWVVs '.split('v=')[1];

export default function Home({ onEnroll }: HeroProps) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => {
    setCurrent(((idx % SLIDES.length) + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Intake announcement bar ── */}
      <div className="bg-orange-600 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium">
        <span className="opacity-80">🎓 Next Intake:</span>
        &nbsp;<strong>July 2026</strong>&nbsp;·&nbsp;
        Registration open now&nbsp;·&nbsp;
        <button
          onClick={onEnroll}
          className="underline underline-offset-2 hover:text-orange-200 transition-colors font-semibold"
        >
          Apply Today →
        </button>
      </div>

      {/* ── Hero slider ── */}
      <section
        id="home"
        className="relative text-white min-h-screen flex items-center overflow-hidden"
      >
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

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300
                ${i === current ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70 w-2'}`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
          <div className="max-w-3xl">
            <div className="hero-fade hero-divider mb-6 w-fit">
              <span className="bg-green-400 w-2 h-2 rounded-full animate-pulse inline-block" />
              Monrovia, Liberia &nbsp;·&nbsp; Est. 2025
            </div>
            <h1 className="hero-fade text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Professional Skills for<br />
              <span className="hero-accent">Liberia's Future</span>
            </h1>
            <p className="hero-fade text-base sm:text-lg text-orange-300 font-semibold tracking-wide mb-5 uppercase">
              Gain · Improve · Produce
            </p>
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

      {/* ── What We Do ── */}
      <WhatWeDo />

      {/* ── Why Choose Us ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
              Why Ultra Academy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Why Choose Ultra Academy?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              We don't just offer training — we provide transformation. Here's why students
              across Liberia choose us for their professional development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {REASONS.map((r) => (
              <div
                key={r.num}
                className="group bg-white border-2 border-orange-100 rounded-3xl p-6 sm:p-8
                           hover:bg-orange-600 hover:border-orange-600
                           transition-all duration-300 cursor-default"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-black text-orange-200 group-hover:text-white/30 transition-colors leading-none">
                    {r.num}
                  </span>
                  <div className="w-11 h-11 bg-orange-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors">
                    <i className={`fas ${r.icon} text-orange-600 group-hover:text-white transition-colors`} />
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-white transition-colors">
                  {r.title}
                </h4>
                <p className="text-gray-500 group-hover:text-orange-100 text-sm leading-relaxed transition-colors">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm max-w-xl mx-auto">
            Choose Ultra Academy for a learning experience built around{' '}
            <strong className="text-gray-700">quality, flexibility, and long-term career growth.</strong>
          </p>
        </div>
      </section>

      {/* ── CEO Welcome Video ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
                A Message From Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-5">
                Welcome to<br />Ultra Academy Liberia
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Hear directly from our Director about the vision, mission, and
                commitment that drives Ultra Academy — and what it means to be part
                of Liberia's most forward-thinking professional training institution.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Our commitment to Liberia\'s workforce',
                  'What makes Ultra Academy different',
                  'A personal invitation to join us',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-white text-[10px]" />
                    </div>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  D
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mr. Caleb Jerue</div>
                  <div className="text-sm text-gray-500">Founder, and CEO, Ultra Academy Liberia</div>
                </div>
              </div>
            </div>

           {/* Right — YouTube embed */}
<div className="relative">
  <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/Am5zOEqJ0KQ?si=U2puSQ9T17FIHGLT"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full min-h-[280px]"
      style={{ border: 0 }}
    />
  </div>
  {/* Decorative blobs */}
  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-3xl -z-10" />
  <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-600/10 rounded-2xl -z-10" />
</div>

          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
                What's Coming
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-1">Upcoming Events</h2>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="text-orange-600 text-sm font-semibold hover:underline flex items-center gap-1 shrink-0"
            >
              Contact us for details <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {EVENTS.map((ev) => (
              <div
                key={ev.title}
                className="group bg-white border-2 border-gray-100 rounded-3xl p-6
                           hover:bg-orange-600 hover:border-orange-600
                           transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-orange-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                  <i className={`fas ${ev.icon} text-orange-600 group-hover:text-white transition-colors`} />
                </div>
                <div className="text-xs text-orange-600 group-hover:text-orange-200 font-semibold mb-2 transition-colors">
                  {ev.date}
                </div>
                <h4 className="font-bold text-base mb-1 text-gray-900 group-hover:text-white transition-colors">
                  {ev.title}
                </h4>
                <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-orange-100 text-xs transition-colors">
                  <i className="fas fa-map-marker-alt" />
                  {ev.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Updates ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
                Latest
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-1">News & Updates</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {NEWS.map((n) => (
              <div
                key={n.title}
                className="group bg-gray-50 border-2 border-gray-100 rounded-3xl overflow-hidden
                           hover:bg-orange-600 hover:border-orange-600
                           transition-all duration-300 cursor-default"
              >
                <div className="p-6 sm:p-7">
                  <span className="inline-block px-3 py-1 bg-orange-100 group-hover:bg-white/20 text-orange-700 group-hover:text-white text-xs font-semibold rounded-full mb-4 transition-colors">
                    {n.tag}
                  </span>
                  <h4 className="font-bold text-base mb-3 text-gray-900 group-hover:text-white transition-colors leading-snug">
                    {n.title}
                  </h4>
                  <p className="text-gray-500 group-hover:text-orange-100 text-sm leading-relaxed mb-4 transition-colors">
                    {n.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 group-hover:text-orange-200 transition-colors">
                      {n.date}
                    </span>
                    <span className="text-orange-600 group-hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors">
                      Read more <i className="fas fa-arrow-right text-[10px]" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA banner ── */}
      <section className="bg-orange-600 text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-orange-100 mb-8 text-base sm:text-lg">
            Registration for our July 2026 intake is open now. Seats are limited —
            secure your place today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onEnroll}
              className="px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-all text-base"
            >
              Apply Now <i className="fas fa-arrow-right ml-2" />
            </button>
            <button
              onClick={() => navigate('/courses')}
              className="px-8 py-4 border-2 border-white/70 font-semibold rounded-2xl hover:bg-white/10 transition-all text-base"
            >
              View Programs
            </button>
          </div>
        </div>
      </section>
    </>
  );
}