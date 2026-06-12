import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-pink-300 text-sm font-medium">
                Available for work
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Karin Khairinissa
              </span>
            </h1>

            {/* Profession */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-pink-500 to-transparent"></div>
              <p className="text-lg sm:text-xl text-gray-400 font-light tracking-wide">
                System Analyst & Frontend Developer
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-pink-500 to-transparent"></div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mahasiswi Sistem Informasi ITENAS yang memiliki minat dan pengalaman di bidang Analisis Sistem, Penulisan Dokumentasi Teknis, Pengujian Perangkat Lunak, serta Pengembangan Antarmuka Pengguna. Memiliki kemampuan bekerja secara terstruktur dan siap berkontribusi secara profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-cyan-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-pink-500/25 transition-all hover:-translate-y-0.5 text-center"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto border border-gray-700 hover:border-pink-500/50 text-gray-300 hover:text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 text-center group"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">6+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Projects
                </p>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">3.55</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  GPA
                </p>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Tech Stack
                </p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-pink-500/30 shadow-2xl shadow-pink-500/10">
                <div className="w-full h-full bg-gradient-to-br from-pink-600 via-purple-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/90">
                    KI
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">💻</span>
                  <span className="text-xs text-gray-300 font-medium">
                    Developer
                  </span>
                </div>
              </div>

              {/* Floating Tech Badge */}
              <div className="absolute -top-2 -left-2 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">⚡</span>
                  <span className="text-xs text-gray-300 font-medium">
                    System Analyst
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
