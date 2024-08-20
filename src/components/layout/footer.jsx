import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  
  const handleFooter = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const openLinkedin = () => handleFooter("https://www.linkedin.com/in/gilang-liswiyana-putra/");
  const openInstagram = () => handleFooter("https://www.instagram.com/palswyn/");
  const openGithub = () => handleFooter("https://github.com/GilangLiswiyanaPutra/");
  const openFacebook = () => handleFooter("https://www.facebook.com/gilanglp05/");
  const openWhatsapp = () => handleFooter("https://wa.me/081908647586");
  const openMail = () => handleFooter("mailto:gilanglputra5@gmail.com");
      
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-md">
            Ecosystem bootstrapping learning curve lean startup disruptive.
            Marketing long tail disruptive agile development partner.
          </p>
          <div className="flex space-x-4 mt-6 cursor-pointer">
            <div onClick={openInstagram} className="text-gray-100 hover:text-yellow-400">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div onClick={openLinkedin} className="text-gray-100 hover:text-yellow-400">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div onClick={openFacebook} className="text-gray-100 hover:text-yellow-400">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div onClick={openGithub} className="text-gray-100 hover:text-yellow-400">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
        <div className="flex space-x-6 cursor-pointer">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div onClick={openWhatsapp} className="text-gray-100 flex items-center space-x-2 ">
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
              <span>081908647586</span>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div onClick={openMail} className="text-gray-100 flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <span>gilanglputra5@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
