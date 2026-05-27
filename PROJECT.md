# PROJECT WEBSITE OSIS SMKN 68 JAKARTA

## STRUCTURE 
$ find .
./content
./content/.DS_Store
./content/articles
./content/articles/demo-proker-artikel-digital.md
./content/articles/image-1.png
./content/articles/image.png
./content/articles-manifest.json
./content/osis-data.json
./content/proker-data.json
./css
./css/style.css
./img
./img/.DS_Store
./img/assets
./img/assets/img1.jpeg
./img/covers
./img/covers/12ewqda.jpeg
./img/covers/demo-proker-artikel-digital.png
./img/covers/news1.jpg
./img/covers/news2.jpg
./img/covers/news3.jpg
./img/covers/slad.jpeg
./img/icon.png
./img/slide1.jpg
./img/slide2.jpg
./img/slide3.jpg
./index.html
./js
./js/app.js
./js/articles.js
./js/components.js
./js/home.js
./js/md-parser.js
./js/proker.js
./js/struktur.js
./PROJECT.md
./README.md
./static
./static/about.html
./static/articles
./static/articles/demo-proker-artikel-digital.html
./static/articles.html
./static/contacts.html
./static/proker.html
./static/struktur.html
./TODO.md
./tools
./tools/build.py

## FILES

`content/articles/demo-proker-artikel-digital.md`
```markdown
---
title: Demo Program Kerja Artikel Digital
category: Edukasi
author: Ikram Rahmani
date: 25 Mei 2026
date_iso: 2026-05-25
excerpt: Ini adalah cara baru kita untuk memberikan informasi dan transparansi serta membentuk portofolio yang baik untuk organisasi
cover: https://github.com/lkssmkn68/website-osis-test/blob/main/img/covers/demo-proker-artikel-digital.png?raw=true
featured: True
---

Selamat datang di platform digital kami yang baru saja kami buat! Kami dengan bangga mengumumkan peluncuran serangkaian fitur interaktif baru yang dirancang khusus untuk meningkatkan kenyamanan akses informasi Anda.

## Untuk apa adanya sebuah website?

Kami mengharapkan dengan adanya website ini, organisasi OSIS dapat membentuk portofolio yang baik untuk kedepannya dan membentuk habit literasi digital yang baik. Kami juga ingin meningkatkan daya literasi siswa SMKN 68 Jakarta, dengan adanya artikel digital seperti ini kami timbulnya minat baca informasi untuk murid SMKN 68 Jakarta

## Lalu, Mengapa harus digital?
![Manusia Gua](https://github.com/lkssmkn68/website-osis-test/blob/main/img/assets/img1.jpeg?raw=true)
Di zaman serba canggih ini tidak memungkinkan untuk kita jika harus selalu menjadi manusia gua dan tidak mau update perkembangan zaman. Dengan kita mendigitalisasikan sarana informasi kita, secara tidak langsung kita telah berpartisipasi akan perkembangan zaman yang sekarang sangat cepat. Ini adalah salah satu tindakan kita untuk bisa melatih kemampuan siswa siswa untuk bisa terus mengikuti perkembangan zaman.

> Tetap lah memiliki rasa penasaran karena kita adalah manusia!
```

`content/articles-manifest.json`
```json
[
  {
    "id": "demo-proker-artikel-digital",
    "file": "content/articles/demo-proker-artikel-digital.md",
    "title": "Demo Program Kerja Artikel Digital",
    "author": "Ikram Rahmani",
    "date": "2026-05-25",
    "date_display": "25 Mei 2026",
    "readtime": "1 menit",
    "cover": "https://github.com/lkssmkn68/website-osis-test/blob/main/img/covers/demo-proker-artikel-digital.png?raw=true",
    "cover_caption": "",
    "category": "edukasi",
    "category_display": "Edukasi",
    "excerpt": "Ini adalah cara baru kita untuk memberikan informasi dan transparansi serta membentuk portofolio yang baik untuk organisasi",
    "featured": true,
    "body": "Selamat datang di platform digital kami yang baru saja kami buat! Kami dengan bangga mengumumkan peluncuran serangkaian fitur interaktif baru yang dirancang khusus untuk meningkatkan kenyamanan akses informasi Anda.\n\n## Untuk apa adanya sebuah website?\n\nKami mengharapkan dengan adanya website ini, organisasi OSIS dapat membentuk portofolio yang baik untuk kedepannya dan membentuk habit literasi digital yang baik. Kami juga ingin meningkatkan daya literasi siswa SMKN 68 Jakarta, dengan adanya artikel digital seperti ini kami timbulnya minat baca informasi untuk murid SMKN 68 Jakarta\n\n## Lalu, Mengapa harus digital?\n![Manusia Gua](https://github.com/lkssmkn68/website-osis-test/blob/main/img/assets/img1.jpeg?raw=true)\nDi zaman serba canggih ini tidak memungkinkan untuk kita jika harus selalu menjadi manusia gua dan tidak mau update perkembangan zaman. Dengan kita mendigitalisasikan sarana informasi kita, secara tidak langsung kita telah berpartisipasi akan perkembangan zaman yang sekarang sangat cepat. Ini adalah salah satu tindakan kita untuk bisa melatih kemampuan siswa siswa untuk bisa terus mengikuti perkembangan zaman.\n\n> Tetap lah memiliki rasa penasaran karena kita adalah manusia!"
  }
]
```

`content/osis-data.json`
```json
{
  "pimpinanAtas": [
    { "nama": "Marlinah M.Pd", "jabatan": "Kepala Sekolah" },
    { "nama": "Etty Soelistyowati Wulandari", "jabatan": "Wakil Kepala Bidang Kesiswaan" },
    { "nama": "Muhammad Bintang Nugraha, S.Pd", "jabatan": "Pembina OSIS" },
    { "nama": "Wahid Ramdani", "jabatan": "Ketua OSIS" },
    { "nama": "Maqdis G. Al Adzani", "jabatan": "Wakil Ketua OSIS" }
  ],
  "sekretaris": [
    { "nama": "Dascha Anandita", "jabatan": "Sekretaris I" },
    { "nama": "Azzaleya May Faeza", "jabatan": "Sekretaris II" }
  ],
  "bendahara": [
    { "nama": "Federikho Prayoga", "jabatan": "Bendahara I" },
    { "nama": "Nauval Abiyu S.", "jabatan": "Bendahara II" }
  ],
  "koordinator": { "nama": "Anita Solehah", "jabatan": "Koordinator Sekbid" },
  "sekbid": [
    {
      "nama": "Kerohanian",
      "ketua": "Fajar Faiz Basri",
      "departemen": [
        { "nama": "Dept. Keagamaan", "anggota": ["Christian Timbul S.", "M. Adi Yuna"] },
        { "nama": "Dept. Kerukunan & Toleransi", "anggota": ["Dinar Rifa A."] }
      ]
    },
    {
      "nama": "Kedisiplinan",
      "ketua": "Fearbly A. Hafidzh",
      "departemen": [
        { "nama": "Dept. Tata Tertib", "anggota": ["Gautama A. Setyandi"] },
        { "nama": "Dept. Budi Pekerti", "anggota": ["Dimas Maulana", "Jenyka Suliestia"] }
      ]
    },
    {
      "nama": "Dana Usaha",
      "ketua": "Fakhri Ghozi",
      "departemen": [
        { "nama": "Dept. Sponsorship", "anggota": ["Rasya Eka Putra"] },
        { "nama": "Dept. Dana Usaha", "anggota": ["Achmad Kafi", "Satria P Prakasa"] }
      ]
    },
    {
      "nama": "Humas IT",
      "ketua": "Mutia Dewi",
      "departemen": [
        { "nama": "Dept. Humas", "anggota": ["Samuel Tamba"] },
        { "nama": "Dept. IT", "anggota": ["Ikram Rahmani"] }
      ]
    },
    {
      "nama": "Jasmani & Kreativitas",
      "ketua": "Hilal Jamaludin",
      "departemen": [
        { "nama": "Dept. Kreativitas", "anggota": ["Anita Yuliasari", "Maylaffayzza S."] },
        { "nama": "Dept. Jasmani", "anggota": ["Abbiel Azka A.", "Ahmad Azri"] },
        { "nama": "Dept. Sastra Bahasa", "anggota": ["Elisa Ramadhani", "Nadya Ablyah Dwi N"] }
      ]
    }
  ]
}

```

