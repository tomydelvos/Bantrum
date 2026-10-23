# Prompt: Landing Page Interaktif "Rakit & Pesan" — Bantrum

> Salin seluruh isi file ini ke AI builder atau berikan ke developer. Semua bagian bertanda **[ISI]** perlu Anda lengkapi atau konfirmasi sebelum dibangun. Harga dan data di bawah adalah **contoh**, bukan harga resmi.

---

## 1. Peran dan tujuan

Kamu adalah senior front-end engineer sekaligus product designer. Bangun **satu landing page interaktif** untuk **Bantrum**, penyedia layanan mobil listrik (EV) di Jabodetabek. Slogan sementara: **"Siaga ban, siap setrum."**

Inti halaman adalah **mini-game "Rakit & Pesan"**. Pengguna:

1. memilih mobil listriknya,
2. **menggeser (drag) ban** ke tiap roda dan **menggeser colokan charger** ke port pengisian mobil,
3. melihat harga dan kesiapan berubah langsung,
4. meninjau ringkasan, mengisi data, lalu **mengonfirmasi dan menyelesaikan pemesanan**.

Tujuan bisnis: mengubah pengunjung menjadi pemesan layanan **ganti/tambal ban panggilan** dan **charging portable**. Pengalaman harus terasa seperti game kecil yang menyenangkan, tetapi hasil akhirnya tetap pesanan yang jelas, dengan harga transparan sebelum pembayaran.

---

## 2. Konteks brand dan layanan

| Hal | Isi |
| --- | --- |
| Nama | Bantrum (Ban + Setrum) |
| Slogan | Siaga ban, siap setrum. |
| Wilayah | Jabodetabek. Zona awal: **[ISI, mis. Jakarta Selatan, Jakarta Pusat, BSD/Tangsel]** |
| Layanan di halaman ini | (1) Ban panggilan khusus EV: tambal, ganti, pasang ban baru. (2) Charging portable: van charger datang ke lokasi, atau valet antar-jemput ke SPKLU |
| Layanan lain (cukup disebut + tautan) | Inspeksi kesehatan baterai bersertifikat untuk EV bekas |
| Janji layanan | Harga tampil sebelum bayar · perubahan harga di lokasi wajib disetujui pelanggan · laporan digital dengan foto ≤ 2 jam setelah selesai |
| Bahasa | Bahasa Indonesia santai tapi sopan (sapaan "kamu" atau "Anda": **[ISI]**). Istilah teknis (SOC, CCS2, run-flat) tetap dipakai dengan penjelasan singkat |

Fakta produk yang harus tercermin di game:

- Ban EV lebih berat dan sering bertipe **silent/foam** atau **run-flat**.
- Mobil diangkat hanya di **titik dongkrak resmi** karena ada baterai di bawah lantai.
- Konektor charging di Indonesia: **CCS2** (paling umum), **Type 2** (AC), **GB/T** (sebagian mobil China), **CHAdeMO** (model lama). Konektor harus cocok dengan port mobil.

---

## 3. Pengguna sasaran

- **Pemilik EV di apartemen** tanpa wallbox. Mobil sering kehabisan daya dan malas antre di SPKLU.
- **Pemilik EV dengan ban bocor** yang butuh solusi cepat di lokasi.
- **Pengelola armada kecil** (rental, operasional kantor) yang ingin memesan untuk beberapa mobil. Fase ini cukup diberi tautan "Untuk armada / B2B".

Mayoritas membuka dari **ponsel**. Desain mobile-first; game wajib bisa dimainkan dengan sentuhan.

---

## 4. Teknologi

Rekomendasi (boleh diganti jika ada alasan kuat):

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** untuk styling, dengan design token di bagian 11 sebagai CSS variables
- **@dnd-kit/core** untuk drag-and-drop. Pilih ini karena mendukung mouse, sentuhan, dan **keyboard** sekaligus
- **Zustand** untuk state konfigurasi dan keranjang
- **Framer Motion** untuk animasi snap, getaran saat salah, dan transisi langkah
- **React Hook Form + Zod** untuk validasi form checkout
- Mobil, ban, dan colokan digambar sebagai **SVG inline** buatan sendiri (bukan foto), supaya ringan, tajam, dan bisa dianimasikan per bagian

