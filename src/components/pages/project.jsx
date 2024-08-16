import React from 'react';
import Cardproject from '../layout/cardproject';
import { RT, NS, ES } from '../../assets/icon';

const projects = [
  {
    title: "RasaTradisional",
    description: "RasaTradisional website is a platform aimed at introducing and promoting traditional food and beverages from various cities in Central Java, Indonesia.",
    image: RT,
    buttonLabel: "View",
    buttonLink: "https://github.com/GilangLiswiyanaPutra/Frontend_RasaTradisional"
  },
  {
    title: "NUSARASA",
    description: "NUSARASA is a website providing recipes and information about traditional and specialty foods from Indonesia.",
    image: NS,
    buttonLabel: "View",
    buttonLink: "https://www.figma.com/design/0n0Afj7cSzB24HUCcn1Er3/NusaRasa-Prototype?node-id=0-1&t=zFDRqB49kluosba3-1"
  },
  {
    title: "E-SIDOKARE",
    description: "E-SIDOKARE is a website used to address the complaints of the residents of Sidokare Village in Nganjuk Regency.",
    image: ES,
    buttonLabel: "View",
    buttonLink: "https://github.com/GilangLiswiyanaPutra/E_SIDOKARE"
  }
];

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
