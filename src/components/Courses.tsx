import { useState } from 'react';
import { courses } from '../data/courses';
import type { Course } from '../data/courses';
import CourseCard from './CourseCard';

interface CoursesProps {
  onCourseClick: (course: Course) => void;
}

type CategoryTab = 'all' | 'it' | 'business';

export default function Courses({ onCourseClick }: CoursesProps) {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');

  const filtered = activeTab === 'all' ? courses : courses.filter((c) => c.category === activeTab);

  const tabs: { id: CategoryTab; label: string }[] = [
    { id: 'all',      label: 'All Programs' },
    { id: 'it',       label: 'Information Technology' },
    { id: 'business', label: 'Business & Management' },
  ];

  return (
    <div>
      {/* Page banner */}
      <div className="bg-orange-600 text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional Certificate Programs
          </h1>
          <p className="text-orange-100 max-w-xl mx-auto text-sm sm:text-base">
            Industry-aligned programs in Business and IT — 10 to 12 weeks,
            flexible schedules, career-ready outcomes.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Tabs */}
          <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-1">
            <div className="inline-flex bg-gray-100 rounded-3xl p-1 whitespace-nowrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button px-5 sm:px-8 py-2.5 sm:py-3 rounded-3xl font-medium text-sm sm:text-base transition-all ${
                    activeTab === tab.id ? 'active' : ''
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="text-center text-sm text-gray-400 mb-8">
            Showing <span className="font-semibold text-gray-700">{filtered.length}</span> programs
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} onClick={onCourseClick} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}