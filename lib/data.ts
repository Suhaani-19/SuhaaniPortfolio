export type Project = {
  slug: string;
  name: string;
  tagline: string;
  date: string;
  stack: string[];
  bullets: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export const profile = {
  name: "Suhaani Garg",
  role: "AI/ML Engineer in training",
  tagline:
    "I build systems that reason, retrieve, and act — not just apps that render.",
  summary:
    "Second-year Computer Science & AI student building multi-agent systems, RAG pipelines, and full-stack products end to end. 400+ LeetCode problems solved. Currently chasing AI/ML internships.",
  email: "suhaani.garg2024@nst.rishihood.edu.in",
  phone: "+91 93043 76749",
  github: "https://github.com/Suhaani-19",
  githubUsername: "Suhaani-19",
  leetcodeUsername: "38IHZidM8N",
  leetcodeUrl: "https://leetcode.com/u/38IHZidM8N/",
  location: "India",
  education: [
    {
      degree: "B.Tech, Computer Science & Artificial Intelligence",
      school: "Newton School of Technology, Rishihood University",
      period: "2024 – 2028",
      detail: "CGPA 8.45 / 10.0",
    },
    {
      degree: "Intermediate (Class XII)",
      school: "G.D. Goenka Public School",
      period: "2023 – 2024",
      detail: "86.6%",
    },
    {
      degree: "Matriculation (Class X)",
      school: "G.D. Goenka Public School",
      period: "2021 – 2022",
      detail: "97.2%",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "multi-agent-research-assistant",
    name: "Multi-Agent Research Assistant",
    tagline: "Three agents, one pipeline, zero manual research.",
    date: "June 2026",
    stack: ["LangChain", "Groq", "LLaMA 3.3 70B", "Tavily API", "Streamlit"],
    bullets: [
      "Built a multi-agent AI system where 3 specialized agents (Researcher, Analyst, Writer) collaborate in a pipeline to produce structured research reports from live web data.",
      "Integrated the Tavily Search API for real-time web retrieval and LLaMA 3.3 70B via Groq for fast, free LLM inference.",
      "Designed an interactive Streamlit frontend with tabbed views for the final report, raw research, and analysis, including markdown report download.",
    ],
    github: "https://github.com/Suhaani-19/multi-agent-research-assistant",
    demo: "https://multi-agent-research-assistant-suhaani.streamlit.app/",
    featured: true,
  },
  {
    slug: "ai-real-estate-advisor",
    name: "AI Real Estate Advisor",
    tagline: "RAG-powered price predictions, grounded in real listings.",
    date: "April 2026",
    stack: ["LangChain", "FAISS", "scikit-learn", "Streamlit"],
    bullets: [
      "Built an AI-powered real estate advisory system to predict property prices from user inputs like location, size, and amenities.",
      "Developed and trained ML models using scikit-learn with preprocessing techniques such as encoding and scaling.",
      "Integrated a RAG pipeline (LangChain + FAISS) and designed a Streamlit frontend for real-time insights and recommendations.",
    ],
    github: "https://github.com/Suhaani-19/RealEstateAgent",
    demo: "https://realestateagent.streamlit.app/",
    featured: true,
  },
  {
    slug: "stayease",
    name: "StayEase",
    tagline: "Full-stack accommodation booking, production-deployed.",
    date: "October 2025",
    stack: ["React", "TypeScript", "Express", "MongoDB"],
    bullets: [
      "Developed a full-stack accommodation booking platform with real-time availability.",
      "Implemented secure authentication, host listing management, and advanced search & filtering.",
      "Deployed end-to-end on Render with MongoDB Atlas, delivering a responsive, scalable production-ready application.",
    ],
    github: "https://github.com/Suhaani-19/StayEase",
    demo: "https://stayease-2-lkca.onrender.com/",
  },
  {
    slug: "timetrekker",
    name: "TimeTrekker",
    tagline: "A Pomodoro-driven productivity dashboard.",
    date: "April 2025",
    stack: ["Next.js", "Firebase", "JavaScript"],
    bullets: [
      "Built using Next.js, JavaScript, HTML, CSS, and Firebase for a modern, scalable experience.",
      "Integrated a Pomodoro timer, task logging, and a productivity dashboard.",
      "Implemented responsive design with Firebase-based authentication and data management.",
    ],
    github: "https://github.com/Suhaani-19/Time-Management",
    demo: "https://time-management-hc53.vercel.app/",
  },
  {
    slug: "quicklist",
    name: "QuickList",
    tagline: "A fast, minimal React to-do app.",
    date: "March 2025",
    stack: ["React", "Vite", "JavaScript"],
    bullets: [
      "Developed using React, Vite, JavaScript, HTML, and CSS for a fast, modern interface.",
      "Enabled task creation, deletion, and completion tracking through an intuitive UI.",
      "Implemented responsive design with efficient state management using React.",
    ],
    github: "https://github.com/Suhaani-19/TODOAPP",
    demo: "https://suhaani-19.github.io/TODOAPP/",
  },
];

export const certifications = [
  {
    name: "Claude 101",
    org: "Anthropic",
    date: "June 2026",
    detail:
      "Prompt engineering, agentic workflows, RAG pipelines, connectors, and enterprise AI deployment patterns.",
    link: "https://drive.google.com/file/d/1t8EeobUqiNka2IX-EvQkQSZo0WTfUYH1/view?usp=sharing",
  },
  {
    name: "Agentic AI",
    org: "DeepLearning.AI",
    date: "June 2026",
    detail:
      "Agentic design patterns — reflection, tool use, planning, and multi-agent workflows for autonomous systems.",
    link: "https://learn.deeplearning.ai/certificates/b3bca5f6-fba7-412c-b24a-c43c2f2388bd?usp=sharing",
  },
  {
    name: "Supervised Machine Learning",
    org: "DeepLearning.AI & Stanford University",
    date: "June 2026",
    detail:
      "Andrew Ng's foundational ML course — linear/logistic regression, gradient descent, regularization, classification.",
    link: "https://coursera.org/share/3204f5f00f4aaa137b8981aea843ebf5",
  },
  {
    name: "AI Tools Workshop",
    org: "be10x",
    date: "May 2026",
    detail:
      "AI-powered productivity, prompt engineering, and effective use of ChatGPT and modern AI tools.",
    link: "https://drive.google.com/file/d/1VjIYNhlCqwZ6mVgkks__iHGETBbpBKfK/view?usp=sharing",
  },
  {
    name: "MERN Stack Fundamentals",
    org: "Great Learning",
    date: "May 2025",
    detail: "Full-stack development fundamentals using MongoDB, Express, React, and Node.js.",
    link: "https://drive.google.com/file/d/1gBG_010xze0v0Kl3YhoH_NexN3vBxjzR/view?usp=drive_link",
  },
  {
    name: "Introduction to Front End Development",
    org: "SkillUP",
    date: "May 2025",
    detail: "Core web development — HTML, CSS, JavaScript, and responsive design.",
    link: "https://drive.google.com/file/d/1djklgS6J3JUCCoxW1yQnmq8YFevSe025/view?usp=drive_link",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  "AI / ML": ["LangChain", "RAG", "scikit-learn", "NumPy", "Pandas", "Agentic AI"],
  "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express", "Tailwind"],
  "Databases & Tools": ["MongoDB", "MySQL", "Firebase", "Figma", "Git"],
};
