function downloadPdf(element, filename) {
  if (!element) return;
  // Ensure any external school-logo images are embedded as data URLs so html2canvas
  // can render them into the PDF (avoids CORS/external image issues).
  const embedExternalLogos = async () => {
    const imgs =
      element.querySelectorAll && element.querySelectorAll("img.school-logo");
    if (!imgs || imgs.length === 0) return;
    await Promise.all(
      Array.from(imgs).map(async (img) => {
        try {
          const src = img.getAttribute("src") || "";
          if (!src || src.startsWith("data:")) return;
          const resp = await fetch(src, { mode: "cors" });
          if (!resp.ok) return;
          const blob = await resp.blob();
          return new Promise((res) => {
            const reader = new FileReader();
            reader.onload = () => {
              img.src = reader.result;
              res();
            };
            reader.onerror = () => res();
            reader.readAsDataURL(blob);
          });
        } catch (e) {
          // ignore and leave original src (will fallback to SVG placeholder)
        }
      }),
    );
  };

  // Try embedding logos, then render PDF
  embedExternalLogos().finally(() => {
    // clone element to strip visual chrome (shadow, rounded corners)
    const clone = element.cloneNode(true);
    clone.style.boxShadow = "none";
    clone.style.borderRadius = "0";
    clone.style.background = "#ffffff";
    clone.style.margin = "0";
    clone.style.display = "block";
    // compute clone width to account for PDF margins so content won't be clipped
    const pdfMarginMm = 10; // must match options.margin below
    const a4WidthMm = 210;
    const cloneWidthMm = a4WidthMm - pdfMarginMm * 2;
    clone.style.width = `${cloneWidthMm}mm`;
    clone.style.maxWidth = "100%";
    clone.style.minWidth = "auto";
    clone.style.boxSizing = "border-box";
    // keep clone content edge-to-edge; html2pdf `margin` will add page margins/gap
    clone.style.padding = "0";
    clone.id = "__pdf_clone__";
    document.body.appendChild(clone);

    // Ensure school logo images keep their aspect ratio in the cloned node
    const cloneLogos =
      clone.querySelectorAll && clone.querySelectorAll("img.school-logo");
    if (cloneLogos && cloneLogos.length) {
      cloneLogos.forEach((img) => {
        img.style.width = "auto";
        img.style.height = "auto";
        img.style.maxWidth = "120px";
        img.style.maxHeight = "120px";
        img.style.objectFit = "contain";
        img.removeAttribute("width");
        img.removeAttribute("height");
      });
    }

    const options = {
      // give each page a comfortable margin so pages don't visually touch
      margin: pdfMarginMm,
      filename: `${filename || "modul-ajar"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .set(options)
      .from(clone)
      .save()
      .then(() => clone.remove())
      .catch(() => clone.remove());
  });
}

async function exportDocx(data) {
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            text: "Modul Ajar Kurikulum Merdeka",
            heading: docx.HeadingLevel.TITLE,
          }),
          new docx.Paragraph({ text: `Sekolah: ${data.sekolah || "-"}` }),
          new docx.Paragraph({ text: `Nama Guru: ${data.guru || "-"}` }),
          new docx.Paragraph({ text: `NIP/NPP: ${data.nip || "-"}` }),
          new docx.Paragraph({
            text: `Kepala Sekolah: ${data.kepalaSekolah || "-"}`,
          }),
          new docx.Paragraph({
            text: `NIP Kepala Sekolah: ${data.nipKepala || "-"}`,
          }),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Informasi Umum",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          new docx.Paragraph({ text: `Mata Pelajaran: ${data.mapel || "-"}` }),
          new docx.Paragraph({ text: `Materi: ${data.materi || "-"}` }),
          new docx.Paragraph({ text: `Kelas: ${data.kelas || "-"}` }),
          new docx.Paragraph({ text: `Fase: ${data.fase || "-"}` }),
          new docx.Paragraph({
            text: `Pertemuan Ke: ${data.pertemuan || "-"}`,
          }),
          new docx.Paragraph({ text: `Alokasi Waktu: ${data.waktu || "-"}` }),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Tujuan Pembelajaran",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          ...data.tujuan.map(
            (item) => new docx.Paragraph({ text: `• ${item}` }),
          ),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Profil Pelajar Pancasila",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          ...data.profilPancasila.map(
            (item) => new docx.Paragraph({ text: `• ${item}` }),
          ),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Asesmen Formatif",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          ...data.asesmenFormatif.map(
            (item) => new docx.Paragraph({ text: `• ${item}` }),
          ),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Asesmen Sumatif",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          ...data.asesmenSumatif.map(
            (item) => new docx.Paragraph({ text: `• ${item}` }),
          ),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Pemahaman Bermakna",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          new docx.Paragraph({ text: data.pemahamanMapel || "-" }),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Sarana dan Prasarana",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          ...data.saranaPrasarana.map(
            (item) => new docx.Paragraph({ text: `• ${item}` }),
          ),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Langkah Pembelajaran",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          ...Object.entries(data.langkahPembelajaran).map(
            ([phase, description]) =>
              new docx.Paragraph({ text: `${phase}: ${description}` }),
          ),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({
            text: "Rubrik Penilaian",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          new docx.Table({
            rows: [
              new docx.TableRow({
                children: [
                  new docx.TableCell({
                    children: [
                      new docx.Paragraph({ text: "Aspek", bold: true }),
                    ],
                  }),
                  new docx.TableCell({
                    children: [
                      new docx.Paragraph({ text: "Skor", bold: true }),
                    ],
                  }),
                ],
              }),
              ...generateRubricRows().map(
                (row) =>
                  new docx.TableRow({
                    children: [
                      new docx.TableCell({
                        children: [new docx.Paragraph(row.aspect)],
                      }),
                      new docx.TableCell({
                        children: [new docx.Paragraph(row.score)],
                      }),
                    ],
                  }),
              ),
            ],
          }),
        ],
      },
    ],
  });

  const blob = await docx.Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${data.mapel || "modul-ajar"}-${data.materi || "materi"}.docx`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
