// app/project/page.tsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Dashboard',
    highlights: [
      'Responsive design with dark mode',
      'Integrated sales analytics and tracking',
      'Advanced filtering and product management',
    ],
    technologies: 'Next.js, Tailwind CSS, Chart.js',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    highlights: [
      'Interactive design with animations',
      'Clean and elegant layout',
      'Mobile-first responsive interface',
    ],
    technologies: 'Next.js, Tailwind CSS, Framer Motion',
    link: '#',
  },
  {
    title: 'Team Collaboration App',
    highlights: [
      'Real-time chat and notifications',
      'User roles and permissions system',
      'Project boards and task tracking',
    ],
    technologies: 'Next.js, Tailwind CSS, Firebase',
    link: '#',
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-white text-black py-12 px-4 md:px-12">
      <section className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Project Showcase</h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore the details and features of our latest cutting-edge projects.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-900">{project.title}</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
                >
                  View Live Project <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

              <div className="aspect-video w-full bg-gray-100 rounded-xl border border-gray-300 shadow-lg flex items-center justify-center text-gray-500 text-lg">
                Project Preview Area
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Technologies Used</h3>
          <p className="text-gray-600">
            Next.js, Tailwind CSS, React Icons, TypeScript
          </p>
        </div>
      </section>
    </main>
  );
}