Alternatif jika butuh satu file: satu `index.html` dengan vanilla JS dan Pointer Events, tetap memenuhi semua kriteria di bagian 15.

Tidak ada backend nyata di versi ini. Data layanan dari file JSON lokal. Pembayaran **disimulasikan** (lihat bagian 9). Siapkan satu fungsi `submitOrder(order)` sebagai titik integrasi API nanti.

---

## 5. Struktur halaman (urutan dari atas)

1. **Header lengket**: logo teks Bantrum, menu (Rakit & Pesan, Cara kerja, Harga, FAQ), tombol "Pesan sekarang" yang menggulir ke game. Ikon keranjang dengan jumlah item.
2. **Hero**: judul + subjudul + **pratinjau game yang langsung bisa dimainkan** (mobil dengan satu ban kempes berkedip dan teks "Geser ban ke roda yang kempes"). Jangan pakai hero setinggi layar penuh yang kosong.
   - Judul contoh: "Ban kempes? Baterai lemes? Rakit solusinya, kami yang datang."
   - CTA utama: "Mulai rakit". CTA sekunder: "Lihat harga".
3. **Mini-game "Rakit & Pesan"** (bagian utama, detail di bagian 6).
4. **Cara kerja**: 4 langkah (Rakit → Bayar → Teknisi datang & bisa dilacak → Laporan digital). Langkah ini memang berurutan, jadi penomoran boleh dipakai.
5. **Kenapa Bantrum**: 3 poin bukti (teknisi terlatih tegangan tinggi, dongkrak di titik resmi, foto sebelum–sesudah di laporan).
6. **Tabel harga ringkas** dari data yang sama dengan game, bukan diketik ulang.
7. **FAQ**: 6–8 pertanyaan (zona layanan, lama pengerjaan, garansi tambal 30 hari, pembatalan, jenis ban yang didukung, konektor yang didukung).
8. **Footer**: kontak (nomor WhatsApp ditampilkan sebagai teks yang bisa disalin), jam operasional **[ISI]**, tautan inspeksi baterai dan B2B, kebijakan privasi.

---

## 6. Spesifikasi mini-game "Rakit & Pesan"

### 6.1 Tata letak

- **Desktop (≥ 1024px)**: tiga area berdampingan.
  - Kiri: **Rak Suku Cadang** (tab "Ban" dan "Colokan").
  - Tengah: **Panggung Mobil**, SVG mobil tampak samping. Ada **4 slot roda** (Depan Kiri, Depan Kanan, Belakang Kiri, Belakang Kanan) dan **1 slot port charging**. Roda kiri dan kanan ditampilkan dengan sakelar "Sisi kiri / Sisi kanan", atau gunakan tampak atas sebagai alternatif.
  - Kanan: **Panel Ringkasan** yang menempel: item terpilih, meter kesiapan, total harga, tombol "Lanjut ke pesanan".
- **Mobile (< 768px)**: Panggung Mobil di atas. Rak Suku Cadang berupa **laci bawah yang bisa digeser horizontal**. Ringkasan berupa **bar bawah lengket** (total + tombol), bisa diketuk untuk membuka detail.

### 6.2 Langkah 0: pilih mobil

- Pilihan berupa kartu siluet mobil generik per segmen: **City car EV**, **Compact SUV EV**, **MPV EV**, **Sedan EV**. Masing-masing punya ukuran ban, jenis ban bawaan, dan port charging (lihat data di bagian 7).
- Tambahkan dropdown opsional "Merek & model mobilmu" untuk mencatat model asli. **Jangan tampilkan logo atau gambar mobil merek nyata.** Cukup nama teks yang diketik pengguna.
- Setelah dipilih, mobil "melaju masuk" ke panggung dengan animasi singkat (≤ 600 ms).

