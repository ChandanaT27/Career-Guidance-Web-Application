export const careerPaths = [
    {
        id: 'science-pcm',
        title: 'Science (PCM)',
        category: 'Academic',
        description: 'Physics, Chemistry, Mathematics - The gateway to Engineering, Architecture, and Research.',
        icon: 'Atom',
        overview: 'The Science stream with PCM (Physics, Chemistry, Mathematics) is a popular choice for students aspiring for careers in engineering, technology, architecture, and pure sciences. It emphasizes analytical thinking, problem-solving, and a strong foundation in physical sciences.',
        duration: '2 Years (11th & 12th)',
        fees: '₹20,000 - ₹2,00,000 per year (Schooling)',
        colleges: [
            'IITs (Indian Institutes of Technology)',
            'NITs (National Institutes of Technology)',
            'BITS Pilani',
            'VIT Vellore'
        ],
        skills: ['Analytical Thinking', 'Problem Solving', 'Mathematical Aptitude', 'Coding (Optional)'],
        careerOpportunities: [
            'Software Engineer',
            'Civil/Mechanical/Electrical Engineer',
            'Architect',
            'Data Scientist',
            'Pilot',
            'Defence Services (NDA)'
        ],
        salary: '₹4 LPA - ₹50 LPA (varies by role & experience)',
        roadmap: [
            { step: '10th Standard', detail: 'Complete with good grades in Science & Math' },
            { step: '11th & 12th (PCM)', detail: 'Focus on JEE / BITSAT preparation' },
            { step: 'Entrance Exams', detail: 'Crack JEE Mains/Advanced, BITSAT, etc.' },
            { step: 'Undergraduate Degree', detail: 'B.Tech / B.E. / B.Arch (4-5 Years)' },
            { step: 'Internships', detail: 'Gain industry experience during college' },
            { step: 'Job / Higher Studies', detail: 'Placement or M.Tech / MBA' }
        ],
        motivation: 'Engineering is the closest thing to magic that exists in the world. - Elon Musk'
    },
    {
        id: 'science-pcb',
        title: 'Science (PCB)',
        category: 'Academic',
        description: 'Physics, Chemistry, Biology - The path to Medicine, Pharmacy, and Life Sciences.',
        icon: 'Stethoscope',
        overview: 'Science with PCB is ideal for students interested in the medical field, research in biological sciences, pharmacy, or agriculture. It requires a keen interest in living organisms and strong memorization and analytical skills.',
        duration: '2 Years (11th & 12th)',
        fees: '₹20,000 - ₹2,00,000 per year',
        colleges: [
            'AIIMS',
            'JIPMER',
            'CMC Vellore',
            'KGMU'
        ],
        skills: ['Empathy', 'Diagnostic Ability', 'Patience', 'Scientific Research'],
        careerOpportunities: [
            'Doctor (MBBS)',
            'Dentist (BDS)',
            'Pharmacist',
            'Biotechnologist',
            'Physiotherapist',
            'Nurse'
        ],
        salary: '₹5 LPA - ₹1 Cr+ (Top Specialists)',
        roadmap: [
            { step: '10th Standard', detail: 'Strong grasp of Biology & Chemistry' },
            { step: '11th & 12th (PCB)', detail: 'Prepare for NEET' },
            { step: 'NEET Exam', detail: 'Qualify for Medical Colleges' },
            { step: 'MBBS / BDS', detail: '5.5 Years degree including internship' },
            { step: 'Specialization (MD/MS)', detail: '3 Years (Optional but Recommended)' },
            { step: 'Practice', detail: 'Start working in hospitals or private clinic' }
        ],
        motivation: 'Medicines cure diseases, but only doctors can cure patients. - Carl Jung'
    },
    {
        id: 'commerce',
        title: 'Commerce',
        category: 'Academic',
        description: 'Business, Accounts, Economics - For the financial minds.',
        icon: 'TrendingUp',
        overview: 'Commerce opens doors to the corporate world, finance, banking, and entrepreneurship. It covers subjects like Accountancy, Business Studies, and Economics.',
        duration: '2 Years (11th & 12th)',
        fees: '₹15,000 - ₹1,50,000 per year',
        colleges: [
            'SRCC Delhi',
            'St. Xaviers Mumbai',
            'Loyola College Chennai',
            'Christ University Bangalore'
        ],
        skills: ['Financial Literacy', 'Data Analysis', 'Management', 'Communication'],
        careerOpportunities: [
            'Chartered Accountant (CA)',
            'Investment Banker',
            'Company Secretary (CS)',
            'Financial Analyst',
            'Marketing Manager'
        ],
        salary: '₹3 LPA - ₹25 LPA',
        roadmap: [
            { step: '10th Standard', detail: 'Interest in numbers and business' },
            { step: '11th & 12th (Commerce)', detail: 'Maths is optional but recommended' },
            { step: 'Professional Exams', detail: 'CA Foundation / CUET' },
            { step: 'Bachelor Degree', detail: 'B.Com / BBA / BMS' },
            { step: 'Professional Certification', detail: 'CA / CFA / CS / MBA' },
            { step: 'Corporate World', detail: 'Start your career in Finance/Biz' }
        ],
        motivation: 'Business is all about solving people\'s problems - at a profit.'
    },
    {
        id: 'arts-humanities',
        title: 'Arts / Humanities',
        category: 'Academic',
        description: 'Literature, History, Sociology - For the creative and critical thinkers.',
        icon: 'Palette',
        overview: 'Humanities offers a diverse range of subjects like History, Geography, Political Science, Psychology, and Languages. It leads to careers in civil services, journalism, law, and design.',
        duration: '2 Years (11th & 12th)',
        fees: '₹10,000 - ₹1,00,000 per year',
        colleges: [
            'St. Stephens Delhi',
            'Lady Shri Ram College',
            'Miranda House',
            'TISS'
        ],
        skills: ['Critical Thinking', 'Communication', 'Creativity', 'Research'],
        careerOpportunities: [
            'Civil Servant (IAS/IPS)',
            'Journalist',
            'Psychologist',
            'Lawyer',
            'Graphic Designer',
            'Content Writer'
        ],
        salary: '₹3 LPA - ₹20 LPA',
        roadmap: [
            { step: '10th Standard', detail: 'Score well in Social Sciences/Languages' },
            { step: '11th & 12th (Arts)', detail: 'Choose subjects of interest' },
            { step: 'Entrance Exams', detail: 'CUET / CLAT (for Law) / NIFT (Design)' },
            { step: 'Bachelor Degree', detail: 'BA / B.Des / BALLB' },
            { step: 'Master Degree', detail: 'MA / MBA / LLM' },
            { step: 'Career', detail: 'Civil Services, Media, Law Firms, etc.' }
        ],
        motivation: 'Creativity is intelligence having fun. - Albert Einstein'
    },
    {
        id: 'diploma-engineering',
        title: 'Diploma in Engineering',
        category: 'Technical',
        description: 'Practical technical education right after 10th.',
        icon: 'Wrench',
        overview: 'Polytechnic or Diploma in Engineering is a technical course that focuses on practical skills and hands-on training. It is a quicker route to a technical job compared to a degree.',
        duration: '3 Years',
        fees: '₹10,000 - ₹50,000 per year',
        colleges: [
            'Government Polytechnics',
            'Private Technical Institutes'
        ],
        skills: ['Technical Proficiency', 'Equipment Handling', 'Practical Application'],
        careerOpportunities: [
            'Junior Engineer',
            'Technical Assistant',
            'Loco Pilot',
            'Technician'
        ],
        salary: '₹2 LPA - ₹5 LPA',
        roadmap: [
            { step: '10th Standard', detail: 'Pass with Science & Math' },
            { step: 'Polytechnic Entrance', detail: 'State-level entrance exams' },
            { step: 'Diploma Course', detail: '3 Years of specialized study' },
            { step: 'Job / B.Tech (Lateral)', detail: 'Start working or join 2nd year B.Tech directly' }
        ],
        motivation: 'Skill represents the application of knowledge.'
    },
    {
        id: 'it-programming',
        title: 'IT & Programming',
        category: 'Skill-Based',
        description: 'Software development, Web design, Coding.',
        icon: 'Code',
        overview: 'The tech industry is booming. Courses in programming (Python, Java, Web Development) can be pursued alongside regular studies or as vocational courses.',
        duration: '6 Months - 1 Year (Certifications)',
        fees: '₹5,000 - ₹50,000',
        colleges: [
            'Online Platforms (Coursera, Udemy)',
            'NIIT',
            'Aptech'
        ],
        skills: ['Logic', 'Coding', 'Problem Solving', 'Debugging'],
        careerOpportunities: [
            'Web Developer',
            'App Developer',
            'QA Tester',
            'Freelancer'
        ],
        salary: '₹3 LPA - ₹15 LPA (depending on skill)',
        roadmap: [
            { step: '10th Standard', detail: 'Basic computer knowledge' },
            { step: 'Learn Basics', detail: 'HTML, CSS, JavaScript, Python' },
            { step: 'Build Projects', detail: 'Create portfolio websites/apps' },
            { step: 'Certifications', detail: 'Get certified in specific tech stacks' },
            { step: 'Freelance / Job', detail: 'Start earning or applying for junior dev roles' }
        ],
        motivation: 'Everybody in this country should learn to program a computer... because it teaches you how to think. - Steve Jobs'
    }
];