`content/proker-data.json`
```json
[
    {
        "id": "bph",
        "nama": "Badan Pengurus Harian",
        "proker": [
          {
            "judul": "Solve It!",
            "deskripsi": "Mengadakan diskusi mingguan tiap divisi OSIS membuat solusi kecil terhadap masalah di bidangnya masing-masing. Misalnya, divisi yang merasa programnya belum berjalan maksimal dan hampir mendekati programnya. Dapat mengadakan diskusi internal untuk mencari tahu penyebab dan merancang langkah yang realistis",
            "periode": "Unggulan",
            "status": "Aktif",
            "status_class": "status-running"
          },
          {
            "judul": "Seminar Inspiratif OSIS Per Sekbid",
            "deskripsi": "Mengadakan seminar atau sharing session secara bergiliran untuk setiap seksi bidang (sekbid) OSIS serta menanamkan nilai budi pekerti melalui kegiatan harian.",
            "periode": "Berkelanjutan",
            "status": "Aktif",
            "status_class": "status-running"
          },
          {
            "judul": "Kunjungan antar Sekolah OSIS",
            "deskripsi": "Melakukan kunjugan ke sekolah lain dan berkomunikasi dengan anggota OSIS dari sekolah yang dikunjungi untuk berbagi aspirasi satu golongan OSIS.",
            "periode": "Berkelanjutan",
            "status": "Tahap Perencanaan",
            "status_class": ""
          }
        ]
    },
    {
      "id": "humas-it",
      "nama": "Seksi Bidang Humas IT",
      "proker": [
        {
          "judul": "Jurnalistik Kegiatan OSIS",
          "deskripsi": "Mebuat kreasi berupa  artikel yang harus dibuat per sekbid dengan judul dan tema sesuai tugas masing masing serta dapat di ekspan ke lingkup siswa.",
          "periode": "Unggulan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Website Resmi OSIS SMKN 68 Jakarta",
          "deskripsi": "Membangun dan memelihara website resmi OSIS sebagai pusat informasi digital sekolah.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Merangkum Kegiatan OSIS",
          "deskripsi": "Meringkas event atau acara yang dilaksanakan osis.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Penjadwalan Konten Sosial Media",
          "deskripsi": "Membuat jadwal untuk konten yang akan dibuat berdasarkan yang trending.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Pembuatan Sarana Sumber Informasi & Layanan Aduan",
          "deskripsi": "Membuat sumber informasi berupa saluran whatsapp serta terdapat layanan aduan siswa dalam bentuk nomor aduan osis.",
          "periode": "Berkelanjutan",
          "status": "Tahap Perencanaan",
          "status_class": ""
        }
      ]
    },
    {
      "id": "kerohanian",
      "nama": "Seksi Bidang Kerohanian",
      "proker": [
        {
          "judul": "Challange Muslim",
          "deskripsi": "Mengadakan event kegiatan lomba setiap minggu untuk siswa 68 mendekatkan diri kepada Allah",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Memperingati Hari Besar Islam",
          "deskripsi": "Mengadakan lomba atau acara saat peringatan hari besar Islam seperti Maulid Nabi dan Isra Mi'raj.",
          "periode": "Q1X",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Kajian Rohani",
          "deskripsi": "Kegiatan kajian yang membahas tentang akhlak atau hal yang relevan dengan Islam, khususnya untuk remaja.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Ibadah Jumat & Renungan Harian bagi Siswa Beragama Kristen",
          "deskripsi": "Mengadakan ibadah bagi umat Kristen.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Perayaan Hari Besar Umat Kristiani",
          "deskripsi": "Mengadakan ibadah khusus untuk memperingati hari besar keagamaan.",
          "periode": "Q3",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Retret untuk Agama Kristen",
          "deskripsi": "Kegiatan di luar sekolah untuk meningkatkan keimanan.",
          "periode": "Q2",
          "status": "Tahap Perencanaan",
          "status_class": ""
        }
      ]
    },
    {
      "id": "kedisiplinan",
      "nama": "Seksi Bidang Kedisiplinan",
      "proker": [
        {
          "judul": "SEKAR (Seminar Karakter Siswa)",
          "deskripsi": "Sekbid kedisiplinan  Kolaborasi dengan Guru, kerohanian, BK dan kesiswaan.",
          "periode": "Unggulan",
          "status": "Tahap Perencanaan",
          "status_class": ""
        },
        {
          "judul": "Kegiatan Kerja Bakti Sosial dan Lingkungan",
          "deskripsi": "Membersihkan area di sekolah seperti lapangan, taman, koridor, dan lainnya karena kebersihan sebagian dari iman.",
          "periode": "Unggulan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Mempersiapkan perlengkapan upacara/apel dll.",
          "deskripsi": "Mempersiapkan keperluan-keperluan untuk pembiasaan pagi.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Piket Gerbang dengan Sistem 3S (Senyum, Salam dan Sapa)",
          "deskripsi": "Melakukan pembiasaan pagi dengan (salam, senyum dan sapa).",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Pengecekan Ruang Kelas sebelum Upacara/Apel Dimulai",
          "deskripsi": "Mengecek ruang kelas/toilet guna memperhatikan tidak adanya siswa yang tidak mengikuti upacara/apel.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Pengecekan Kebersihan Kelas Setiap Pulang Sekolah",
          "deskripsi": "Menertibkan kebersihan tiap kelas SMKN 68 Jakarta dengan inspeksi terhadap setiap kelas.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        }
      ]
    },
    {
      "id": "jasmani-kreativitas",
      "nama": "Seksi Bidang Jasmani & Kreativitas",
      "proker": [
        {
          "judul": "EKI RUN",
          "deskripsi": "Kegiatan Siswa/Siswi untuk mengikuti lomba lari estavet",
          "periode": "Unggulan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Mading Bulanan",
          "deskripsi": "Mengganti mading tiap bulannya dengan hasil kreativitas siswa atau tentang informasi' lowongan kerja yang diberikan bkk",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "68 CHALLENGE",
          "deskripsi": "Kegiatan Siswa/Siswi untuk membugarkan tubuh seperti push up, sit up, dll",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "Lomba Kelas Kreativitas",
          "deskripsi": "Melakukan kegiatan seperti menggambar, menulis cerita pendek, membuat poster, mengarang puisi, dan membuat kerajinan tangan.",
          "periode": "Berkelanjutan",
          "status": "Tahap Perencanaan",
          "status_class": ""
        },
        {
          "judul": "Plastik Reborn",
          "deskripsi": "Mengubah sampah plastik menjadi karya seni yang indah dan bernilai. Mengajak siswa-siswa untuk mengumpulkan sampah plastik, memilah-lpilahnya, dan kemudian membuat karya seni dari bahan tersebut.",
          "periode": "Berkelanjutan",
          "status": "Tahap Perencanaan",
          "status_class": ""
        }
      ]
    },
    {
      "id": "dana-usaha",
      "nama": "Seksi Bidang Dana Usaha",
      "proker": [
        {
          "judul": "68 Street Sale",
          "deskripsi": "Berjualan di Car Free Day dengan produk sederhana dan modal minim",
          "periode": "Unggulan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "OSIS Refreshment Duty",
          "deskripsi": "Menjaga dan membantu berjualan di gerai minuman yang sudah ada di kantin sekolah, dengan sistem bagi hasil atau komisi tetap",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "68 Partnership Program",
          "deskripsi": "Menjalin kerja sama dengan brand lokal (contoh: toko alat tulis, kedai kopi, percetakan, atau clothing brand) untuk menyediakan sponsor berupa dana, produk, atau kebutuhan acara OSIS",
          "periode": "Q1",
          "status": "Aktif",
          "status_class": "status-running"
        },
        {
          "judul": "68 Media Partner",
          "deskripsi": "Mengajak usaha kecil sekitar sekolah (toko, kuliner, percetakan, kedai kopi) untuk menjadi media partner. Sebagai imbalan promosi lewat akun OSIS, mereka memberi donasi atau sponsor kecil.",
          "periode": "Berkelanjutan",
          "status": "Aktif",
          "status_class": "status-running"
        }
      ]
    }
  ]
```