### 6.3 Langkah 1: masalah ban

- Pengguna menandai kondisi tiap roda dengan mengetuk roda: **Normal**, **Bocor** (ikon paku), atau **Ganti** (ikon aus). Default semua Normal.
- Roda bermasalah berkedip lembut dan menjadi **zona jatuh (drop zone)**.
- Rak "Ban" berisi kartu yang bisa digeser:
  - **Kit Tambal** (plug/patch, untuk roda Bocor)
  - **Ban Silent/Foam**
  - **Ban Run-flat**
  - **Ban Standar EV**
  - **Ban Serep milik pelanggan** (biaya jasa pasang saja)
- Aturan:
  - Kit Tambal hanya bisa dijatuhkan ke roda **Bocor**. Jika pengguna menandai "kebocoran di dinding samping" (checkbox di popover roda), tolak kit tambal dengan pesan: "Bocor di dinding samping tidak aman ditambal. Pilih ban pengganti."
  - Ban baru harus **cocok ukuran** dengan mobil (mis. 215/55 R17). Ban yang tidak cocok ditolak dengan animasi getar dan pesan yang menyebut ukuran yang benar.
  - Ban **run-flat** yang sudah dipakai kempes tidak boleh ditambal. Sistem menyarankan ganti.
  - Tampilkan saran "Sebaiknya ganti sepasang (satu as)" saat hanya satu ban diganti. Saran saja, bukan pemblokiran.
- Setelah ban terpasang: ban "masuk" ke roda dengan animasi snap + putaran kecil. Muncul label kecil berisi jenis ban dan harga.

### 6.4 Langkah 2: charging portable

- Rak "Colokan" berisi kartu konektor: **CCS2**, **Type 2**, **GB/T**, **CHAdeMO**.
- Port pengisian di mobil tampil sebagai tutup port yang terbuka saat pengguna mulai menggeser colokan.
- Hanya konektor yang **cocok dengan port mobil** yang bisa terpasang. Salah konektor: colokan memantul kembali, dengan pesan "Mobil ini memakai CCS2. Coba colokan yang sesuai."
- Setelah tersambung, tampilkan:
  - **Pilihan model layanan**: "Van datang ke lokasi" atau "Valet antar-jemput ke SPKLU".
  - **Penggeser SOC**: "Baterai sekarang" (mis. 15%) dan "Target" (default 80%, maks. 100%).
  - Estimasi kWh = kapasitas baterai × (target − sekarang). Estimasi biaya energi dan durasi muncul langsung.
  - Animasi indikator baterai terisi dari SOC sekarang ke target, berwarna sesuai token.
- Layanan charging boleh dilewati jika pengguna hanya butuh ban, dan sebaliknya. Minimal satu layanan harus dipilih untuk lanjut.

### 6.5 Meter "Siap Jalan" dan umpan balik

- Meter di Panel Ringkasan (0–100%) naik setiap kali satu masalah selesai ditangani (roda bermasalah terisi, charging tersambung dan target diatur).
- Saat mencapai 100%: animasi singkat (lampu depan menyala + ban berputar sekali), lalu teks "Mobilmu siap jalan. Tinggal pilih jadwal."
- Jangan pakai confetti berlebihan atau suara otomatis. Suara klik opsional, mati secara default, dengan tombol aktifkan.

### 6.6 Interaksi dan kontrol

