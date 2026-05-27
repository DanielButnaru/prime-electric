import React from 'react';

type Props = {
  columns?: { title?: string; links: { label: string; href: string }[] }[];
};

export default function Footer({ columns = [] }: Props) {
  return (
    <footer className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-lg">PrimeElectric</div>
          <div className="text-sm text-gray-600 mt-2">Electrify your projects with confidence.</div>
        </div>

        {columns.map((col, i) => (
          <div key={`col-${i}`}>
            {col.title && <div className="font-semibold">{col.title}</div>}
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              {col.links.map((l, j) => (
                <li key={`col-${i}-link-${j}`}>
                  <a href={l.href} className="hover:underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="font-semibold">Contact</div>
          <div className="text-sm mt-2">contact@example.com</div>
        </div>
      </div>
    </footer>
  );
}
