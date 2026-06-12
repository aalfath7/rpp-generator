const formElements = {
  schoolLogo: document.getElementById("schoolLogo"),
  schoolLogoFile: document.getElementById("schoolLogoFile"),
  clearLogoButton: document.getElementById("clearLogoButton"),
  sekolah: document.getElementById("sekolah"),
  tahunPelajaran: document.getElementById("tahunPelajaran"),
  guru: document.getElementById("guru"),
  nip: document.getElementById("nip"),
  kepalaSekolah: document.getElementById("kepalaSekolah"),
  nipKepala: document.getElementById("nipKepala"),
  penyusun: document.getElementById("penyusun"),
  mapel: document.getElementById("mapel"),
  materi: document.getElementById("materi"),
  kelas: document.getElementById("kelas"),
  fase: document.getElementById("fase"),
  pertemuan: document.getElementById("pertemuan"),
  waktu: document.getElementById("waktu"),
  tujuan: document.getElementById("tujuan"),
};

const previewDocument = document.getElementById("previewDocument");
const editorSection = document.getElementById("editorSection");
const dashboardSection = document.getElementById("dashboardSection");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const statTotalModules = document.getElementById("statTotalModules");
const statLastSubject = document.getElementById("statLastSubject");
const statLastMaterial = document.getElementById("statLastMaterial");
const statLastGeneratedAt = document.getElementById("statLastGeneratedAt");
const historyList = document.getElementById("historyList");

function createSubjectOptions() {
  formElements.mapel.innerHTML = "";
  Object.keys(subjects).forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    formElements.mapel.appendChild(option);
  });
}

function createMaterialOptions(subject) {
  const materials = materiDatabase[subject] || [];
  formElements.materi.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = materials.length
    ? "Pilih Materi"
    : "Pilih Mata Pelajaran terlebih dahulu";
  formElements.materi.appendChild(placeholder);

  materials.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    formElements.materi.appendChild(option);
  });
}

function getFormData() {
  return {
    schoolLogo: formElements.schoolLogo.value.trim(),
    sekolah: formElements.sekolah.value.trim(),
    tahunPelajaran: formElements.tahunPelajaran.value.trim(),
    guru: formElements.guru.value.trim(),
    nip: formElements.nip.value.trim(),
    kepalaSekolah: formElements.kepalaSekolah.value.trim(),
    penyusun: formElements.penyusun.value.trim(),
    mapel: formElements.mapel.value,
    materi: formElements.materi.value,
    kelas: formElements.kelas.value.trim(),
    fase: formElements.fase.value.trim(),
    pertemuan: formElements.pertemuan.value.trim(),
    waktu: formElements.waktu.value.trim(),
    tujuan: formElements.tujuan.value.trim(),
  };
}

function setFormData(data) {
  Object.keys(data).forEach((key) => {
    if (formElements[key]) {
      // do not programmatically set file input values (security & browser restriction)
      if (formElements[key].type === "file") return;
      formElements[key].value = data[key];
    }
  });
}

function loadFormData() {
  const saved = loadAppData();
  if (!saved) {
    const firstSubject = Object.keys(subjects)[0] || "";
    formElements.mapel.value = firstSubject;
    createMaterialOptions(firstSubject);
    return;
  }

  if (!Object.keys(subjects).includes(saved.mapel)) {
    saved.mapel = Object.keys(subjects)[0] || "";
  }

  setFormData(saved);
  createMaterialOptions(saved.mapel);
  if (saved.materi) {
    formElements.materi.value = saved.materi;
  }
}

function saveFormData() {
  saveAppData(getFormData());
}

