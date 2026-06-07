export default function Footer() {
  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/ua-logo.jpeg" alt="Ultra Academy Logo" className="h-10 w-auto object-contain rounded" />
          </div>
          <p className="text-gray-400 text-sm">
            Building Liberia's next generation of professionals.<br />
            <span className="text-orange-400 font-medium">Gain · Improve · Produce.</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {['Admissions', 'Scholarships', 'Alumni Network', 'Blog'].map((l) => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-5">Programs</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <button onClick={() => navigateTo('courses')} className="hover:text-white">IT Programs</button>
            </li>
            <li>
              <button onClick={() => navigateTo('courses')} className="hover:text-white">Business Programs</button>
            </li>
            <li><a href="#" className="hover:text-white">Corporate Training</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold mb-5">Connect</h4>
          <div className="flex flex-col gap-4">
            <a
              href="https://web.facebook.com/profile.php?id=61576348242062"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <i className="fab fa-facebook text-xl" />
              <span className="text-xs text-gray-400">Ultra Academy Liberia</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-orange-500">
              <i className="fab fa-linkedin text-xl" />
            </a>
            <a
              href="https://wa.me/231775379265"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <i className="fab fa-whatsapp text-xl" />
              <span className="text-xs text-gray-400">+231 77 537 9265</span>
            </a>
          </div>
          <p className="mt-8 text-xs text-gray-500">
            © 2026 Ultra Academy Liberia. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
