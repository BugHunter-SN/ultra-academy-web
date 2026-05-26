const staffMembers = [
  {
    name: 'Dr. Emmanuel Kollie',
    title: 'Director & Lead Instructor',
    department: 'Administration',
    image: '/images/staff-1.jpeg',
  },
  {
    name: 'Mariama Sheriff',
    title: 'IT Programme Coordinator',
    department: 'Information Technology',
    image: '/images/staff-2.jpeg',
  },
  {
    name: 'James Pewee',
    title: 'Business Studies Instructor',
    department: 'Business',
    image: '/images/staff-3.jpeg',
  },
  {
    name: 'Fatima Kamara',
    title: 'Web Development Instructor',
    department: 'Information Technology',
    image: '/images/staff-4.jpeg',
  },
  {
    name: 'Roland Tarpeh',
    title: 'Graphic Design Instructor',
    department: 'Information Technology',
    image: '/images/staff-5.jpeg',
  },
  {
    name: 'Aisha Cooper',
    title: 'Accounting Instructor',
    department: 'Business',
    image: '/images/staff-6.jpeg',
  },
];

export default function Staff() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Our People</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Meet the Team</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Our instructors are industry professionals dedicated to equipping
            Liberia's next generation with real-world skills.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {staffMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <div className="h-56 bg-orange-50 flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Fallback avatar shown when no image */}
                <div className="absolute w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                  {member.department}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}