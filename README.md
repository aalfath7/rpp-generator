# RPP-Generator

Modul Ajar Generator — aplikasi front-end sederhana untuk membuat modul ajar (Modul Ajar / RPP) berbasis HTML/CSS/JS tanpa backend.

Fitur utama:

- Form dinamis untuk mengisi informasi sekolah, guru, modul, dan tujuan pembelajaran.
- Preview dokumen bergaya profesional di sebelah kanan.
- Upload logo sekolah (disimpan sebagai data-URL, dikompres otomatis).
- Ekspor ke PDF (html2pdf) dan DOCX (docx). Riwayat modul disimpan di `localStorage`.

Quick start

1. Buka `index.html` di browser modern (Chrome/Edge/Firefox).
2. Isi form, atau pilih mata pelajaran dan materi.
3. Unggah logo lewat tombol `Upload Logo Sekolah`.
4. Tekan `Generate Modul` untuk menyimpan riwayat.
5. Gunakan `Download PDF` atau `Export DOCX` untuk mengekspor.

Developer notes

- Images are compressed client-side (canvas) before saving to `localStorage`. Beware `localStorage` size limits (~5MB).
- If you need larger storage for images, consider using IndexedDB.
- CSS and export logic live in `style.css` and `export.js` respectively.

Structure

- `index.html` — UI
- `style.css` — styles and responsive layout
- `app.js` — application logic, preview rendering, storage hooks
- `export.js` — PDF / DOCX export helpers
- `storage.js` — localStorage helpers
- `subjects.js`, `generator.js` — content generators and data

Customization

- Color variables are in `:root` in `style.css` — change `--primary` / `--secondary` to adjust theme.

License
This project is provided as-is for personal/educational use.
