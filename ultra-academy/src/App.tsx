import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CourseModal from './components/CourseModal';
import EnrollModal from './components/EnrollModal';
import type { Course } from './data/courses';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollOpen, setEnrollOpen] = useState(false);

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onEnroll={() => setEnrollOpen(true)} />
      <Hero
        onBrowseCourses={() => navigateTo('courses')}
        onEnroll={() => setEnrollOpen(true)}
      />
      <About />
      <Courses onCourseClick={setSelectedCourse} />
      <Testimonials />
      <Contact />
      <Footer />

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={() => setEnrollOpen(true)}
        />
      )}

      {enrollOpen && (
        <EnrollModal onClose={() => setEnrollOpen(false)} />
      )}
    </>
  );
}