function formatList(items) {
  if (!items || items.length === 0) {
    return "<p><em>Belum diisi.</em></p>";
  }
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function buildLessonTableHtml(steps) {
  const rows = Object.entries(steps).map(
    ([phase, description]) => `
    <tr>
      <td>${phase}</td>
      <td>${description}</td>
      <td>-</td>
    </tr>
  `,
  );

  return `
    <div class="table-wrapper">
      <table class="lesson-table">
        <thead>
          <tr>
            <th>Tahap</th>
            <th>Deskripsi Kegiatan</th>
            <th>Media dan Sarana</th>
          </tr>
        </thead>
        <tbody>
          ${rows.join("")}
        </tbody>
      </table>
    </div>
  `;
}

function buildRubricTableHtml() {
  const rows = generateRubricRows().map(
    (row) => `
    <tr>
      <td>${row.aspect}</td>
      <td>${row.score}</td>
    </tr>
  `,
  );
  return `
    <div class="table-wrapper">
      <table class="rubric-table">
        <thead>
          <tr>
            <th>Aspek</th>
            <th>Skor</th>
          </tr>
        </thead>
        <tbody>
          ${rows.join("")}
        </tbody>
      </table>
    </div>
  `;
}

function buildPreviewHtml(data) {
  const subjectTemplate = subjects[data.mapel] || null;
  const tujuanText = data.tujuan
    ? data.tujuan
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
    : generateTujuan(data.mapel, data.materi);
  const langkahPembelajaran = generateLangkahPembelajaran(
    data.mapel,
    data.materi,
  );

  const tujuanItems = tujuanText;
  const tujuanHtml = tujuanItems.length
    ? `<ul>${tujuanItems.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : `<p><em>Belum diisi.</em></p>`;
  const profilList = subjectTemplate
    ? subjectTemplate.profilPancasila
    : [
        "Beriman dan bertakwa kepada Tuhan Yang Maha Esa",
        "Bernalar Kritis",
        "Kreatif",
        "Gotong Royong",
        "Mandiri",
        "Berkebhinekaan Global",
      ];
  const asesmenFormatif = subjectTemplate
    ? subjectTemplate.asesmenFormatif
    : ["Kuis singkat", "Tugas proyek sederhana"];
  const asesmenSumatif = subjectTemplate
    ? subjectTemplate.asesmenSumatif
    : ["Proyek akhir"].filter(Boolean);
  const sarana = subjectTemplate
    ? subjectTemplate.saranaPrasarana
    : ["Laptop", "LCD", "Canva", "Word", "Internet", "Kahoot", "Google Form"];
  const activities = data.activities || [
    { act: "Presentasi", desc: "Presentasi kelompok", media: "Canva" },
    { act: "Aplikasi", desc: "Pembuatan desain sederhana", media: "Canva" },
    { act: "Kuis", desc: "Kuis singkat", media: "Kahoot" },
    { act: "Refleksi", desc: "Refleksi kelas", media: "Mentimeter" },
  ];
  const headerLogo = data.schoolLogo
    ? `<img class="school-logo" src="${encodeURI(data.schoolLogo)}" alt="Logo Sekolah" onerror="this.style.display='none'" />`
    : `<svg class="school-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0"/><text x="50" y="56" font-size="18" text-anchor="middle" fill="#1f2937" font-family="sans-serif">LOGO</text></svg>`;

  return `
    <div class="preview-document">
      <div class="doc-header">
        <div class="left">${headerLogo}</div>
        <div class="center">
          <h1>MODUL AJAR</h1>
          <span class="kurikulum">Kurikulum Merdeka</span>
        </div>
        <div class="right">
          <div><strong>${data.sekolah || "-"}</strong></div>
          <div>${data.tahunPelajaran || "TAHUN PELAJARAN 2023/2024"}</div>
        </div>
      </div>

      <section class="preview-section">
        <table class="info-table">
          <thead>
            <tr><th colspan="4">Informasi Umum</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nama Penyusun</strong></td><td>${data.penyusun || "-"}</td>
              <td><strong>Nama Guru</strong></td><td>${data.guru || "-"}</td>
            </tr>
            <tr>
              <td><strong>Nama Sekolah</strong></td><td>${data.sekolah || "-"}</td>
              <td><strong>Mata Pelajaran</strong></td><td>${data.mapel || "-"}</td>
            </tr>
            <tr>
              <td><strong>Bab / Materi</strong></td><td>${data.materi || "-"}</td>
              <td><strong>Fase</strong></td><td>${data.fase || "-"}</td>
            </tr>
            <tr>
              <td><strong>Kelas</strong></td><td>${data.kelas || "-"}</td>
              <td><strong>Pertemuan Ke</strong></td><td>${data.pertemuan || "-"}</td>
            </tr>
            <tr>
              <td><strong>Alokasi Waktu</strong></td><td>${data.waktu || "-"}</td>
              <td><strong>Tahun Pelajaran</strong></td><td>${data.tahunPelajaran || "-"}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="preview-section">
        <div class="tujuan-box">
          <div class="tujuan-title"><span class="ic">🎯</span><span>Tujuan Pembelajaran</span></div>
          <div class="tujuan-content">${tujuanHtml}</div>
        </div>
      </section>

      <section class="preview-section">
        <h3>Profil Pelajar Pancasila</h3>
        <table class="profil-table">
          <tbody>
            ${profilList
              .map(
                (item) =>
                  `<tr><td style="width:32px">✔</td><td>${item}</td></tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </section>

      <section class="preview-section">
        <h3>Asesmen</h3>
        <div class="assesment-grid">
          <div><strong>Diagnostik</strong>${formatList(data.assessments?.diagnostik || ["Belum diisi"])} </div>
          <div><strong>Formatif</strong>${formatList(asesmenFormatif)}</div>
          <div><strong>Sumatif</strong>${formatList(asesmenSumatif)}</div>
        </div>
      </section>

      <section class="preview-section">
        <h3>Sarana dan Prasarana</h3>
        <div class="sarana">
          ${sarana.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="preview-section">
        <h3>Langkah-Langkah Pembelajaran</h3>
        <table class="steps-table">
          <thead>
            <tr><th>Tahap</th><th>Deskripsi Kegiatan</th><th>Media</th><th>Keterangan</th></tr>
          </thead>
          <tbody>
            ${Object.entries(langkahPembelajaran)
              .map(
                ([phase, desc]) =>
                  `<tr><td>${phase}</td><td>${desc}</td><td>-</td><td></td></tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </section>

      <section class="preview-section">
        <h3>Tabel Aktivitas Pembelajaran</h3>
        <table class="activity-table">
          <thead>
            <tr><th>Aktivitas</th><th>Deskripsi</th><th>Media</th></tr>
          </thead>
          <tbody>
            ${activities
              .map(
                (item) =>
                  `<tr><td>${item.act}</td><td>${item.desc}</td><td>${item.media}</td></tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </section>

      <footer class="page-footer">
        <div class="signature">
          <div>Mengetahui,</div>
          <div>Kepala Sekolah</div>
          <div style="height:52px"></div>
          <div class="name">${data.kepalaSekolah || "-"}</div>
          <div class="nip">${data.nipKepala || "-"}</div>
        </div>
        <div class="signature" style="text-align:right">
          <div>${data.sekolah || ""}, ${new Date().toLocaleDateString("id-ID")}</div>
          <div>Guru Mata Pelajaran</div>
          <div style="height:52px"></div>
          <div class="name">${data.guru || "-"}</div>
          <div class="nip">${data.nip || "-"}</div>
        </div>
      </footer>
    </div>
  `;
}

function updatePreview() {
  const data = getFormData();
  previewDocument.innerHTML = buildPreviewHtml(data);
}

function updateDashboard() {
  const stats = getDashboardStats();
  statTotalModules.textContent = stats.totalModules;
  statLastSubject.textContent = stats.lastSubject;
  statLastMaterial.textContent = stats.lastMaterial;
  statLastGeneratedAt.textContent = stats.lastGeneratedAt;

  const history = loadHistory().slice(-6).reverse();
  historyList.innerHTML = history
    .map((entry) => {
      const label =
        entry.subject && entry.material
          ? `${entry.subject} - ${entry.material}`
          : "Modul belum lengkap";
      const generated = entry.createdAt
        ? new Date(entry.createdAt).toLocaleString("id-ID", {
            dateStyle: "medium",
            timeStyle: "short",
          })
        : "-";
      return `<li><strong>${label}</strong><br /><small>${generated}</small></li>`;
    })
    .join("");
}

function switchView(view) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  editorSection.classList.toggle("hidden", view !== "editor");
  dashboardSection.classList.toggle("hidden", view !== "dashboard");
}

function handleGenerate() {
  const data = getFormData();
  saveFormData();
  addHistoryEntry({
    subject: data.mapel || "-",
    material: data.materi || "-",
    createdAt: new Date().toISOString(),
  });
  updateDashboard();
  updatePreview();
}

function handleDownloadPdf() {
  const data = getFormData();
  const previewShell =
    document.getElementById("previewSection") || previewDocument;
  // export the inner white document to avoid gray gutters
  downloadPdf(
    previewDocument,
    `${data.mapel || "modul-ajar"}-${data.materi || "materi"}`,
  );
}

function handleExportDocx() {
  const data = getFormData();
  exportDocx({
    sekolah: data.sekolah,
    guru: data.guru,
    nip: data.nip,
    nipKepala: data.nipKepala,
    kepalaSekolah: data.kepalaSekolah,
    mapel: data.mapel,
    materi: data.materi,
    kelas: data.kelas,
    fase: data.fase,
    pertemuan: data.pertemuan,
    waktu: data.waktu,
    tujuan: data.tujuan
      ? data.tujuan
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
      : generateTujuan(data.mapel, data.materi),
    profilPancasila: subjects[data.mapel]?.profilPancasila || [],
    asesmenFormatif: subjects[data.mapel]?.asesmenFormatif || [],
    asesmenSumatif: subjects[data.mapel]?.asesmenSumatif || [],
    pemahamanMapel: subjects[data.mapel]?.pemahamanMapel || "",
    saranaPrasarana: subjects[data.mapel]?.saranaPrasarana || [],
    langkahPembelajaran: generateLangkahPembelajaran(data.mapel, data.materi),
  });
}

function openChatGPT() {
  const data = getFormData();
  const subjectData = subjects[data.mapel] || {};
  const prompt =
    `Tolong buatkan modul ajar Kurikulum Merdeka yang lebih lengkap berdasarkan data berikut:\n` +
    `Sekolah: ${data.sekolah}\n` +
    `Nama Guru: ${data.guru}\n` +
    `NIP/NPP: ${data.nip}\n` +
    `Kepala Sekolah: ${data.kepalaSekolah}\n` +
    `Nama Penyusun: ${data.penyusun}\n` +
    `Mata Pelajaran: ${data.mapel}\n` +
    `Materi: ${data.materi}\n` +
    `Kelas: ${data.kelas}\n` +
    `Fase: ${data.fase}\n` +
    `Pertemuan Ke: ${data.pertemuan}\n` +
    `Alokasi Waktu: ${data.waktu}\n` +
    `Tujuan Pembelajaran: ${data.tujuan}\n` +
    `Profil Pelajar Pancasila: ${subjectData.profilPancasila?.join(", ") || "-"}\n` +
    `Asesmen Formatif: ${subjectData.asesmenFormatif?.join(", ") || "-"}\n` +
    `Asesmen Sumatif: ${subjectData.asesmenSumatif?.join(", ") || "-"}\n` +
    `Pemahaman Bermakna: ${subjectData.pemahamanMapel || "-"}\n` +
    `Langkah Pembelajaran: ${Object.entries(
      generateLangkahPembelajaran(data.mapel, data.materi),
    )
      .map(([phase, text]) => `${phase}: ${text}`)
      .join("; ")}.\n` +
    `Tolong susun ulang dan perbaiki modul ajar ini menjadi format profesional.`;

  window.open(`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`, "_blank");
}

function bindEvents() {
  // Compress image utility: read file, resize to max dims and return data-URL
  function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(width * ratio);
          canvas.height = Math.round(height * ratio);
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const mime = file.type === "image/png" ? "image/png" : "image/jpeg";
          const dataUrl = canvas.toDataURL(mime, quality);
          resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = reader.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  Object.values(formElements).forEach((input) => {
    input.addEventListener("input", () => {
      saveFormData();
      updatePreview();
    });
  });

  // handle file upload for school logo separately
  if (formElements.schoolLogoFile) {
    formElements.schoolLogoFile.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const dataUrl = await compressImage(file, 800, 800, 0.8);
        formElements.schoolLogo.value = dataUrl;
        saveFormData();
        updatePreview();
      } catch (err) {
        // fallback to raw file if compression fails
        const reader = new FileReader();
        reader.onload = () => {
          formElements.schoolLogo.value = reader.result;
          saveFormData();
          updatePreview();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (formElements.clearLogoButton) {
    formElements.clearLogoButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (formElements.schoolLogo) formElements.schoolLogo.value = "";
      if (formElements.schoolLogoFile) formElements.schoolLogoFile.value = "";
      saveFormData();
      updatePreview();
    });
  }

  formElements.mapel.addEventListener("change", () => {
    createMaterialOptions(formElements.mapel.value);
    saveFormData();
    updatePreview();
  });

  document
    .getElementById("generateButton")
    .addEventListener("click", (event) => {
      event.preventDefault();
      handleGenerate();
    });

  document
    .getElementById("downloadButton")
    .addEventListener("click", (event) => {
      event.preventDefault();
      handleDownloadPdf();
    });

  document
    .getElementById("exportDocxButton")
    .addEventListener("click", (event) => {
      event.preventDefault();
      handleExportDocx();
    });

  document.getElementById("printButton").addEventListener("click", (event) => {
    event.preventDefault();
    window.print();
  });

  document
    .getElementById("chatgptButton")
    .addEventListener("click", (event) => {
      event.preventDefault();
      openChatGPT();
    });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchView(button.dataset.view);
    });
  });
}

function initializeApp() {
  createSubjectOptions();
  createMaterialOptions(Object.keys(subjects)[0]);
  loadFormData();
  updatePreview();
  updateDashboard();
  bindEvents();
}

initializeApp();
