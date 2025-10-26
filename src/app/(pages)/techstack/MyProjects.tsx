import { useEffect, useState } from 'react';
import { getProjectDescription } from '@/api/githubApi';

export default function MyProjects() {
  return (
    <div>
      <Project projectname={'ngx-currency-mask'}></Project>
    </div>
  );
}

function Project({ projectname }: { projectname: string }) {
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    getProjectDescription(projectname).then((description) => {
      setDescription(description);
    });
  }, []);
  return (
    <>
      <div>{projectname}</div>
      <div>{description}</div>
    </>
  );
}
