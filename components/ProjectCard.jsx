'use client';

import Card from './Card';
import { PROJECTS } from '@/lib/constants';
import ProjectCardContent from './ProjectCardContent';

function ProjectCard() {
  return (
    <div className='flex flex-col gap-10 animate-slide'>
      {PROJECTS.map((project, index) => {
        return (
          <Card key={project.title}>
            <ProjectCardContent project={project} />
          </Card>
        );
      })}
    </div>
  );
}

export default ProjectCard;
