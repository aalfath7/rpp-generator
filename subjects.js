const subjects = {
  Informatika: {
    profilPancasila: [
      "Beriman dan bertakwa kepada Tuhan Yang Maha Esa melalui penggunaan teknologi yang bertanggung jawab.",
      "Mandiri dalam menyelesaikan tantangan pemecahan masalah komputasi.",
      "Bernalar kritis dalam merancang algoritma dan struktur data.",
      "Kreatif dalam membuat solusi digital yang sederhana dan efektif.",
      "Gotong royong dalam proyek teknologi informasi bersama tim.",
      "Berkebhinekaan global melalui penggunaan teknologi untuk komunikasi lintas budaya.",
    ],
    asesmenFormatif: [
      "Observasi proses berpikir komputasional siswa.",
      "Diskusi kelompok tentang solusi algoritma.",
      "Latihan kecil membuat diagram alur dan pseudocode.",
    ],
    asesmenSumatif: [
      "Proyek sederhana berupa pembuatan program atau sistem informasi.",
      "Presentasi hasil pemrograman dan refleksi pembelajaran.",
      "Penilaian portofolio hasil kerja digital siswa.",
    ],
    saranaPrasarana: [
      "Komputer atau laptop.",
      "Koneksi internet untuk sumber belajar tambahan.",
      "Perangkat lunak pengembangan sederhana atau editor teks.",
    ],
    pemahamanMapel:
      "Peserta didik memahami konsep dasar informatika, logika komputasi, dan pemanfaatan teknologi informasi secara bijak.",
  },
  Matematika: {
    profilPancasila: [
      "Beriman dan bertakwa dengan menghargai aturan logika sebagai bagian dari ketertiban ilmu.",
      "Mandiri dalam menyelesaikan masalah numerik dan pola matematika.",
      "Bernalar kritis dalam memeriksa kebenaran langkah perhitungan.",
      "Kreatif dalam mencari strategi pemecahan masalah yang tepat.",
      "Gotong royong melalui diskusi dan kerja kelompok soal matematika.",
      "Berkebhinekaan global dengan menghargai kontribusi matematika dalam berbagai budaya.",
    ],
    asesmenFormatif: [
      "Latihan soal kelompok dengan strategi pemecahan langkah demi langkah.",
      "Diskusi pemahaman konsep melalui contoh nyata.",
      "Penilaian cepat terhadap jawaban siswa secara formatif.",
    ],
    asesmenSumatif: [
      "Ujian tertulis berbasis masalah kontekstual.",
      "Proyek penyelesaian kasus matematis nyata.",
      "Evaluasi kemampuan penalaran dan aplikasi konsep matematika.",
    ],
    saranaPrasarana: [
      "Kalkulator ilmiah atau virtual.",
      "Papan tulis dan spidol.",
      "Media visual seperti grafik dan diagram.",
    ],
    pemahamanMapel:
      "Peserta didik memahami konsep matematika dan mampu memecahkan masalah dengan cara logis dan sistematis.",
  },
  "Bahasa Indonesia": {
    profilPancasila: [
      "Beriman dan bertakwa melalui penghayatan nilai-nilai budaya bangsa dalam teks.",
      "Mandiri dalam membaca, menulis, dan menyunting karya tulis.",
      "Bernalar kritis dalam menganalisis isi bacaan.",
      "Kreatif dalam menyusun karangan dan presentasi bahasa.",
      "Gotong royong melalui diskusi dan kerja sama menulis kelompok.",
      "Berkebhinekaan global dengan menghargai ragam bahasa dan budaya.",
    ],
    asesmenFormatif: [
      "Pengamatan kemampuan membaca dan memahami teks.",
      "Latihan menulis paragraf dan ringkasan.",
      "Diskusi analisis isi teks secara kelompok.",
    ],
    asesmenSumatif: [
      "Penilaian tulisan akhir atau presentasi karya sastra.",
      "Ujian membaca dan menulis kritis.",
      "Refleksi proses menulis secara mandiri.",
    ],
    saranaPrasarana: [
      "Buku teks dan materi bacaan.",
      "Media audio visual untuk pembelajaran bahasa.",
      "Kertas dan alat tulis untuk latihan menulis.",
    ],
    pemahamanMapel:
      "Peserta didik memahami fungsi dan kaidah bahasa Indonesia dalam komunikasi tulis dan lisan yang baik.",
  },
  "Bahasa Inggris": {
    profilPancasila: [
      "Beriman dan bertakwa dengan menghormati nilai-nilai universal dalam komunikasi global.",
      "Mandiri dalam belajar kosakata dan struktur bahasa Inggris.",
      "Bernalar kritis saat membaca dan memahami teks bahasa Inggris.",
      "Kreatif dalam menyusun kalimat dan dialog bahasa Inggris.",
      "Gotong royong dalam aktivitas berbicara dan diskusi kelompok.",
      "Berkebhinekaan global melalui pemahaman budaya berbahasa internasional.",
    ],
    asesmenFormatif: [
      "Latihan percakapan dan respon lisan secara berkelompok.",
      "Tes kosa kata dan tata bahasa sederhana.",
      "Observasi kemampuan membaca dan memahami teks.",
    ],
    asesmenSumatif: [
      "Presentasi dialog atau cerita pendek dalam bahasa Inggris.",
      "Penilaian tulisan singkat dan pemahaman bacaan.",
      "Portofolio komunikasi bahasa Inggris siswa.",
    ],
    saranaPrasarana: [
      "Audio-visual penunjang mendengarkan percakapan.",
      "Kartu kosakata dan materi bacaan berbahasa Inggris.",
      "Akses ke kamus sederhana atau aplikasi pembelajaran bahasa.",
    ],
    pemahamanMapel:
      "Peserta didik memahami fungsi bahasa Inggris dalam komunikasi sederhana dan penggunaan kosakata sehari-hari.",
  },
  IPA: {
    profilPancasila: [
      "Beriman dan bertakwa dengan mempelajari ciptaan Tuhan melalui sains.",
      "Mandiri dalam melakukan pengamatan dan percobaan sederhana.",
      "Bernalar kritis dalam menganalisis data dan fenomena alam.",
      "Kreatif dalam merancang percobaan dan model sains.",
      "Gotong royong ketika bekerja dalam kelompok praktikum.",
      "Berkebhinekaan global dengan menghargai ilmu pengetahuan sebagai warisan umat manusia.",
    ],
    asesmenFormatif: [
      "Pengamatan dan diskusi hasil percobaan.",
      "Latihan menjelaskan konsep ilmiah dengan bahasa sederhana.",
      "Umpan balik terhadap laporan praktikum.",
    ],
    asesmenSumatif: [
      "Laporan praktikum dan presentasi hasil pengamatan.",
      "Tes pemahaman konsep secara tertulis.",
      "Evaluasi aplikasi konsep IPA dalam kehidupan sehari-hari.",
    ],
    saranaPrasarana: [
      "Alat peraga dan bahan praktikum sederhana.",
      "Media visual untuk konsep sains.",
      "Lembar kerja siswa dan modul praktikum.",
    ],
    pemahamanMapel:
      "Peserta didik memahami prinsip dasar IPA dan mampu menerapkannya dalam fenomena alam dan kehidupan.",
  },
  IPS: {
    profilPancasila: [
      "Beriman dan bertakwa melalui pemahaman masyarakat dan budaya lokal.",
      "Mandiri dalam mencari informasi sosial dan geografis.",
      "Bernalar kritis dalam menelaah hubungan sosial dan ekonomi.",
      "Kreatif dalam mempresentasikan hasil studi sosial.",
      "Gotong royong dalam kegiatan proyek IPS kelompok.",
      "Berkebhinekaan global dengan menghargai keberagaman masyarakat dunia.",
    ],
    asesmenFormatif: [
      "Diskusi dan analisis kasus sosial sederhana.",
      "Latihan membuat peta konsep dan diagram hubungan sosial.",
      "Pengamatan dan refleksi tentang lingkungan sosial.",
    ],
    asesmenSumatif: [
      "Proyek penelitian kecil tentang isu sosial atau sejarah.",
      "Presentasi hasil temuan IPS.",
      "Penilaian tulisan reflektif.",
    ],
    saranaPrasarana: [
      "Peta, grafik, dan bahan referensi sejarah.",
      "Media presentasi untuk hasil penelitian.",
      "Buku teks IPS dan lembar kerja siswa.",
    ],
    pemahamanMapel:
      "Peserta didik memahami dinamika sosial, sejarah, dan lingkungan hidup sebagai bagian dari ilmu sosial.",
  },
  PAI: {
    profilPancasila: [
      "Beriman dan bertakwa dengan memahami ajaran agama dan moralitas.",
      "Mandiri dalam mengamalkan nilai-nilai keagamaan.",
      "Bernalar kritis dalam memahami kisah dan ajaran agama.",
      "Kreatif dalam mempresentasikan nilai-nilai islami.",
      "Gotong royong dalam kegiatan keagamaan dan sosial.",
      "Berkebhinekaan global dengan menghargai nilai agama dalam hidup bersama.",
    ],
    asesmenFormatif: [
      "Dialog kelompok tentang nilai-nilai ajaran agama.",
      "Latihan menjelaskan ayat atau hadits sederhana.",
      "Refleksi pribadi dan diskusi keagamaan.",
    ],
    asesmenSumatif: [
      "Presentasi nilai-nilai keagamaan dalam kehidupan sehari-hari.",
      "Evaluasi pemahaman ajaran agama tertulis.",
      "Laporan refleksi spiritual dan etika.",
    ],
    saranaPrasarana: [
      "Al-Qur’an, hadis, dan bahan ajar PAI.",
      "Media audio visual dakwah sederhana.",
      "Ruangan yang tenang untuk pembelajaran agama.",
    ],
    pemahamanMapel:
      "Peserta didik memahami ajaran agama Islam dan mampu mengamalkannya dalam sikap sehari-hari.",
  },
  PJOK: {
    profilPancasila: [
      "Beriman dan bertakwa dengan menjaga tubuh sebagai amanah.",
      "Mandiri dalam menjaga kebugaran jasmani.",
      "Bernalar kritis dalam memilih aktivitas olahraga yang sehat.",
      "Kreatif dalam merancang permainan dan gerak dasar.",
      "Gotong royong dalam latihan dan permainan tim.",
      "Berkebhinekaan global dengan menghormati aturan dalam berbagai olahraga.",
    ],
    asesmenFormatif: [
      "Pengamatan teknik dasar olahraga dan keterampilan gerak.",
      "Latihan motorik dan evaluasi kemampuan fisik.",
      "Diskusi mengenai manfaat olahraga untuk kesehatan.",
    ],
    asesmenSumatif: [
      "Penilaian keterampilan olahraga dan teknik gerak.",
      "Presentasi refleksi tentang aktivitas fisik.",
      "Evaluasi pemahaman teori kesehatan jasmani.",
    ],
    saranaPrasarana: [
      "Lapangan atau ruang olahraga sederhana.",
      "Alat olahraga dasar seperti bola dan pita pengukur.",
      "Media visual teknik gerak fisik.",
    ],
    pemahamanMapel:
      "Peserta didik memahami pentingnya kebugaran jasmani dan mampu menerapkan gerakan olahraga secara aman.",
  },
  "Seni Budaya": {
    profilPancasila: [
      "Beriman dan bertakwa melalui penghargaan seni sebagai ciptaan Tuhan.",
      "Mandiri dalam mengembangkan karya seni dan budaya.",
      "Bernalar kritis dalam mengapresiasi estetika karya seni.",
      "Kreatif dalam mencipta dan mengekspresikan ide seni.",
      "Gotong royong dalam kolaborasi proyek seni budaya.",
      "Berkebhinekaan global dengan menghargai kekayaan budaya lokal dan internasional.",
    ],
    asesmenFormatif: [
      "Observasi karya seni dan diskusi maknanya.",
      "Latihan teknik seni dasar secara bertahap.",
      "Refleksi proses kreatif siswa.",
    ],
    asesmenSumatif: [
      "Pameran karya seni sederhana.",
      "Presentasi konsep dan proses penciptaan karya.",
      "Penilaian portofolio seni budaya siswa.",
    ],
    saranaPrasarana: [
      "Bahan seni seperti kertas, cat, dan alat gambar.",
      "Alat musik sederhana untuk karya pertunjukan.",
      "Ruang kerja yang nyaman untuk aktivitas seni.",
    ],
    pemahamanMapel:
      "Peserta didik memahami nilai estetika dan budaya serta mampu mengungkapkannya melalui karya seni.",
  },
  Prakarya: {
    profilPancasila: [
      "Beriman dan bertakwa dengan menghargai proses kreatif sebagai wujud syukur.",
      "Mandiri dalam merancang dan membuat produk sederhana.",
      "Bernalar kritis dalam memilih bahan dan teknik kerja.",
      "Kreatif dalam menghasilkan produk kerajinan dan usaha kecil.",
      "Gotong royong dalam proyek prakarya kelompok.",
      "Berkebhinekaan global dengan mempelajari kerajinan tradisional dan modern.",
    ],
    asesmenFormatif: [
      "Observasi proses pembuatan produk prakarya.",
      "Diskusi tentang fungsi dan estetika produk.",
      "Latihan penguasaan teknik dasar kerajinan.",
    ],
    asesmenSumatif: [
      "Presentasi produk prakarya dan konsepnya.",
      "Penilaian kualitas produk akhir.",
      "Evaluasi kreativitas dan fungsi produk.",
    ],
    saranaPrasarana: [
      "Bahan-praktik sederhana sesuai jenis prakarya.",
      "Alat kerja aman dan ramah lingkungan.",
      "Media referensi desain produk dan pendekatan kewirausahaan.",
    ],
    pemahamanMapel:
      "Peserta didik memahami prinsip desain dan produksi prakarya serta mampu membuat produk yang bermanfaat.",
  },
  "Bahasa Arab": {
    profilPancasila: [
      "Beriman dan bertakwa dengan mempelajari bacaan dan ungkapan agama dalam bahasa Arab.",
      "Mandiri dalam menghafal kosakata dan ungkapan sederhana.",
      "Bernalar kritis dalam memahami struktur kalimat Arab.",
      "Kreatif dalam melafalkan dan menulis ungkapan sederhana.",
      "Gotong royong dalam pembelajaran kelompok dan berlatih dialog.",
      "Berkebhinekaan global dengan menghormati bahasa Arab sebagai bahasa agama dan budaya.",
    ],
    asesmenFormatif: [
      "Latihan pengucapan dan mengenal kosakata rutin.",
      "Diskusi makna kalimat sederhana dalam bahasa Arab.",
      "Pengamatan kemampuan membaca teks pendek.",
    ],
    asesmenSumatif: [
      "Presentasi kalimat atau dialog bahasa Arab sederhana.",
      "Penilaian menulis kosakata dan struktur kalimat.",
      "Refleksi penggunaan bahasa Arab dalam kehidupan ibadah.",
    ],
    saranaPrasarana: [
      "Buku teks bahasa Arab dan materi audio sederhana.",
      "Kartu kosakata dan media latihan tulisan.",
      "Alat peraga untuk huruf dan kosakata.",
    ],
    pemahamanMapel:
      "Peserta didik memahami dasar bahasa Arab dan mampu menggunakan ungkapan sederhana dalam komunikasi sehari-hari.",
  },
};

