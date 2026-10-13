// ────────────────────────────────────────────────────────────────────────────────
// src/data/projects.ts – Structured project data for the portfolio
// ────────────────────────────────────────────────────────────────────────────────

export type ProjectCategory = 'rag' | 'cv' | 'ml';

export interface ArchitectureStep {
  label: string;
  description?: string;
}

export interface ProjectMetric {
  icon: string;
  label: string;
}

export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  tags: string[];
  metrics: ProjectMetric[];
  architecture: ArchitectureStep[];
  links: {
    github?: string;
    liveDemo?: string;
    kaggle?: string;
    linkedin?: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: 'prj-01',
    title: 'AI Research Assistant',
    slug: 'ai-research-assistant-rag',
    category: 'rag',
    summary:
      'An intelligent RAG assistant designed to ingest, process, and query research papers using local embeddings and vector search.',
    tags: ['Python', 'LangChain', 'Ollama', 'ChromaDB', 'Streamlit', 'RAG'],
    metrics: [
      { icon: '⚡', label: 'Sub-second Retrieval' },
      { icon: '🔒', label: '100% Offline / Private' },
      { icon: '📄', label: 'Citation-Backed Answers' },
    ],
    architecture: [
      { label: 'PDF Ingestion', description: 'Parse & chunk research documents' },
      { label: 'Embedding', description: 'HuggingFace sentence transformers' },
      { label: 'Vector Store', description: 'ChromaDB with cosine similarity' },
      { label: 'LLM Inference', description: 'Local Ollama (Phi-3, Qwen)' },
      { label: 'Streamlit UI', description: 'Multi-turn research conversations' },
    ],
    links: {
      github: 'https://github.com/abdorizk61/AI-Research-Assistant',
      linkedin: 'https://www.linkedin.com/in/abdelrahman-rizk-33b67b345',
    },
  },
  {
    id: 'prj-02',
    title: 'Real-Time Object Detection & Multi-Object Tracking',
    slug: 'object-tracking-yolo',
    category: 'cv',
    summary:
      'An end-to-end computer vision pipeline using YOLO and Supervision to detect and track multiple dynamic objects with real-time annotations.',
    tags: ['Python', 'YOLOv8', 'OpenCV'],
    metrics: [
      { icon: '⚡', label: 'Real-Time Tracking' },
      { icon: '🎯', label: 'Persistent Object IDs' },
      { icon: '📊', label: 'Multi-Class Detection' },
    ],
    architecture: [
      { label: 'Video Input', description: 'Live feed or video file' },
      { label: 'YOLO Detection', description: 'Multi-class object detection' },
      { label: 'Tracking Engine', description: 'Persistent ID assignment' },
      { label: 'Annotation', description: 'Bounding boxes & trajectories' },
      { label: 'Output Stream', description: 'Annotated real-time video' },
    ],
    links: {
      github: 'https://github.com/abdorizk61',
      linkedin: 'https://www.linkedin.com/in/abdelrahman-rizk-33b67b345',
    },
  },
  {
    id: 'prj-03',
    title: 'Egyptian Real Estate Price Prediction',
    slug: 'egyptian-real-estate-valuation',
    category: 'ml',
    summary:
      'An end-to-end property valuation platform utilizing ML stacking ensembles and an interactive cyberpunk-styled Streamlit interface.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NumPy', 'Machine Learning'],
    metrics: [
      { icon: '⚡', label: 'Stacking Ensemble' },
      { icon: '🏠', label: '<15ms Inference' },
      { icon: '📈', label: '5-Fold CV Validated' },
    ],
    architecture: [
      { label: 'Raw Listings', description: 'Property data collection' },
      { label: 'Cleaning & FE', description: 'Log transforms, encoding, scaling' },
      { label: 'Stacking Ensemble', description: 'LightGBM + XGBoost + CatBoost + Ridge' },
      { label: 'Inference Engine', description: '<15ms per prediction' },
      { label: 'Streamlit HUD', description: 'Cyber dashboard with telemetry' },
    ],
    links: {
      github: 'https://github.com/abdorizk61',
      linkedin: 'https://www.linkedin.com/in/abdelrahman-rizk-33b67b345',
    },
  },
  {
    id: 'prj-04',
    title: 'HR Analytics & Employee Attrition Prediction',
    slug: 'hr-analytics-attrition',
    category: 'ml',
    summary:
      'An end-to-end HR analytics and predictive modeling platform to analyze workforce trends and predict employee attrition risk, containerized with Docker.',
    tags: ['Python', 'Scikit-learn', 'Tabular ML & Classification', 'Pandas', 'Streamlit', 'Docker'],
    metrics: [
      { icon: '⚡', label: 'Docker Containerized' },
      { icon: '🎯', label: 'F1-Optimized Classifier' },
      { icon: '📊', label: 'SMOTE Balanced' },
    ],
    architecture: [
      { label: 'HR Data Ingestion', description: 'Demographics, satisfaction, salary' },
      { label: 'EDA & Insights', description: 'Attrition driver analysis' },
      { label: 'Feature Engineering', description: 'SMOTE + encoding + scaling' },
      { label: 'Classification', description: 'Logistic Reg, RF, Gradient Boosting' },
      { label: 'Streamlit Dashboard', description: 'Live risk scoring & analytics' },
    ],
    links: {
      github: 'https://github.com/abdorizk61/HR-Analytics-project',
      linkedin: 'https://www.linkedin.com/in/abdelrahman-rizk-33b67b345',
    },
  },
  {
    id: 'prj-05',
    title: 'Diabetes Classification Neural Network',
    slug: 'diabetes-classification',
    category: 'ml',
    summary:
      'A deep learning neural network trained to classify diabetes diagnoses with comprehensive data preprocessing and metric evaluation.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'Pandas', 'Streamlit'],
    metrics: [
      { icon: '🧠', label: 'ANN Classifier' },
      { icon: '🎯', label: 'Recall-Optimized' },
      { icon: '📊', label: 'ROC-AUC Evaluated' },
    ],
    architecture: [
      { label: 'Clinical Data', description: 'Glucose, Insulin, BMI, Age' },
      { label: 'Preprocessing', description: 'Imputation & feature scaling' },
      { label: 'ANN Training', description: 'Multi-layer with dropout' },
      { label: 'Evaluation', description: 'Recall, ROC-AUC metrics' },
      { label: 'Prediction API', description: 'Medical screening output' },
    ],
    links: {
      github: 'https://github.com/abdorizk61',
      kaggle: 'https://www.kaggle.com/abdoelmaghraby',
    },
  },
  {
    id: 'prj-06',
    title: 'Predictive Regression & Advanced Feature Engineering',
    slug: 'predictive-regression-modeling',
    category: 'ml',
    summary:
      'A robust ML regression pipeline leveraging in-depth EDA, feature encoding, and regularization to predict continuous variables.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    metrics: [
      { icon: '📈', label: 'Ridge + Lasso + XGBoost' },
      { icon: '🔄', label: 'K-Fold Cross-Validated' },
      { icon: '📊', label: 'RMSE Optimized' },
    ],
    architecture: [
      { label: 'Raw Dataset', description: 'Multi-variable tabular data' },
      { label: 'EDA', description: 'Correlation & skewness analysis' },
      { label: 'Feature Engineering', description: 'Log transforms, encoding, KNN impute' },
      { label: 'Model Training', description: 'Ridge, Lasso, RF, XGBoost' },
      { label: 'Evaluation', description: 'RMSE & R² optimization' },
    ],
    links: {
      github: 'https://github.com/abdorizk61',
      kaggle: 'https://www.kaggle.com/abdoelmaghraby',
    },
  },
];

/** Get projects filtered by category */
export function getProjectsByCategory(category: ProjectCategory | 'all'): ProjectData[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

/** Category filter configuration */
export const categoryFilters = [
  { key: 'all' as const, label: 'All Projects' },
  { key: 'rag' as const, label: 'Generative AI & RAG' },
  { key: 'cv' as const, label: 'Computer Vision' },
  { key: 'ml' as const, label: 'Machine Learning & Analytics' },
] as const;

