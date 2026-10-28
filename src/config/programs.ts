export interface SyllabusSection {
  code: string;
  title: string;
  items: string[];
}

export interface FinalProjectDetail {
  title?: string;
  description?: string;
  scenario?: string;
  tasks?: string[];
  output?: string;
  projects?: {
    title: string;
    description?: string;
    tasks?: string[];
  }[];
}

export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  iconName: "Bot" | "Network" | "PenTool" | "Gamepad2" | "Code2";
  sections?: SyllabusSection[];
  topics?: string[];
  finalProject?: FinalProjectDetail | string;
  pending?: boolean;
}

export const programsData: ProgramItem[] = [
  {
    id: "robotika-dan-iot",
    number: "01",
    title: "Robotika dan IoT",
    iconName: "Bot",
    sections: [
      {
        code: "A",
        title: "Dasar IoT & Robotika",
        items: [
          "Memahami apa itu IoT",
          "Memahami apa itu Arduino",
          "Instalasi rangkaian pada project board",
          "Dasar pemrograman Arduino",
        ],
      },
      {
        code: "B",
        title: "Input-Output Arduino & Sensor",
        items: [
          "Menghidupkan dan mematikan LED",
          "Menghubungkan LED dan push button dengan Arduino",
          "Menggunakan relay untuk on/off lampu rumah",
          "Sinyal analog dan PWM",
        ],
      },
      {
        code: "C",
        title: "Pengendalian Motor & Komunikasi I2C",
        items: [
          "Mengenal motor DC dan pengendaliannya",
          "Mengenal motor servo dan pengendaliannya",
          "Mengenal motor driver (pengatur arah dan kecepatan motor)",
          "Komunikasi I2C (misalnya LCD I2C)",
        ],
      },
      {
        code: "D",
        title: "Konektivitas IoT dengan ESP32",
        items: [
          "Pengenalan ESP32 dan perbedaannya dengan Arduino",
          "Koneksi WiFi / Bluetooth",
          "Pengenalan platform Blynk (template, datastream, dashboard)",
        ],
      },
    ],
    finalProject: {
      title: "Implementasi Robotika & Otomasi IoT",
      projects: [
        {
          title: "Proyek 1: Robot Soccer",
          tasks: [
            "Merakit sasis, motor, dan motor driver",
            "Kontrol gerak robot (maju, mundur, belok) lewat HP atau gamepad",
            "Mengatur kecepatan dengan PWM",
            "Uji coba dan mini pertandingan",
          ],
        },
        {
          title: "Proyek 2: Kontrol & Monitoring Perangkat dengan Blynk",
          tasks: [
            "Kontrol lampu/relay dari HP",
            "Monitoring data sensor secara real-time di dashboard",
            "Notifikasi dan otomasi sederhana",
          ],
        },
      ],
    },
  },
  {
    id: "networking-tkj",
    number: "02",
    title: "Networking TKJ",
    iconName: "Network",
    sections: [
      {
        code: "A",
        title: "Network Fundamentals & School Network Design",
        items: [
          "Memahami konsep dasar jaringan komputer dan TCP/IP",
          "Memahami IP Addressing, Subnetting, Gateway, dan DNS",
          "Mengenal fungsi Router, Switch, Access Point, dan Server",
          "Membuat topologi jaringan berdasarkan kebutuhan sekolah",
          "Menyusun IP Address Plan dan Network Diagram",
        ],
      },
      {
        code: "B",
        title: "MikroTik RouterOS & Network Management",
        items: [
          "Pengenalan MikroTik RouterOS dan WinBox",
          "Konfigurasi IP Address, DHCP Server, DNS, dan NAT",
          "Konfigurasi routing dasar",
          "Manajemen bandwidth menggunakan Simple Queue",
          "Pengenalan Firewall Filter dan pembatasan akses jaringan",
          "Implementasi VLAN untuk segmentasi jaringan sekolah",
          "Pengenalan monitoring dan troubleshooting jaringan",
        ],
      },
      {
        code: "C",
        title: "Cisco Switching, Routing & Troubleshooting",
        items: [
          "Pengenalan Cisco IOS dan konfigurasi melalui CLI",
          "Konfigurasi VLAN dan Access Port",
          "Konfigurasi Trunking 802.1Q",
          "Inter-VLAN Routing",
          "Konfigurasi Static Routing",
          "Pengenalan Access Control List (ACL)",
          "Troubleshooting konektivitas menggunakan perintah show, ping, dan traceroute",
          "Pengenalan STP dan EtherChannel sebagai materi pengayaan",
        ],
      },
      {
        code: "D",
        title: "School Network Security & Reliability",
        items: [
          "Merancang segmentasi jaringan guru, siswa, administrasi, dan server",
          "Menerapkan kebijakan akses antarkelompok jaringan",
          "Mengamankan akses manajemen perangkat jaringan",
          "Backup dan dokumentasi konfigurasi perangkat",
          "Monitoring jaringan dan analisis gangguan konektivitas",
          "Pengenalan Dual-WAN Failover untuk meningkatkan ketersediaan koneksi internet",
        ],
      },
    ],
    finalProject: {
      title: "School Network Infrastructure — Design, Configure & Troubleshoot",
      description: "Peserta berperan sebagai network engineer yang bertugas merancang dan memperbaiki jaringan sebuah SMK.",
      scenario: "Sekolah memiliki ruang guru, ruang administrasi, laboratorium TKJ, jaringan siswa, dan server internal. Jaringan perlu ditata agar konektivitas stabil, akses antarkelompok terkontrol, dan gangguan dapat didiagnosis secara sistematis.",
      tasks: [
        "Membuat topologi dan IP Address Plan sesuai kebutuhan sekolah",
        "Mengonfigurasi MikroTik sebagai gateway jaringan",
        "Mengonfigurasi VLAN, trunking, dan routing pada jaringan Cisco sesuai topologi",
        "Menerapkan firewall dan ACL sesuai kebijakan akses",
        "Menguji konektivitas serta akses ke server berdasarkan hak akses",
        "Mengidentifikasi dan memperbaiki gangguan jaringan yang telah disiapkan trainer",
        "Membuat dokumentasi konfigurasi dan laporan hasil pengujian",
      ],
      output: "Topologi jaringan, konfigurasi perangkat, hasil pengujian, dokumentasi jaringan, dan rancangan praktikum yang dapat dikembangkan kembali untuk pembelajaran TKJ di sekolah masing-masing.",
    },
  },
  {
    id: "desain-ui-ux",
    number: "03",
    title: "Desain UI UX",
    iconName: "PenTool",
    sections: [
      {
        code: "Materi",
        title: "Materi Pelatihan UI/UX Design & AI Vibe Coding",
        items: [
          "Pengenalan UI/UX Design dan User-Centered Design",
          "User Research, User Flow, dan Wireframing",
          "Pembuatan UI Design dan Prototype Website",
          "Implementasi dan Pengelolaan Desain Website dengan Framer",
          "Pengembangan Website menggunakan React dan AI Vibe Coding di Antigravity",
          "Optimasi Tampilan Website dan Responsive Design",
          "Integrasi GitHub untuk Version Control",
          "Deployment Website melalui Vercel atau Netlify",
        ],
      },
    ],
    finalProject: {
      title: "Proyek Praktik UI/UX Design & AI Vibe Coding",
      description:
        "Pelajari cara merancang pengalaman pengguna dan membangun website sekolah modern melalui proses UI/UX Design, Framer, dan AI Vibe Coding hingga siap dipublikasikan secara online!",
      projects: [
        {
          title: "Proyek 1: Merancang UI/UX Website Sekolah dari Wireframe hingga Prototype",
        },
        {
          title: "Proyek 2: Mengimplementasikan Desain menjadi Website menggunakan Framer dan AI Vibe Coding",
        },
        {
          title: "Proyek 3: Mengembangkan Website dengan React melalui Antigravity",
        },
        {
          title: "Proyek 4: Melakukan Push Project ke GitHub dan Deploy Website hingga Online",
        },
      ],
      output:
        "Peserta mampu merancang UI/UX, mengembangkan website sekolah dengan bantuan AI, serta memublikasikan website yang responsif dan dapat diakses secara online.",
    },
  },
  {
    id: "game-dan-multimedia",
    number: "04",
    title: "Game dan Multimedia",
    iconName: "Gamepad2",
    sections: [
      {
        code: "Materi",
        title: "Materi Pelatihan Game & Multimedia",
        items: [
          "Pengenalan Game Development dengan Scratch",
          "Dasar Logika Pemrograman Game",
          "Pembuatan Karakter dan Aset Multimedia",
          "Integrasi Aset dari Scratch dan Canva",
          "Pembuatan Game dengan Canva AI",
          "Pengembangan dan Uji Coba Game Edukasi",
        ],
      },
    ],
    finalProject: {
      title: "Proyek Praktik Game Edukasi",
      description: "Pembuatan media game interaktif yang siap dimainkan dan diterapkan pada media edukasi siswa.",
      projects: [
        {
          title: "Proyek 1: Membuat Game Edukasi dengan Scratch",
          description: "Pengembangan logika game visual dan perancangan gameplay edukatif interaktif.",
        },
        {
          title: "Proyek 2: Membuat Game Edukasi dengan Canva AI",
          description: "Pemanfaatan kecerdasan buatan Canva untuk aset visual dan implementasi game.",
        },
      ],
    },
  },
  {
    id: "full-stack-development-dan-ai",
    number: "05",
    title: "Full Stack Development dan AI",
    iconName: "Code2",
    sections: [
      {
        code: "A",
        title: "AI for Software Development & Prompt Engineering",
        items: [
          "Memahami konsep dasar AI Generatif, LLM, dan perannya dalam rekayasa perangkat lunak",
          "Pengenalan AI Code Assistants (seperti Cursor IDE) untuk mempercepat alur kerja",
          "Menguasai teknik prompting yang efektif untuk Web Development (Zero-shot, Few-shot, Context-building)",
          "Menggunakan AI untuk scaffolding kode, debugging error, dan refactoring",
          "Memahami keamanan data, etika, dan batasan penggunaan AI dalam penulisan kode",
        ],
      },
      {
        code: "B",
        title: "Laravel Fundamentals & Micro-Siakad Design",
        items: [
          "Pengenalan arsitektur MVC (Model-View-Controller) pada framework Laravel",
          "Instalasi environment pengembangan dan setup project Laravel menggunakan bantuan AI Code Assistant",
          "Merancang struktur database Micro-Siakad (Tabel Guru, Siswa, Kelas, Mata Pelajaran, Presensi, dan Nilai)",
          "Implementasi Migrations, Models, dan relasi antar tabel (Eloquent ORM)",
          "Instalasi dan konfigurasi panel admin instan (Laravel Filament atau Breeze) untuk UI yang cepat",
        ],
      },
      {
        code: "C",
        title: "Core Features Development (Akademik & Presensi)",
        items: [
          "Membangun Master Data Management (CRUD) otomatis untuk entitas sekolah",
          "Membuat modul plotting data siswa ke dalam kelas dan tahun ajaran",
          "Mengembangkan antarmuka input nilai akademik akhir semester",
          "Mengembangkan modul presensi harian untuk siswa (berdasarkan kelas) dan guru",
          "Praktik troubleshooting dan error handling dalam Laravel dengan panduan AI",
        ],
      },
      {
        code: "D",
        title: "AI API Integration & System Deployment",
        items: [
          "Pengenalan konsep REST API dan manajemen API Key",
          "Integrasi Laravel HTTP Client dengan API Kecerdasan Buatan (OpenAI / Gemini)",
          "Membangun halaman \"AI School Assistant\" di dalam dashboard Siakad",
          "Merancang dynamic prompt di dalam kode untuk memproses data dari database (otomatisasi surat panggilan/analisis absensi)",
          "Persiapan deployment lokal dan panduan menjalankan aplikasi di jaringan Wi-Fi internal sekolah",
        ],
      },
    ],
    finalProject: {
      title: "Micro-Siakad Pintar — Design, Develop, Integrate & Deploy",
      description: "Peserta berperan sebagai pengembang sekaligus administrator sistem yang bertugas membangun dan mengimplementasikan sistem informasi akademik terpadu di sekolahnya.",
      scenario: "Sekolah membutuhkan sistem yang tidak hanya mencatat absensi harian dan merekap nilai, tetapi juga memiliki Asisten AI cerdas. Sistem ini diharapkan mampu memantau tren kehadiran siswa, mengidentifikasi siswa yang rawan bermasalah, dan secara otomatis dapat membuatkan draf surat panggilan orang tua secara personal dan sopan.",
      tasks: [
        "Melakukan setup project Laravel dan merancang database sekolah dibantu AI",
        "Mengonfigurasi panel admin untuk mengelola data master (guru, siswa, kelas)",
        "Membangun fungsionalitas pencatatan presensi harian dan input nilai akademik",
        "Mengintegrasikan aplikasi dengan API AI eksternal",
        "Merancang dan menguji prompt di dalam aplikasi agar AI dapat menganalisis data absensi/nilai secara akurat",
        "Mengidentifikasi dan memperbaiki bug selama pengembangan menggunakan AI Assistant",
        "Menguji jalannya aplikasi di jaringan lokal sekolah (localhost atau LAN)",
      ],
      output: "Source code aplikasi Micro-Siakad berbasis Laravel yang terintegrasi AI, database awal sekolah, dan sistem yang sudah berjalan di jaringan lokal sehingga siap untuk langsung digunakan secara operasional oleh para guru di sekolah masing-masing, serta dapat diadopsi ke kurikulum sekolah.",
    },
  },
];
