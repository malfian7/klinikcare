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

Catatan: tag canonical, Open Graph, robots.txt, dan sitemap.xml sudah memakai alamat `https://klinikcare.id/`. Selama masih memakai alamat github.io, website tetap tampil normal; tag tersebut baru berfungsi penuh setelah domain terpasang.
