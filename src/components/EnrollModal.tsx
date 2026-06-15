import { useEffect, useRef } from 'react';
import { courses } from '../data/courses';

interface EnrollModalProps {
  onClose: () => void;
}

// ── Replace these entry IDs with your actual Google Form entry IDs ──
const FORM_BASE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfLI5sKtXu1VNc3y9YuKuReqIFn6XaRk35rqyyYP8gDRmUY7w/viewform';
const ENTRY = {
  name:    'entry.000000001',   // replace with your real entry ID
  email:   'entry.000000002',   // replace with your real entry ID
  phone:   'entry.000000003',   // replace with your real entry ID
  program: 'entry.000000004',   // replace with your real entry ID
};

export default function EnrollModal({ onClose }: EnrollModalProps) {
  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const phoneRef   = useRef<HTMLInputElement>(null);
  const programRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name    = nameRef.current?.value    || '';
    const email   = emailRef.current?.value   || '';
    const phone   = phoneRef.current?.value   || '';
    const program = programRef.current?.value || '';

    // Build prefilled Google Form URL
    const params = new URLSearchParams({
      [ENTRY.name]:    name,
      [ENTRY.email]:   email,
      [ENTRY.phone]:   phone,
      [ENTRY.program]: program,
      usp: 'pp_url',
    });

    const formUrl = `${FORM_BASE_URL}?${params.toString()}`;

    // Open the form in a new tab with fields pre-filled
    window.open(formUrl, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-graduation-cap text-2xl text-orange-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">Start Your Application</h3>
          <p className="text-gray-500 text-sm mt-1">
            You'll be redirected to our registration form to complete your application.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-400 text-sm"
            required
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-400 text-sm"
            required
          />
          <input
            ref={phoneRef}
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-400 text-sm"
            required
          />

          <button
            type="submit"
            className="w-full py-4 sm:py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-3xl font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
          >
            Continue to Application <i className="fas fa-arrow-right" />
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-gray-400 w-full py-2 hover:text-gray-600 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}