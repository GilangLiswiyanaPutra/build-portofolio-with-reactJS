import { faInstagram, faLinkedin, faFacebook, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/gilang-liswiyana-putra/",
  instagram: "https://www.instagram.com/palswyn/",
  github: "https://github.com/GilangLiswiyanaPutra/",
  facebook: "https://www.facebook.com/gilanglp05/",
  whatsapp: "https://wa.me/081908647586",
  mail: "mailto:gilanglputra5@gmail.com"
};

export const descriptionFooter = {
  desc1: "Get in Touch",
  desc2: "I'm always open to new opportunities and conversations. Let's connect and explore the possibilities.",
}

export const socialPlatforms = [
  { name: "instagram", icon: faInstagram },
  { name: "linkedin", icon: faLinkedin },
  { name: "facebook", icon: faFacebook },
  { name: "github", icon: faGithub },
];

export const contactPerson = [
  { name: "whatsapp", icon: faWhatsapp, text: "081908647586" },
  { name: "mail", icon: faEnvelope, text: "gilanglputra5@gmail.com"},
];

export const handleFooter = (platform) => {
  const url = socialLinks[platform];
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
