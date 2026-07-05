import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project5.png";
import projectMoodify from "../assets/projects/projectMoodify.png";
import projectSinglish from "../assets/projects/projectSinglish.jpg";

export const HERO_CONTENT = `I'm a software engineer with production experience in enterprise backend optimization, full-stack development, and AI-powered automation. I build scalable systems with Spring Boot, Oracle SQL, React.js, Node.js, Python, and Java, and I enjoy turning AI ideas into practical tools with OpenAI APIs, PyTorch, TensorFlow, and Google Gemini. From intelligent document processing platforms to computer vision systems and voice-driven developer assistants, I focus on shipping reliable technology that solves real problems.`;

export const ABOUT_TEXT = `I'm a software engineer with a strong foundation in full-stack development, backend systems, and applied AI. My work spans Oracle SQL performance tuning, Spring Boot microservices, React.js interfaces, workflow automation, and AI-assisted document processing systems built for production use.

I studied Computer Science and Design at SUTD, graduating with Honours with Distinction and a minor in Artificial Intelligence. Along the way, I led computer vision work for an IDEMIA capstone project, built internal enterprise tools at ATT Digiverse, and developed projects across speech, music emotion classification, mobile apps, algorithmic trading, and AI productivity automation.

I like working close to real constraints: performance, reliability, maintainability, and user impact. Outside of engineering, I keep active through Muay Thai, marathon running, and Ironman training, which probably explains why I enjoy difficult problems that reward consistency.

Let's connect and build something useful, scalable, and a little bit smarter.`;

export const EXPERIENCES = [
  {
    year: "Oct 2025 - Present",
    role: "Software Engineer",
    company: "Amphenol FCI, Singapore",
    description: `Optimizing an enterprise Point-of-Sale platform by tuning Oracle SQL queries and execution plans while improving backend scalability with Spring Boot. Designed an AI-driven e-claims system with document detection, data extraction, and classification pipelines, and integrated OpenAI APIs for intelligent document processing, automated classification, and workflow orchestration. Also implemented AI-assisted development tools to automate repetitive tasks and improve engineering productivity across cross-functional teams.`,
    technologies: ["Spring Boot", "Oracle SQL", "OpenAI API", "Java", "AI Automation"],
    url: ""
  },
  {
    year: "Aug 2024 - May 2025",
    role: "Team Leader | Computer Vision Engineer",
    company: "Capstone Project - IDEMIA, Singapore",
    description: `Led a 7-engineer team developing a car clearance vision system for land border checkpoints, achieving 90% real-time accuracy. Built and optimized object detection models using TensorFlow and YOLO for deployment-ready performance, creating a foundation for next-generation intelligent infrastructure applications in border security.`,
    technologies: ["TensorFlow", "YOLO", "Python"],
    url: "https://capstoneshowcase.sutd.edu.sg/project/proj-21-idemia-car-clearance-kiosk-design/"
  }
,  
  {
    year: "Aug 2023 - Dec 2023",
    role: "Software Developer Intern",
    company: "ATT Digiverse, Singapore",
    description: `Developed internal tools using PowerApps, Power Automate, React.js, and KeyCloak, reducing manual workflow processing time by 30%. Built frontend prototypes in Figma and React.js, iterating with senior stakeholders through weekly sprint demos, and integrated KeyCloak authentication for secure single sign-on access management across enterprise applications.`,
    technologies: ["PowerApps", "Power Automate", "Figma", "ReactJS", "Keycloak", "UI/UX Design"],
    url:""
  }
];

export const PROJECTS = [
  {
    title: "Moodify: Music Emotion Classifier",
    image: projectMoodify,  
    description:
      "Designed a deep learning-based music emotion classification system that achieves 90% accuracy across four emotional states: happy, sad, fear, and neutral. The model integrates mel-spectrogram and MFCC features and is trained on a diverse, multi-source dataset combining Emotify (crowdsourced) and Soundtracks (expert-labeled) annotations. Built to power intelligent playlist curation systems on streaming platforms like Spotify and YouTube Music, improving emotional coherence and reducing mood drift during playback.",
    technologies: ["PyTorch", "Torchaudio", "Librosa", "Deep Learning", "Audio Processing"],
    url: "https://github.com/YashTechSolutions/Moodify-CDS-2025"
  },
  {
    title: "Localized Singlish TTS for Accessibility",
    image: projectSinglish,  
    description:
      "Developed a localized Text-to-Speech (TTS) system optimized for Singaporean English (Singlish) to enhance digital accessibility for elderly users, individuals with visual impairments, and those with reading difficulties. The system models unique prosodic elements of Singlish—including tonal particles like 'lah'—to produce natural and culturally familiar speech. Performance was benchmarked against industry tools such as Hume.ai and Easy-Peasy.AI, demonstrating improved expressiveness and pronunciation accuracy under resource constraints.",
    technologies: ["Speech Synthesis", "Prosody Modeling", "Python", "Hume.ai", "Easy-Peasy.AI"],
    url: "https://github.com/YashTechSolutions/EmotionalTTS/tree/InterfaceFinal"
  },
  
  {
    title: "Project G.E.N.I.S.I.S",
    image: project1,
    description:
      "Built a voice-driven AI assistant using speech-to-text, a custom PyTorch LLM, and the Google Gemini API. Implemented terminal automation, Git integration, and hands-free developer workflows, with a modular API architecture designed for scalable productivity tools.",
    technologies: ["Speech-to-Text", "PyTorch", "Google Gemini API", "Git", "Python"],
    url:"https://yes-henna-psi.vercel.app/"
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
      "Built an occupancy detection mobile app using Java and Android Studio with authentication and dashboard modules. Designed the UI/UX in Figma and helped the project win an Audience Vote Award for technical innovation.",
    technologies: ["Java", "Android Studio", "Figma", "UI/UX Design"],
    url:"https://github.com/YashTechSolutions/OccupEye"
  },
  {
    title: "Algorithmic Trading Platform",
    image: project4,
    description:
      "Built an end-to-end live trading and backtesting system with VWAP, EMA, Bollinger Bands, and volume-based indicators. Developed real-time PnL tracking, drawdown analysis, win-rate computation, automated execution reporting, and risk controls for position sizing, stop-loss logic, and transaction cost modeling.",
    technologies: ["Python", "Pandas", "NumPy", "OANDA API", "Backtesting"],
    url:"https://github.com/YashTechSolutions/AlgorithmicTrading"
  },{
    title: "Food Prediction Computer Vision Model",
    image: project5,
    description:
      "Implemented a food detection model, this model can predict the food item in the image. There are 3 models included in this project, one is a custom model trained on a custom dataset, the second one is a more complex model and the third one is a model trained on the Food101 dataset. The model is trained on the TensorFlow framework.",
    technologies: ["Python", "Pandas", "Tensorflow"],
    url:"https://github.com/YashTechSolutions/FoodPredictionModel"
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+65 9148 5355",
  email: "yashyadav24137@gmail.com",
  website: "https://portfolio-website-git-main-yashtechsolutions-projects.vercel.app",
};
