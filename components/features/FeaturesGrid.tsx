import React from 'react';
import FeatureCard from './FeatureCard';
import type { Feature } from '../../types/landing';

type Props = {
  items: Feature[];
};

export default function FeaturesGrid({ items }: Props) {
  return (
    <section className="py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <FeatureCard key={it.id} {...it} />
        ))}
      </div>
    </section>
  );
}
