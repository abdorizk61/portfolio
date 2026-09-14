import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abdelrahman",
  lastName: "Rizk",
  name: `Abdelrahman Rizk`,
  role: "AI & Machine Learning Engineer",
  avatar: "/images/avatar.jpg",
  email: "rizkabdo61@gmail.com",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Work with {person.firstName}</>,
  description: (
    <>
      Have an AI, Computer Vision, or RAG project in mind? Let’s connect and discuss building a production-ready solution.
    </>
  ),
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdelrahman-elmaghraby-33b67b345",
  },
  {
    name: "Email Me",
    icon: "email",
    link: "mailto:rizkabdo61@gmail.com",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abdorizk61",
  },
  {
    name: "Kaggle",
    icon: "globe",
    link: "https://www.kaggle.com/abdoelmaghraby",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – AI & Machine Learning Engineer`,
  description: `Portfolio showcasing production-ready AI solutions, RAG pipelines, and Machine Learning systems by ${person.name}`,
  headline: <>Building intelligent, production-ready AI solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">RAG Assistant</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/ai-research-assistant-rag",
  },
  subline: (
    <>
      I help teams and businesses engineer private{" "}
      <Text as="span" size="xl" weight="strong">RAG Knowledge Systems</Text>, deploy real-time{" "}
      <Text as="span" size="xl" weight="strong">Computer Vision Pipelines</Text>, and build predictive ML models with intuitive web interfaces.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Egypt`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Scope & Engineering Focus",
    description: (
      <>
        {person.firstName} is an AI &amp; Machine Learning Engineer specializing in transforming complex data into robust, deployable intelligent systems. His core expertise spans developing private, offline Retrieval-Augmented Generation (RAG) architectures with local LLMs, real-time object tracking using YOLO and Supervision, and regularized predictive regression systems with interactive web UIs.
        <br /><br />
        <Text as="span" weight="strong">Available for:</Text> Machine Learning Engineering roles, Generative AI &amp; RAG consulting, and Computer Vision development contracts.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Academic Instructors & Project Committee",
        timeframe: "February 2026 - Present",
        role: "Machine Learning Instructor Candidate",
        achievements: [
          <>
            Selected to mentor and instruct peers in foundational and advanced Machine Learning
            concepts.
          </>,
          <>
            Focused on simplifying complex topics such as neural networks and regression models
            for a student audience.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Capital University",
        description: <>Bachelor of Computer Science, Giza, Egypt (Expected Graduation: July 2028).</>,
      },
      {
        name: "EraaSoft Academy",
        description: (
          <>
            Data Science Course Certification (Completed February 2026) — comprehensive training
            in data analysis, machine learning algorithms, and AI engineering practices.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Generative AI & RAG Systems",
        description: (
          <>
            Architecting end-to-end Retrieval-Augmented Generation pipelines using LangChain
            and ChromaDB. Deploying quantized local LLMs (Phi-3, Qwen) via Ollama for private,
            offline contextual document Q&A.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "LangChain", icon: "globe" },
          { name: "Ollama", icon: "terminal" },
        ],
        images: [],
      },
      {
        title: "Machine Learning & Deep Learning",
        description: (
          <>
            Supervised and unsupervised learning, regularized regression modeling, neural network
            classification (ANNs), and extensive feature engineering, data imputation, and metric evaluation.
          </>
        ),
        tags: [
          { name: "Scikit-learn", icon: "scikitlearn" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Pandas", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Computer Vision",
        description: (
          <>
            Developing real-time multi-object detection and dynamic object tracking systems
            leveraging YOLO architectures, OpenCV, and Supervision video annotation frameworks.
          </>
        ),
        tags: [
          { name: "YOLO", icon: "opencv" },
          { name: "OpenCV", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Model Deployment & Interactive Interfaces",
        description: (
          <>
            Building and deploying intuitive web interfaces for machine learning workflows and
            local AI assistants using Gradio and Streamlit.
          </>
        ),
        tags: [
          { name: "Gradio", icon: "globe" },
          { name: "Streamlit", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Environments & Workflow Automation",
        description: (
          <>
            Proficient in Linux (Fedora OS) environments, Git/GitHub version control, AI automation
            workflows with n8n, and structured project management in Notion.
          </>
        ),
        tags: [
          { name: "Linux", icon: "terminal" },
          { name: "Git", icon: "github" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and machine learning...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI, machine learning, and data science projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };