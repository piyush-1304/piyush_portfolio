export const PERSON = {
  name: 'Piyush Srivastava',
  title: 'AI/ML Engineer',
  subtitle: 'Building intelligent systems, machine learning models, and AI-powered backend applications.',
  location: 'Kanpur, Uttar Pradesh, India',
  email: '13piyush04@gmail.com',
  phone: '+91-9305755567',
  github: 'https://github.com/Piyush-1304',
  githubUser: 'Piyush-1304',
  linkedin: 'https://www.linkedin.com/in/piyushsr13',
  about: [
    'Piyush Srivastava is a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University.',
    'He focuses on building intelligent systems, AI-powered applications, and backend architectures for machine learning workflows.',
    'His interests include machine learning experimentation, LLM integration, backend API design, and building real-world AI tools that bridge research and production.',
  ],
}

export const STATS = [
  { value: '7', suffix: '+', label: 'Projects Built' },
  { value: '200', suffix: '+', label: 'Problems Solved' },
  { value: '4★', suffix: '', label: 'HackerRank' },
  { value: '4', suffix: '', label: 'Certifications' },
  { value: '7.73', suffix: '', label: 'CGPA' },
]

export const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2023 – Present',
    grade: 'CGPA: 7.73',
    tag: 'Current',
    courses: ['Machine Learning', 'Operating Systems', 'Algorithms', 'Linear Algebra', 'Data Structures'],
  },
  {
    degree: 'Intermediate (Class XII) — 81%',
    school: 'United Public School',
    location: 'Kanpur, Uttar Pradesh',
    period: 'Apr 2021 – Mar 2022',
    grade: '81%',
    tag: 'Class XII',
    courses: [],
  },
  {
    degree: 'Matriculation (Class X) — 91%',
    school: 'United Public School',
    location: 'Kanpur, Uttar Pradesh',
    period: 'Apr 2019 – Mar 2020',
    grade: '91%',
    tag: 'Class X',
    courses: [],
  },
]

