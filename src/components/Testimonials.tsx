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
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 md:mb-12">
          What Our Students Say
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-zinc-900 p-6 sm:p-8 rounded-3xl">
              <p className="italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex-shrink-0" />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
