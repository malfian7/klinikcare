# KlinikCare - Landing Page

Website statis (HTML, CSS, JavaScript) untuk KlinikCare, aplikasi manajemen klinik terintegrasi BPJS dan SATUSEHAT.

## Struktur folder

```
index.html            Halaman utama
css/style.css         Seluruh gaya tampilan
js/main.js            Interaksi: menu, alur layanan, showcase, formulir, animasi
assets/               Logo, screenshot aplikasi, logo klien, gambar Open Graph
favicon.ico, favicon.svg, favicon-16x16.png, favicon-32x32.png
apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
site.webmanifest      Info ikon untuk Android/Chrome
robots.txt, sitemap.xml
.nojekyll             Agar GitHub Pages menyajikan file apa adanya
```

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, lalu unggah **isi** folder ini (bukan foldernya) ke branch `main`, sehingga `index.html` berada di root repository.
2. Buka **Settings → Pages**. Pada *Build and deployment*, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
3. Tunggu 1–2 menit. Website tersedia di `https://<username>.github.io/<nama-repo>/`.

## Memakai domain klinikcare.id

1. Di **Settings → Pages → Custom domain**, isi `klinikcare.id` lalu **Save** (GitHub akan membuat file `CNAME`).
2. Di pengelola DNS, arahkan domain ke GitHub Pages sesuai panduan GitHub, lalu aktifkan **Enforce HTTPS**.
3. Kirim `https://klinikcare.id/sitemap.xml` di Google Search Console.

Catatan: canonical, hreflang, Open Graph, data terstruktur, robots.txt, dan sitemap.xml di paket ini memakai alamat `https://malfian7.github.io/klinikcare/`. Saat pindah ke domain lain, ganti alamat tersebut di `index.html`, `robots.txt`, dan `sitemap.xml` (cari dan ganti semua).

## robots.txt dan sitemap.xml di alamat github.io

Mesin pencari hanya membaca `robots.txt` di akar domain (`https://malfian7.github.io/robots.txt`), bukan di dalam folder proyek (`/klinikcare/robots.txt`). Karena repository ini adalah *project site*, akar domainnya milik repository khusus bernama `malfian7.github.io`.

Solusinya: buat repository publik bernama persis `malfian7.github.io`, unggah isi folder `root-malfian7.github.io` (ada di zip terpisah), lalu aktifkan GitHub Pages dari branch `main`. Setelah itu:

- `https://malfian7.github.io/robots.txt` → menunjuk ke sitemap proyek
- `https://malfian7.github.io/sitemap.xml` → berisi alamat `https://malfian7.github.io/klinikcare/`

Jika nanti memakai domain `klinikcare.id`, langkah ini tidak diperlukan lagi karena `robots.txt` dan `sitemap.xml` di repository ini otomatis berada di akar domain.
