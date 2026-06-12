const data = {
  sekolah: "SMPIT AULADINA INDONESIA",
  alamat: "Bandar Lampung",
  tahunPelajaran: "TAHUN PELAJARAN 2023/2024",
  logo: null, // set URL or null to use placeholder
  penyusun: "Farhan Abdillah Alfatih",
  guru: "Farhan Abdillah Alfatih",
  nipGuru: "NPP 202208201018",
  kepalaSekolah: "Lutfi Hery Rahmawan, S.E.I, M.E.",
  nipKepala: "NPP 202208201018",
  mapel: "Desain Grafis",
  materi: "Desain Grafis Dasar",
  fase: "Fase D",
  alokasiWaktu: "6 JP",
  kelas: "VIII",
  pertemuan: "1",
  tujuan: `Siswa mampu memahami dasar-dasar desain grafis, mengidentifikasi elemen visual, dan membuat komposisi sederhana menggunakan prinsip desain. Kegiatan menekankan pembelajaran aktif, kolaboratif, dan praktis.`,
  profilPancasila: [
    {
      name: "Beriman dan Bertakwa",
      desc: "Menunjukkan perilaku religius dan toleran.",
    },
    { name: "Bernalar Kritis", desc: "Berpikir logis dan memecahkan masalah." },
    { name: "Kreatif", desc: "Menghasilkan gagasan dan solusi baru." },
    { name: "Gotong Royong", desc: "Bekerja sama dalam tim." },
    { name: "Mandiri", desc: "Bertanggung jawab atas tugas sendiri." },
    {
      name: "Berkebhinekaan Global",
      desc: "Menghargai perbedaan dan perspektif global.",
    },
  ],
  assessments: {
    diagnostik: ["Pre-test singkat untuk mengetahui pemahaman awal."],
    formatif: ["Kuis singkat", "Tugas praktik membuat poster sederhana"],
    sumatif: ["Proyek akhir: membuat poster tematik"],
  },
  sarana: [
    "Laptop",
    "LCD",
    "Canva",
    "Microsoft Word",
    "Internet",
    "Kahoot",
    "Google Form",
  ],
  steps: [
    {
      stage: "Pembukaan",
      desc: ["Salam dan Apersepsi", "Ice Breaking: Tanya Bumi"],
      media: "-",
      ket: "",
    },
    {
      stage: "Eksplorasi",
      desc: ["Demo teknik dasar", "Praktik singkat"],
      media: "PPT, Canva",
      ket: "",
    },
    {
      stage: "Diskusi",
      desc: ["Diskusi hasil kerja kelompok"],
      media: "-",
      ket: "",
    },
    {
      stage: "Presentasi",
      desc: ["Presentasi kelompok"],
      media: "Canva",
      ket: "",
    },
    {
      stage: "Refleksi",
      desc: ["Sesi tanya jawab dan refleksi"],
      media: "-",
      ket: "",
    },
    {
      stage: "Penutup",
      desc: ["Penugasan rumah dan penutup"],
      media: "-",
      ket: "",
    },
  ],
  activities: [
    { act: "Presentasi", desc: "Presentasi kelompok", media: "Canva" },
    { act: "Aplikasi", desc: "Pembuatan desain sederhana", media: "Canva" },
    { act: "Kuis", desc: "Kuis singkat", media: "Kahoot" },
    { act: "Refleksi", desc: "Mentimeter", media: "Mentimeter" },
  ],
};

function createLogoHTML(logo) {
  if (logo) return `<img src="${logo}" class="school-logo" alt="logo"/>`;
  // simple placeholder SVG
  return `<svg class="school-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0"/><text x="50" y="56" font-size="18" text-anchor="middle" fill="#1f2937" font-family="sans-serif">LOGO</text></svg>`;
}

