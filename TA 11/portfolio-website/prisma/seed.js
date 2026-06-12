require('dotenv').config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const projects = [
  {
    title: "Platform Rental Alat Camping Berbasis Web",
    description: "Sistem penyewaan alat camping yang dirancang untuk memudahkan proses transaksi dan manajemen inventaris. Melakukan analisis kebutuhan sistem, merancang pemodelan UML, menyusun dokumentasi teknis, serta mengembangkan antarmuka pengguna yang estetik dan responsif menggunakan HTML, CSS, dan Laravel Blade.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
    category: "Web Development",
    year: 2026,
    techStack: "Laravel Blade, HTML, CSS, MySQL, UML",
    githubUrl: "https://github.com/NickBryanS/TUBES_SIWEB.git",
    demoUrl: "https://demo.rental-camping.com",
  },
  {
    title: "Aplikasi Absensi Karyawan Mobile",
    description: "Aplikasi absensi mobile yang menggunakan integrasi geolocation dan API untuk melacak kehadiran karyawan. Bertanggung jawab dalam menganalisis kebutuhan sistem, merancang alur proses aplikasi, dan menyusun skenario pengujian komprehensif, serta mendokumentasikan bug atau masalah yang ditemukan.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80",
    category: "Mobile App",
    year: 2025,
    techStack: "Flutter, GoCloud API, Figma, Software Testing",
    githubUrl: "https://github.com/naufalfdhl26/aplikasi_clock_on.git",
    demoUrl: "https://demo.absensi.com",
  },
  {
    title: "Analisis Manajemen Risiko - Kopi Kenangan",
    description: "Studi kasus komprehensif terkait manajemen risiko pada Kopi Kenangan. Melakukan identifikasi mendalam terhadap risiko strategis, operasional, dan teknologi yang mungkin terjadi, serta menyusun strategi mitigasi berdasarkan evaluasi tingkat kemungkinan dan dampak risiko terhadap bisnis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "System Analysis",
    year: 2025,
    techStack: "Risk Analysis, Business Process, Microsoft Office",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Blueprint Sistem ERP - Starbuck Indonesia",
    description: "Perancangan arsitektur dan sistem ERP untuk operasional skala besar pada Starbucks Indonesia. Tugas mencakup pemetaan proses bisnis, analisis kesenjangan (gap analysis), dan pembuatan blueprint desain sistem untuk implementasi modul ERP pada fungsi bisnis perusahaan.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "System Design",
    year: 2026,
    techStack: "ERP, Gap Analysis, Blueprinting, UML",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "E-Commerce Kayra Bakery",
    description: "Website e-commerce penjualan produk roti dan kue. Berperan sebagai Documentation Specialist & Software Tester, bertanggung jawab atas penyusunan dokumentasi teknis, spesifikasi fitur sistem, panduan pengguna (user manual), serta pengujian fungsionalitas (UAT) untuk memastikan kualitas produk.",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80",
    category: "Web Development",
    year: 2024,
    techStack: "Software Testing, System Documentation, Manual Testing",
    githubUrl: "https://github.com/Yasmin-Ridho/Kayra-Bakery.git",
    demoUrl: "https://kayrabakery-demo.com",
  },
  {
    title: "Sistem Informasi Berbasis Web",
    description: "Proyek praktikum perkuliahan yang melibatkan pengembangan aplikasi web berbasis CRUD. Membangun aplikasi dari awal hingga terhubung ke basis data, menyusun dokumentasi proyek, dan melakukan pengujian untuk memastikan setiap fitur berjalan dengan baik tanpa error.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80",
    category: "Web Application",
    year: 2026,
    techStack: "PHP, MySQL, HTML, CSS, JavaScript",
    githubUrl: "https://github.com/karinisaa/siweb-tugasakhir.git",
    demoUrl: "https://siweb-demo.com",
  },
];

async function main() {
  console.log("🌱 Start seeding...");

  // Delete existing projects
  await prisma.project.deleteMany();
  console.log("🗑️  Deleted existing projects");

  // Create projects
  for (const project of projects) {
    const created = await prisma.project.create({
      data: project,
    });
    console.log(`✅ Created project: ${created.title} (ID: ${created.id})`);
  }

  console.log("🌱 Seeding finished!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