export const SKILLS = [
  {
    category: 'Languages',
    icon: '⚡',
    items: ['Python', 'C', 'C++', 'Java'],
  },
  {
    category: 'AI / Machine Learning',
    icon: '🧠',
    items: ['Scikit-Learn', 'PyTorch', 'MLflow', 'LLM Integration', 'Prompt Engineering', 'NLP preprocessing'],
  },
  {
    category: 'Data Science',
    icon: '📊',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Feature Engineering'],
  },
  {
    category: 'Backend & APIs',
    icon: '🌐',
    items: ['FastAPI', 'SQLAlchemy', 'REST APIs', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠',
    items: ['Git / GitHub', 'Jupyter Notebook', 'VS Code', 'Bootstrap', 'HTML/CSS'],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    items: ['Problem Solving', 'Time Management', 'Team Collaboration', 'Adaptability'],
  },
]

export const PROJECTS = [
  {
    id: '01',
    title: 'Vector Embedding & LLM Data Pipeline',
    description: 'End-to-end text preprocessing, tokenization, and data sampling workflows for preparing high-quality training data for large language models from scratch.',
    impact: ['Built scalable tokenization pipeline for LLM training', 'Implemented efficient sequence sampling strategies'],
    tech: ['PyTorch', 'tiktoken', 'NLP Preprocessing', 'Sequence Sampling'],
    featured: true,
    github: 'https://github.com/Piyush-1304',
    date: 'Feb 2026',
  },
  {
    id: '02',
    title: 'MLflow Multi-Model Experiment System',
    description: 'Machine learning experimentation pipeline that trains, compares, and versions multiple ML models using MLflow with full reproducibility and experiment tracking.',
    impact: ['Automated experiment tracking across model types', 'Enabled fully reproducible ML workflows'],
    tech: ['MLflow', 'Scikit-Learn', 'Python', 'Model Versioning'],
    featured: false,
    github: 'https://github.com/Piyush-1304',
    date: 'Feb 2026',
  },
  {
    id: '03',
    title: 'LeetCode AI Assistant',
    description: 'AI-powered coding assistant that analyzes LeetCode problems and generates intelligent hints, explanations, and optimized solutions.',
    impact: ['Automates coding assistance workflows', 'Generates structured hints using LLM integration'],
    tech: ['LLM Integration', 'FastAPI', 'Python', 'Prompt Engineering'],
    featured: false,
    github: 'https://github.com/Piyush-1304',
    date: 'Jan 2026',
  },
  {
    id: '04',
    title: 'IvyIntel Student Intelligence Platform',
    description: 'AI-driven academic analytics system that predicts student performance patterns and delivers personalized insights for improved educational outcomes.',
    impact: ['Predicts student performance with ML algorithms', 'Delivers personalized academic recommendations'],
    tech: ['Machine Learning', 'Predictive Modeling', 'Feature Engineering', 'Backend AI'],
    featured: false,
    github: 'https://github.com/Piyush-1304',
    date: 'Jan 2026',
  },
  {
    id: '05',
    title: 'AI Smart Make-Up Class Scheduler',
    description: 'Intelligent scheduling system with smart classroom allocation, rush prediction, and automated student notifications via FastAPI backend.',
    impact: ['Smart room suggestion engine', 'Automated notification system for students'],
    tech: ['FastAPI', 'SQLAlchemy', 'REST APIs', 'AI Prediction Logic'],
    featured: false,
    github: 'https://github.com/Piyush-1304',
    date: 'Jan 2026',
  },
  {
    id: '06',
    title: 'Diabetes Prediction Model',
    description: 'Supervised ML model on the PIMA Indian Diabetes dataset with data cleaning, EDA, and hyperparameter tuning across multiple algorithms.',
    impact: ['Achieved 85%+ prediction accuracy', 'Improved performance 20–30% through preprocessing'],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    featured: false,
    github: 'https://github.com/Piyush-1304',
    date: 'Aug 2025',
  },
  {
    id: '07',
    title: 'CPU Scheduling Simulator',
    description: 'GUI-based CPU Scheduling Simulator implementing FCFS, SJF (preemptive & non-preemptive), Round Robin, and Priority Scheduling with real-time Gantt charts.',
    impact: ['Visual Gantt chart rendering', 'Real-time process metrics (CT, TAT, WT)'],
    tech: ['Python', 'PyQt5', 'Matplotlib', 'OOP'],
    featured: false,
    github: 'https://github.com/Piyush-1304',
    date: 'Apr 2025',
  },
]

export const TRAINING = [
  {
    title: 'Machine Learning with Data Science',
    org: 'Cipher School',
    date: 'Jul 2025',
    description: 'Completed 70+ hours of live training covering Python for data science, ML workflows, data preprocessing, and model building.',
    bullets: [
      'Hands-on practice with NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn',
      'Built mini-projects in data cleaning, feature engineering, and ML model training',
      'Implemented Logistic Regression, Decision Trees, K-Means from scratch',
    ],
  },
]

export const CERTIFICATIONS = [
  { name: 'OCI 2025 Certified AI Founder Associate', issuer: 'Oracle University', date: 'Sep 2025', icon: '🏛' },
  { name: 'Mastering Generative AI & ChatGPT', issuer: 'Udemy', date: 'Aug 2025', icon: '🤖' },
  { name: 'The Bits and Bytes of Computer Networking', issuer: 'Coursera · Google', date: 'Sep 2024', icon: '🌐' },
  { name: 'Packet Switching Networks and Algorithms', issuer: 'Coursera', date: 'Feb 2024', icon: '📡' },
]

export const ACHIEVEMENTS = [
  { icon: '⭐', title: '4-Star HackerRank', desc: 'Secured 4-star rating in both C and Python on HackerRank.' },
  { icon: '🧩', title: '200+ Problems Solved', desc: 'Solved 200+ coding problems across LeetCode and CodeChef.' },
  { icon: '🤖', title: 'AI Systems Builder', desc: 'Built 7+ end-to-end AI and machine learning production-level systems.' },
]

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `<span class="text-[#00F5FF]">Available commands:</span>
  <span class="text-[#EAEAEA]">projects</span>   · List all projects
  <span class="text-[#EAEAEA]">skills</span>     · Show technical skills
  <span class="text-[#EAEAEA]">about</span>      · About Piyush
  <span class="text-[#EAEAEA]">contact</span>    · Contact information
  <span class="text-[#EAEAEA]">education</span>  · Academic background
  <span class="text-[#EAEAEA]">certs</span>      · Certifications
  <span class="text-[#EAEAEA]">achievements</span> · Achievements
  <span class="text-[#EAEAEA]">clear</span>      · Clear terminal
  <span class="text-[#EAEAEA]">github</span>     · Open GitHub profile`,

  projects: `<span class="text-[#00F5FF]">// Projects (7 total)</span>
  <span class="text-[#EAEAEA]">01</span>  Vector Embedding & LLM Data Pipeline    <span class="text-[#6B7280]">[PyTorch, tiktoken]</span>
  <span class="text-[#EAEAEA]">02</span>  MLflow Multi-Model Experiment System    <span class="text-[#6B7280]">[MLflow, Scikit-Learn]</span>
  <span class="text-[#EAEAEA]">03</span>  LeetCode AI Assistant                   <span class="text-[#6B7280]">[LLM, FastAPI]</span>
  <span class="text-[#EAEAEA]">04</span>  IvyIntel Student Intelligence           <span class="text-[#6B7280]">[ML, Predictive Modeling]</span>
  <span class="text-[#EAEAEA]">05</span>  AI Smart Make-Up Class Scheduler        <span class="text-[#6B7280]">[FastAPI, SQLAlchemy]</span>
  <span class="text-[#EAEAEA]">06</span>  Diabetes Prediction Model               <span class="text-[#6B7280]">[Scikit-Learn, EDA]</span>
  <span class="text-[#EAEAEA]">07</span>  CPU Scheduling Simulator                <span class="text-[#6B7280]">[Python, PyQt5]</span>
  <span class="text-[#6B7280]">→ More at github.com/Piyush-1304</span>`,

  skills: `<span class="text-[#00F5FF]">// Technical Stack</span>
  <span class="text-[#EAEAEA]">Languages</span>  : Python, C, C++, Java
  <span class="text-[#EAEAEA]">AI / ML</span>    : PyTorch, Scikit-Learn, LLM, NLP, MLflow, Prompt Eng.
  <span class="text-[#EAEAEA]">Data Sci</span>   : Pandas, NumPy, Matplotlib, Seaborn, EDA
  <span class="text-[#EAEAEA]">Backend</span>    : FastAPI, SQLAlchemy, REST APIs, MySQL
  <span class="text-[#EAEAEA]">Tools</span>      : Git/GitHub, Jupyter, VS Code, tiktoken`,

  about: `<span class="text-[#00F5FF]">// Piyush Srivastava</span>
  <span class="text-[#EAEAEA]">Role</span>       : AI/ML Engineer (Aspiring)
  <span class="text-[#EAEAEA]">Education</span>  : B.Tech CSE · LPU · CGPA 7.73
  <span class="text-[#EAEAEA]">Location</span>   : Kanpur, UP, India
  <span class="text-[#EAEAEA]">Status</span>     : Open to internships & opportunities
  <span class="text-[#EAEAEA]">Focus</span>      : AI systems, ML pipelines, backend APIs`,

  contact: `<span class="text-[#00F5FF]">// Contact Info</span>
  <span class="text-[#EAEAEA]">Email</span>      : 13piyush04@gmail.com
  <span class="text-[#EAEAEA]">LinkedIn</span>   : linkedin.com/in/piyushsr13
  <span class="text-[#EAEAEA]">GitHub</span>     : github.com/Piyush-1304
  <span class="text-[#EAEAEA]">Mobile</span>     : +91-9305755567`,

  education: `<span class="text-[#00F5FF]">// Academic Background</span>
  <span class="text-[#EAEAEA]">2023–Now</span>   B.Tech CSE · LPU Phagwara · CGPA 7.73
  <span class="text-[#EAEAEA]">2021–22</span>    Intermediate (XII) · 81% · United Public School
  <span class="text-[#EAEAEA]">2019–20</span>    Matriculation (X) · 91% · United Public School`,

  certs: `<span class="text-[#00F5FF]">// Certifications</span>
  <span class="text-[#EAEAEA]">Sep 2025</span>   OCI 2025 Certified AI Founder Associate (Oracle)
  <span class="text-[#EAEAEA]">Aug 2025</span>   Mastering Generative AI & ChatGPT (Udemy)
  <span class="text-[#EAEAEA]">Sep 2024</span>   Bits and Bytes of Computer Networking (Coursera)
  <span class="text-[#EAEAEA]">Feb 2024</span>   Packet Switching Networks and Algorithms (Coursera)`,

  achievements: `<span class="text-[#00F5FF]">// Achievements</span>
  <span class="text-[#EAEAEA]">⭐</span>  4-Star rating in C and Python on HackerRank
  <span class="text-[#EAEAEA]">🧩</span>  Solved 200+ problems on LeetCode and CodeChef
  <span class="text-[#EAEAEA]">🤖</span>  Built 7+ AI/ML production systems`,

  github: `<span class="text-[#00F5FF]">// Opening GitHub...</span>
  <span class="text-[#6B7280]">→ https://github.com/Piyush-1304</span>`,
}