`css/style.css`
```css
/* ==========================================================================
   1. GLOBAL SYSTEM SETTINGS & VARIABLES
   ========================================================================== */
   :root {
    --primary: #007bff;
    --primary-hover: #0056b3;
    --bg-main: #f8fafc;
    --bg-card: #ffffff;
    --text-dark: #1e293b;
    --text-muted: #64748b;
    --text-light: #f1f5f9;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.03);
    --radius: 12px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --line-color: #cbd5e1;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-dark);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    line-height: 1.6;
}

/* ==========================================================================
   2. NAVIGATION & FOOTER (shared components)
   ========================================================================== */
.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-card);
    padding: 18px 40px;
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo a {
    font-size: 22px;
    font-weight: 800;
    color: var(--text-dark);
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    gap: 8px;
}

.nav-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    border-radius: 8px;
    transition: var(--transition);
    text-decoration: none;
    display: inline-block;
}

.nav-btn:hover {
    background-color: #f1f5f9;
    color: var(--text-dark);
}

.nav-btn.active {
    background-color: var(--primary);
    color: #ffffff;
}

.site-footer {
    background-color: #0f172a;
    color: var(--text-light);
    padding: 60px 40px 30px;
    margin-top: auto;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
}

.footer-section h4 {
    margin-bottom: 16px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
}

.footer-section p {
    margin-bottom: 8px;
    font-size: 14px;
    color: #94a3b8;
    line-height: 1.6;
}

.footer-section.socials {
    display: flex;
    flex-direction: column;
}

.footer-section.socials a {
    color: #94a3b8;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 14px;
    transition: var(--transition);
}

.footer-section.socials a:hover {
    color: var(--primary);
    transform: translateX(4px);
}

.footer-bottom {
    text-align: center;
    margin-top: 50px;
    padding-top: 25px;
    border-top: 1px solid #334155;
    font-size: 14px;
    color: #64748b;
}

/* ==========================================================================
   3. SUBPAGE BANNER
   ========================================================================== */
.subpage-banner {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #ffffff;
    padding: 60px 40px;
    text-align: center;
}

.subpage-banner h1 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 10px;
}

.subpage-banner p {
    color: #94a3b8;
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
}

/* ==========================================================================
   4. HOME PAGE
   ========================================================================== */
.hero-container {
    position: relative;
    width: 100%;
    height: 65vh;
    min-height: 450px;
    overflow: hidden;
    display: flex;
    align-items: center;        /* vertical center */
    justify-content: flex-start; /* horizontal left */
}

.hero-slide {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.2s ease-in-out;
    z-index: 1;
}

.hero-slide.active { opacity: 1; }

.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.6);
    z-index: 2;
}

.hero-content {
    position: relative;
    z-index: 3;
    color: #ffffff;
    max-width: 800px;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    /* children align left */
}

.hero-logo {
    position: absolute;
    right: 60px; /* Pushes the logo to the right edge */
    top: 50%; /* Pushes it down to the middle */
    transform: translateY(-50%); /* Ensures it is perfectly centered vertically */
    width: 120px; /* You can adjust this size */
    height: 120px;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
    z-index: 4; /* Keeps it above the slideshow overlay */
}

.hero-title { font-size: 52px; font-weight: 800; margin-bottom: 15px; line-height: 1.15; }
.hero-subtitle { font-size: 20px; color: #cbd5e1; }

.quote-section {
    max-width: 1000px;
    width: calc(100% - 40px);
    margin: 80px auto 40px auto;
    text-align: center;
}

.quote-tagline {
    display: block;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.quote-text {
    font-size: 32px;
    font-weight: 300;
    color: var(--text-dark);
    line-height: 1.4;
    font-style: italic;
}

.about-section {
    background-color: var(--bg-card);
    width: 100%;
    padding: 70px 40px;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 60px;
}

.about-container { max-width: 900px; margin: 0 auto; text-align: center; }
.about-container h2 { font-size: 32px; margin-bottom: 20px; font-weight: 800; }
.about-container p { font-size: 17px; color: var(--text-muted); line-height: 1.8; }

.news-section { max-width: 1200px; width: calc(100% - 40px); margin: 0 auto 80px auto; }

.section-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 30px;
    position: relative;
    padding-bottom: 12px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 60px; height: 4px;
    background-color: var(--primary);
    border-radius: 2px;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.news-card {
    background-color: var(--bg-card);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    border: 1px solid #e2e8f0;
}

.news-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.news-image-wrapper { width: 100%; height: 200px; overflow: hidden; background-color: #e2e8f0; }
.news-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.news-card:hover .news-image { transform: scale(1.05); }
.news-body { padding: 25px; display: flex; flex-direction: column; flex-grow: 1; }
.news-date { font-size: 12px; color: var(--text-muted); margin-bottom: 10px; font-weight: 700; text-transform: uppercase; }
.news-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; line-height: 1.4; }
.news-excerpt { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; }
.news-link { font-size: 14px; color: var(--primary); text-decoration: none; font-weight: 700; margin-top: auto; }
.news-link:hover { text-decoration: underline; }

/* ==========================================================================
   5. ABOUT PAGE
   ========================================================================== */
.about-grid {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 60px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-graphics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.graphic-box {
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    height: 200px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-weight: 600;
    box-shadow: var(--shadow-sm);
    overflow: hidden; /* Tambahkan ini agar sudut gambar ikut membulat */
}

.graphic-box img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Membuat gambar memenuhi kotak dengan proporsional */
    display: block;
}

.graphic-box.tall { grid-row: span 2; height: 420px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: #ffffff; font-size: 24px; }
.about-text-content h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; line-height: 1.2; }
.about-text-content p { color: var(--text-muted); margin-bottom: 20px; font-size: 16px; }

.stats-bar {
    background-color: var(--bg-card);
    padding: 40px;
    box-shadow: var(--shadow-sm);
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
}

.stats-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    text-align: center;
}

.stat-item h3 { font-size: 42px; font-weight: 800; color: var(--primary); margin-bottom: 5px; }
.stat-item p { font-size: 14px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }

.pillars-section { max-width: 1200px; width: calc(100% - 40px); margin: 60px auto; }
.pillars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 30px; }
.pillar-card { background: var(--bg-card); padding: 35px; border-radius: var(--radius); box-shadow: var(--shadow-md); transition: var(--transition); }
.pillar-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.pillar-icon { width: 50px; height: 50px; background: #eff6ff; border-radius: 10px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: var(--primary); font-weight: 800; font-size: 20px; }
.pillar-card h3 { font-size: 20px; margin-bottom: 12px; font-weight: 700; }
.pillar-card p { color: var(--text-muted); font-size: 15px; }

/* ==========================================================================
   6. PROGRAM KERJA
   ========================================================================== */
.proker-container { max-width: 900px; width: calc(100% - 40px); margin: 60px auto; }
.sekbid-accordion { background: var(--bg-card); border-radius: var(--radius); box-shadow: var(--shadow-md); margin-bottom: 20px; overflow: hidden; border: 1px solid #e2e8f0; }

.accordion-toggle { display: none; }
.accordion-header {
    padding: 24px 30px;
    background: var(--bg-card);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    transition: var(--transition);
    user-select: none;
}

.accordion-header:hover { background-color: #f8fafc; }
.accordion-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text-muted); transition: transform 0.3s ease; }
.accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0, 1, 0, 1); background-color: #f8fafc; padding: 0 30px; }
.accordion-toggle:checked ~ .accordion-content { max-height: 2000px; padding: 30px; border-top: 1px solid #e2e8f0; }
.accordion-toggle:checked ~ .accordion-header .accordion-icon { transform: rotate(135deg); color: var(--primary); }

.proker-item-card {
    background: var(--bg-card);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
    border-left: 4px solid var(--primary);
}

.proker-item-card:last-child { margin-bottom: 0; }
.proker-meta { display: flex; gap: 15px; margin-bottom: 10px; flex-wrap: wrap; }
.badge { background: #f1f5f9; color: var(--text-dark); padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; }
.badge.status-running { background: #dcfce7; color: #15803d; }
.proker-item-card h4 { font-size: 18px; margin-bottom: 10px; font-weight: 700; }
.proker-item-card p { color: var(--text-muted); font-size: 14px; }

/* ==========================================================================
   7. STRUKTUR ORGANISASI — Clean data-driven org chart
   ========================================================================== */
.structure-wrapper {
    max-width: 1400px;
    width: calc(100% - 40px);
    margin: 60px auto;
    overflow-x: auto;
}

.org-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    min-width: 900px;
}

/* Shared node appearance */
.org-node {
    background: var(--bg-card);
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px 24px;
    text-align: center;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    min-width: 200px;
}

.org-node:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
}

.org-node__name {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 4px;
}

.org-node__role {
    font-size: 12px;
    color: var(--text-muted);
}

/* Main nodes (spine) — slightly accented */
.org-node--main {
    border-top: 3px solid var(--primary);
    min-width: 240px;
}

/* Wing nodes (sekretaris / bendahara) */
.org-node--wing {
    background: #f0f7ff;
    border-color: #bfdbfe;
    min-width: 180px;
}

/* Sekbid leader nodes */
.org-node--sekbid {
    border-top: 3px solid #10b981;
    min-width: 170px;
    font-size: 13px;
}

/* Vertical spine column */
.org-col--spine {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Connector line between nodes */
.org-connector {
    width: 2px;
    height: 30px;
    background: var(--line-color);
    margin: 0 auto;
}

/* Three-column mid row */
.org-row--mid {
    display: grid;
    grid-template-columns: 220px 1fr 220px;
    gap: 0 40px;
    align-items: start;
    width: 100%;
    position: relative;
    margin-top: 0;
}

/* Horizontal connector above mid-row (line from spine to wings) */
.org-row--mid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0; right: 0;
    height: 2px;
    background: var(--line-color);
    display: none; /* Handled via padding top of each col */
}

.org-col--wing {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 30px;
}

.org-col--center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Sekbid row — horizontal strip of columns */
.org-row--sekbid {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}

.org-col--sekbid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 150px;
    max-width: 200px;
}

/* Department card */
.org-dept {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 14px;
    text-align: center;
    width: 100%;
    font-size: 12px;
}

.org-dept__name {
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 6px;
    font-size: 12px;
}

.org-dept__members {
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.6;
}

/* ==========================================================================
   8. CONTACTS PAGE
   ========================================================================== */
.contact-grid {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 60px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.contact-info-panel { display: flex; flex-direction: column; gap: 30px; }
.info-card-modern { background: var(--bg-card); padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow-md); border: 1px solid #e2e8f0; }
.info-card-modern h3 { font-size: 20px; margin-bottom: 20px; font-weight: 800; }
.info-row { display: flex; gap: 15px; margin-bottom: 15px; font-size: 15px; }
.info-row:last-child { margin-bottom: 0; }
.info-label { font-weight: 700; color: var(--text-dark); min-width: 100px; }
.info-val { color: var(--text-muted); }

.map-embed-container { background-color: #cbd5e1; height: 300px; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-md); }
.map-embed-container iframe { width: 100%; height: 100%; border: 0; }

.contact-form-panel { background: var(--bg-card); padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow-md); border: 1px solid #e2e8f0; }
.contact-form-panel h3 { font-size: 22px; font-weight: 800; margin-bottom: 25px; }
.form-group { margin-bottom: 20px; }
.form-label { display: block; font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 8px; }
.form-input { width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 15px; color: var(--text-dark); background-color: #f8fafc; transition: var(--transition); }
.form-input:focus { outline: none; border-color: var(--primary); background-color: #ffffff; box-shadow: 0 0 0 3px rgba(0,123,255,0.15); }
textarea.form-input { resize: vertical; min-height: 120px; }

.submit-btn { width: 100%; background-color: var(--primary); color: #ffffff; border: none; padding: 14px; font-size: 16px; font-weight: 700; border-radius: 8px; cursor: pointer; transition: var(--transition); }
.submit-btn:hover { background-color: var(--primary-hover); transform: translateY(-1px); box-shadow: var(--shadow-md); }

/* ==========================================================================
   9. ARTICLES LIST PAGE
   ========================================================================== */
.news-portal-layout {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    align-items: start;
}

.news-main-feed { display: flex; flex-direction: column; gap: 40px; }

.feed-subtitle {
    font-size: 22px;
    font-weight: 800;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 10px;
    color: var(--text-dark);
}

.featured-news-hero-card {
    background-color: var(--bg-card);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    border: 1px solid #e2e8f0;
    transition: var(--transition);
}

.featured-news-hero-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); }

.featured-hero-img-box { width: 100%; height: 100%; min-height: 280px; overflow: hidden; }
.featured-hero-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.featured-news-hero-card:hover .featured-hero-img-box img { transform: scale(1.04); }

.featured-hero-body { padding: 40px; display: flex; flex-direction: column; justify-content: center; }
.featured-hero-body h2 { font-size: 26px; font-weight: 800; margin: 12px 0; line-height: 1.3; color: var(--text-dark); }
.featured-hero-body p { color: var(--text-muted); font-size: 15px; margin-bottom: 25px; }

.featured-read-btn {
    background-color: var(--primary);
    color: #ffffff;
    text-decoration: none;
    padding: 10px 20px;
    font-weight: 700;
    border-radius: 6px;
    display: inline-block;
    transition: var(--transition);
    text-align: center;
    align-self: flex-start;
}
.featured-read-btn:hover { background-color: var(--primary-hover); }

/* Sidebar */
.news-sidebar { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 25px; }
.sidebar-widget { background: var(--bg-card); padding: 22px; border-radius: var(--radius); box-shadow: var(--shadow-sm); border: 1px solid #e2e8f0; }
.sidebar-widget h3 { font-size: 16px; font-weight: 800; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #f1f5f9; }
.widget-list { list-style: none; }
.widget-list li { margin-bottom: 8px; }
.widget-list li:last-child { margin-bottom: 0; }
.widget-list li a { text-decoration: none; color: var(--text-muted); font-size: 14px; font-weight: 600; display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-radius: 6px; transition: var(--transition); }
.widget-list li a:hover, .widget-list li a.active { background-color: #eff6ff; color: var(--primary); }
.widget-list li a span { background-color: #e2e8f0; padding: 2px 8px; border-radius: 12px; font-size: 11px; color: #333; }

/* ==========================================================================
   10. SINGLE ARTICLE READER
   ========================================================================== */
.single-reading-view { max-width: 860px; width: calc(100% - 40px); margin: 50px auto 80px; }
.reading-content-wrapper { background-color: var(--bg-card); padding: 60px; border-radius: var(--radius); box-shadow: var(--shadow-md); border: 1px solid #e2e8f0; }

.back-to-feed-link { color: var(--primary); font-size: 15px; font-weight: 700; text-decoration: none; display: inline-block; margin-bottom: 40px; transition: var(--transition); }
.back-to-feed-link:hover { transform: translateX(-4px); }

.article-header { margin-bottom: 40px; text-align: center; }
.article-category { display: inline-block; background-color: #e0f2fe; color: #0284c7; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
.article-header h1 { font-size: 40px; font-weight: 800; line-height: 1.25; margin-bottom: 25px; color: var(--text-dark); }
.article-meta { display: flex; align-items: center; justify-content: center; gap: 15px; }
.author-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.meta-details { display: flex; flex-direction: column; text-align: left; }
.author-name { font-weight: 700; font-size: 15px; color: var(--text-dark); }
.publish-date { font-size: 13px; color: var(--text-muted); }

.article-featured-image { margin: 0 0 40px 0; }
.article-featured-image img { width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius); }
.article-featured-image figcaption, .article-inline-image figcaption { text-align: center; font-size: 13px; color: #64748b; margin-top: 10px; font-style: italic; }

.article-inline-image { margin: 36px 0; }
.article-inline-image img { width: 100%; height: auto; border-radius: var(--radius); display: block; }

/* Article body typography */
.article-content { max-width: 700px; margin: 0 auto; }
.article-content p:first-child { font-size: 19px; color: #334155; line-height: 1.8; font-weight: 500; }
.article-content h2 { font-size: 26px; font-weight: 800; margin: 40px 0 18px; color: var(--text-dark); line-height: 1.3; }
.article-content h3 { font-size: 20px; font-weight: 700; margin: 32px 0 14px; color: var(--text-dark); }
.article-content p { font-size: 17px; color: #334155; line-height: 1.85; margin-bottom: 22px; }
.article-content ul, .article-content ol { margin: 0 0 24px 28px; color: #334155; font-size: 17px; line-height: 1.85; }
.article-content li { margin-bottom: 10px; }
.article-content li strong { color: var(--text-dark); }
.article-content blockquote { border-left: 4px solid var(--primary); background-color: #f0f7ff; padding: 22px 28px; font-size: 19px; font-style: italic; color: #475569; margin: 36px 0; border-radius: 0 8px 8px 0; line-height: 1.6; }
.article-content hr { border: none; border-top: 2px solid #e2e8f0; margin: 40px 0; }
.article-content code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 14px; font-family: 'Courier New', monospace; }

/* ==========================================================================
   11. RESPONSIVE
   ========================================================================== */
@media (max-width: 1024px) {
    .org-row--mid {
        grid-template-columns: 1fr;
    }
    .org-col--wing {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 0;
    }
    .org-row--sekbid {
        flex-wrap: wrap;
    }
}

@media (max-width: 968px) {
    .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 40px; }
    .about-graphics { order: 2; }
    .featured-news-hero-card { grid-template-columns: 1fr; }
    .featured-hero-img-box { min-height: 220px; }
    .news-portal-layout { grid-template-columns: 1fr; }
    .news-sidebar { position: static; }
}

@media (max-width: 768px) {
    .topbar { flex-direction: column; align-items: flex-start; padding: 15px 20px; gap: 12px; }
    .nav-links {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        width: 100%;
        padding-bottom: 6px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .nav-links::-webkit-scrollbar { display: none; }
    .nav-btn { white-space: nowrap; flex-shrink: 0; padding: 8px 14px; font-size: 14px; }

    .hero-container { height: 50vh; min-height: 300px; }
    .hero-content { padding: 0 24px; }
    .hero-title { font-size: 32px; }
    .hero-subtitle { font-size: 16px; }
    .quote-text { font-size: 24px; }

    .structure-wrapper { padding: 10px; }
    .org-chart { min-width: auto; }
    .org-row--mid { grid-template-columns: 1fr; gap: 20px; }
    .org-row--sekbid { gap: 12px; }
    .org-col--sekbid { min-width: 130px; }

    .reading-content-wrapper { padding: 30px 20px; }
    .article-header h1 { font-size: 28px; }
    .article-content p:first-child { font-size: 17px; }
}
```

