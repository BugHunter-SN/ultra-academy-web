import { useEffect } from 'react';
import type { Course } from '../data/courses';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: () => void;
}

export default function CourseModal({ course, onClose, onEnroll }: CourseModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="px-4 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                {course.category === 'it' ? 'IT SKILLS' : 'BUSINESS'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-4">{course.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-4xl leading-none text-gray-400 hover:text-black flex-shrink-0"
            >
              ×
            </button>
          </div>

          <div className="mt-6 sm:mt-8 text-gray-600 leading-relaxed">
            <p>{course.description}</p>
            <ul className="list-disc pl-5 mt-6 space-y-2 text-sm">
              <li>Duration: 3–6 months (part-time available)</li>
              <li>Weekly classes: 2 sessions</li>
              <li>Final capstone project</li>
              <li>Internship opportunities</li>
              <li>Industry-recognized certificate</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-6 my-8 sm:my-10 text-center">
            {[
              { value: '12', label: 'Weeks' },
              { value: '3x', label: 'Per Week' },
              { value: '$80', label: 'Tuition' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-orange-600 font-mono text-2xl font-bold">{s.value}</div>
                <div className="text-xs uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => { onClose(); setTimeout(onEnroll, 300); }}
            className="w-full py-5 sm:py-6 bg-orange-600 text-white rounded-3xl font-semibold text-lg hover:bg-orange-700 transition-colors"
          >
            Enroll in this Course
          </button>
        </div>
      </div>
    </div>
  );
}
