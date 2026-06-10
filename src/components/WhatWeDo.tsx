import { useEffect, useRef, useState } from 'react';

const PILLARS = [
  {
    icon: 'fa-users',
    title: 'Inclusive Learning',
    desc: 'Open to all backgrounds — no one is left behind',
  },
  {
    icon: 'fa-seedling',
    title: 'Talent Development',
    desc: 'Hands-on training that builds real, employable skills',
  },
  {
    icon: 'fa-briefcase',
    title: 'Career Empowerment',
    desc: 'Internships, placement support, and industry networks',
  },
];

const STATS = [
  { target: 50,  suffix: '+', label: 'Alumni'         },
  { target: 10,  suffix: '+', label: 'Expert Trainers' },
  { target: 14,  suffix: '',  label: 'Programs'        },
];

/* ── Animated counter hook ── */
function useCounter(target: number, suffix: string, triggered: boolean) {
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!triggered) return;
    let current = 0;
    const step  = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplay(`${current}${suffix}`);
    }, 25);
    return () => clearInterval(timer);
  }, [triggered, target, suffix]);

  return display;
}

/* Individual stat counter */
function StatCounter({
  target,
  suffix,
  label,
  triggered,
}: {
  target: number;
  suffix: string;
  label: string;
  triggered: boolean;
}) {
  const value = useCounter(target, suffix, triggered);
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-black text-orange-600">{value}</div>
      <div className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{label}</div>
    </div>
  );
}

export default function WhatWeDo() {
  const statsRef  = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  /* Trigger counters when stats row scrolls into view */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold tracking-wide mb-4">
            SKILLS FOR THE FUTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What We Do</h2>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT — image with floating badges */}
          <div className="relative">

            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/certification-sample.jpeg"
                alt="Ultra Academy students learning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating orange badge — bottom-left */}
            <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-orange-600 text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold">EST.</div>
              <div className="text-3xl sm:text-4xl font-black leading-none">2025</div>
            </div>

            {/* Floating white card — top-right */}
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-graduation-cap text-orange-600 text-lg" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm leading-tight">Career-Ready</div>
                <div className="text-xs text-gray-500">Graduates</div>
              </div>
            </div>

          </div>

          {/* RIGHT — text content */}
          <div>

            {/* Label + heading */}
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Ultra Academy Liberia
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-snug">
              Empowering the Next Generation
              <br className="hidden sm:block" /> of Liberian Professionals
            </h3>

            {/* Body */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              At Ultra Academy, we foster an inclusive and dynamic learning environment
              that nurtures talent, promotes personal and professional development, and
              equips individuals with essential skills and confidence to thrive in a
              competitive world.
            </p>

            {/* Three pillars */}
            <div className="space-y-3 mb-10">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors group cursor-default"
                >
                  <div className="w-11 h-11 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className={`fas ${p.icon} text-white text-base`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{p.title}</div>
                    <div className="text-sm text-gray-500">{p.desc}</div>
                  </div>
                  <i className="fas fa-arrow-right text-orange-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Stats row — animated counters */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={i === 1 ? 'border-x border-gray-100' : ''}
                >
                  <StatCounter
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                    triggered={triggered}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}