const materiDatabase = {
  Informatika: [
    "Berpikir Komputasional",
    "Sistem Komputer",
    "Jaringan Komputer",
    "Internet",
    "Algoritma",
    "Pemrograman",
  ],
  Matematika: [
    "Bilangan Bulat",
    "Pecahan",
    "Aljabar",
    "Persamaan Linear",
    "Statistika",
    "Geometri",
  ],
  "Bahasa Indonesia": [
    "Teks Cerita",
    "Paragraf Persuasi",
    "Ringkasan",
    "Menganalisis Puisi",
    "Menulis Surat Resmi",
  ],
  "Bahasa Inggris": [
    "Perkenalan Diri",
    "Percakapan Sehari-hari",
    "Menyusun Paragraf",
    "Membaca Informasi Singkat",
    "Presentasi Singkat",
  ],
  IPA: [
    "Makhluk Hidup",
    "Ekosistem",
    "Sistem Organ",
    "Perubahan Wujud Benda",
    "Energi dan Perubahannya",
  ],
  IPS: [
    "Sistem Keluarga",
    "Lingkungan Sosial",
    "Sejarah Lokasi",
    "Kegiatan Ekonomi",
    "Geografi Wilayah",
  ],
  PAI: ["Shalat", "Aqidah", "Keutamaan Doa", "Akhlak Mulia", "Sirah Nabi"],
  PJOK: [
    "Kebugaran Jasmani",
    "Senam",
    "Permainan Bola",
    "Pola Gerak Dasar",
    "Kesehatan Tubuh",
  ],
  "Seni Budaya": [
    "Teknik Menggambar",
    "Karya Musik Sederhana",
    "Tari Tradisional",
    "Seni Rupa",
    "Budaya Lokal",
  ],
  Prakarya: [
    "Kerajinan Tangan",
    "Makanan Kreatif",
    "Produk Daur Ulang",
    "Kewirausahaan Sederhana",
    "Desain Produk",
  ],
  "Bahasa Arab": [
    "Kosakata Dasar",
    "Percakapan Sederhana",
    "Kalimat Doa",
    "Huruf Hijaiyah",
    "Pengenalan Al-Qur’an",
  ],
};