- **Drag-and-drop** dengan mouse dan sentuhan. Zona jatuh yang valid disorot saat item mulai digeser; zona tidak valid diredupkan.
- **Alternatif ketuk**: ketuk item di rak lalu ketuk slot tujuan. Wajib ada, karena drag di ponsel kecil sering sulit.
- **Keyboard**: Tab ke item, Spasi untuk mengambil, panah untuk memilih slot, Spasi untuk menaruh, Esc untuk batal. Gunakan announcements dari @dnd-kit untuk pembaca layar.
- Item yang sudah terpasang bisa **digeser keluar** untuk dilepas, atau dilepas lewat tombol × di labelnya.
- Tombol **Undo**, **Reset**, dan **"Isi cepat untuk saya"** (memasang pilihan yang direkomendasikan otomatis bagi yang tidak mau bermain).
- Simpan progres di `localStorage` (dengan try/catch). Jika pengguna kembali, tampilkan "Lanjutkan rakitanmu?".

### 6.7 Status kosong dan error

- Sebelum mobil dipilih: panggung menampilkan garasi kosong dengan teks "Pilih mobilmu dulu untuk mulai merakit."
- Jika data layanan gagal dimuat: pesan jelas + tombol "Coba lagi" + nomor WhatsApp sebagai teks.

---

## 7. Model data (contoh, simpan sebagai `src/data/catalog.json`)

> Semua harga **contoh placeholder**. Ganti dengan harga resmi: **[ISI]**.

```json
{
  "currency": "IDR",
  "vehicles": [
    { "id": "city", "label": "City car EV", "tireSize": "175/65 R15", "defaultTire": "standard", "batteryKwh": 30, "port": "CCS2" },
    { "id": "suv", "label": "Compact SUV EV", "tireSize": "215/55 R17", "defaultTire": "silent", "batteryKwh": 60, "port": "CCS2" },
    { "id": "mpv", "label": "MPV EV", "tireSize": "225/55 R18", "defaultTire": "silent", "batteryKwh": 70, "port": "CCS2" },
    { "id": "sedan", "label": "Sedan EV", "tireSize": "235/45 R18", "defaultTire": "runflat", "batteryKwh": 75, "port": "GB/T" }
  ],
  "tires": [
    { "id": "patch", "label": "Kit Tambal", "kind": "repair", "price": 75000, "allowedOn": ["flat"] },
    { "id": "standard", "label": "Ban Standar EV", "kind": "tire", "pricePerSize": { "175/65 R15": 850000, "215/55 R17": 1450000, "225/55 R18": 1700000, "235/45 R18": 1800000 } },
    { "id": "silent", "label": "Ban Silent/Foam", "kind": "tire", "pricePerSize": { "215/55 R17": 1950000, "225/55 R18": 2250000, "235/45 R18": 2350000 } },
    { "id": "runflat", "label": "Ban Run-flat", "kind": "tire", "pricePerSize": { "215/55 R17": 2400000, "235/45 R18": 2800000 } },
    { "id": "own-spare", "label": "Ban serep milik sendiri", "kind": "install", "price": 0 }
  ],
  "connectors": ["CCS2", "Type 2", "GB/T", "CHAdeMO"],
  "fees": {
    "tireCallout": 100000,
    "tireInstallPerWheel": 60000,
    "tpmsReset": 50000,
    "chargingVanVisit": 150000,
    "chargingValetTrip": 125000,
    "energyPerKwh": 3500,
    "nightSurchargePct": 20
  },
  "zones": [
    { "id": "z1", "label": "Jakarta Selatan", "inZone": true },
    { "id": "z2", "label": "Jakarta Pusat", "inZone": true },
    { "id": "z3", "label": "BSD / Tangerang Selatan", "inZone": true },
    { "id": "out", "label": "Di luar zona (Jabodetabek lain)", "inZone": false, "extraFee": 75000 }
  ]
}
```

Tipe TypeScript dibuat dari struktur ini. Tidak ada angka harga yang ditulis langsung di komponen.

---

## 8. Logika harga

Semua dihitung di satu fungsi murni `calculateQuote(config, catalog)` yang punya unit test.

