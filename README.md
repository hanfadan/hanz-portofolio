# Hanz Portfolio

Portfolio statis berbasis React + Vite. Versi ini tidak lagi memakai Next.js, sehingga hasil build bisa langsung di-upload ke shared hosting/cPanel tanpa menjalankan server Node.

## Development

```bash
npm install
npm run dev
```

Local server Vite akan berjalan di alamat yang ditampilkan terminal, biasanya `http://localhost:5173`.

## Build

```bash
npm run build
```

Output produksi dibuat di folder `dist`.

## Deploy ke cPanel

1. Jalankan `npm run build`.
2. Upload seluruh isi folder `dist` ke `public_html` atau folder domain/subdomain yang dipakai.
3. Pastikan file `index.html` berada langsung di root folder hosting tersebut.

Tidak perlu menjalankan `npm run start` di server karena situs ini adalah static site.
