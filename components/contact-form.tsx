'use client';

import { FormEvent, useState } from 'react';

import { formSubjects } from '@/lib/site-data';

export function ContactForm() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.log('Contact form submission:', payload);
    setStatus('Thanks. Your message is captured locally for now. Replace this handler with Formspree or your preferred form service.');
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="card-base space-y-5 p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-muted">
          <span className="block font-medium text-text">Name</span>
          <input
            name="name"
            type="text"
            required
            className="input-base"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm text-muted">
          <span className="block font-medium text-text">Email</span>
          <input
            name="email"
            type="email"
            required
            className="input-base"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-muted">
        <span className="block font-medium text-text">Subject</span>
        <select name="subject" className="input-base" defaultValue={formSubjects[0]}>
          {formSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2 text-sm text-muted">
        <span className="block font-medium text-text">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="input-base min-h-[160px] resize-y"
          placeholder="Tell me what you have in mind."
        />
      </label>

      <button type="submit" className="button-primary w-full sm:w-auto">
        Submit message
      </button>

      {status ? <p className="text-sm leading-6 text-muted">{status}</p> : null}
    </form>
  );
}
