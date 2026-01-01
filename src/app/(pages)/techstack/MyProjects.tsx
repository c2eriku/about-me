import { ProjectCard } from './components/ProjectCard';

export default function MyProjects() {
  return (
    <div className="flex flex-wrap gap-5">
      <ProjectCard
        projectname={'ngx-currency-mask'}
        techstacks={['Angular', 'TypeScript', 'Sass', 'GitHub', 'npm']}
      ></ProjectCard>
      <ProjectCard
        projectname={'trady-fee'}
        techstacks={['Next.js', 'React', 'TypeScript', 'GitHub', 'Vercel']}
      ></ProjectCard>
    </div>
  );
}
