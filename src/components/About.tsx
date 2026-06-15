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

  const values = [
    { icon: 'fa-star',        title: 'Excellence',  desc: 'We hold ourselves to the highest standard in everything we deliver.' },
    { icon: 'fa-hands',       title: 'Integrity',   desc: 'Honest, transparent, and accountable to our students and community.' },
    { icon: 'fa-globe-africa', title: 'Impact',     desc: 'Every program is designed to create real change in Liberia\'s economy.' },
    { icon: 'fa-heart',       title: 'Inclusion',   desc: 'Education should be accessible to everyone, regardless of background.' },
  ];

  return (
    <div>
      {/* Page banner */}
      <div className="bg-orange-600 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Ultra Academy</h1>
          <p className="text-orange-100 max-w-xl mx-auto text-sm sm:text-base">
            Liberia's premier vocational institution for Business and IT professionals — est. 2025.
          </p>
        </div>
      </div>

      {/* Main about section */}
      <section className="py-16 md:py-24 bg-gray-50">
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

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-600 text-white rounded-3xl p-8 sm:p-10">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-orange-100 leading-relaxed">
                To provide accessible, high-quality professional training that equips
                Liberians with the skills, confidence, and credentials needed to thrive
                in today's competitive workforce and drive national development.
              </p>
            </div>
            <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be Liberia's most trusted and impactful vocational institution —
                producing career-ready graduates who lead innovation, build businesses,
                and transform their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${v.icon} text-2xl text-orange-600`} />
                </div>
                <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}