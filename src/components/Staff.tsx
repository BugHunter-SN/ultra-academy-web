import { useState } from 'react';

const staffMembers = [
  {
    name: 'Jonah K. Jerue',
    title: 'Chief Executive Officer (CEO)',
    department: 'Executive Leadership',
    image: '/images/staff-1.jpeg',
  },
  {
   name: 'Darious N. Weh',
   title: 'Manager',
   department: 'Faculty',
   image: '/images/people/diarus-n-weh.jpg',
 },
 {
   name: 'Prince Daniel Wonder',
   title: 'Operations Manager',
   department: 'Operations',
   image: '/images/people/prince-d-wonder.jpg',
 },
 {
   name: 'John Brown',
   title: 'HR',
   department: 'Human Resource',
   image: '/images/people/taff2',
 },
  {
    name: 'Mercy T. Curley',
    title: 'Finance Manager',
    department: 'Finance',
    image: '/images/people/mercy-t-curley.jpg',
  },
  {
    name: 'Peter Brown',
    title: 'Admin',
    department: 'Faculty',
    image: '/images/people/staff3',
  },
   {
    name: 'Christian Noko Bai',
    title: 'Occupational Health Lecturer',
    department: 'Faculty',
    image: '/images/people/christian-n-bai.jpg',
  },
  {
    name: 'Prosper Alain Kpan',
    title: 'Program Director',
    department: 'Programs',
    image: '/images/people/prosper-a-kpan.jpg',
  },
   {
    name: 'Samuel E. H. Nimely',
    title: 'ICT Innovator',
    department: 'Information Technology',
    image: '/images/staff-6.jpeg',
  },
  {
    name: 'David Swen',
    title: 'Program Director',
    department: 'Faculty',
    image: '/images/staff-7.jpeg',
  },
 
  {
    name: 'Mary Z. Hunter',
    title: 'Admin Assistant',
    department: 'Staff',
    image: '/images/staff-8.jpeg',
  },
];

function StaffCard({ member }) {
  const [imageError, setImageError] = useState(false);

  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('');

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Staff portrait */}
      <div className="relative aspect-[4/5] overflow-hidden bg-orange-50">
        {!imageError ? (
          <img
            src={member.image}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200"
            role="img"
            aria-label={`Portrait placeholder for ${member.name}`}
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-600 text-3xl font-bold text-white">
              {initials}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-700 shadow-sm">
          {member.department}
        </span>
      </div>

      {/* Staff information */}
      <div className="p-5 sm:p-6">
        <h2 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-orange-600">
          {member.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {member.title}
        </p>

        <div className="mt-5 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-16" />
      </div>
    </article>
  );
}

export default function Staff() {
  return (
    <section
      className="min-h-screen bg-gray-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="staff-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:text-sm">
          </span>

          <h1
            id="staff-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Meet Our Team
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Meet the dedicated professionals, educators, and innovators
            working together to deliver quality programs, practical
            knowledge, and meaningful learning experiences.
          </p>
        </header>

        {/* Responsive team grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {staffMembers.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-14 border-t border-gray-200 pt-8 text-center sm:mt-16">
          <p className="text-sm leading-7 text-gray-500">
            Different skills. One shared commitment to excellence,
            innovation, and impact.
          </p>
        </div>
      </div>
    </section>
  );
}