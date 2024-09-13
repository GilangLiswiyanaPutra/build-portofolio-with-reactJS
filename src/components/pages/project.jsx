import React from 'react';
import Cardproject from '../layout/cardproject';
import { projects } from '../data/projectdata';

const Project = () => {
  return (
    <section className='flex flex-col justify-center items-center font-bold'>
      <h1 className='text-white text-6xl mb-32'>
        Showcase <span className='text-blues'>Project</span>
      </h1>
      <div className='flex flex-col gap-1'>
        {projects.map((project, index) => (
          <Cardproject 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            buttonLabel={project.buttonLabel}
            buttonLink={project.buttonLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;
