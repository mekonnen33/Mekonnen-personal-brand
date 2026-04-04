'use client';

import { FormEvent, useState } from 'react';

export function NewsletterForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    console.log('Newsletter signup:', { email });
    setMessage('Subscribed locally for now. Swap this form with ConvertKit, Beehiiv, MailerLite, or your preferred provider.');
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="card-base p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          required
          className="input-base w-full"
          placeholder="Enter your email"
        />
        <button type="submit" className="button-primary whitespace-nowrap px-6">
          Subscribe
        </button>
      </div>
      {message ? <p className="mt-3 text-sm text-muted">{message}</p> : null}
    </form>
  );
}
