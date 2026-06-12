"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Filter projects based on search term (title and description)
  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-10">
          <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">
            My Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            All{" "}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my complete collection of projects. Use the search bar to
            find specific projects by title or description.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            resultCount={filteredProjects.length}
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"></div>
              <p className="text-gray-400 text-sm">Loading projects...</p>
            </div>
          </div>
        ) : filteredProjects.length > 0 ? (
          /* Project Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-20 h-20 bg-gray-900/50 border border-gray-800/50 rounded-2xl flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">
              No Projects Found
            </h3>
            <p className="text-gray-400 text-sm">
              Try another keyword or{" "}
              <button
                onClick={() => setSearchTerm("")}
                className="text-pink-400 hover:text-pink-300 underline underline-offset-2"
              >
                clear the search
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
