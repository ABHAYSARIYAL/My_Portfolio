// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import Flasklogo from './assets/tech_logo/flask.png'
import Djangologo from './assets/tech_logo/django.png'
import Ansible from './assets/tech_logo/ansible.png'
import Aws from './assets/tech_logo/aws.png'
import Docker from './assets/tech_logo/docker.png'
import Jenkins from './assets/tech_logo/jenkins.png'
import Kubernets from './assets/tech_logo/kubernets.png'
import Terraform from './assets/tech_logo/terraform.png'

import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/pod.png';
import csprepLogo from './assets/work_logo/fileOrganizer.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'Flask', logo: Flasklogo },
      { name: 'Django', logo: Djangologo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Ansible', logo: Ansible },
      { name: 'AWS', logo: Aws },
      { name: 'docker', logo: Docker },
      { name: 'Jenkins', logo: Jenkins },
      { name: 'Kubernets', logo: Kubernets },
      { name: 'Terraform', logo: Terraform },
      { name: 'Figma', logo: figmaLogo },


    ],
  },
];


export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Uttrakhand Technical University, Uttrakhand",
    date: "Sept 2023 - July 2025",
    grade: "8.5 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Uttrakhand Technical University, Uttrakhand. During my time at UTU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at UTU University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "HNBGU, UTTRAKHAND",
    date: "Sept 2020 - Aug 2023",
    grade: "67.8%",
    desc: "I completed my Bachelor's degree in (B.Sc.) from HNBGU College, UTTRAKHAND. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at HNBGU allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Goverment Inter College Jakhand, Tehri Garhwal",
    date: "Apr 2019 - March 2020",
    grade: "76%",
    desc: "I completed my class 12 education from Goverment Inter College, Jakhand, under the NCERT board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "NCERT(XII) - PCM",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Goverment Inter College Jakhand, Tehri Garhwal",
    date: "Apr 2017 - March 2018",
    grade: "70.5%",
    desc: "I completed my class 10 education from Goverment Inter College, Jakhand, under the NCERT board,, where I studied Science with Computer.",
    degree: "NCERT(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "POD T-shirt Customizer",
    description:
      "The POD T-shirt Customizer Web Application successfully demonstrates how modern web technologies can deliver engaging, interactive, and scalable tools for the growing print-on-demand industry.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/ABHAYSARIYAL/pod-tshirt-customizer",
    webapp: "https://pod-tshirt-customizer-nvz.pages.dev/",
  },
  {
    id: 1,
    title: "File Organizer",
    description:
      "A lightweight Windows desktop utility that organizes files in a selected directory into categorized folders based on their file types like images, documents, music, videos, and more. Built using Python’s Tkinter for the GUI and compiled into a standalone executable with PyInstaller.",
    image: csprepLogo,
    tags: ["Python", "Tkinter", "PyInstaller"],
    github: "https://github.com/ABHAYSARIYAL/python_projects/tree/main/file_orgnizer",
    webapp: "https://drive.google.com/file/d/1Eri2Q7gWp33UEYL56ouSqhW7KKajQP7L/view?usp=sharing",
  },
  {
    id: 2,
    title: "HROne E-commerce Backend API",
    description:
      "A FastAPI-based backend application built for HROne’s internship challenge. It offers APIs to manage products and orders, connected with a MongoDB Atlas database. The project includes complete CRUD support, filtering, and pagination, and is deployed on Render.",
    image: ecommerceLogo, 
    tags: ["FastAPI", "MongoDB", "Python", "Render", "REST API"],
    github: "https://github.com/abhayssariyal/hrone-task", 
    webapp: "https://hrone-task-api.onrender.com/docs", 
  },
  {
  id: 4,
  title: "Role-Based HRM Backend System",
  description:
    "A secure and scalable backend system for HRM platforms built using Express.js and MongoDB. It features a multi-tenant architecture with company-based isolation, JWT authentication, and role-based access control (RBAC). Key functionalities include company registration, user onboarding via company ID, guest approval workflow, and protected API routes.",
  image: hrmLogo, // Replace with your actual image import or path
  tags: ["Express.js", "MongoDB", "JWT", "RBAC", "REST API"],
  github: "https://github.com/abhay-sariyal/hrm-rolebased-auth", // Replace with your actual GitHub link
  webapp: "https://your-deployment-url.com/docs" // Replace with your API docs or deployment if hosted
}
,
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];  