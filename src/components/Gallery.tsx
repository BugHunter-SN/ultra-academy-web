import { useState } from 'react';

const tabs = ['All', 'Events', 'Classes', 'Campus'] as const;
type Tab = typeof tabs[number];

const galleryItems: { tab: Exclude<Tab, 'All'>; image: string; caption: string }[] = [
  { tab: 'Events',  image: '/images/gallery-event-1.jpeg',  caption: 'Graduation Ceremony 2025' },
  { tab: 'Events',  image: '/images/gallery-event-2.jpeg',  caption: 'Open Day — May 2025' },
  { tab: 'Events',  image: '/images/gallery-event-3.jpeg',  caption: 'Award Night 2024' },
  { tab: 'Classes', image: '/images/gallery-class-1.jpeg',  caption: 'Web Development Lab' },
  { tab: 'Classes', image: '/images/gallery-class-2.jpeg',  caption: 'Business Communication' },
  { tab: 'Classes', image: '/images/gallery-class-3.jpeg',  caption: 'Graphic Design Workshop' },
  { tab: 'Campus',  image: '/images/gallery-campus-1.jpeg', caption: 'Main Entrance' },
  { tab: 'Campus',  image: '/images/gallery-campus-2.jpeg', caption: 'Computer Lab' },
  { tab: 'Campus',  image: '/images/gallery-campus-3.jpeg', caption: 'Library & Study Area' },
];

export default function Gallery() {
  const [active, setActive] = useState<Tab>('All');

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.tab === active);

  return (
    <section className="min-h-screen bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Life at Ultra Academy</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            A glimpse into our campus, classrooms, and community events.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === tab
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-400 hover:text-orange-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="h-52 bg-orange-50 overflow-hidden flex items-center justify-center relative">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Placeholder shown when image missing */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-orange-300">
                  <i className="fas fa-image text-4xl mb-2" />
                  <span className="text-xs text-orange-400">Image coming soon</span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-5 py-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">{item.caption}</p>
                <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-0.5 rounded-full">
                  {item.tab}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}