function renderPage(container, data) {
  const page = document.createElement("article");
  page.className = "rpp-page doc";
  const header = `
    <header class="doc-header">
      <div class="left">
        ${createLogoHTML(data.logo)}
      </div>
      <div class="center">
        <h1>MODUL AJAR</h1>
        <span class="kurikulum">Kurikulum Merdeka</span>
      </div>
      <div class="right">
        <div><strong>${data.sekolah}</strong></div>
        <div>${data.tahunPelajaran}</div>
      </div>
    </header>
  `;

  const infoTable = `
    <table class="info-table" aria-hidden>
      <thead>
        <tr><th colspan="4">Informasi Umum</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Nama Guru</strong></td>
          <td>${data.guru}</td>
          <td><strong>Mata Pelajaran</strong></td>
          <td>${data.mapel}</td>
        </tr>
        <tr>
          <td><strong>Sekolah</strong></td>
          <td>${data.sekolah}</td>
          <td><strong>Bab / Materi</strong></td>
          <td>${data.materi}</td>
        </tr>
        <tr>
          <td><strong>Fase</strong></td>
          <td>${data.fase}</td>
          <td><strong>Alokasi Waktu</strong></td>
          <td>${data.alokasiWaktu}</td>
        </tr>
        <tr>
          <td><strong>Kelas</strong></td>
          <td>${data.kelas}</td>
          <td><strong>Pertemuan Ke</strong></td>
          <td>${data.pertemuan}</td>
        </tr>
      </tbody>
    </table>
  `;

  const tujuan = `
    <section class="tujuan-box">
      <div class="tujuan-title"><span class="ic">🎯</span><span>Tujuan Pembelajaran</span></div>
      <div class="tujuan-content">${data.tujuan}</div>
    </section>
  `;

  const profilRows = data.profilPancasila
    .map(
      (p) =>
        `<tr><td style="width:32px">✔</td><td><strong>${p.name}</strong></td><td>${p.desc}</td></tr>`,
    )
    .join("\n");
  const profil = `
    <table class="profil-table">
      <tbody>
        ${profilRows}
      </tbody>
    </table>
  `;

  const assessments = `
    <section class="assessments">
      <h3>Asesmen</h3>
      <div><strong>Diagnostik</strong><ul>${data.assessments.diagnostik.map((i) => `<li>${i}</li>`).join("")}</ul></div>
      <div><strong>Formatif</strong><ul>${data.assessments.formatif.map((i) => `<li>${i}</li>`).join("")}</ul></div>
      <div><strong>Sumatif</strong><ul>${data.assessments.sumatif.map((i) => `<li>${i}</li>`).join("")}</ul></div>
    </section>
  `;

  const sarana = `
    <section class="sarana">
      <h3>Sarana dan Prasarana</h3>
      <div class="sarana-list">${data.sarana.map((s) => `<span style="display:inline-block;margin:6px 8px;padding:6px 8px;border:1px solid var(--border);border-radius:4px">${s}</span>`).join("")}</div>
    </section>
  `;

  const stepsHead = `
    <table class="steps-table">
      <thead>
        <tr><th>Tahap</th><th>Deskripsi Kegiatan</th><th>Media</th><th>Keterangan</th></tr>
      </thead>
      <tbody>
        ${data.steps.map((s) => `<tr><td>${s.stage}</td><td>${s.desc.map((d) => `<div>• ${d}</div>`).join("")}</td><td>${s.media}</td><td>${s.ket || ""}</td></tr>`).join("")}
      </tbody>
    </table>
  `;

  const activities = `
    <table class="activity-table">
      <thead>
        <tr><th>Aktivitas</th><th>Deskripsi</th><th>Media</th></tr>
      </thead>
      <tbody>
        ${data.activities.map((a) => `<tr><td>${a.act}</td><td>${a.desc}</td><td>${a.media}</td></tr>`).join("")}
      </tbody>
    </table>
  `;

  const footer = `
    <footer class="page-footer">
      <div class="signature">
        <div>Mengetahui,</div>
        <div>Kepala Sekolah</div>
        <div style="height:52px"></div>
        <div class="name">${data.kepalaSekolah}</div>
        <div class="nip">${data.nipKepala || ""}</div>
      </div>
      <div class="signature" style="text-align:right">
        <div>${data.alamat}, ${new Date().toLocaleDateString("id-ID")}</div>
        <div>Guru Mata Pelajaran</div>
        <div style="height:52px"></div>
        <div class="name">${data.guru}</div>
        <div class="nip">${data.nipGuru || ""}</div>
      </div>
    </footer>
  `;

  page.innerHTML =
    header +
    infoTable +
    tujuan +
    `<h3>Profil Pelajar Pancasila</h3>` +
    profil +
    assessments +
    sarana +
    `<h3>Langkah-Langkah Pembelajaran</h3>` +
    stepsHead +
    `<h3>Tabel Aktivitas Pembelajaran</h3>` +
    activities +
    footer;
  container.appendChild(page);
}

function render() {
  const container = document.getElementById("documentContainer");
  container.innerHTML = "";
  const d = getFormData();
  renderPage(container, d);
}

window.addEventListener("DOMContentLoaded", () => {
  const renderBtn = document.getElementById("renderBtn");
  const printBtn = document.getElementById("printBtn");
  renderBtn.addEventListener("click", () => {
    render();
    setTimeout(() => window.scrollTo(0, 0), 50);
  });
  printBtn.addEventListener("click", () => {
    window.print();
  });
  // initial render
  render();
});

function getFormData() {
  const get = (id) =>
    document.getElementById(id) ? document.getElementById(id).value : undefined;
  const out = Object.assign({}, data); // default base
  out.logo = get("schoolLogo") || data.logo;
  out.sekolah = get("sekolah") || data.sekolah;
  out.guru = get("guru") || data.guru;
  out.nipGuru = get("nipGuru") || data.nipGuru;
  out.kepalaSekolah = get("kepalaSekolah") || data.kepalaSekolah;
  out.nipKepala = get("nipKepala") || data.nipKepala;
  out.penyusun = get("penyusun") || data.penyusun;
  out.mapel = get("mapel") || data.mapel;
  out.materi = get("materi") || data.materi;
  out.kelas = get("kelas") || data.kelas;
  out.fase = get("fase") || data.fase;
  out.pertemuan = get("pertemuan") || data.pertemuan;
  out.alokasiWaktu = get("waktu") || data.alokasiWaktu;
  out.tujuan = get("tujuan") || data.tujuan;
  return out;
}
