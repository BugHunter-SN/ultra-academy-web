export default function About() {
  const features = [
    {
      icon: 'fa-chalkboard-teacher',
      title: 'Expert Faculty',
      desc: 'Instructors with real-world industry experience',
    },
    {
      icon: 'fa-laptop-code',
      title: 'Hands-on Learning',
      desc: 'Modern labs and project-based curriculum',
    },
    {
      icon: 'fa-briefcase',
      title: 'Career Support',
      desc: 'Internships and job placement assistance',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              EST. 2025
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Empowering Liberian Professionals
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Ultra Academy Liberia is a premier vocational institution dedicated to bridging
              the skills gap in Liberia's growing economy. We provide practical,
              industry-aligned training in Business and IT.
            </p>
            <div className="space-y-6 sm:space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-5">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${f.icon} text-2xl text-orange-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">{f.title}</h4>
                    <p className="text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="bg-white p-5 sm:p-8 rounded-3xl shadow-xl">
            <img
              src="/images/certification-sample.jpeg"
              alt="Ultra Academy Campus"
              className="rounded-2xl w-full h-auto object-cover shadow-md"
            />
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-6 text-center">
              <div className="border-r">
                <div className="text-3xl font-bold text-orange-600">6</div>
                <div className="text-sm uppercase tracking-widest">Months Avg Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm uppercase tracking-widest">Learning Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
