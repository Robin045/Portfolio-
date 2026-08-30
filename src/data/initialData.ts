import { PortfolioProfile } from '../types';

export const defaultPortfolioData: PortfolioProfile = {
  name: "Robin Kumar",
  title: "Data Analyst & Junior Software Developer",
  tagline: "Specializing in Data Analytics across SQL, Python, and Power BI — with hands-on industry experience building data pipelines, RAG systems, and interactive executive dashboards.",
  email: "robinatul7@gmail.com",
  phone: "+91-8684805719",
  location: "Bihar, India · Remote (Open to Relocation)",
  locationUrl: "https://maps.app.goo.gl/4QsTTDu55dY2h4v48",
  availableForHire: true,
  noticePeriod: "15 days Or less than 15 days",
  about: [
    "I am a B.Tech Computer Science & Engineering graduate (DCRUST, Sonepat, 2026) with deep hands-on Data Analytics project experience across SQL, Python, and Power BI, paired with active industry experience as a Junior Developer at AgriArjuna AI.",
    "My technical focus spans the complete data lifecycle: raw ETL pipeline automation and data cleaning with Pandas/NumPy, relational schema modeling with high-performance SQL (CTEs, Window Functions), live Power BI dashboards with DAX KPI modeling, and AI-assisted data workflows (RAG with Qdrant vector DB).",
    "Actively seeking remote Data Analyst opportunities, with availability within 15 days or less, and openness to relocation post-interview where required."
  ],
  stats: [
    { label: "SQL Business Queries", value: "13+ Real" },
    { label: "Live Power BI Dashboards", value: "4 Custom" },
    { label: "Crop Ingestion Records", value: "115+" },
    { label: "Availability Status", value: "≤ 15 Days" }
  ],
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/robinkumar-da", label: "LinkedIn Profile" },
    { platform: "GitHub", url: "https://github.com/Robin045", label: "GitHub Profile" },
    { platform: "Email", url: "mailto:robinatul7@gmail.com", label: "Send Email" }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Junior Developer",
      company: "AgriArjuna AI (Agritech / Rural Farm Operating System)",
      location: "Patna, Bihar, India (Remote)",
      period: "July 2026 – Present",
      isCurrent: true,
      summary: "Building scalable data pipelines, AI/RAG integrations, API services, and database-backed features for agricultural intelligence.",
      bullets: [
        "Built a hyperlocal weather intelligence pipeline by integrating live IMD (India Meteorological Department) APIs with OpenStreetMap reverse geocoding to resolve exact farmer districts, and developed 3-year historical weather comparison analytics.",
        "Designed and ran a multilingual data ingestion pipeline covering 115 crop records across 5 languages into a Qdrant vector database, and built an admin panel for structured data CRUD operations to maintain it.",
        "Integrated OpenAI text-embedding models to power multilingual retrieval (RAG) for a WhatsApp advisory bot, and built a 5-language translation and transliteration engine for real-time advisory content.",
        "Worked within a Next.js monorepo, resolving cross-origin and network-routing issues across dev/mobile testing environments; managed feature branches and PRs on Bitbucket, tracked tasks on Jira, and deployed via Vercel CI/CD."
      ],
      technologies: ["Python", "Qdrant Vector DB", "OpenAI RAG", "Next.js", "React.js", "TypeScript", "Node.js", "Express", "REST APIs", "Bitbucket", "Jira", "Vercel CI/CD"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Retail Sales Analytics & Business Insights System",
      category: "Full-Stack",
      description: "End-to-end data analytics system processing 2,000 retail transactions across 11 dimensions to extract revenue trends, customer demographics, and shift velocity.",
      highlights: [
        "Python ETL in Pandas/NumPy: resolved missing values, deduplication, corrected types, engineered features (profit, age group, hour extraction, shift classification, spending tier)",
        "Normalised MySQL schema with primary keys & 13 business SQL queries (revenue by category, top-5 customers, monthly trends, peak hours, CTEs, and window functions)",
        "4 live Power BI dashboards connected to MySQL with DAX KPI measures: Executive Overview, Product Performance, Customer Insights, and Sales Time Analysis",
        "Key findings delivered: Clothing led top revenue, evening was peak sales window, adults 25–40 were highest-spending segment, top-5 customers drove ~15% of revenue"
      ],
      technologies: ["Python", "Pandas", "NumPy", "MySQL", "Power BI", "DAX", "Excel", "Jupyter Notebook"],
      githubUrl: "https://github.com/Robin045",
      featured: true
    },
    {
      id: "proj-2",
      title: "Hyperlocal Weather Intelligence & Crop RAG Advisory",
      category: "AI / ML",
      description: "Agricultural intelligence system combining live IMD weather APIs, OpenStreetMap reverse geocoding, Qdrant vector database, and OpenAI embeddings for real-time crop advisories.",
      highlights: [
        "Live IMD weather API pipeline with 3-year historical comparison analytics",
        "Multilingual vector ingestion pipeline for 115 crop records across 5 languages",
        "OpenAI embeddings RAG pipeline powering real-time WhatsApp farm advisory engine"
      ],
      technologies: ["Python", "Qdrant", "OpenAI Embeddings", "Next.js", "REST APIs", "Vercel CI/CD"],
      githubUrl: "https://github.com/Robin045",
      featured: true
    },
    {
      id: "proj-3",
      title: "Production SQL Business Analytics Query Suite",
      category: "Backend",
      description: "Curated suite of 13+ production SQL analytical queries solving real business scenarios including cohort revenue, customer ranking, and peak shift analysis.",
      highlights: [
        "Advanced Common Table Expressions (CTEs) & multi-table JOIN architectures",
        "Window functions (RANK, DENSE_RANK, LEAD/LAG, PARTITION BY) for sequential analysis",
        "Optimized indexing and schema normalisation reducing analytical query latencies"
      ],
      technologies: ["MySQL", "PostgreSQL", "SQL Window Functions", "CTEs", "Database Indexing"],
      githubUrl: "https://github.com/Robin045",
      featured: false
    }
  ],
  skillCategories: [
    {
      category: "SQL & Databases",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Joins, CTEs & Window Functions", level: "Expert" },
        { name: "Schema Design & Normalisation", level: "Advanced" },
        { name: "Database Indexing", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" }
      ]
    },
    {
      category: "Python & Data Analysis",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Pandas & NumPy", level: "Expert" },
        { name: "Data Cleaning & Imputation", level: "Expert" },
        { name: "ETL Automation", level: "Advanced" },
        { name: "Feature Engineering", level: "Advanced" },
        { name: "Exploratory Data Analysis (EDA)", level: "Expert" }
      ]
    },
    {
      category: "Power BI, Excel & AI Tools",
      skills: [
        { name: "Power BI (4 Live Dashboards)", level: "Expert" },
        { name: "DAX KPI Measures", level: "Advanced" },
        { name: "Microsoft Excel (Pivot / TEXT / Formulas)", level: "Expert" },
        { name: "Claude LLM Prompt Engineering", level: "Advanced" },
        { name: "Qdrant Vector DB & RAG", level: "Advanced" },
        { name: "Jupyter Notebook", level: "Expert" }
      ]
    },
    {
      category: "Web, APIs & Agile",
      skills: [
        { name: "Next.js & React.js", level: "Intermediate" },
        { name: "TypeScript & Node.js", level: "Intermediate" },
        { name: "REST APIs & Reverse Geocoding", level: "Advanced" },
        { name: "Git & Bitbucket", level: "Expert" },
        { name: "Jira (Agile / Sprint-based)", level: "Advanced" },
        { name: "Vercel CI/CD", level: "Advanced" }
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Tech, Computer Science & Engineering",
      institution: "DCRUST (Deenbandhu Chhotu Ram University of Science & Technology), Sonepat, Haryana",
      year: "2022 – 2026",
      location: "Sonepat, Haryana, India",
      description: "Relevant Coursework: Database Management Systems (DBMS), Statistics & Probability, Data Structures & Algorithms, Python Programming, Artificial Intelligence, Operating Systems, Software Engineering, Computer Networks."
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Retail Sales Analytics & Business Insights System",
      issuer: "End-to-End Analytics Project (Python, MySQL, Power BI)",
      date: "2026",
      url: "https://github.com/Robin045"
    }
  ]
};
