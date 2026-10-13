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
      Have an AI, Computer Vision, or RAG project in mind? Let’s connect and discuss building a
      production-ready solution.
    </>
  ),
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdelrahman-rizk-33b67b345",
    essential: true,
  },
  {
    name: "Email Me",
    icon: "email",
    link: "mailto:rizkabdo61@gmail.com",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abdorizk61",
    essential: true,
  },
  {
    name: "Kaggle",
    icon: "globe",
    link: "https://www.kaggle.com/abdoelmaghraby",
    essential: true,
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
      <Text as="span" size="xl" weight="strong">
        RAG Knowledge Systems
      </Text>
      , deploy real-time{" "}
      <Text as="span" size="xl" weight="strong">
        Computer Vision Pipelines
      </Text>
      , and build predictive ML models with intuitive web interfaces.
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
        {person.firstName} is an AI &amp; Machine Learning Engineer specializing in transforming
        complex data into robust, deployable intelligent systems. His core expertise spans
        developing private, offline Retrieval-Augmented Generation (RAG) architectures with local
        LLMs, real-time object tracking using YOLO and Supervision, and regularized predictive
        regression systems with interactive web UIs.
        <br />
        <br />
        <Text as="span" weight="strong">
          Available for:
        </Text>{" "}
        Machine Learning Engineering roles, Generative AI &amp; RAG consulting, and Computer Vision
        development contracts.
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
            Focused on simplifying complex topics such as neural networks and regression models for
            a student audience.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "DeepLearning.AI & Coursera",
        description: (
          <>
            <div style={{ marginBottom: "6px" }}>
              <strong style={{ color: "#f8fafc" }}>Linear Algebra for Machine Learning and Data Science</strong>
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "8px",
                  fontSize: "0.8rem",
                  color: "#06b6d4",
                  fontFamily: "var(--font-code, monospace)",
                }}
              >
                — October 2026
              </span>
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "#94a3b8",
                marginBottom: "8px",
                fontStyle: "italic",
              }}
            >
              Foundations of ML Mathematics
            </div>
            <p style={{ margin: "0 0 10px 0", color: "#cbd5e1" }}>
              Covered core mathematical foundations for machine learning, including vector spaces,
              linear transformations, eigenvalues/eigenvectors, and matrix factorizations.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "12px",
              }}
            >
              {[
                "Linear Algebra",
                "Eigenvalues & Eigenvectors",
                "PCA",
                "Matrix Decompositions",
                "Mathematics for ML",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "0.75rem",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "rgba(6, 182, 212, 0.08)",
                    border: "1px solid rgba(6, 182, 212, 0.25)",
                    color: "#67e8f9",
                    fontFamily: "var(--font-code, monospace)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div style={{ marginBottom: "12px" }}>
              <a
                href="https://coursera.org/share/486790131097f775f59bab42d991508b"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85rem",
                  color: "#06b6d4",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontFamily: "var(--font-code, monospace)",
                  fontWeight: 600,
                }}
              >
                <span>Verify Credential ↗</span>
              </a>
            </div>
            <div
              style={{
                marginTop: "12px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(6, 182, 212, 0.2)",
              }}
            >
              <img
                src="/images/certificates/cert_image-1.png"
                alt="Linear Algebra for Machine Learning and Data Science Certificate - DeepLearning.AI & Coursera"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </>
        ),
      },
      {
        name: "iCareer & Plan International Egypt",
        description: (
          <>
            <div style={{ marginBottom: "6px" }}>
              <strong style={{ color: "#f8fafc" }}>Digitera Program – Business Track</strong>
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "8px",
                  fontSize: "0.8rem",
                  color: "#06b6d4",
                  fontFamily: "var(--font-code, monospace)",
                }}
              >
                — September 2026
              </span>
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "#10b981",
                marginBottom: "4px",
                fontStyle: "italic",
              }}
            >
              Professional &amp; Business Development
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#94a3b8",
                marginBottom: "8px",
              }}
            >
              Strategic Partners: Danish-Arab Partnership Programme (DAPP) &amp; Ministry of Foreign Affairs of Denmark
            </div>
            <p style={{ margin: "0 0 10px 0", color: "#cbd5e1" }}>
              Successfully completed the Digitera Business Track under the Youth Inclusion and Employment Program (&ldquo;Ready for Tomorrow&rdquo;), demonstrating strong commitment to business fundamentals, career development, and workplace readiness.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "12px",
              }}
            >
              {[
                "Business Fundamentals",
                "Professional Development",
                "Career Readiness",
                "Soft Skills",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "0.75rem",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    color: "#6ee7b7",
                    fontFamily: "var(--font-code, monospace)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: "12px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(6, 182, 212, 0.2)",
              }}
            >
              <img
                src="/images/certificates/digitera-business-track.png"
                alt="Digitera Program – Business Track Certificate - iCareer & Plan International Egypt"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </>
        ),
      },
      {
        name: "Capital University",
        description: (
          <>Bachelor of Computer Science, Giza, Egypt (Expected Graduation: July 2028).</>
        ),
      },
      {
        name: "EraaSoft Academy",
        description: (
          <>
            <strong>AI Diploma:</strong> Comprehensive professional diploma covering Machine
            Learning, Deep Learning, Computer Vision, and generative architectures (Completed August
            2026)[cite: 6].
            <div
              style={{
                marginTop: "12px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <img
                src="/images/certificates/eraasoft-ai-diploma.jpg"
                alt="EraaSoft AI Diploma Certificate"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </>
        ),
      },
      {
        name: "Creativa Hub (ITIDA / EME)",
        description: (
          <>
            <strong>Machine Learning Program:</strong> 25-hour specialized offline program focused
            on foundational data pipelines, model optimization, and deployment of the "Spaceship
            Titanic" project (Completed February 2025)[cite: 5].
            <div
              style={{
                marginTop: "12px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <img
                src="/images/certificates/creativa-machine-learning.jpg"
                alt="Creativa ITIDA Machine Learning Certificate"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
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
            Architecting end-to-end Retrieval-Augmented Generation pipelines using LangChain and
            ChromaDB. Deploying quantized local LLMs (Phi-3, Qwen) via Ollama for private, offline
            contextual document Q&A.
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
            classification (ANNs), and extensive feature engineering, data imputation, and metric
            evaluation.
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
            Building and deploying intuitive web interfaces for machine learning workflows and local
            AI assistants using Gradio and Streamlit.
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
