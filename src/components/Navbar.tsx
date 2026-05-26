import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onEnroll: () => void;
}

export default function Navbar({ onEnroll }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home',         path: '/' },
    { label: 'About',        path: '/about' },
    { label: 'Courses',      path: '/courses' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact',      path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/ua-logo.jpeg"
            alt="Ultra Academy Logo"
            className="h-7 sm:h-8 w-auto rounded object-contain"
          />
          <div>
            <span className="text-sm sm:text-base font-bold tracking-tight">Ultra Academy</span>
            <span className="text-[10px] block -mt-0.5 text-orange-600 font-medium">LIBERIA</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onEnroll}
            className="orange-button text-white font-semibold rounded-full flex items-center justify-center gap-2 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap shrink-0"
          >
            <i className="fas fa-graduation-cap" />
            <span>Enroll Now</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-xl p-1"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-6 flex flex-col gap-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-left hover:text-orange-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => { onEnroll(); setMobileOpen(false); }}
              className="mt-2 w-full py-3 bg-orange-600 text-white rounded-2xl font-semibold"
            >
              Enroll Today
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}