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
    { id: 'all', label: 'All Programs' },
    { id: 'it', label: 'Information Technology' },
    { id: 'business', label: 'Business & Management' },
  ];

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Professional Certificate Programs
          </h2>
          <p className="max-w-md mx-auto text-gray-600">
            Choose from Business or IT tracks. All programs are 10–12 weeks long with flexible schedules.
          </p>
        </div>

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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} onClick={onCourseClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
