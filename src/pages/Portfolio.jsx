import projects from '../data/projects';
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">My Projects</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}
