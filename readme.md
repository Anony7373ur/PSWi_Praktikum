LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB (Navigasi dan Card dengan Flexbox)

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: Saya tidak pernah memakai AI

Tujuan: Ini untuk melatih menggunakan flexbox yang dimana mengatur ukuran teks dan barisannya agar sesuai dengan tampilan layar halaman.

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa flex ini untuk membuat ukuran dari website menyesuaikan dengan layar perangkat
jika memakai laptop atau handphone.

Navigasi Fleksibel:
.nav-list { display: flex; flex-wrap: wrap; gap: 1rem;
 list-style: none; padding: 0; }
 Tindakan: Meletakkan properti dari .nav-list yang berisi display: flex, flex-wrap, gap, list-style dan padding di css.
 Hasil Nyata: Ini berfungsi untuk membuat tampilan dari teks nav berubah ke bawah dan tidak terpotong ketika layar diperkecil.
 Bukti: Ketika diperkecil maka teks tetap tampak di layar tapi jika sampai diperkecil kali maka akan terpotong.

Card Fleksibel:
.cards { display: flex; flex-wrap: wrap; gap: 1rem; }
.card { flex: 1 1 15rem; padding: 1rem;
 border: 1px solid #ccd; min-width: 0; }
 Tindakan: Meletakkan properti dari .cards dan .card antara lain flexbox, padding, border, dan min-width di css.
 Hasil nyata: <div> yang ada class .cards menjadi sama seperti .nav-list yang dimana jika layar diperkecil maka teks akan menyesuaikan diri
 dan turun ke bawah kemudian ada kotak sebagai pemisah dengan lain juga jarak menggunaakan flex: 1 1 15rem.
 Bukti: Ketika layar diperkecil, maka tag yang ada class .cards dan .card menyesuaikan diri dengan teks turun ke bawah agar masih nampak.

Konten panjang dan pengukuran:
.card h2 { overflow-wrap: anywhere; }
Tindakan: Meletakkan properti dari .card h2 di css dan lihat hasil.
Hasil nyata: h2 dari tag yang mempunya class .card akan tidak akan melewati border yang dibuat jika layar diperkecil
Bukti: Teks yang ada di h2 tidak terpotong maupun melewati border yang dibuat ketika layar diperkecil.

Latihan mandiri dan matriks UJI:
Kasus:
1. 360px tanpa overflow maka teks menembus border dan garis, jika dibuat overflow maka akan turun dan tetap nampak.
2. Empat Item maka jika diterapkan properti seperti .card dan .card h2 maka akan sama seperti card sebelumnya yang dimana teks turun dan nampak.
3. Judul Panjang jika ditambah overflow-wrap : anywhere maka teks tidak akan terpotong dan melewati garis karena sama seperti tampilan card.
4. Tab hasilnya adalah link masih tetap dibuka dengan cara di tab dan enter.

Format laporan:

Kasus normal :
Tindakan: saya memasukkan .card h2 { overflow-wrap: anywhere; } di css
Hasil Aktual: h2 didalam class card akan tidak memotong garis dan turun kebawah walaupun diperkecil layar sampai mentok.
Bukti/status: Berhasil (ss .cards h2)

Kasus batasan
Tindakan: Saya menambahi properti .cards { display: flex; flex-wrap: wrap; gap: 1rem; } dan .card { flex: 1 1 15rem; padding: 1rem;}
Hasil aktual: Teks di dalam class .card dan h2 tidak akan terpotong  jika diperkecil layarnya tetapi teksnya melewati garis
Bukti/status: Berhasil(ss .card dan .cards)

Kasus gagal:
Tindakan: saya memasukkan .nav-list { display: flex; flex-wrap: wrap; gap: 1rem; list-style: none; padding: 0; }
Hasil aktual: ukuran .nav-list tetap sama walaupun sudah ditambah flex karena ukuran teks kecil dan jika diperkecil layar sampe mentok, flex nya
masih ada tidak sesuai.
Bukti/status: Gagal(ss navigasi)

Milestone: Saya sudah bisa belajar dan memahami cara pengunaan Display: flex, flex-wrap: wrap, flex: 1 1 15rem, dan overflow-wrap: anywhere.
