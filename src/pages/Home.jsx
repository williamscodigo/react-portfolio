import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    document.title = 'williamscodigo Portfolio';
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p>This is the home page of my portfolio. Here you can find information about me, my projects, and how to contact me.</p>
    </section>
  );
}
