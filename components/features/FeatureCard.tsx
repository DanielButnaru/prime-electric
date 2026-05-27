import React from 'react';
import type { Feature } from '../../types/landing';

export default function FeatureCard({ title, description, icon }: Feature) {
  return (
    <article className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-white">
      <div className="icon mb-4">
        {icon ? (
          <img src={icon} alt="" className="w-10 h-10 rounded-full" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">⚡</div>
        )}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </article>
  );
}
