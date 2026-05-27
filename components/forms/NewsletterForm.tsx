"use client";
import React from 'react';

type Props = {
  onSubmit?: (email: string) => Promise<void> | void;
};

export default function NewsletterForm({ onSubmit }: Props) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      if (onSubmit) await onSubmit(email);
      // simulate
      await new Promise((r) => setTimeout(r, 500));
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-center">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="w-full sm:w-auto flex-1 px-3 py-2 border rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        {status === 'loading' ? 'Sending...' : 'Subscribe'}
      </button>

      <div className="mt-2 sm:mt-0">
        {status === 'success' && <span className="text-sm text-green-600">Thanks!</span>}
        {status === 'error' && <span className="text-sm text-red-600">Error</span>}
      </div>
    </form>
  );
}
