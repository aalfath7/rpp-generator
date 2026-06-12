const subjectContexts = {
  Informatika: "dalam teknologi informasi dan solusi digital",
  Matematika: "dalam pemecahan masalah sehari-hari",
  "Bahasa Indonesia": "dalam komunikasi dan literasi bahasa Indonesia",
  "Bahasa Inggris": "dalam komunikasi global",
  IPA: "dalam sains dan fenomena alam",
  IPS: "dalam kehidupan bermasyarakat",
  PAI: "dalam nilai-nilai agama dan moral",
  PJOK: "dalam kebugaran jasmani dan kesehatan",
  "Seni Budaya": "dalam estetika dan budaya lokal",
  Prakarya: "dalam kreativitas dan keterampilan praktis",
  "Bahasa Arab": "dalam komunikasi ibadah dan budaya Arab",
};

function generateTujuan(mapel, materi) {
  const topik = materi.trim() || "materi pembelajaran";
  const konteks = subjectContexts[mapel] || "dalam konteks pembelajaran";
  return [
    `Peserta didik memahami konsep ${topik}.`,
    `Peserta didik mampu menjelaskan ${topik} dengan jelas dan benar.`,
    `Peserta didik mampu menerapkan ${topik} ${konteks}.`,
  ];
}

function generateLangkahPembelajaran(mapel, materi) {
  const topik = materi.trim() || "materi";
  const context = subjectContexts[mapel] || "dalam kehidupan sehari-hari";
  const phaseContext = {
    Informatika: "menggunakan perangkat digital dan pemrograman sederhana",
    Matematika: "dengan contoh soal dan model visual",
    "Bahasa Indonesia": "dengan teks dan latihan tulisan",
    "Bahasa Inggris": "dengan dialog dan latihan kosakata",
    IPA: "dengan percobaan dan observasi alam",
    IPS: "dengan studi kasus masyarakat dan peta",
    PAI: "dengan cerita agama dan nilai moral",
    PJOK: "dengan gerak dan permainan sehat",
    "Seni Budaya": "dengan praktik karya dan apresiasi seni",
    Prakarya: "dengan produk kreatif dan teknik kerja",
    "Bahasa Arab": "dengan kosakata dan ungkapan sederhana",
  };
  const detail = phaseContext[mapel] || "dengan pendekatan kontekstual";

  return {
    Opener: `Salam, apersepsi, dan motivasi pembelajaran terkait ${topik} ${detail}.`,
    Telaah: `Guru menjelaskan konsep utama ${topik} dan mengaitkannya dengan pengalaman siswa.`,
    Eksplorasi: `Siswa mengeksplorasi ${topik} melalui kegiatan observasi, diskusi, atau praktik.`,
    Rumuskan: `Siswa merumuskan pemahaman awal tentang ${topik} dan menyusun kesimpulan sementara.`,
    Energizer: `Kegiatan singkat untuk menguatkan energi dan konsentrasi sebelum melanjutkan pembelajaran ${topik}.`,
    Presentasikan: `Siswa mempresentasikan hasil pengamatan atau produk pembelajaran ${topik}.`,
    Aplikasikan: `Siswa menerapkan ${topik} melalui latihan, proyek kecil, atau simulasi ${context}.`,
    "Kaitkan dan Simpulkan": `Guru mengaitkan ${topik} dengan konteks nyata dan menyimpulkan poin-poin penting.`,
    Duniawi: `Siswa mengidentifikasi penerapan ${topik} dalam kehidupan sehari-hari dan masyarakat.`,
    Ukhrowi: `Siswa merefleksikan nilai spiritual atau etika yang terkait dengan ${topik}.`,
    Closure: `Penutup, refleksi siswa, dan penguatan tujuan pembelajaran ${topik}.`,
  };
}

function generateRubricRows() {
  return [
    { aspect: "Pemahaman Materi", score: "-" },
    { aspect: "Kreativitas", score: "-" },
    { aspect: "Kerjasama", score: "-" },
    { aspect: "Presentasi", score: "-" },
  ];
}
