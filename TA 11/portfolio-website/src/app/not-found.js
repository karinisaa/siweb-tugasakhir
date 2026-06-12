import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[120px] sm:text-[160px] font-bold text-gray-900 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold">
              Oops!
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white">Page Not Found</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-pink-500/25 transition-all hover:-translate-y-0.5 text-center"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto border border-gray-700 hover:border-pink-500/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 text-center"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
