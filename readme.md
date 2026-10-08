LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB "Selector, Cascade, dan Box Model"

NAMA: GABRIEL CHRISTIAN RONALDO PANJAITAN
NIM : 41426009
PRODI: DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan Selector, Cascade, dan Box Model:

Tujuannya dibuat website ini ialah:
Menghubungkan stylesheet eksternal dan memilih selector yaitu class sesuai kebutuhan dan Menelusuri konflik CSS melalui aturan cascade dan DevTools.

cara menjalankannya:
membuat link untuk mengaitkan ke css external dengan <link rel="" href="">, kemudian membuat class pada form agar bisa gunakan di css dan di modif ke class yang kita seperti <form class="card"> dan jika ingin memodif tampilan dari form kita tersebut maka menggunakan .card atau kalo lebih spesifik form.card. dan didalamnya dibuat warna dari text tersebut yaitu color: purple dan color: orange.
Properties yang dipakai dalam website ini adalah: width, padding, back border, color, background, dan margin. 

Tindakan, hasil nyata, dan bukti:
<link rel = "stylesheet" href="style.css">, hasilnya bisa menggunakan css external dari folder lain.
Bukti: tampilan web berubah karena css

form.card { padding: 1rem; background: white; }
.notice { color: #175cd3; }
hasilnya adalah background dari form putih dan padding nya 1rem dan <p> berubah warna jadi biru.
Bukti: Background form jadi putih dan text class notice di <p> jadi warna biru

.card p { color: purple; }
.notice { color: orange; }
hasilnya adalah text di .card p dan fokus ke <p> maka warna text <p> di dalam card akan berubah dan
warna text dari .notice berubah ke orange. Buktinya adalah warna text <p> dalam form berubah ke ungu dan <p class="notice"> menjadi warna orange.

.card { width: 240px; padding: 16px;
 border: 2px solid #445; margin: 12px; }
 hasilnya adalah ukuran dari form jadi kecil dan jaraknya antar text dan luarnya agak jauh dan dilengkapi oleh garis tepi dan margin untuk jarak dari sisi website. Buktinya adalah formulir menjadi sebelah kiri dan panjang  box lebih pendek dan garis tepi agak tebal yang mengelilingi formulirnya.

 1. Kasus Normal:
 Tindakan: Menambahkan form.card { padding: 1rem; background: white; } .notice { color: #175cd3; }
 Hasil Aktual: Warna latar belakang form berubah ke putih dan paddingnya 1rem sedangkan warna text
.notice di <p> berubah ke biru.
Bukti/status: Berhasil (Screenshot tampilan halaman web)
Hasilnya sesuai karena di html kita buat class dan untuk css, kita buat .card agar bisa hanya fokus styling pada
class tersebut.

2. Kasus Batas:
Tindakan: Menambahkan .card p { color: purple; } .notice { color: orange; } tetapi tidak menambahkan <p> di form
Hasil Aktual: warna text <P> pada form.card berubah menjadi ungu jika ditambahkan <p> pada form dan warna text .notice berubah ke orange.
Bukti/Status: Berhasil tetapi warna <p> tidak berubah karena tidak menambahkan <p> di form 

3. Kasus gagal:
Tindakan: menambahkan .card { width: 240px; padding: 16px; border: 2px solid #445; margin: 12px; } berdasarkan box sizing = box border.
Hasil Aktual: Tampilan tetap sama dan tidak ada perubahan kecuali bagian margin, width dan border. jika ditambah box sizing = box border, tidak ada perubahan sama sekali.
Bukti/Status: Gagal

Catatan validator sebelum:
Terdapat error pada form action="" dan jika mengubah penamaan dari href atau class dari sebuah text tidak akan ada perubahan sama sekali.

catan Validator sesudah:
Diperbaiki dengan menambahkan # pada form action="#"

MILESTONE: Saya sudah bisa membuat css dengan menggunakan class, padding, margin dan lainnya.