`js/app.js`
```javascript
/**
 * app.js
 * Entry point — injects shared components and boots the correct
 * page module based on the current URL.
 */

import { injectComponents } from './components.js';
import { initHomeSlider, initHomeNews } from './home.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initProkerPage } from './proker.js';

// 1. Inject nav + footer on every page
injectComponents();

// 2. Boot the correct page module
const page = window.location.pathname.split('/').pop() || 'index.html';

if (page === 'index.html' || page === '') {
    initHomeSlider();
    initHomeNews();
} else if (page === 'struktur.html') {
    renderOsisTree();
} else if (page === 'articles.html') {
    initArticleListPage();
} else if (page === 'proker.html') {
    initProkerPage();
} else {
    // Static article pages — static/articles/[id].html
    initArticlePage();
}
```

`js/articles.js`
```javascript
/**
 * articles.js
 * Handles everything related to articles:
 *   - Loading the manifest (content/articles-manifest.json)
 *   - Rendering article cards on articles.html
 *   - Rendering a full article page from a .md file
 *   - Category filtering with correct counts
 */

import { parseMarkdown } from './md-parser.js';

/** Site root — same logic as components.js */
function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

const ROOT = getSiteRoot();

/** Resolve path to content/ folder using absolute ROOT */
function contentPath(rel) {
    return ROOT + 'content/' + rel;
}

/** Format ISO date to human-readable Indonesian */
function formatDate(isoDate) {
    const months = ['Januari','Februari','Maret','April','Mei','Juni',
                    'Juli','Agustus','September','Oktober','November','Desember'];
    const [y, m, d] = isoDate.split('-').map(Number);
    return `${d} ${months[m - 1]} ${y}`;
}

/** Build URL to a single article page using absolute ROOT */
function articleUrl(id) {
    return ROOT + 'static/articles/' + id + '.html';
}

/** Load the articles manifest JSON */
async function loadManifest() {
    const res = await fetch(contentPath('articles-manifest.json'));
    if (!res.ok) throw new Error('Could not load articles manifest');
    return res.json();
}

// ─────────────────────────────────────────────────────────────
// ARTICLES LIST PAGE (articles.html)
// ─────────────────────────────────────────────────────────────

function renderFeaturedCard(article) {
    return `
    <div class="featured-news-hero-card" data-category="${article.category}">
        <div class="featured-hero-img-box">
            <img src="${article.cover}" alt="${article.title}" loading="lazy">
        </div>
        <div class="featured-hero-body">
            <span class="news-date">SOROTAN UTAMA • ${formatDate(article.date)}</span>
            <h2>${article.title}</h2>
            <p>${article.excerpt}</p>
            <a href="${articleUrl(article.id)}" class="featured-read-btn">Baca Artikel Utama</a>
        </div>
    </div>`;
}

function renderArticleCard(article) {
    return `
    <article class="news-card" data-category="${article.category}">
        <div class="news-image-wrapper">
            <img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">
        </div>
        <div class="news-body">
            <span class="news-date">${formatDate(article.date)}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <a href="${articleUrl(article.id)}" class="news-link">Baca Selengkapnya →</a>
        </div>
    </article>`;
}

function buildCategorySidebar(articles, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Count articles per category
    const counts = {};
    articles.forEach(a => {
        counts[a.category] = (counts[a.category] || 0) + 1;
    });

    const total = articles.length;
    let html = `
        <li><a href="#" class="category-btn active" data-filter="all">
            Semua Kategori <span>${total}</span>
        </a></li>`;

    Object.entries(counts).forEach(([cat, count]) => {
        const label = cat.charAt(0).toUpperCase() + cat.slice(1);
        html += `
        <li><a href="#" class="category-btn" data-filter="${cat}">
            ${label} <span>${count}</span>
        </a></li>`;
    });

    container.innerHTML = html;
    initCategoryFilter(articles);
}

function initCategoryFilter(articles) {
    const buttons = document.querySelectorAll('.category-btn');
    const feedTitle = document.getElementById('feed-title-text');

    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            document.querySelectorAll('[data-category]').forEach(el => {
                const match = filter === 'all' || el.dataset.category === filter;
                el.style.display = match
                    ? (el.classList.contains('featured-news-hero-card') ? 'grid' : '')
                    : 'none';
            });

            if (feedTitle) {
                feedTitle.textContent = filter === 'all'
                    ? 'Berita Terkini'
                    : `Kategori: ${btn.childNodes[0].textContent.trim()}`;
            }
        });
    });
}

export async function initArticleListPage() {
    const featuredContainer = document.getElementById('featured-article-container');
    const gridContainer     = document.getElementById('articles-grid-container');
    const categoryListId    = 'category-list';

    if (!gridContainer) return; // not on articles.html

    try {
        const manifest = await loadManifest();

        const featured = manifest.filter(a => a.featured);
        const regular  = manifest.filter(a => !a.featured);

        if (featuredContainer) {
            featuredContainer.innerHTML = featured.map(renderFeaturedCard).join('');
        }
        gridContainer.innerHTML = regular.map(renderArticleCard).join('');

        buildCategorySidebar(manifest, categoryListId);

    } catch (err) {
        console.error('Articles failed to load:', err);
        if (gridContainer) {
            gridContainer.innerHTML = '<p style="color:red">Gagal memuat artikel. Pastikan server berjalan (jangan buka file:// langsung).</p>';
        }
    }
}

// ─────────────────────────────────────────────────────────────
// SINGLE ARTICLE PAGE (static/articles/[id].html)
// ─────────────────────────────────────────────────────────────

export async function initArticlePage() {
    const container = document.getElementById('article-render-target');
    if (!container) return;

    // Get article ID from data attribute or URL
    const articleId = container.dataset.articleId
        || window.location.pathname.split('/').pop().replace('.html', '');

    try {
        const manifest = await loadManifest();
        const meta = manifest.find(a => a.id === articleId);

        if (!meta) throw new Error(`Article "${articleId}" not found in manifest`);

        // Article body is embedded directly in the manifest — no extra fetch needed.
        // This avoids GitHub Pages blocking .md file requests.
        const bodyHtml = parseMarkdown(meta.body || '');

        // Update page title
        document.title = `${meta.title} — OSIS SMKN 68 Jakarta`;

        // Render article
        container.innerHTML = `
            <div class="reading-content-wrapper">
                <a href="${ROOT}static/articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>
                <article>
                    <header class="article-header">
                        <span class="article-category">${meta.category_display || meta.category}</span>
                        <h1>${meta.title}</h1>
                        <div class="article-meta">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(meta.author)}&background=007bff&color=fff"
                                 alt="${meta.author}" class="author-avatar">
                            <div class="meta-details">
                                <span class="author-name">Ditulis oleh ${meta.author}</span>
                                <span class="publish-date">${meta.date_display || formatDate(meta.date)}${meta.readtime ? ` • Waktu baca: ${meta.readtime}` : ''}</span>
                            </div>
                        </div>
                    </header>

                    ${meta.cover ? `
                    <figure class="article-featured-image">
                        <img src="${meta.cover}" alt="${meta.title}" loading="lazy">
                        ${meta.cover_caption ? `<figcaption>${meta.cover_caption}</figcaption>` : ''}
                    </figure>` : ''}

                    <div class="article-content">
                        ${bodyHtml}
                    </div>
                </article>
            </div>`;

    } catch (err) {
        console.error('Article render failed:', err);
        container.innerHTML = `
            <div class="reading-content-wrapper">
                <a href="../articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>
                <p style="color:red; margin-top: 2rem;">Gagal memuat artikel: ${err.message}</p>
            </div>`;
    }
}

```

