import { useEffect } from 'react';

interface EnrollModalProps {
  onClose: () => void;
}

export default function EnrollModal({ onClose }: EnrollModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('🎉 Application received! Our admissions team will contact you within 48 hours.');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Start Your Application
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 sm:mb-5 border rounded-2xl px-5 sm:px-6 py-4 sm:py-5 focus:outline-none focus:border-orange-400"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 sm:mb-5 border rounded-2xl px-5 sm:px-6 py-4 sm:py-5 focus:outline-none focus:border-orange-400"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-6 sm:mb-8 border rounded-2xl px-5 sm:px-6 py-4 sm:py-5 focus:outline-none focus:border-orange-400"
            required
          />
          <button
            type="submit"
            className="w-full py-5 sm:py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-3xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            SUBMIT APPLICATION
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 w-full py-2 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
