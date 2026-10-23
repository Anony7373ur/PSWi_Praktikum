LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB Branch, Merge, dan Code Review (WEEK 7 -- seminggu sebelum UTS)

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar untuk bisa membuat branch baru, merge branch baru ke ke branch lain dan review code. 

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa saya hanya membuat branch baru dan merge keduanya ternyata ada yang lebih dari itu seperti sistem nama dari commit dan isi dari branch main digantikan oleh branch fitur-petunjuk

REPOSITORY AMAN
git status
git branch
git switch -c fitur-petunjuk
 Tindakan: Menjalankan 3 perintah git di terminal
 Hasil nyata: melihat branch yang ada di git lokal dan membuat branch baru bernama fitur-petunjuk
 Bukti: setelah dibuat branch fitur-petunjuk, maka ketika git branch maka akan terdapat 2 branch.

SIMULASI REVIEW
git diff nama-branch-utama...fitur-petunjuk
 Tindakan: Menjalankan perintah git ini di terminal
 Hasil nyata: ini membandingkan branch main dengan branch fitur-petunjuk
 Bukti: file yang dibedakan dari branch main dan fitur-petunjuk (ss git diff main fitur-petunjuk)

 MENGGABUNGKAN PERUBAHAN
 git switch nama-branch-utama
git merge fitur-petunjuk
git log --oneline --max-count=5
Tindakan:
    
Path dan Aset:
<link rel="stylesheet" href="css/style.css">
<img src="assets/lokasi.jpg" alt="Lokasi kegiatan">
Tindakan: Menambahkan link pengait ke css dan gambar
Hasil nyata: Gambar di halaman muncul dan tampilan web berubah karena dikaitkan ke css
Bukti: Ketika diuji dengan membuat penamaan file menjadi kapital maka akan terjadi 404 atau tidak ditemukan karena nama berbeda dengan yang diminta, kemudian saya perbaiki dengan menyamakan nama file yang pada akhirnya tampilan web berubah dan gambar muncul. 
(ss network 404)



== AUDIT KESELURUHAN (termasuk matriks uji dan laporan) ==
Halaman: beranda.html
Kasus:
1. Semua link -- harapan: Tujuan benar -- hasil nyatanya: terhubung dan bisa akses halaman web lainnya
halaman aktif -- harapan: aria-current hanya sesuai halaman -- hasil nyatanya: aria-current aktif dan menunjukkan halaman terkini yang sedang dibuka
2. Aset -- harapan: Tidak 404 -- hasil nyatanya: css dan gambar terhubung dengan baik dan tidak ada error 404 (tidak ditemukan)
3. zoom -- harapan: konten tetap tersedia -- hasil nyatanya: tampilan web tetap rapi dan muncul ketika resolusi web diperkecil di 320px, 1200px dan 200% 
4. keyboard -- harapan: interaksi tersedia -- hasil nyatanya: Tab fokus bekerja dengan baik

Halaman: kegiatan.html
Kasus:
1. Semua link -- harapan: Tujuan benar -- hasil nyatanya: terhubung dan bisa akses halaman web lainnya
halaman aktif -- harapan: aria-current hanya sesuai halaman -- hasil nyatanya: aria-current aktif dan menunjukkan halaman terkini yang sedang dibuka
2. Aset -- harapan: Tidak 404 -- hasil nyatanya: css dan gambar terhubung dengan baik dan tidak ada error 404 (tidak ditemukan)
3. zoom -- harapan: konten tetap tersedia -- hasil nyatanya: tampilan web tetap rapi dan muncul ketika resolusi web diperkecil di 320px, 1200px dan 200% 
4. keyboard -- harapan: interaksi tersedia -- hasil nyatanya: Tab fokus bekerja dengan baik

Halaman: daftar.html
Kasus:
1. Semua link -- harapan: Tujuan benar -- hasil nyatanya: terhubung dan bisa akses halaman web lainnya
halaman aktif -- harapan: aria-current hanya sesuai halaman -- hasil nyatanya: aria-current aktif dan menunjukkan halaman terkini yang sedang dibuka
2. Aset -- harapan: Tidak 404 -- hasil nyatanya: css dan gambar terhubung dengan baik dan tidak ada error 404 (tidak ditemukan)
3. zoom -- harapan: konten tetap tersedia -- hasil nyatanya: tampilan web tetap rapi dan muncul ketika resolusi web diperkecil di 320px, 1200px dan 200% 
4. keyboard -- harapan: interaksi tersedia -- hasil nyatanya: Tab fokus bekerja dengan baik


Format laporan:

Kasus normal :
Tindakan: saya menambah beberapa halaman yaitu beranda, kegiatan, dan daftar
Hasil Aktual: ketiga halaman terhubung dengan baik dengan navigasi
Bukti/status: Berhasil (ss halaman juga navigasi beranda, kegiatan, dan daftar)

Kasus batasan
Tindakan: Saya membuat tag a href untuk menghubungan halaman dengan halaman lain
Hasil aktual: Ketika link ditekan, maka akan diarahkan ke halaman yang dituju
Bukti/status: Berhasil(ss navigasi beranda, kegiatan dan daftar)

Kasus gagal:
Tindakan: Saya membuat penamaan file gambar dan css menjadi huruf kapital.
Hasil aktual: file gambar dan css tidak ditemukan maka tampilan web tidak menampilkan gambar dan tidak ada style.
Bukti/status: Gagal (ss network 404)



Milestone: Saya sudah bisa belajar dan memahami cara mengintegrasikan beberapa halaman web dan satu css untuk merubah tampilan seluruh halaman.
backlog: Devtool network untuk memeriksa file dan halaman web terkoneksi dengan baik dan dapat ditemukan. Devtool viewport untuk melihat tampilan halaman web jika diperkecil.
buglog: terjadi masalah 404 jika penamaan file gambar dan css di html berbeda dengan file yang ada dalam folder web. 