`js/components.js`
```javascript
/**
 * components.js
 * Injects shared navigation and footer into every page.
 *
 * Uses absolute URLs based on the detected site root so it works
 * correctly on GitHub Pages (https://user.github.io/repo-name/),
 * local dev servers, and any other host — no matter the repo name.
 */

/**
 * Detects the root URL of the site.
 * - GitHub Pages: https://user.github.io/repo-name/  → root = origin/repo-name/
 * - localhost:8000 with files at root                 → root = origin/
 * - localhost:8000/subfolder/                         → root = origin/subfolder/
 *
 * The trick: index.html always lives at the repo root, which is the
 * first path segment on GitHub Pages. We detect this by checking if
 * the first path part contains a dot (meaning it's a file, not a folder).
 */
function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);

    // True root (e.g. localhost with index.html at /)
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }

    // GitHub Pages or subfolder: first segment is the repo/folder name
    return origin + '/' + parts[0] + '/';
}

const ROOT = getSiteRoot();

const NAV_LINKS = [
    { href: 'static/about.html',    label: 'Tentang Kami' },
    { href: 'static/proker.html',   label: 'Program Kerja' },
    { href: 'static/struktur.html', label: 'Struktur' },
    { href: 'static/articles.html', label: 'Artikel' },
    { href: 'static/contacts.html', label: 'Contact' },
];

function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

export function renderNav() {
    const current = getCurrentPage();

    const linksHtml = NAV_LINKS.map(link => {
        const pageFile = link.href.split('/').pop(); // e.g. "about.html"
        const isActive = current === pageFile ? 'active' : '';
        return `<a href="${ROOT}${link.href}" class="nav-btn ${isActive}">${link.label}</a>`;
    }).join('');

    return `
    <nav class="topbar">
        <div class="logo">
            <a href="${ROOT}index.html">OSIS SMKN 68 Jakarta</a>
        </div>
        <div class="nav-links">
            ${linksHtml}
        </div>
    </nav>`;
}

export function renderFooter() {
    return `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>OSIS SMKN 68 Jakarta</h4>
                <p>Jl. Penganten Ali RT 09 RW 06,<br>Jakarta Timur, DKI Jakarta</p>
            </div>
            <div class="footer-section">
                <h4>Kontak</h4>
                <p>Email: osissmkn68jakarta@gmail.com</p>
                <p>Telepon: +62 896-1672-7118 (Mutia)</p>
                <p>Telepon: +62 823-1151-1050 (Samuel)</p>
                <p>Jam Kerja: Senin–Jumat, 09.00–17.00 WIB</p>
            </div>
            <div class="footer-section socials">
                <h4>Ikuti Kami</h4>
                <a href="https://www.instagram.com/osissmkn68.jkt/" target="_blank" rel="noopener">Instagram</a>
                <a href="https://www.youtube.com/@OSISSMKN68" target="_blank" rel="noopener">Youtube</a>
                <a href="https://www.tiktok.com/@osissmkn68" target="_blank" rel="noopener">TikTok</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 OSIS SMKN 68 Jakarta. All rights reserved.</p>
        </div>
    </footer>`;
}

export function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = renderNav();

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
}

```

