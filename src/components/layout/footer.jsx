import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialPlatforms, contactPerson, handleFooter, descriptionFooter } from '../data/footerdata';

const Footer = () => {

  return (
    <footer className="bg-darks text-white py-12 border-t-2 border-ash">
      <div className="container mx-auto flex flex-col xs:flex-col sm:flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4">
            {descriptionFooter.desc1}
          </h2>
          <p className="text-white max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
            {descriptionFooter.desc2}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6 cursor-pointer">
            {socialPlatforms.map((platform, index) => (
              <div 
                key={index} 
                onClick={() => handleFooter(platform.name)} 
                className="text-white hover:text-blues">
                <FontAwesomeIcon 
                icon={platform.icon} 
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl"/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col xs:flex-row sm:flex-row space-y-4 xs:space-y-0 xs:space-x-6 cursor-pointer">
          {contactPerson.map((platform, index) => (
            <div 
              key={index}
              className="bg-darks p-2 md:p-4 rounded-xl shadow-lg border-ash border-2 hover:bg-ash transition-colors duration-300">
              <div
                onClick={() => handleFooter(platform.name)} 
                className="text-white flex items-center justify-center space-x-2">
                <FontAwesomeIcon 
                icon={platform.icon} 
                className="text-lg xs:text-xl sm:text-2xl"/>
                <span className="text-sm xs:text-base sm:text-lg">{platform.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
