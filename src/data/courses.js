// Central content source for courses & languages.
// Edit here to update cards across the whole site.

export const courses = [
  {
    slug: 'fundamentals-of-programming',
    title: 'Fundamentals of Programming',
    icon: '🧩',
    tag: 'Beginner',
    duration: '6 weeks',
    summary:
      'Build a rock-solid foundation in logic, problem solving and core programming concepts before specialising.',
    highlights: ['Logic & flow control', 'Functions & data', 'Hands-on mini projects'],
  },
  {
    slug: 'front-end-development',
    title: 'Front End Development',
    icon: '🎨',
    tag: 'Web',
    duration: '10 weeks',
    summary:
      'Craft responsive, accessible interfaces with HTML, CSS, JavaScript and modern frameworks like React.',
    highlights: ['HTML, CSS, JS', 'React & components', 'Responsive design'],
  },
  {
    slug: 'back-end-development',
    title: 'Back End Development',
    icon: '⚙️',
    tag: 'Web',
    duration: '10 weeks',
    summary:
      'Design APIs, work with databases and build secure, scalable server-side applications.',
    highlights: ['REST APIs', 'Databases & SQL', 'Auth & security'],
  },
  {
    slug: 'fullstack-development',
    title: 'FullStack Development',
    icon: '🚀',
    tag: 'Web',
    duration: '16 weeks',
    summary:
      'Go end-to-end: combine front end and back end skills to ship complete, production-ready products.',
    highlights: ['Front + back end', 'Real-world projects', 'Deployment ready'],
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing',
    icon: '☁️',
    tag: 'Cloud',
    duration: '8 weeks',
    summary:
      'Learn cloud fundamentals, compute, storage and networking across leading cloud platforms.',
    highlights: ['Cloud fundamentals', 'Compute & storage', 'Scalable architecture'],
  },
  {
    slug: 'cicd-and-deployment',
    title: 'CI/CD & Deployment',
    icon: '🔁',
    tag: 'DevOps',
    duration: '6 weeks',
    summary:
      'Automate builds, tests and releases with modern CI/CD pipelines and deployment strategies.',
    highlights: ['Pipelines', 'Containers', 'Automated releases'],
  },
  {
    slug: 'data-structures-and-algorithms',
    title: 'Data Structures & Algorithms',
    icon: '🧠',
    tag: 'Core CS',
    duration: '12 weeks',
    summary:
      'Master the problem-solving skills that top companies test for in technical interviews.',
    highlights: ['Core data structures', 'Algorithm patterns', 'Interview prep'],
  },
  {
    slug: 'game-development',
    title: 'Game Development',
    icon: '🎮',
    tag: 'Creative',
    duration: '10 weeks',
    summary:
      'Bring ideas to life — game logic, physics, graphics and interactive experiences.',
    highlights: ['Game engines', 'Physics & graphics', 'Playable projects'],
  },
  {
    slug: 'salesforce',
    title: 'Salesforce',
    icon: '🔷',
    tag: 'Platform',
    duration: '8 weeks',
    summary:
      'Administer and build on the Salesforce platform, a highly in-demand enterprise skill.',
    highlights: ['Admin essentials', 'Apex & flows', 'Certification path'],
  },
  {
    slug: 'dotnet',
    title: '.NET',
    icon: '🟣',
    tag: 'Platform',
    duration: '10 weeks',
    summary:
      'Build robust enterprise applications with C# and the powerful .NET ecosystem.',
    highlights: ['C# deep dive', 'ASP.NET', 'Enterprise apps'],
  },
]

export const languages = [
  { name: 'C', icon: 'C', color: '#5b8def', note: 'Systems & fundamentals' },
  { name: 'C++', icon: 'C++', color: '#6f86d6', note: 'Performance & OOP' },
  { name: 'C#', icon: 'C#', color: '#7c5cbf', note: '.NET & enterprise' },
  { name: 'Python', icon: 'Py', color: '#6fcf97', note: 'Versatile & popular' },
  { name: 'Java', icon: 'Ja', color: '#f2a154', note: 'Robust & scalable' },
]

export const findCourse = (slug) => courses.find((c) => c.slug === slug)
