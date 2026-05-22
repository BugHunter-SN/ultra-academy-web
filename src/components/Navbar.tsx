import { useState } from 'react';

interface NavbarProps {
  onEnroll: () => void;
}

export default function Navbar({ onEnroll }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Staff', id: 'staff' },
    { label: 'Courses', id: 'courses' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/ua-ogo.jpeg"
            alt="Ultra Academy Logo"
            className="h-7 sm:h-8 w-auto rounded object-contain"
          />
          <div>
            <span className="text-sm sm:text-base font-bold tracking-tight">
              Ultra Academy
            </span>
            <span className="text-[10px] block -mt-0.5 text-orange-600 font-medium">LIBERIA</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="nav-link text-gray-700 hover:text-orange-600"
            >
              {item.label}
            </button>
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
              <button
                key={item.id}
                onClick={() => { navigateTo(item.id); setMobileOpen(false); }}
                className="text-left hover:text-orange-600"
              >
                {item.label}
              </button>
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