`js/home.js`
```javascript
/**
 * home.js
 * Hero image slider + dynamic "Berita Terkini" for index.html.
 * The news section is auto-populated from content/articles-manifest.json —
 * no need to edit index.html when new articles are added.
 */

function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

// ─── Hero Slider ──────────────────────────────────────────────

export function initHomeSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let current = 0;
    slides[0].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

// ─── Berita Terkini ───────────────────────────────────────────

function renderNewsCard(article, ROOT) {
    const coverHtml = article.cover
        ? `<img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">`
        : `<div class="news-image" style="background:var(--bg-main);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:13px;">Tanpa Gambar</div>`;

    return `
    <article class="news-card">
        <div class="news-image-wrapper">
            ${coverHtml}
        </div>
        <div class="news-body">
            <span class="news-date">${article.date_display || article.date}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <a href="${ROOT}static/articles/${article.id}.html" class="news-link">Baca Selengkapnya →</a>
        </div>
    </article>`;
}

export async function initHomeNews() {
    const grid = document.getElementById('home-news-grid');
    if (!grid) return;

    const ROOT = getSiteRoot();

    try {
        const res = await fetch(`${ROOT}content/articles-manifest.json`);
        if (!res.ok) throw new Error('Manifest not found');
        const articles = await res.json();

        // Show the 3 most recent articles (sorted by date descending)
        const recent = [...articles]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        if (recent.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-muted)">Belum ada artikel.</p>';
            return;
        }

        grid.innerHTML = recent.map(a => renderNewsCard(a, ROOT)).join('');
    } catch (err) {
        console.error('Home news failed to load:', err);
        // Silently fail on home page — fallback content below stays visible
        grid.innerHTML = '<p style="color:var(--text-muted)">Gagal memuat berita terkini.</p>';
    }
}
```

`js/md-parser.js`
```json
/**
 * md-parser.js
 * Lightweight Markdown parser for OSIS article system.
 * Supports: frontmatter, headings, paragraphs, bold, italic,
 * blockquote, unordered lists, ordered lists, inline images with captions,
 * and horizontal rules.
 *
 * HOW TO WRITE AN ARTICLE:
 * ─────────────────────────
 * Start the file with a "frontmatter" block (between --- lines).
 * Supported frontmatter keys:
 *   title, category, author, date, readtime, cover, cover_caption
 *
 * Then write your article body using simple Markdown:
 *   ## Heading 2         →  large section heading
 *   ### Heading 3        →  sub-section heading
 *   **bold text**        →  bold
 *   *italic text*        →  italic
 *   - item               →  bullet list item
 *   1. item              →  numbered list item
 *   > quote text         →  blockquote / pull quote
 *   ![alt|caption](url) →  image with optional caption (use | to split alt from caption)
 *   ---                  →  horizontal divider
 */

export function parseFrontmatter(raw) {
    const fm = {};
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    let body = raw;
    if (fmMatch) {
        body = raw.slice(fmMatch[0].length).trim();
        fmMatch[1].split('\n').forEach(line => {
            const colon = line.indexOf(':');
            if (colon === -1) return;
            const key = line.slice(0, colon).trim();
            const val = line.slice(colon + 1).trim();
            fm[key] = val;
        });
    }
    return { fm, body };
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function inlineFormat(text) {
    // Bold + Italic combined
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    return text;
}

export function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const html = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // ── Headings ──────────────────────────────────
        if (line.startsWith('### ')) {
            html.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
            i++; continue;
        }
        if (line.startsWith('## ')) {
            html.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
            i++; continue;
        }
        if (line.startsWith('# ')) {
            html.push(`<h1>${inlineFormat(line.slice(2))}</h1>`);
            i++; continue;
        }

        // ── Horizontal Rule ───────────────────────────
        if (line.trim() === '---') {
            html.push('<hr>');
            i++; continue;
        }

        // ── Blockquote ────────────────────────────────
        if (line.startsWith('> ')) {
            html.push(`<blockquote>${inlineFormat(line.slice(2))}</blockquote>`);
            i++; continue;
        }

        // ── Unordered list ────────────────────────────
        if (line.startsWith('- ')) {
            html.push('<ul>');
            while (i < lines.length && lines[i].startsWith('- ')) {
                html.push(`<li>${inlineFormat(lines[i].slice(2))}</li>`);
                i++;
            }
            html.push('</ul>');
            continue;
        }

        // ── Ordered list ──────────────────────────────
        if (/^\d+\. /.test(line)) {
            html.push('<ol>');
            while (i < lines.length && /^\d+\. /.test(lines[i])) {
                html.push(`<li>${inlineFormat(lines[i].replace(/^\d+\. /, ''))}</li>`);
                i++;
            }
            html.push('</ol>');
            continue;
        }

        // ── Image with optional caption ───────────────
        // Syntax: ![alt text|Caption text here](url)
        const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
            const [altRaw, url] = [imgMatch[1], imgMatch[2]];
            const [alt, caption] = altRaw.includes('|')
                ? altRaw.split('|').map(s => s.trim())
                : [altRaw, ''];
            if (caption) {
                html.push(`<figure class="article-inline-image"><img src="${url}" alt="${escapeHtml(alt)}" loading="lazy"><figcaption>${escapeHtml(caption)}</figcaption></figure>`);
            } else {
                html.push(`<figure class="article-inline-image"><img src="${url}" alt="${escapeHtml(alt)}" loading="lazy"></figure>`);
            }
            i++; continue;
        }

        // ── Empty line ────────────────────────────────
        if (line.trim() === '') {
            i++; continue;
        }

        // ── Paragraph ─────────────────────────────────
        // Collect consecutive non-empty, non-special lines as one paragraph
        const paraLines = [];
        while (
            i < lines.length &&
            lines[i].trim() !== '' &&
            !lines[i].startsWith('#') &&
            !lines[i].startsWith('> ') &&
            !lines[i].startsWith('- ') &&
            !/^\d+\. /.test(lines[i]) &&
            !lines[i].startsWith('!') &&
            lines[i].trim() !== '---'
        ) {
            paraLines.push(lines[i]);
            i++;
        }
        if (paraLines.length > 0) {
            html.push(`<p>${inlineFormat(paraLines.join(' '))}</p>`);
        }
    }

    return html.join('\n');
}
```

`js/proker.js`
```json
/**
 * proker.js
 * Renders the Program Kerja accordion from content/proker-data.json.
 * To add, edit, or delete a program kerja: only edit proker-data.json.
 */

function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

function renderProkerCard(item) {
    const statusClass = item.status_class ? ` ${item.status_class}` : '';
    return `
    <div class="proker-item-card">
        <div class="proker-meta">
            <span class="badge">${item.periode}</span>
            <span class="badge${statusClass}">${item.status}</span>
        </div>
        <h4>${item.judul}</h4>
        <p>${item.deskripsi}</p>
    </div>`;
}

function renderSekbidAccordion(sekbid, index) {
    const checkboxId = `sec-${sekbid.id}`;
    // Open the first accordion by default
    const checkedAttr = index === 0 ? ' checked' : '';
    const cards = sekbid.proker.map(renderProkerCard).join('');

    return `
    <div class="sekbid-accordion">
        <input type="checkbox" id="${checkboxId}" class="accordion-toggle"${checkedAttr}>
        <label for="${checkboxId}" class="accordion-header">
            ${sekbid.nama}
            <span class="accordion-icon">+</span>
        </label>
        <div class="accordion-content">
            ${cards}
        </div>
    </div>`;
}

