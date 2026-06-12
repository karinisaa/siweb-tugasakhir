import Link from "next/link";

export default function ProjectCard({ project }) {
  const techArray = project.techStack.split(",").map((tech) => tech.trim());

  return (
    <div className="group bg-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/5 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-pink-500/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700/50">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {techArray.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800/80 text-gray-300 text-xs px-2.5 py-1 rounded-md border border-gray-700/30"
            >
              {tech}
            </span>
          ))}
          {techArray.length > 4 && (
            <span className="bg-gray-800/80 text-pink-400 text-xs px-2.5 py-1 rounded-md border border-gray-700/30">
              +{techArray.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors group/link"
        >
          View Detail
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
