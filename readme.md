LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB Mobile-first dan Media Query

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: Saya tidak pernah memakai AI

Tujuan: Ini untuk melatih dan belajar menggunakan menggunakan @media sebagai alternatif lain jika ukuran layar tidak sesuai dengan yang di desktop dan ketika kondisi terpenuhi maka akan mengeksekusi style yang ada didalam @media. 

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa penggunaan @media seperti if jika kondisi terpenuhi maka akan dilakukan style tersebut jika tidak maka jangan lakukan, ternyata fungsi @media tidak hanya itu saja. Kemudian saya perhatikan kalau modul ini fokus memeriksa adaptasi layar dan menguji setiap cobaan agar saya tau bagaimana kode yang ada di HTML. 

Starter Mobile:
<meta name="viewport" content="width=device-width, initial-scale=1">
 Tindakan: Meletakkan metadata di HTML bagian HEAD
 Hasil nyata: Metadata ini berguna agar ukuran halaman dari web kita bisa menyesuaikan diri dengan perangkat layar masing masing seperti
 handphone, desktop, tv dan sebagainya.
 Bukti: Ketika layar tampilan halaman web diperkecil maka teks dan isinya akan mengecil dan menyesuaikan. Ketika dibuat 320px maka tampilan halaman web akan menyesuaikan dengan layar perangkat yang diperkecil. (ss 320px)


Breakpoint Konten:
.catalog { display: grid; gap: 1rem; grid-template-columns: 1fr; }
@media (min-width: 48rem) {
 .catalog { grid-template-columns: repeat(2, 1fr); }
}
 Tindakan: Meletakkan properti dari .catalog dan @media beserta isinya.
 Hasil nyata: Properti .catalog membuat item berurutan dengan item lain yang menggunakan properti sama dengan gap 1rem dan columns 1 fr.
 Bukti: Pada bagian @media yang dimana kondisinya adalah min-width: 48rem. Jika layar diperkecil menjadi sekitaran 48rem maka isi dari @media akan
 berjalan dan akan memakai properti dari .catalog di @media. Layar di 767px, item masih bisa horizontal. Layar di 768px, item sudah mau horizontal dan item mulai vertikal ke bawah dan 769px vertikal ke bawah. (ss 767px, 768px, 769px)

Navigasi dan Form:
.nav-list { display: flex; flex-wrap: wrap; gap: .75rem; }
input, select, textarea { max-width: 100%; }
Tindakan: Menambahkan properti .nav-list ke css dan input, select, textarea ke css.
Hasil nyata: tag yang memiliki class .nav-list akan menyesuaikan diri dengan layar dan teksnya akan tidak melewati garis kemudian jarak antar teks
yaitu .75rem. max-width di input, select, dan textarea dipakai agar ukuran tidak melebihi ukuran asli perangkat jadi dibuat 100%.
Bukti: Ketika layar diperkecil maka teks yang ada di navigasi masih di fokuskan, ukuran teks disesuaikan dengan layar dan jarak antar teks itu .75
(ss tab navigasi)

Matriks Viewport:
/* jika item tidak boleh mempertahankan lebar minimum besar */
.card { min-width: 0; }
Tindakan: Menempatkan .card di css.
Hasil nyata: tag yang mempunyai .card akan diterapkan properti minimal lebar nya yaitu 0 dan tidak bisa kurang
Bukti: Tidak ada scroll horizontal akibat elemen yang terlalu lebar. 320px, 768px, dan 1200px masih tidak bisa scroll horizontal. Saya menambah
satu overflow dengan width 900px dan bisa discroll ke kanan walaupun tidak ada yang berubah dari tampilannya. (ss 320px, 768px, 1200px, zoom 200%, dan overflow width 900px)

Latihan mandiri dan matriks UJI:
Kasus:
1. 320px karena memakai metadata dan display flex juga grid, maka konten masih ada walaupun layar diperkecil.
2. Sekitar breakpoint = query yang ada di @media aktif ketika layar diperkecil sekitar 768px yang dimana item akan berpindah menjadi vertikal kebawah
3. Zoom 200% = Konten masih tetap ada walaupun di zoom 200%
4. Keyboard = Fokus masih tampak di nav list walaupun layar diperkecil.

Format laporan:

Kasus normal :
Tindakan: Saya menambahi .catalog { display: grid; gap: 1rem; grid-template-columns: 1fr; } di CSS
@media (min-width: 48rem) {
 .catalog { grid-template-columns: repeat(2, 1fr); }
}
Hasil Aktual: Ketika layar diperkecil ke 768px, maka query yang di @media akan aktif dan item akan berpindah vertikal ke bawah.
Bukti/status: Berhasil (ss 767px, 768px, dan 769px)

Kasus batasan
Tindakan: Saya menambahi .nav-list { display: flex; flex-wrap: wrap; gap: .75rem; } di CSS
input, select, textarea { max-width: 100%; }
Hasil aktual: Teks di navigasi akan menyesuaikan dengan layar perangkat dan masih bisa difokuskan tetapi jika diperbesar kali maka tidak akan melewati ukuran layar perangkat yaitu menggunakan max-width 100%
Bukti/status: Berhasil(ss Tab navigasi)

Kasus gagal:
Tindakan: Saya memasukkan .card { min-width: 0; } di CSS
Hasil aktual: ini sebagai mengetes perangkat layar yaitu 320px, 768px, 1200px, zoom 200% dan menguji overflow yang width 900px
Bukti/status: Gagal (ss 900px,320px, 768px, 1200x, dan zoom 200%)

Milestone: Saya sudah bisa belajar dan memahami cara pengunaan query @media yang aktif ketika kondisi layar terpenuhi dan saya sudah menguasai 
pembelajaran praktikum sebelumnya
backlog: Devtool device toolbar untuk menguji tampilan halaman web pada perangkat berbeda
buglog: terjadi masalah saat ada beberapa .catalog yang masih ada di css sebelumnya kemudian saya perbaiki dengan menghapus.
