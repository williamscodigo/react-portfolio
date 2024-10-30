import React from 'react';
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="space-y-4">
        <Project title="Project 1" description="A description of Project 1" link="#" />
        <Project title="Project 2" description="A description of Project 2" link="#" />
        <Project title="Project 3" description="A description of Project 3" link="#" />
      </div>
    </section>
  );
}
