import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const projectId = parseInt(id);

  if (isNaN(projectId)) {
    return { title: "Project Not Found" };
  }

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return { title: "Project Not Found" };
    }

    return {
      title: `${project.title} - Karin Khairinissa Portfolio`,
      description: project.description.substring(0, 160),
    };
  } catch {
    return { title: "Project Not Found" };
  }
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const projectId = parseInt(id);

  if (isNaN(projectId)) {
    notFound();
  }

  let project = null;
  try {
    project = await prisma.project.findUnique({
      where: { id: projectId },
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }

  if (!project) {
    notFound();
  }

  const techArray = project.techStack.split(",").map((tech) => tech.trim());

  return (
    <div className="bg-gray-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors mb-8 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8 border border-gray-800/50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>

          {/* Floating Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-pink-500/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {project.category}
              </span>
              <span className="bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700/50">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                Description
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {techArray.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-900/80 border border-gray-700/50 text-gray-300 text-sm px-4 py-2 rounded-xl hover:border-pink-500/30 hover:text-pink-300 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 space-y-5">
              <h3 className="text-base font-semibold text-white">
                Project Info
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Category
                  </p>
                  <p className="text-white text-sm font-medium">
                    {project.category}
                  </p>
                </div>
                <div className="border-t border-gray-800/50"></div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Year
                  </p>
                  <p className="text-white text-sm font-medium">
                    {project.year}
                  </p>
                </div>
                <div className="border-t border-gray-800/50"></div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Tech Stack
                  </p>
                  <p className="text-white text-sm font-medium">
                    {techArray.length} Technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="space-y-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-pink-500/25 transition-all hover:-translate-y-0.5 w-full"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-900 border border-gray-700 hover:border-pink-500/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 w-full"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Back to Projects */}
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 text-gray-400 hover:text-pink-400 text-sm font-medium transition-colors pt-2 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
