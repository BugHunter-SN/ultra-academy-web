export interface Course {
  id: number;
  title: string;
  category: 'it' | 'business';
  description: string;
  image?: string;
  icon?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Computer Fundamentals',
    category: 'it',
    description: 'Master the basics of computing, operating systems, and essential software tools for professional environments.',
    image: '/images/computer-fundamentals.jpeg',
  },
  {
    id: 2,
    title: 'Graphic Design',
    category: 'it',
    description: 'Learn Adobe Photoshop, Illustrator, and design principles to create stunning visual content.',
    image: '/images/graphic-design.jpeg',
  },
  {
    id: 3,
    title: 'Website Development',
    category: 'it',
    description: 'Build modern, responsive websites using HTML, CSS, JavaScript, and WordPress.',
    image: '/images/web-dev.jpeg',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    category: 'it',
    description: 'Master SEO, social media advertising, content marketing, and Google Analytics.',
    image: '/images/digital-marketting.jpeg',
  },
  {
    id: 5,
    title: 'Programming with Python',
    category: 'it',
    description: 'Learn one of the most in-demand programming languages with practical projects.',
    image: '/images/python.jpeg',
  },
  {
    id: 6,
    title: 'Relational Database Management with SQL',
    category: 'it',
    description: 'Design, implement, and manage databases using MySQL and PostgreSQL.',
    image: '/images/relational-database.jpeg',
  },
  {
    id: 7,
    title: 'Data Analysis in Advanced Excel',
    category: 'it',
    description: 'Advanced formulas, pivot tables, dashboards, and data visualization techniques.',
    image: '/images/excel.jpeg',
  },
  {
    id: 8,
    title: 'QuickBooks Essentials',
    category: 'it',
    description: 'Learn accounting software for small and medium businesses.',
    image: '/images/quick-books.jpg',
  },
  {
    id: 9,
    title: 'Project Management',
    category: 'business',
    description: 'PMP-aligned training covering planning, execution, risk management and agile methodologies.',
    icon: 'fa-tasks',
  },
  {
    id: 10,
    title: 'Entrepreneurship & Business Development',
    category: 'business',
    description: 'Turn your business idea into a successful venture with practical guidance.',
    icon: 'fa-lightbulb',
  },
  {
    id: 11,
    title: 'Financial Management',
    category: 'business',
    description: 'Budgeting, financial reporting, investment analysis and cash flow management.',
    icon: 'fa-money-bill-wave',
  },
  {
    id: 12,
    title: 'Human Resource Management',
    category: 'business',
    description: 'Recruitment, performance management, labor law, and employee relations.',
    icon: 'fa-users',
  },
  {
    id: 13,
    title: 'Procurement & Contract Management',
    category: 'business',
    description: 'Strategic sourcing, supplier management, and contract negotiation skills.',
    icon: 'fa-handshake',
  },
  {
    id: 14,
    title: 'Monitoring & Evaluation',
    category: 'business',
    description: 'Framework design, data collection, and impact assessment for development projects.',
    icon: 'fa-chart-bar',
  },
];
