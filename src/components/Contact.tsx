import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll respond to your inquiry shortly.");
    setSubmitted(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Get In Touch</h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4">
                <i className="fas fa-map-marker-alt text-2xl sm:text-3xl text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">5th Street, Sinkor</div>
                  <div className="text-gray-600">Tubman Boulevard, Monrovia, Liberia</div>
                </div>
              </div>
              <div className="flex gap-4">
                <i className="fas fa-phone text-2xl sm:text-3xl text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">+231 77 537 9265</div>
                  <div className="text-gray-600">Mon – Sat, 8am – 5pm</div>
                </div>
              </div>
              <div className="flex gap-4">
                <i className="fas fa-envelope text-2xl sm:text-3xl text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">ultraacademy17@gmail.com</div>
                  <div className="text-gray-600">Admissions &amp; Inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl shadow">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full border rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:border-orange-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full border rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:border-orange-400"
                  required
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <label className="block text-sm mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:border-orange-400"
                required
              />
            </div>
            <div className="mt-5 sm:mt-6">
              <label className="block text-sm mb-2 font-medium">Interested Program</label>
              <select className="w-full border rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:border-orange-400">
                <option>Website Development</option>
                <option>Digital Marketing</option>
                <option>Project Management</option>
                <option>Human Resource Management</option>
                <option>Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-8 sm:mt-10 w-full py-4 sm:py-5 bg-black text-white rounded-3xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
