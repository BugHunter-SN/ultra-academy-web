import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Staff from './components/Staff';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CourseModal from './components/CourseModal';
import EnrollModal from './components/EnrollModal';
import type { Course } from './data/courses';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollOpen, setEnrollOpen] = useState(false);

  return (
    <>
      <Navbar onEnroll={() => setEnrollOpen(true)} />

      <Routes>
        <Route path="/"             element={<Hero onEnroll={() => setEnrollOpen(true)} />} />
        <Route path="/about"        element={<About />} />
        <Route path="/staff"        element={<Staff />} />
        <Route path="/courses"      element={<Courses onCourseClick={setSelectedCourse} />} />
        <Route path="/gallery"      element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>

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