export async function initProkerPage() {
    const container = document.getElementById('proker-render-target');
    if (!container) return;

    const ROOT = getSiteRoot();

    try {
        const res = await fetch(`${ROOT}content/proker-data.json`);
        if (!res.ok) throw new Error('Gagal memuat data program kerja.');
        const data = await res.json();

        container.innerHTML = data.map((sekbid, i) => renderSekbidAccordion(sekbid, i)).join('');
    } catch (err) {
        console.error('Proker render failed:', err);
        container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat program kerja: ${err.message}</p>`;
    }
}
```

`js/struktur.js`
```javascript
/**
 * struktur.js
 * Renders the OSIS organizational chart from content/osis-data.json.
 * Data is fully separated from logic — edit osis-data.json to update org structure.
 */

function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

function dataPath() {
    return getSiteRoot() + 'content/osis-data.json';
}

function node(nama, jabatan, level = 'main') {
    return `
    <div class="org-node org-node--${level}">
        <div class="org-node__name">${nama}</div>
        <div class="org-node__role">${jabatan}</div>
    </div>`;
}

function connector() {
    return `<div class="org-connector"></div>`;
}

export async function renderOsisTree() {
    const container = document.getElementById('osis-tree-container');
    if (!container) return;

    try {
        const res  = await fetch(dataPath());
        if (!res.ok) throw new Error('Cannot load osis-data.json');
        const data = await res.json();

        let html = '<div class="org-chart">';

        // ── Top chain (Kepsek → Waket) ──────────────────
        html += '<div class="org-col org-col--spine">';
        data.pimpinanAtas.forEach((p, idx) => {
            html += node(p.nama, p.jabatan, 'main');
            if (idx < data.pimpinanAtas.length - 1) html += connector();
        });
        html += '</div>';

        // ── Three-column row: Sekretaris | Koordinator | Bendahara ──
        html += '<div class="org-row org-row--mid">';

        // Left wing
        html += '<div class="org-col org-col--wing">';
        data.sekretaris.forEach(s => html += node(s.nama, s.jabatan, 'wing'));
        html += '</div>';

        // Center: Koordinator + Sekbid branches
        html += '<div class="org-col org-col--center">';
        html += node(data.koordinator.nama, data.koordinator.jabatan, 'main');
        html += connector();

        // Sekbid row
        html += '<div class="org-row org-row--sekbid">';
        data.sekbid.forEach(sek => {
            html += '<div class="org-col org-col--sekbid">';
            html += node(sek.ketua, `Ketua Sekbid ${sek.nama}`, 'sekbid');
            sek.departemen.forEach(dept => {
                html += `
                <div class="org-dept">
                    <div class="org-dept__name">${dept.nama}</div>
                    <div class="org-dept__members">${dept.anggota.join('<br>')}</div>
                </div>`;
            });
            html += '</div>';
        });
        html += '</div>'; // .org-row--sekbid

        html += '</div>'; // .org-col--center

        // Right wing
        html += '<div class="org-col org-col--wing">';
        data.bendahara.forEach(b => html += node(b.nama, b.jabatan, 'wing'));
        html += '</div>';

        html += '</div>'; // .org-row--mid
        html += '</div>'; // .org-chart

        container.innerHTML = html;

    } catch (err) {
        console.error('Org tree failed:', err);
        container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat data struktur: ${err.message}</p>`;
    }
}

```

`static/articles/demo-proker-artikel-digital.html`
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artikel - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../../img/icon.png">
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <main class="single-reading-view">
        <div id="article-render-target" data-article-id="demo-proker-artikel-digital">
            <div class="reading-content-wrapper">
                <p style="color: var(--text-muted); padding: 2rem 0">Memuat artikel...</p>
            </div>
        </div>
    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../../js/app.js"></script>
</body>
</html>

```

`static/about.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tentang Kami - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Tentang Kami</h1>
        <p>Mengenal lebih dekat visi, misi, serta komitmen kami sebagai organisasi intra sekolah.</p>
    </header>

    <section class="about-grid">
        <div class="about-graphics">
            <div class="graphic-box tall">
                <img src="https://github.com/lkssmkn68/website-osis-test/blob/main/img/covers/12ewqda.jpeg?raw=true" alt="Kegiatan OSIS">
            </div>
            <div class="graphic-box">
                <img src="https://github.com/lkssmkn68/website-osis-test/blob/main/img/covers/news3.jpg?raw=true" alt="Kreativitas Siswa">
            </div>
            <div class="graphic-box">
                <img src="https://github.com/lkssmkn68/website-osis-test/blob/main/img/covers/slad.jpeg?raw=true" alt="Inovasi Teknik">
            </div>
        </div>
        <div class="about-text-content">
            <h2>Membangun cita inovasi melalui kreativitas teknik.</h2>
            <p>Didirikan berlandaskan semangat kolaborasi inovatif, organisasi kami terus bergerak aktif menyelaraskan perkembangan IPTEK modern dengan fungsionalitas harian masyarakat luas. Kami percaya bahwa perbaikan berkelanjutan adalah kunci utama menuju kemajuan yang stabil.</p>
            <p>Setiap langkah koordinasi seksi bidang dirancang secara terukur demi mewujudkan program kerja transparan, akuntabel, dan berorientasi penuh pada solusi nyata.</p>
        </div>
    </section>

    <section class="stats-bar">
        <div class="stats-grid">
            <div class="stat-item">
                <h3>30</h3>
                <p>Program Berjalan</p>
            </div>
            <div class="stat-item">
                <h3>30</h3>
                <p>Anggota OSIS</p>
            </div>
            <div class="stat-item">
                <h3>1.7K+</h3>
                <p>Masyarakat penerima dampak</p>
            </div>
        </div>
    </section>

    <section class="pillars-section">
        <h2 class="section-title">Visi Dan Misi SMKN 68 Jakarta</h2>
        <h2 style="text-align: center;">VISI</h3>
            <div class="pillars-grid">
                <div class="pillar-card">
                    <h3 style="text-align: center;">Mewujudkan Tamatan yang Beriman dan Bertakwa, Unggul dalam IPTEK, serta Berbudaya Lingkungan dan Mencerminkan Profil Pelajar Pancasila</h3>
                </div>
            </div>

        <h2 style="text-align: center; margin-top: 5%;">MISI</h3>
        <div class="pillars-grid">
            <div class="pillar-card">
                <div class="pillar-icon">01</div>
                <h3>Meningkatkan Keimanan dan Ketaqwaan Peserta Didik</h3>
                <p>Membentuk fondasi spiritual dan akhlak mulia melalui pembiasaan ibadah dan kegiatan keagamaan, agar kecerdasan intelektual siswa seimbang dengan kompas moral yang kuat.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-icon">02</div>
                <h3>Menyelenggarakan Pendidikan Vokasi sesuai dengan Kemajuan Ilmu dan Teknologi</h3>
                <p>Menyelaraskan kurikulum dan praktik kejuruan dengan teknologi terkini serta kebutuhan industri (Link and Match), guna mencetak lulusan yang kompeten, tanggap teknologi, dan siap bersaing.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-icon">03</div>
                <h3>Menciptakan Lingkungan Sekolah yang Ramah Anak, Sehat, dan Asri</h3>
                <p>Mewujudkan ekosistem belajar yang aman, inklusif, dan bebas perundungan, serta didukung oleh lingkungan fisik yang bersih dan hijau untuk kenyamanan belajar siswa.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-icon">03</div>
                <h3>Menerapkan Pembelajaran yang Berkarakter Pelajar Pancasila</h3>
                <p>Mengintegrasikan nilai-nilai kebangsaan dalam pembelajaran untuk mencetak generasi yang tidak hanya terampil, tetapi juga mandiri, bernalar kritis, bergotong royong, dan beretika.</p>
            </div>
        </div>
    </section>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/articles.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artikel & Berita - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Artikel & Berita</h1>
        <p>Jelajahi bacaan edukasi, info rilis fitur terbaru, dan dokumentasi kegiatan kami.</p>
    </header>

    <main class="news-portal-layout">
        <div class="news-main-feed">

            <!-- Featured articles injected here by articles.js -->
            <div id="featured-article-container"></div>

            <h2 class="feed-subtitle" id="feed-title-text">Berita Terkini</h2>

            <!-- Article cards injected here by articles.js -->
            <div class="news-grid" id="articles-grid-container">
                <p style="color: var(--text-muted)">Memuat artikel...</p>
            </div>

        </div>

        <aside class="news-sidebar">
            <div class="sidebar-widget">
                <h3>Kategori Berita</h3>
                <ul class="widget-list" id="category-list">
                    <!-- Injected by articles.js with correct counts -->
                    <li><a href="#" class="category-btn active" data-filter="all">Semua Kategori</a></li>
                </ul>
            </div>
        </aside>
    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/contacts.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hubungi Kami - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Hubungi Kami</h1>
        <p>Punya pertanyaan atau rencana kolaborasi kreatif? Kirimkan pesan langsung kepada kami.</p>
    </header>

    <main class="contact-grid">

        <div class="contact-info-panel">
            <div class="info-card-modern">
                <h3>Informasi Kontak</h3>
                <div class="info-row">
                    <span class="info-label">Alamat:</span>
                    <span class="info-val">Jl. Penganten Ali RT 09 RW 06, Jakarta Timur, DKI Jakarta</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-val">osissmkn68jakarta@gmail.com</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Telepon:</span>
                    <span class="info-val">+62 896-1672-7118 (Mutia)</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Jam Kerja:</span>
                    <span class="info-val">Senin – Jumat | 09.00 – 17.00 WIB</span>
                </div>
            </div>

            <div class="map-embed-container">
                <iframe
                    src="https://maps.google.com/maps?q=SMKN+68+Jakarta,+Jl.+Pengantin+Ali,+Jakarta+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

        <div class="contact-form-panel">
            <h3>Kirim Pesan Langsung</h3>
            <form action="https://formspree.io/f/maqkorrn" method="POST">

                <div class="form-group">
                    <label for="input-name" class="form-label">Nama Lengkap</label>
                    <input type="text" name="name" id="input-name" class="form-input" placeholder="Masukkan nama Anda..." required>
                </div>

                <div class="form-group">
                    <label for="input-email" class="form-label">Alamat Email</label>
                    <input type="email" name="_replyto" id="input-email" class="form-input" placeholder="nama@email.com" required>
                </div>

                <div class="form-group">
                    <label for="input-subject" class="form-label">Subjek Pesan</label>
                    <input type="text" name="subject" id="input-subject" class="form-input" placeholder="Perihal pesan..." required>
                </div>

                <div class="form-group">
                    <label for="input-message" class="form-label">Isi Pesan</label>
                    <textarea name="message" id="input-message" class="form-input" placeholder="Tuliskan detail pesan Anda di sini..." required></textarea>
                </div>

                <input type="text" name="_gotcha" style="display:none">
                <button type="submit" class="submit-btn">Kirim Sekarang</button>
            </form>
        </div>

    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/proker.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Program Kerja - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Program Kerja</h1>
        <p>Daftar agenda kerja prioritas serta cetak biru pergerakan strategis di setiap seksi bidang.</p>
    </header>

    <main class="proker-container">
        <div id="proker-render-target">
            <p style="color: var(--text-muted); padding: 2rem 0">Memuat program kerja...</p>
        </div>
    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`static/struktur.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struktur Organisasi - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../img/icon.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <header class="subpage-banner">
        <h1>Struktur Organisasi</h1>
        <p>Bagan hierarki wewenang, tanggung jawab, dan koordinasi internal kepengurusan OSIS SMKN 68 Jakarta.</p>
    </header>

    <div class="structure-wrapper">
        <div id="osis-tree-container"></div>
    </div>

    <div id="footer-placeholder"></div>

    <script type="module" src="../js/app.js"></script>
