import { useRef, useEffect } from 'react';

const testimonials = [
  {
    quote:
      'The Website Development course gave me the confidence to start my own freelancing business. Ultra Academy changed my life!',
    name: 'Fatima K. Kamara',
    detail: 'Class of 2025 • IT Graduate',
  },
  {
    quote:
      'Project Management certification helped me secure a role at a major NGO in Monrovia. Highly recommended!',
    name: 'James T. Doe',
    detail: 'Class of 2025 • Business Graduate',
  },
  {
    quote:
      'The instructors are industry experts. I learned Digital Marketing and now manage social media for local businesses.',
    name: 'Aisha M. Johnson',
    detail: 'Class of 2024',
  },
  {
    quote:
      'I enrolled in the Graphic Design programme and landed a job at a creative agency within three months of graduating.',
    name: 'Emmanuel B. Sirleaf',
    detail: 'Class of 2025 • Design Graduate',
  },
  {
    quote:
      "Ultra Academy's hands-on Networking & Cybersecurity programme prepared me for real-world challenges from day one.",
    name: 'Mariama D. Cooper',
    detail: 'Class of 2024 • IT Graduate',
  },
  {
    quote:
      'The business accounting course transformed how I manage finances. I now run my own consultancy in Monrovia.',
    name: 'Roland G. Pewee',
    detail: 'Class of 2024 • Business Graduate',
  },
];

// Duplicate for seamless loop
const items = [...testimonials, ...testimonials];

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="bg-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col flex-shrink-0"
      style={{ width: '340px' }}
    >
      <div className="text-orange-500 text-4xl leading-none font-serif mb-3">"</div>
      <p className="italic text-gray-300 text-sm sm:text-base leading-relaxed flex-1 mb-6">
        {t.quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-orange-500 rounded-full flex-shrink-0" />
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-gray-400">{t.detail}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const SPEED = 0.6; // px per frame — adjust for faster/slower

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Width of one set of 6 cards (card width 340 + gap 24) * 6
    const setWidth = (340 + 24) * testimonials.length;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Once we've scrolled one full set, snap back silently
        if (posRef.current >= setWidth) {
          posRef.current -= setWidth;
        }
        track.style.transform = `translateX(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 md:mb-14">
          What Our Students Say
        </h2>

        {/* Overflow clip */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {/* Track — all 12 cards (6 + 6 clone) in one row */}
          <div
            ref={trackRef}
            className="flex"
            style={{ gap: '24px', willChange: 'transform' }}
          >
            {items.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Subtle legend */}
        <p className="text-center text-xs text-zinc-600 mt-6">
          Hover to pause
        </p>
      </div>
    </section>
  );
}