// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Atla Hemanth Kumar Reddy",
  shortName: "Hemanth",
  role: "Front End Engineer",
  location: "Andhra Pradesh, India",
  email: "atlahemanth009@gmail.com",
  // Shown on the site only if you set showPhone to true.
  // Left empty because this file is public on GitHub. Add your number here if you want it shown.
  phone: "",
  showPhone: false,
  linkedin: "https://linkedin.com/in/atla-hemanth-kumar-reddy",
  github: "https://github.com/Atlahemanthkumarreddy",
  // Put your resume PDF in /public and set this to "/resume.pdf" to show a download button.
  resumeUrl: "",
  photo: "/profile.jpg",
  stats: [
    { value: "30%", label: "faster load times" },
    { value: "89%", label: "model accuracy" },
    { value: "2", label: "internships" },
  ],
  summary:
    "Aspiring Front End Engineer and Computer Science graduate who builds responsive, fast UIs with React.js and Material UI.",
  about: [
    "I'm a Computer Science and Engineering graduate with hands-on experience building responsive user interfaces in React.js and Material UI, and with making them fast.",
    "I've integrated REST APIs, cut load times by 30% with lazy loading and code splitting, and worked in agile teams to ship features that put users first.",
  ],
};

// Opens Gmail's compose window with the address and a subject filled in.
// (A plain mailto: link does nothing on computers without a mail app set up.)
export const composeEmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
  `Hello ${profile.shortName}`,
)}`;

export const experience = [
  {
    company: "Skill Garage",
    role: "Frontend Developer Intern",
    period: "Jan 2024 – Apr 2024",
    points: [
      "Designed responsive UI components using React.js and Material UI.",
      "Improved application performance by 30% using lazy loading and code splitting.",
      "Worked with backend developers to integrate REST APIs using fetch, and managed source control with Git.",
      "Made sure the app was responsive and worked across browsers using HTML, CSS and JavaScript.",
    ],
  },
  {
    company: "Slash",
    role: "Python Intern",
    period: "Nov 2023 – Feb 2024",
    points: [
      "Built Python applications, including a voice assistant and a chatbot.",
      "Used OpenCV for visual recognition and deployed to Unix-based environments.",
      "Practiced agile delivery and error handling in distributed settings.",
    ],
  },
];

// cover picks the illustrated thumbnail in Projects.tsx: "tasks" | "travel" | "currency".
// Add image: "/your-screenshot.png" to use a real screenshot instead.
export const projects: {
  title: string;
  cover: string;
  image?: string;
  tag: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}[] = [
  {
    title: "Task Management System",
    cover: "tasks",
    tag: "Full-Stack",
    description:
      "A full-stack task manager with secure JWT login and REST APIs to create, update, delete and filter tasks.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "",
    live: "",
  },
  {
    title: "Tour and Travel Guide",
    cover: "travel",
    tag: "Web App",
    description:
      "A mobile-first travel guide where users can browse destinations, sign in and filter content. It runs on a Node.js and Express backend with MongoDB.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "",
    live: "",
  },
  {
    title: "Fake Currency Detection",
    cover: "currency",
    tag: "Image Processing",
    description:
      "Detects counterfeit Indian currency notes by analysing Reserve Bank of India note images. It classifies genuine notes with 89% accuracy.",
    tech: ["MATLAB", "Python", "Image Processing"],
    github: "",
    live: "",
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "JavaScript", "HTML", "CSS", "Material UI"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Languages", items: ["Java", "Python", "SQL"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "Core CS", items: ["Data Structures", "Operating Systems", "Computer Networks"] },
  { group: "Tools", items: ["Git", "MATLAB"] },
];

export const education = [
  {
    school: "G. Pulla Reddy Engineering College",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2020 – 2024",
  },
  {
    school: "Narayana Junior College",
    degree: "Intermediate, M.P.C",
    period: "2018 – 2020",
  },
];

export const certifications = [
  { name: "Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Cyber Security", issuer: "EduSkills" },
];
