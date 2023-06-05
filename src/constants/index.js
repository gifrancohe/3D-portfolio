import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    magento,
    php,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    mattelsa,
    threejs,
    lpblue,
    lpwhite,
    ntt,
    matt,
    keyrus,
    } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Magento",
      icon: magento,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "La Patria S.A.S",
      icon: lpblue,
      iconBg: "#383E56",
      date: "Jan 2014 - Jun 2016",
      points: [
        "Create web application to printing and distribuing newspaper.",
        "Developing and maintaining web applications using PHP and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Developer Analyst",
      company_name: "Everis and NTT Data",
      icon: ntt,
      iconBg: "#383E56",
      date: "Jun 2016 -  Jan 2018",
      points: [
        "Developing and maintaining web applications to process of the company.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software engineering",
      company_name: "Mattelsa S.A.S",
      icon: matt,
      iconBg: "#fffff3",
      date: "Jan 2018 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Keyrus S.A.S",
      icon: keyrus,
      iconBg: "#fffff3",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Gio proved me wrong.",
      name: "Andrés Rodriguez",
      designation: "Leader Software Factory",
      company: "Mattelsa S.A.S",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Gio does.",
      name: "Tatiana Mazo",
      designation: "Product Owner",
      company: "Mattelsa S.A.S",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "After Gio optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Esteban Hernadez",
      designation: "Frontend Developer",
      company: "Keyrus S.A.S",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Distribution System",
      description:
        "Web-based platform that allows the users of a printing house and local newspaper to produce, manage and distribute the newspaper generated for the entire city and surrounding municipalities.",
      tags: [
        {
          name: "PHP",
          color: "grey-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "YiiFramework",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/gifrancohe/publicidad",
    },
    {
      name: "EC Trans",
      description:
        "Web-based platform that allows users to search and manage car trips rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "red-text-gradient",
        },
        {

          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/gifrancohe/ectrans",
    },
    {
      name: "E-commerce",
      description:
        "A complete clothes store with multiples languages and store views, tracking orders and create user woth manage orders and payments. With multiples payments integrations.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "KnockoutJS",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "Magento 1.xx 2.xx",
          color: "pink-text-gradient",
        },
      ],
      image: mattelsa,
      source_code_link: "https://github.com/gifrancohe/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };