# Sora Stationery

Katalog alat tulis sederhana berbasis **React + Vite + JavaScript**.

## Menjalankan project

Pastikan Node.js sudah terpasang, lalu buka terminal di folder project:

```bash
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk mengecek hasil build:

```bash
npm run build
```

## Fitur aplikasi

- Menampilkan katalog produk alat tulis.
- Mencari produk berdasarkan nama.
- Memfilter produk berdasarkan kategori.
- Menambahkan dan menghapus produk dari favorit.
- Membuka detail produk melalui tombol detail.
- Menampilkan jumlah produk yang ditemukan dan jumlah favorit.

## Komponen React

Semua komponen berada di `src/components/` dan dipisah ke file masing-masing:

1. `Navbar.jsx` — navigasi dan jumlah favorit.
2. `SearchBar.jsx` — input pencarian.
3. `CategoryFilter.jsx` — filter kategori.
4. `ProductList.jsx` — menampilkan daftar produk dengan `.map()`.
5. `ProductCard.jsx` — kartu produk dan tombol interaksi.
6. `ProductDetail.jsx` — detail produk dalam modal.

Konsep React yang digunakan: JSX, components, props, `useState`, event handling, conditional rendering, dan list rendering dengan `key`.

## Identitas mahasiswa

Nama: Suci Ramadhani Siregar  
NIM: 1247050143

Identitas ditampilkan pada bagian footer aplikasi di `src/App.jsx`.
