LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB Gambar Responsif, Fluid Sizing, dan Preferensi Pengguna

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: Saya tidak pernah memakai AI

Tujuan: Ini untuk melatih dan belajar untuk membuat gambar responsif sesuai dengan perangkat layar dan membuat kode unutk preferensi penggunaan

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa penggunaan @media seperti if jika kondisi terpenuhi maka akan dilakukan style tersebut jika tidak maka jangan lakukan, ternyata fungsi @media tidak hanya itu saja. Kemudian saya perhatikan kalau modul ini fokus memeriksa adaptasi layar dan menguji setiap cobaan agar saya tau bagaimana kode yang ada di HTML. 

Gambar Fleksibel:
img { max-width: 100%; height: auto; }
 Tindakan: Meletakkan properti img di css.
 Hasil nyata: Properti ini membuat untuk image nya berubah ukuran sesuai layar perangkat
 Bukti: Ketika layar perangkat diperkecil dari viewport maka gambar akan tetap menyesuaikan lebar dari gambar dengan ketinggian yang otomatis diatur sesuai dengan layar. (ss max-width 100% yang besar dan kecil)


Kandidat Resolusi:
<img src="foto-640.jpg"
 srcset="foto-320.jpg 320w, foto-640.jpg 640w"
 sizes="(min-width: 48rem) 50vw, 92vw"
 width="640" height="360" alt="Kegiatan diskusi mahasiswa">
 Tindakan: Meletakkan tag di bagian HTML disertakan source gambar yang sesuai gambar yang di folder
 Hasil nyata: Gambar akan menyesuaikan sesuai min-width dari layar jadi jika diperkecil maka gambar akan mengecil tapi menyentuh tepi website.
 Bukti: Resolusi dari gambar tetap dipertahankan tapi ukuran akan berkecil jika viewport diperkecil. (ss 320px dan 640px gambar resolusi)

FLUID FONT DAN CONTAINER QUERY
h1 { font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem); }
.card-wrap { container-type: inline-size; }
@container (min-width: 30rem) {
 .card { padding: 1.5rem; }
}
Tindakan: Menambahkan properti h1 dan .card-wrap ke CSS.
Hasil nyata: Fontsize akan berubah sesuai layar perangkat dari 1.75rem, 1.2rem. untuk .card, teks tidak akan memanjang lebih dari aslinya dan akan turun ke bawah buat baris baru. untuk @container, jika layar perangkat di 30rem maka .card akan ada padding sejauh 1.5rem.
Bukti: Ketika layar diperkecil, teks di h1 akan turun ke bawah tetapi ukuran teks tidak banyak berubah. teks di .card-wrap akan buat baris ke bawah jika sudah hampir ke tepi dan container bekerja jika layar dibawah 30rem yang dimana akan membuat padding 1.5rem. (ss sebelum query @container dan sesudah query)


REDUCED MOTION DAN AUDIT:
@media (prefers-reduced-motion: reduce) {
 .card { transition: none; }
}
Tindakan: Menempatkan .card di css.
Hasil nyata: Jika pengguna memilih motion nya direndahkan maka transisi dari tag .card akan mati
Bukti:Ketika layar diperkecil, Item tidak akan ada transisi yang membuat pengguna tidak nyaman ketika layar  diperkecil atau di perangkat layarnya. (ss reduced motion)

Latihan mandiri dan matriks UJI:
Kasus:
1. Gambar Path = Gambar bisa tampil di web dengan path images/City.PNG
2. Container sempit/lebar = Berdasar query di @container membuat jarak padding 1.5rem
3. Zoom 200% = Konten masih tampak meskipun di zoom
4. Reduced Motion = Transisi opsional tidak tampak tapi berfungsi

Format laporan:

Kasus normal :
Tindakan: Saya menambahi h1 { font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem); } .card-wrap { container-type: inline-size; }
@container (min-width: 30rem) {
 .card { padding: 1.5rem; }
} di css
Hasil Aktual: Ketika diperkecil, item di card berpindah ke bawah secara vertikal dan tidak menyamping karena kondisi ukuran layar memenuhi di query sesuai harapan
Bukti/status: Berhasil (ss sebelum dan sesudah query @container)

Kasus batasan
Tindakan: Saya menambahi <img src="foto-640.jpg" srcset="foto-320.jpg 320w, foto-640.jpg 640w" sizes="(min-width: 48rem) 50vw, 92vw"
 width="640" height="360" alt="Kegiatan diskusi mahasiswa">
Hasil aktual: Gambar kedua yang sesuai dengan resolusi akan tampil seperti 320px dan jika layar diperbesar maka resolusi gambar pertama menggantikan. ekspektasi berbeda karena gambar tidak berubah sama sekali dan hanya resolusi gambar yang menyesuaikan dengan layar.
Bukti/status: Berhasil(ss 320px dan 640px gambar resolusi)

Kasus gagal:
Tindakan: Saya memasukkan @media (prefers-reduced-motion: reduce) 
 .card { transition: none; }
Hasil aktual: tidak ada  perubahan apapun bahkan jika diperkecil meskipun sudah memakai devtool
Bukti/status: Gagal (ss reduced motion)

Milestone: Saya sudah bisa belajar dan memahami cara membuat gambar responsif dan item yang berpindah ke bawah ketika query @container memenuhi.
backlog: Devtool viewport untuk mengatur ukuran layar dan rendering untuk menguji transisi dari .card
buglog: terjadi masalah saat membuat gambar resolusi dan transisi item.