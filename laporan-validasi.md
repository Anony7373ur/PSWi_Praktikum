LAPORAN Tautan, Gambar, Tabel, Metadata, dan Validasi HTML (Pengembangan situs web)

Nama    : Gabriel Christian Ronaldo Panjaitan
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak
NIM     : 41426009

Laporan Validasi

Pada laporan ini saya sudah bisa menggunakan tautan, gambar, tabel, metadata dan validasi HTML dengan baik.
3 html dibuat yaitu index, kegiatan dan kontak yang dimana ada tautan yang saling berkaitan seperti bisa membuka halaman satu sama lain.
penggunaan gambar dapat dilakukan dengan img src= dan alt sebagai nama untuk gambar itu. width untuk mengukur ukuran gambar dalam halaman web.
penggunaan tabel yaitu tabel yang bisa menyusun dan organisir bagian yang terjadwal atau data dalam halaman web.
metadata adalah informasi dari web itu dan bisa sebagai informasi untuk ke 3 halaman web tersebut agar terkoneksi.

Pengujian keyboard berhasil dengan menekan tab dan enter yang mengarahkan saya ke halaman web ky yang selanjutnya.

validator - sebelum

Saya sudah menambahkan halaman kontak yang terdiri dari tabel jam layanan, navigasi untuk ke 3 halaman web, email dan kontak telepon. saya juga melakukan eksperimen yang dimana dengan sengaja membuat error untuk validator kemudian saya memperbaikinya.

validator - selesai

dokumen tidak terdapat error dan berfungsi dengan baik

perbedaan tautan relatif dan absolut adalah kalau tautan relatif itu membuka link dari lokal folder seperti gambar atau file. tautan absolut adalah membuka link dari internet berupa gambar, website dan sebagainya.

kapan alt menjelaskan gambar dan kapan boleh kosong:
kalo alt kosong lebih fokus ke gambar dekorasi atau background
sedangkan alt cocok ke ikon atau gambar penting.

alasan tabel tidak digunakan untuk layout adalah
karena tabel untuk mengisi data data agar lebih terorganisir dan rapi.

bukti bahwa halaman benar-benar telah diuji adalah halaman web tidak error bukti dari validator
dan juga bisa membuka halaman web lain langsung dari halaman web dan gambar juga tabel berfungsi dengan baik.


eror dalam validator yaitu:

1. Satu tautan memakai nama file yang salah.
   gejala   : halaman web yang dibuka dari nav salah satu halaman tidak terbuka
   bukti    : href didalam nav
   penyebab : penamaan href dengan file salah
   perbaikan: menyamakan nama di tautan href dengan nama file yang dituju
   hasil    : berhasil

2. Satu gambar tidak memiliki alt.
   gejala   :  Nama gambar tidak muncul
   bukti    : <alt> dalam <img>
   penyebab : <alt> tidak ada dalam bagian <img>
   perbaikan: menambahkan alt di bagian img
   hasil    : berhasil
   
3. Satu tabel tidak memiliki caption.
   gejala   : tidak ada judul untuk tabel
   bukti    : <caption> dalam <table>
   penyebab : tidak ada <caption>
   perbaikan: menambahkan <caption>
   hasil    : berhasil

4. Satu halaman memiliki title yang sama dengan halaman lain.
   gejala   : kedua halaman web berkonflik dan tautan web tidak bekerja
   bukti    : Penamaan file dan title halaman web
   penyebab : Nama file kedua halaman web sama
   perbaikan: mengganti nama file nya agar sesuai kategorinya.
   hasil    : berhasil

Sumber dan lisensi gambar
https://sevima.com/wp-content/uploads/2022/07/Apa-yang-Dimaksud-Lokakarya-1024x683.jpeg, free use.