- **Ban**: biaya panggilan (sekali per pesanan jika ada layanan ban) + per roda: harga ban/kit + jasa pasang (kecuali kit tambal yang sudah termasuk jasa) + reset TPMS (sekali, jika ada ban diganti).
- **Charging**: biaya kunjungan van **atau** biaya trip valet + (estimasi kWh × tarif per kWh). kWh dibulatkan ke atas ke bilangan bulat.
- **Tambahan**: biaya zona luar, tambahan malam (jika jadwal 21.00–06.00).
- **Diskon kombo** opsional: **[ISI, mis. 10% biaya panggilan jika pesan ban + charging sekaligus]**.
- Tampilkan **rincian per baris** dan total. Format Rupiah: `Rp1.250.000` (`Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })`).
- Untuk charging, tulis jelas: "Biaya energi final mengikuti kWh aktual di struk."

---

## 9. Alur checkout

Stepper 4 langkah di halaman yang sama (bukan pindah halaman). Progres terlihat di atas.

1. **Tinjau rakitan**
   - Gambar mini mobil dengan item terpasang, daftar item, rincian harga, tombol "Ubah rakitan" yang kembali ke game tanpa menghapus pilihan.
2. **Lokasi & jadwal**
   - Pilih zona, alamat detail, patokan (mis. "basement B2, dekat lift"), dan **pin lokasi**. Untuk versi ini, pin cukup berupa input teks atau peta statis SVG tanpa layanan peta eksternal.
   - Pilih **Darurat (secepatnya)** atau **Terjadwal** (tanggal + slot 2 jam). Slot di luar jam operasional tidak bisa dipilih.
   - Untuk valet: jam jemput dan jam kembali.
3. **Data kontak**
   - Nama, nomor WhatsApp (format Indonesia, validasi `08…` atau `+62…`), email opsional, plat nomor, merek/model mobil (teks).
   - Catatan untuk teknisi (opsional).
   - Checkbox wajib: setuju syarat & ketentuan + kebijakan privasi (UU PDP). Checkbox opsional: kirim pengingat servis via WhatsApp.
4. **Pembayaran & konfirmasi**
   - Pilihan metode: Virtual Account, QRIS, e-wallet, kartu. **Disimulasikan**: tombol "Bayar" memanggil `submitOrder()` yang mengembalikan sukses setelah jeda 1,2 detik. Beri label kecil "Mode demo" saat `import.meta.env.MODE !== 'production'`.
   - Ringkasan final + total, lalu tombol utama **"Konfirmasi & bayar Rp…"** (nominal tertulis di tombol).
   - Tidak ada `alert()` atau `confirm()` bawaan browser. Semua konfirmasi di dalam halaman.

Validasi per langkah. Pesan error menyebut masalah dan cara memperbaikinya, mis. "Nomor WhatsApp harus diawali 08 atau +62."

---

## 10. Halaman konfirmasi pesanan

Setelah pembayaran (simulasi) berhasil:

- Animasi singkat mobil melaju keluar panggung.
- **Kode pesanan** format `BTR-YYMMDD-XXXX` dengan tombol salin (gunakan `navigator.clipboard.writeText` dalam handler klik; jika gagal, pilih teksnya).
- Ringkasan: layanan, mobil, lokasi, jadwal, total dibayar.
- **Apa yang terjadi selanjutnya** (urutan nyata, boleh bernomor):
  1. Konfirmasi via WhatsApp ≤ 5 menit (darurat) atau ≤ 30 menit (terjadwal).
  2. Teknisi ditugaskan, tautan pelacakan dikirim.
  3. Pengerjaan dengan foto sebelum–sesudah.
  4. Laporan digital + permintaan rating ≤ 2 jam setelah selesai.
- Tombol "Simpan ringkasan" (opsional, ekspor teks) dan "Rakit pesanan lain" (reset game).
- Tampilkan nomor WhatsApp Bantrum sebagai teks yang bisa disalin. Tautan `wa.me` boleh ada sebagai pelengkap, tetapi jangan menganggap pesan sudah terkirim.

Bentuk objek pesanan yang dikirim ke `submitOrder()`:

```ts
type Order = {
  code: string;
  createdAt: string; // ISO
  vehicle: { segment: string; modelText?: string; plate: string };
  tires: { wheel: 'FL' | 'FR' | 'RL' | 'RR'; condition: 'flat' | 'replace'; item: string; size?: string; sidewallDamage?: boolean }[];
  charging?: { mode: 'van' | 'valet'; connector: string; socNow: number; socTarget: number; estKwh: number };
  location: { zoneId: string; address: string; landmark?: string };
  schedule: { type: 'emergency' | 'scheduled'; slotStart?: string; slotEnd?: string; returnAt?: string };
  contact: { name: string; whatsapp: string; email?: string; note?: string; marketingOptIn: boolean };
  quote: { lines: { label: string; amount: number }[]; total: number };
  payment: { method: 'va' | 'qris' | 'ewallet' | 'card'; status: 'paid_demo' };
};
```

---

## 11. Arah visual

Identitas: rambu servis jalan raya bertemu dunia listrik. Aksen **kuning-amber hazard** di atas dasar **slate dingin**. Tegas, rapi, bukan neon atau gradien ungu-biru.

Token warna (definisikan di `:root`, dengan versi gelap lewat `prefers-color-scheme` dan `[data-theme]`):

| Token | Terang | Gelap | Fungsi |
| --- | --- | --- | --- |
| `--bg` | `#f3f5f7` | `#0f151c` | Latar halaman |
| `--surface` | `#ffffff` | `#17202a` | Kartu, panel |
| `--sunk` | `#e8ecf0` | `#1d2834` | Rak suku cadang, area cekung |
| `--line` | `#d3d9e0` | `#2c3a48` | Garis |
| `--fg` | `#16202b` | `#e6ecf2` | Teks utama |
| `--muted` | `#5a6776` | `#93a2b2` | Teks sekunder |
| `--accent` | `#e0a100` | `#f2b928` | Aksen Bantrum: CTA, zona jatuh aktif |
| `--volt` | `#1f6feb` | `#6aa6ff` | Hal kelistrikan: colokan, baterai, fokus |
| `--good` | `#1a8a55` | `#4cc98a` | Terpasang benar, meter penuh |
| `--warn` | `#c2410c` | `#ff8a57` | Tolak/salah pasang |

Tipografi (Google Fonts, dengan fallback):

- Display: **Archivo** 700/800, untuk judul dan angka besar.
- Body: **IBM Plex Sans** 400/500/600.
- Data/label teknis: **IBM Plex Mono** (ukuran ban, kWh, kode pesanan).

Detail khas subjek yang wajib ada:

- Tampilkan **ukuran ban** (mis. `215/55 R17`) dan **kode konektor** dengan huruf mono, seperti cetakan di dinding ban.
- Logo teks Bantrum dengan kotak amber miring (gaya rambu).
- Ilustrasi SVG datar dengan garis 1.5–2px. Tanpa bayangan tebal atau gradien berlebihan.

Gerak: animasi berarti saja (snap, getar salah, baterai terisi, mobil masuk/keluar). Hormati `prefers-reduced-motion`: ganti semua animasi dengan perubahan status instan.

---

## 12. Contoh microcopy

| Situasi | Teks |
| --- | --- |
| Petunjuk awal | "Geser ban ke roda yang bermasalah, atau ketuk ban lalu ketuk rodanya." |
| Ban terpasang | "Ban Silent/Foam 215/55 R17 terpasang di Depan Kiri." |
| Ukuran salah | "Ukuran tidak cocok. Mobil ini pakai 215/55 R17." |
| Konektor salah | "Mobil ini memakai CCS2. Coba colokan yang sesuai." |
| Bocor samping | "Bocor di dinding samping tidak aman ditambal. Pilih ban pengganti." |
| Meter penuh | "Mobilmu siap jalan. Tinggal pilih jadwal." |
| Harga energi | "Biaya energi final mengikuti kWh aktual di struk SPKLU/charger." |
| Tombol akhir | "Konfirmasi & bayar Rp2.315.000" |
| Sukses | "Pesanan BTR-261022-4821 diterima. Kami hubungi via WhatsApp dalam 30 menit." |

