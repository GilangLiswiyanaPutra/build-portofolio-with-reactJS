import React from 'react';
import Cardskill from '../layout/cardskill';
import { react, js, html, css, figma, premiere, davinci } from '../../assets/icon';

  const skills = [
    {
      title: "Web Development",
      description: "Process of creating and maintaining websites, including front-end, back-end, hosting, performance, security, and UX.",
      icons: [ react, js, html, css ]
    },
    {
      title: "UI & UX Design",
      description: "UI (User Interface) is the visual design of a website, UX (User Experience) ensures it is easy to use and enjoyable.",
      icons: [ figma ]
    },
    {
      title: "Video Editing",
      description: "Video editing is the process of arranging and modifying video footage to create the final product.",
      icons: [ premiere, davinci ]
    }
  ];

const Skill = () => {
  return (
    <section className='mt-40 mb-40'>
      <div className='flex justify-center mb-32'>
        <h1 className='text-blues font-bold text-6xl'>
          Skill<span className='text-white'>set</span>
        </h1>
      </div>
      <div className='flex justify-center space-x-24'>
        {skills.map((skill, index) => (
          <Cardskill 
            key={index}
            title={skill.title}
            description={skill.description}
            icons={skill.icons}
          />
        ))}
      </div>
    </section>
  );
};

export default Skill;