import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abdelrahman",
  lastName: "Rizk",
  name: `Abdelrahman Rizk`,
  role: "Aspiring AI & Machine Learning Engineer",
  avatar: "/images/avatar.jpg",
  email: "rizkabdo61@gmail.com",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My notes on AI, machine learning, and building intelligent systems</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abdorizk61",
    essential: true,
  },
  {
        name: 'Kaggle',
        icon: 'kaggle', 
        link: 'https://www.kaggle.com/abdoelmaghraby',
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdelrahman-elmaghraby-33b67b345",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>Building intelligent systems with data and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">YOLO Vision</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/real-time-object-detection-and-tracking-system",
  },
  subline: (
    <>
      I'm {person.firstName}, an {person.role.toLowerCase()} with a foundation in{" "}
      <Text as="span" size="xl" weight="strong">Data Science &amp; Machine Learning</Text>. <br /> I build predictive models, neural networks, and computer vision applications with Python.
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
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a dedicated and detail-oriented {person.role.toLowerCase()} with a strong foundation
        in Data Science, Machine Learning, and Software Engineering. He has hands-on experience developing
        predictive models, neural networks, and computer vision applications using Python, and is skilled at
        problem-solving and optimizing algorithms in Linux environments (Fedora OS).
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
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
    display: true, // set to false to hide this section
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
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI, machine learning, and data science projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Add your own images to /public/images/gallery and list them here
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };