import React from 'react';
import Cardskill from '../layout/cardskill';
import { skills } from '../data/skilldata';

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