</body>
</html>

```

`tools/build.py`

```python
#!/usr/bin/env python3
"""
tools/build.py
==============
One command to rule them all. Run this after writing/editing any .md file in
content/articles/ and it will:

  1. Parse every .md file's frontmatter + body
  2. Update content/articles-manifest.json  (add new, update changed, keep removed)
  3. Generate / overwrite static/articles/<slug>.html for each article

Usage:
    python3 tools/build.py            # process all articles
    python3 tools/build.py --clean    # also remove orphaned HTML + manifest entries
                                      # for .md files that no longer exist

Workflow:
    1. Create content/articles/my-new-article.md
    2. Run: python3 tools/build.py
    3. git add . && git commit -m "new article: my-new-article" && git push

Requirements: Python 3.6+ (stdlib only — no pip installs needed)
"""

import json, re, sys
from pathlib import Path
from datetime import date

# ── Paths ─────────────────────────────────────────────────────
ROOT          = Path(__file__).parent.parent
ARTICLES_DIR  = ROOT / 'content' / 'articles'
MANIFEST_PATH = ROOT / 'content' / 'articles-manifest.json'
HTML_OUT_DIR  = ROOT / 'static' / 'articles'

# ── Helpers ───────────────────────────────────────────────────

def parse_md(raw: str):
    """Split a markdown file into frontmatter dict + body string."""
    fm = {}
    body = raw
    m = re.match(r'^---\n([\s\S]*?)\n---\n?', raw)
    if m:
        body = raw[m.end():].strip()
        for line in m.group(1).split('\n'):
            colon = line.find(':')
            if colon == -1:
                continue
            k = line[:colon].strip()
            v = line[colon + 1:].strip()
            fm[k] = v
    return fm, body


def estimate_readtime(body: str) -> str:
    """Estimate reading time based on ~200 words per minute."""
    words = len(body.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} menit"


def build_entry(md_path: Path) -> dict:
    """Parse one .md file and return a complete manifest entry dict."""
    article_id = md_path.stem
    raw        = md_path.read_text(encoding='utf-8')
    fm, body   = parse_md(raw)

    excerpt = fm.get('excerpt', '')
    if not excerpt:
        # Auto-generate from first non-empty body line, capped at 160 chars
        first_line = next((l.strip() for l in body.split('\n') if l.strip() and not l.startswith('#')), '')
        excerpt = first_line[:160] + ('...' if len(first_line) > 160 else '')

    return {
        'id':               article_id,
        'file':             f'content/articles/{md_path.name}',
        'title':            fm.get('title', article_id),
        'author':           fm.get('author', 'Tim OSIS'),
        'date':             fm.get('date_iso', str(date.today())),
        'date_display':     fm.get('date', ''),
        'readtime':         fm.get('readtime', estimate_readtime(body)),
        'cover':            fm.get('cover', ''),
        'cover_caption':    fm.get('cover_caption', ''),
        'category':         fm.get('category', 'Umum').lower(),
        'category_display': fm.get('category', 'Umum'),
        'excerpt':          excerpt,
        'featured':         fm.get('featured', 'false').lower() == 'true',
        'body':             body,
    }


def make_html(article_id: str) -> str:
    """Generate the minimal HTML shell for a given article id."""
    return f"""<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artikel - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../../img/icon.png">
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <main class="single-reading-view">
        <div id="article-render-target" data-article-id="{article_id}">
            <div class="reading-content-wrapper">
                <p style="color: var(--text-muted); padding: 2rem 0">Memuat artikel...</p>
            </div>
        </div>
    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../../js/app.js"></script>
</body>
</html>
"""

# ── Main ──────────────────────────────────────────────────────

def main():
    clean_mode = '--clean' in sys.argv

    # Load existing manifest (or start fresh)
    if MANIFEST_PATH.exists():
        with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
            manifest: list = json.load(f)
    else:
        manifest = []

    # Index existing manifest by id for fast lookup
    manifest_map: dict = {e['id']: e for e in manifest}

    # Scan all .md files
    md_files = sorted(ARTICLES_DIR.glob('*.md'))
    if not md_files:
        print("No .md files found in content/articles/")
        return

    HTML_OUT_DIR.mkdir(parents=True, exist_ok=True)

    added   = []
    updated = []

    md_ids = set()
    for md_path in md_files:
        article_id = md_path.stem
        md_ids.add(article_id)

        new_entry = build_entry(md_path)

        if article_id in manifest_map:
            manifest_map[article_id] = new_entry
            updated.append(article_id)
        else:
            manifest_map[article_id] = new_entry
            added.append(article_id)

        # Generate / overwrite the HTML shell
        html_path = HTML_OUT_DIR / f'{article_id}.html'
        html_path.write_text(make_html(article_id), encoding='utf-8')

    # ── Optional cleanup: remove entries for deleted .md files ──
    removed = []
    if clean_mode:
        orphans = [aid for aid in manifest_map if aid not in md_ids]
        for aid in orphans:
            del manifest_map[aid]
            orphan_html = HTML_OUT_DIR / f'{aid}.html'
            if orphan_html.exists():
                orphan_html.unlink()
            removed.append(aid)

    # Re-build manifest list sorted by date descending (newest first)
    final_manifest = sorted(
        manifest_map.values(),
        key=lambda e: e.get('date', '1970-01-01'),
        reverse=True
    )

    # Save manifest
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        json.dump(final_manifest, f, ensure_ascii=False, indent=2)

    # ── Summary ───────────────────────────────────────────────
    print(f"\n{'─' * 52}")
    print(f"  Articles scanned : {len(md_files)}")
    if added:
        print(f"  NEW  (+{len(added):<3})       : {', '.join(added)}")
    if updated:
        print(f"  Updated          : {', '.join(updated)}")
    if removed:
        print(f"  Removed (--clean): {', '.join(removed)}")
    print(f"  Manifest saved   → content/articles-manifest.json")
    print(f"  HTML pages saved → static/articles/")
    print(f"{'─' * 52}")
    print()
    print("  Next step:")
    print("    git add . && git commit -m 'update articles' && git push")
    print()


if __name__ == '__main__':
    main()
```

`index.html`
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="img/icon.png">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <div class="hero-container">
        <div class="hero-slide active" style="background-image: url('img/slide1.jpg')"></div>
        <div class="hero-slide" style="background-image: url('img/slide2.jpg')"></div>
        <div class="hero-slide" style="background-image: url('img/slide3.jpg')"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">OSIS SMKN 68 Jakarta</h1>
            <p class="hero-subtitle">Bergerak bersama, berinovasi untuk masa depan.</p>
        </div>
    </div>

    <section class="quote-section">
        <span class="quote-tagline">Motto Kami</span>
        <p class="quote-text">"Satu langkah bersama lebih berarti dari seribu langkah sendiri."</p>
    </section>

    <section class="about-section">
        <div class="about-container">
            <h2>Tentang OSIS SMKN 68 Jakarta</h2>
            <p>Organisasi Siswa Intra Sekolah SMKN 68 Jakarta adalah wadah pengembangan diri, kreativitas, dan kepemimpinan bagi seluruh siswa. Kami berkomitmen untuk menjalankan program kerja yang transparan, inovatif, dan berdampak nyata bagi komunitas sekolah.</p>
        </div>
    </section>

    <section class="news-section">
        <h2 class="section-title">Berita Terkini</h2>
        <!-- Populated dynamically from articles-manifest.json by home.js -->
        <div class="news-grid" id="home-news-grid">
            <p style="color: var(--text-muted)">Memuat berita...</p>
        </div>
    </section>

    <div id="footer-placeholder"></div>

    <script type="module" src="js/app.js"></script>
</body>
</html>
```