Hindari jargon sistem ("submit", "payload", "error 500") di teks pengguna.

---

## 13. Aksesibilitas

- Semua fungsi game bisa diselesaikan **tanpa drag**: dengan ketuk-ketuk dan dengan keyboard.
- Slot roda dan port punya `aria-label` (mis. "Roda depan kiri, status bocor, kosong").
- Perubahan status diumumkan via `aria-live="polite"`.
- Kontras teks memenuhi WCAG 2.1 AA di kedua tema. Fokus keyboard terlihat jelas (outline `--volt`).
- Area sentuh minimal 44×44px.
- Status tidak hanya dibedakan lewat warna; tambahkan ikon atau teks.

---

## 14. Performa, SEO, dan analitik

- Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95.
- SVG inline, tanpa gambar raster besar. Muat font dengan `display=swap`.
- `<title>` "Bantrum — Ban Panggilan & Charging EV di Jabodetabek" + meta description + Open Graph.
- Data terstruktur `LocalBusiness` + `Service` (JSON-LD).
- Event analitik (cukup `track(event, props)` yang mencetak ke console, siap disambungkan nanti):
  `vehicle_selected`, `tire_dropped` (valid/invalid), `connector_dropped` (valid/invalid), `quick_fill_used`, `ready_100`, `checkout_step_viewed`, `checkout_step_completed`, `order_submitted`, `order_succeeded`.

---

## 15. Kriteria penerimaan

- [ ] Pengguna di ponsel 390px bisa memilih mobil, memasang minimal satu ban, menyambungkan colokan, dan menyelesaikan checkout tanpa scroll horizontal.
- [ ] Ban dengan ukuran salah, kit tambal pada bocor samping, dan konektor yang tidak cocok **selalu ditolak** dengan pesan yang menjelaskan alasannya.
- [ ] Seluruh game bisa diselesaikan hanya dengan keyboard, dan hanya dengan ketukan (tanpa drag).
- [ ] Total harga berubah langsung saat item dipasang/dilepas dan selalu sama dengan rincian per baris.
- [ ] `calculateQuote` punya unit test untuk: ban saja, charging saja, kombo, di luar zona, tarif malam.
- [ ] Tombol bayar menampilkan nominal total, dan pembayaran demo menghasilkan kode pesanan unik.
- [ ] Halaman konfirmasi menampilkan kode (bisa disalin), ringkasan, dan langkah berikutnya.
- [ ] Progres rakitan bertahan setelah halaman dimuat ulang.
- [ ] Tema terang dan gelap terbaca baik. `prefers-reduced-motion` dihormati.
- [ ] Tidak ada logo, gambar, atau nama merek mobil/ban pihak ketiga di aset visual.

---

## 16. Batasan

- Jangan memakai logo, foto, atau desain produk merek mobil atau ban mana pun. Gunakan siluet generik buatan sendiri.
- Jangan memproses pembayaran sungguhan atau menyimpan data kartu.
- Jangan memakai `alert()`, `confirm()`, atau `prompt()`.
- Jangan mengirim data pribadi ke layanan pihak ketiga di versi ini.
- Harga dan zona hanya dari `catalog.json`.

---

## 17. Hasil yang diharapkan

1. Kode sumber lengkap dengan struktur folder yang rapi (`src/components/game`, `src/components/checkout`, `src/data`, `src/lib/pricing.ts`, `src/store`).
2. `README.md`: cara menjalankan, cara mengganti harga/zona di `catalog.json`, dan titik integrasi `submitOrder()` untuk API sungguhan.
3. Unit test untuk logika harga dan aturan kecocokan (ban/konektor).
4. Daftar singkat asumsi yang kamu ambil selama membangun.

Mulailah dengan menampilkan rencana komponen dan state (singkat), lalu bangun halaman lengkap.
