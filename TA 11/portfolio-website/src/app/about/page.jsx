export const metadata = {
  title: "About - Karin Khairinissa | System Analyst & Frontend Developer",
  description:
    "Mahasiswi semester 6 Program Studi Sistem Informasi Institut Teknologi Nasional (ITENAS) Bandung dengan IPK 3,55. Memiliki minat dan pengalaman di bidang Analisis Sistem, Penulisan Dokumentasi Teknis, Pengujian Perangkat Lunak, serta Pengembangan Antarmuka Pengguna melalui berbagai proyek akademik.Terbiasa melakukan analisis kebutuhan sistem, menyusun dokumentasi teknis, membuat pemodelan UML, melakukan pengujian sistem, serta mengembangkan antarmuka web yang responsif. Memiliki kemampuan bekerja secara terstruktur, komunikatif, dan siap berkontribusi secara profesional dalam program Kerja Praktik maupun lingkungan kerja berbasis teknologi informasi.",
};

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML/CSS", level: 85 },
        { name: "Laravel Blade", level: 80 },
        { name: "Bootstrap", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Flutter", level: 70 },
        { name: "Next.js", level: 65 },
      ],
    },
    {
      category: "System Analysis",
      items: [
        { name: "Requirement Analysis", level: 85 },
        { name: "UML Modeling", level: 85 },
        { name: "System Documentation", level: 90 },
        { name: "Software Testing", level: 85 },
        { name: "Business Process Analysis", level: 80 },
        { name: "Risk Analysis", level: 80 },
      ],
    },

    {
      category: "Database & Tools",
      items: [
        { name: "MySQL", level: 85 },
        { name: "Git & GitHub", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Microsoft Office", level: 90 },
      ],
    },
  ];

  const education = [
    {
      degree: "S1 Sistem Informasi",
      school: "Institut Teknologi Nasional Bandung",
      year: "2023 - Sekarang",
      description:
        "Mempelajari Analisis Sistem, Basis Data, Rekayasa Perangkat Lunak, Sistem Informasi Berbasis Web, Sistem Informasi Seluler, ERP, dan Manajemen Risiko.",
    },
    {
      degree: "IPA",
      school: "SMA Negeri 1 Soreang",
      year: "2020 - 2023",
      description:
        "Jurusan Ilmu Pengetahuan Alam.",
    },
  ];

  const experience = [
    {
      role: "System Analyst & Frontend Developer",
      company: "Platform rental Alat Camping Berbasis Web",
      period: "2026",
      description: "Menganalisis kebutuhan sistem, membuat pemodelan UML, menyusun dokumentasi teknis, serta mengembangkan antarmuka pengguna menggunakan Laravel Blade dan HTML/CSS.",
    },

    {
      role: "System Analyst & Software testing",
      company: "Aplikasi Absensi Karyawan Berbasi Mobile",
      period: "2025",
      description:
        "Menganalisis kebutuhan sistem, merancang alur proses aplikasi absensi berbasis Flutter dan GoCloud API, menyusun skenario pengujian, serta mendokumentasikan bug dan hasil pengujian.",
    },

    {
      role: "Risk Management Analyst",
      company: "Studi Kasus Kopi Kenangan",
      period: "2025",
      description:
        "Mengidentifikasi risiko strategis, operasional, dan teknologi serta menyusun strategi mitigasi berdasarkan tingkat kemungkinan dan dampak risiko.",
    },

    {
      role: "ERP System Designer",
      company: "Studi Kasus Starbuck Indonesia",
      period: "2026",
      description:
        "Melakukan pemetaan proses bisnis, analisis kesenjangan, dan perancangan blueprint implementasi ERP pada berbagai fungsi bisnis perusahaan."
    },

    {
      role: "Documentation Specialist & Sofware Tester",
      company: "Website E-Commerce Kayra Bakery",
      period: "2024",
      description:
        "Menyusun dokumentasi teknis sistem, spesifikasi fitur, panduan pengguna, serta melakukan pengujian fungsionalitas dan pelaporan hasil pengujian."
    },

    {
      role: "Full Stack Developer",
      company: "Praktikum Sistem Informasi Berbasi Web",
      period: "2026",
      description:
        "Mengembangkan berbagai aplikasi web berbasis CRUD dan database sebagai implementasi praktikum, serta menyusun dokumentasi dan melakukan pengujian fungsionalitas sistem."
    },
  ];

  return (
    <div className="bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">
            Get to Know Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-cyan-500 rounded-2xl blur-2xl opacity-15"></div>
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-pink-600 via-purple-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/80">KI</span>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-600/20 rounded-2xl border border-pink-500/20"></div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Karina Khairinissa
              </h2>
              <p className="text-pink-400 font-medium">
                System Analyst & Frontend Developer
              </p>
            </div>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Halo! Nama saya Karina Khairinissa, seorang Mahasiswi semester 6
                Program Studi Sistem Informasi di Institut Teknologi Nasional (ITENAS) Bandung
                dengan IPK 3,55. Saya memiliki minat dan pengalaman di bidang
                Analisis Sistem, Penulisan Dokumentasi Teknis, Pengujian
                Perangkat Lunak, serta Pengembangan Antarmuka Pengguna melalui
                berbagai proyek akademik.
              </p>
              <p>
                Saya terbiasa melakukan analisis kebutuhan sistem, menyusun
                dokumentasi teknis, membuat pemodelan UML, melakukan pengujian
                sistem, serta mengembangkan antarmuka web yang responsif. Saya
                memiliki kemampuan bekerja secara terstruktur, komunikatif, dan
                siap berkontribusi secara profesional dalam program Kerja Praktik
                maupun lingkungan kerja berbasis teknologi informasi.
              </p>
              <p>
                Saya percaya pada penulisan kode yang bersih, terstruktur, dan
                menghasilkan pengalaman pengguna yang efisien. Saat ini,
                saya sedang fokus memperdalam keahlian dalam pengembangan
                perangkat lunak dan analisis sistem, serta aktif mencari
                peluang untuk menerapkan pengetahuan saya dalam proyek nyata
                dan kolaborasi tim.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-white font-medium text-sm">
                  Bandung, Indonesia
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-white font-medium text-sm">
                  khairinissakarin67@gmail.com
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  University
                </p>
                <p className="text-white font-medium text-sm">
                  Institut Teknologi Nasional Bandung
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Status
                </p>
                <p className="text-emerald-400 font-medium text-sm">
                  Open for internship
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  GPA
                </p>
                <p className="text-emerald-400 font-medium text-sm">
                  3.55
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl font-bold text-white">
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 hover:border-pink-500/20 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-cyan-500 h-1.5 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">
              Background
            </span>
            <h2 className="text-3xl font-bold text-white">
              Education{" "}
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                History
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 hover:border-pink-500/20 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
                      {edu.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mt-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="text-center space-y-4 mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Career
            </span>
            <h2 className="text-3xl font-bold text-white">
              Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 hover:border-cyan-500/20 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Period Badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-pink-400 text-sm font-medium mt-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
