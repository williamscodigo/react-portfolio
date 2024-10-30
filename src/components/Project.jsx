import React from 'react';

export default function Project({ title, description, link }) {
  return (
    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        className="text-blue-500 dark:text-blue-400 underline mt-2 block"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}
