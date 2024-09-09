import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a tech enthusiast with a strong passion for AI and full-stack development. I specialize in building impactful tech solutions using tools like PyTorch, TensorFlow, ReactJS, Node.js, MongoDB, and Android Studio. Through projects like Project G.E.N.I.S.I.S, where I’m developing an AI assistant to boost productivity, I aim to harness the power of AI to create smarter, more efficient applications. My goal is to drive the next wave of tech innovations, making everyday life easier with cutting-edge technologies. Let’s connect and build the future of technology together!`;

export const ABOUT_TEXT = `I’m a tech enthusiast with a knack for AI and full-stack development, and I’m always up for a coding challenge—whether it's integrating ReactJS with Node.js or wrestling with MongoDB queries. My journey into web development started with a curious mind and a love for breaking things (and then fixing them). 

I’ve had the pleasure of working with a range of technologies, including ReactJS, Node.js, Express, and MongoDB, and I’m always eager to dive into new frameworks and tools. One of my current projects, Project G.E.N.I.S.I.S, is an AI assistant designed to streamline productivity through voice commands—basically, my attempt to make technology as helpful as a personal assistant without the awkward small talk.

I thrive in collaborative environments where I can tackle complex problems, deliver high-quality solutions, and occasionally indulge in a bit of tech geekery. When I’m not knee-deep in code, you’ll find me balancing my time between Muay Thai, running marathons, and perfecting my lifesaving skills. I like to think of myself as someone who’s as comfortable debugging code as I am tackling a Thai kickboxer—or just catching up on the latest tech trends.

Let’s connect and see how we can build something amazing together while having a few laughs along the way!`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Sep 2023",
    role: "Software Developer Intern",
    company: "ATT Digiverse",
    description: `At ATT Digiverse, I worked as a Software Developer Intern where I contributed to various stages of project development, including analysis, wireframing, and implementation. I became proficient in using PowerApps, Power Automate, Figma, ReactJS, and Keycloak, delivering effective solutions in a dynamic environment. My role involved enhancing communication with senior leadership and actively participating in product marketing and front-end development. This experience sharpened my problem-solving skills and deepened my understanding of both technical and strategic aspects of software development.`,
    technologies: ["PowerApps", "Power Automate", "Figma", "ReactJS", "Keycloak", "UI/UX Design"],
    
  }
];

export const PROJECTS = [
  {
    title: "Project G.E.N.I.S.I.S",
    image: project1,
    description:
      "In Project G.E.N.I.S.I.S, I am working on an AI assistant designed to enhance productivity through voice commands. I’m integrating advanced tools like Google Gemini and a custom PyTorch LLM to enable sophisticated natural language understanding. My work involves creating interactive features, such as voice-controlled tasks and games, to streamline workflows. The project aims to build an automated coding assistant capable of generating, debugging, and refactoring code based on voice instructions.",
    technologies: ["Prompt Engineering", "PyTorch", "TensorFlow", "ReactJS", "Python"],
    url:"https://github.com/YashTechSolutions/Project-G.E.N.I.S.I.S"
  },
  {
    title: "Custom AFL Fuzzer",
    image: project2,
    description:
      "In the Custom AFL Fuzzer project, I developed an optimized bucketing algorithm to improve classification and reduce redundant code executions. I enhanced the fuzzer with advanced strategies and intelligent input prioritization, boosting fault detection and increasing code coverage. Additionally, I implemented a robust multithreading model, which significantly reduced execution time and improved throughput. This project focused on making the fuzzer more efficient and effective in identifying vulnerabilities.",
    technologies: ["AFL", "C", "C++", "Multithreading"],
    url:"https://github.com/YashTechSolutions/Modified-AFL-Fuzzer"
  },
  {
    title: "OccupEye",
    image: project3,
    description:
      "In the Occupeye project, I co-founded and developed a mobile app that focuses on improving user engagement. I handled essential features such as login, registration, password recovery, bookmarking, and search functionalities using Java. My role also involved UI/UX design to ensure a seamless and user-friendly experience. The app was recognized with an audience vote award, highlighting its innovative approach and strong team collaboration.",
    technologies: ["Java", "Android Studio", "UI/UX Design"],
    url:"https://github.com/YashTechSolutions/OccupEye"
  },
  {
    title: "Algorithmic Trading Bot",
    image: project4,
    description:
      "In the Algorithmic Trading Bot project, I designed and implemented a trading system based on the Moving Average (MA) Crossover strategy. I developed algorithms to analyze market data and execute trades automatically when specific MA crossover signals occurred. This bot aimed to enhance trading efficiency by making real-time, data-driven decisions. The project focused on optimizing performance and accuracy in order to improve trading outcomes.",
    technologies: ["Python", "Pandas", "NumPy", "Oanda API"],
    url:"https://github.com/YashTechSolutions/AlgorithmicTrading"
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "yashcoding24@gmail.com",
};
