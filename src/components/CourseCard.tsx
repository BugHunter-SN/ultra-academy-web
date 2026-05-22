import type { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div
      onClick={() => onClick(course)}
      className="course-card bg-white border border-gray-100 rounded-3xl overflow-hidden cursor-pointer group flex flex-col"
    >
      <div className="card-banner">
        {course.image ? (
          <img src={course.image} alt={course.title} />
        ) : (
          <div className="card-banner-icon">
            <i className={`fas ${course.icon}`} />
          </div>
        )}
      </div>
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        <span
          className={`uppercase text-[10px] tracking-widest font-mono ${
            course.category === 'it' ? 'text-blue-600' : 'text-emerald-600'
          }`}
        >
          {course.category === 'it' ? 'INFORMATION TECHNOLOGY' : 'BUSINESS'}
        </span>
        <h4 className="font-semibold text-lg sm:text-xl mt-2 mb-3 group-hover:text-orange-600 transition-colors">
          {course.title}
        </h4>
        <p className="text-gray-600 line-clamp-3 text-sm flex-1">{course.description}</p>
        <div className="mt-5 sm:mt-6 flex justify-between items-center">
          <span className="text-xs font-medium bg-gray-100 px-4 py-2 rounded-3xl">Certificate</span>
          <span className="text-orange-600 text-sm font-medium flex items-center gap-1">
            Learn more <i className="fas fa-arrow-right text-xs" />
          </span>
        </div>
      </div>
    </div>
  );
}
