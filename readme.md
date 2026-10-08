LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB (Unit, Tipografi, dan Sistem Gaya Dasar)

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: Saya tidak pernah memakai AI

Tujuan: Ini untuk melatih penggunaan var(--), width/maxwidth, beberapa modifikasi font, button:focus-visible, input:focus-visible dan sebagainya.

Asumsi sebelum menguji di modul ini/praktikum ini adalah memasukkan properti main ke main sebelumnya, token yang dimaksud seperti variabel, font family sama seperti sebelumnya dan button focus untuk memfokuskan ke tombol.

Reset ukuran kotak:
*, *::before, *::after { box-sizing: border-box; } main { width: 90%; max-width: 60rem; margin-inline: auto; }
Tindakan: Memasukkan main kedalam main yang sebelumnya di css dan menambahkan box-sizing di dalam nya.
Hasil nyata: ini berfungsi untuk mengubah properti main yang dimana lebar nya 90 % dari maksimal lebarnya 60 rem. Width adalah lebar dari main bisa pixel, rem dan persen. Max-width adalah maksimal lebar yang dibuat sekaligus jika tidak ada persen di width maka width diambil langsung dari situ. kalau misalnya width 65% dan max width 200 rem, maka lebar dari main adalah 65% dari 200rem.
Bukti: Lebar dari main berubah 65% dari 60rem.

Token warna dan jarak:
:root { --brand: #175cd3; --space: 1rem;        --surface: white; --ink: #243244; }
.card { padding: var(--space); background: var(--surface); }
Tindakan: Meletakkan :root diatas kali di css dan mengganti padding dan background di .card menjadi var(--)
Hasil nyata: Ini berfungsi sebagai penyimpan nilai ke variabel agar bisa dipanggil hanya dengan --brand jadi tidak perlu memasukkan nilai seperti
background: red tetapi bisa dari background: var(--brand). :root itu sebagai tempat menyimpan variabelnya yang harus paling atas.
Bukti: Padding berdasarkan dari --space dan warna background dari --ink.

Tipografi dan Unit:
body { font-family: Arial, sans-serif; color: var(--ink);    
font-size: 1rem; line-height: 1.6; } 
h1 { font-size: 2rem; line-height: 1.2; } 
p { max-width: 65ch; }
Tindakan: Memasukkan isi body pada body yang sebelumnya, menambahkan h1 dan p ke css beserta propertinya.
Hasil nyata: Font dari body akan berubah menjadi arial dan bisa juga sans serif kemudian color nya diambir dari variabel --ink, selanjutnya
ukuran fontnya adalah 2rem dan jarak tiap baris kata adalah 1.2. Untuk h1, ukuran teks h1 menjadi 2 rem dan jarak tiap baris adalah 1.2.
Kemudian ukuran maksimal lebar dari p adalah 65ch yang dimana batas horizontal kanan untuk teks.
Bukti: Font dari body adalah Arial, dengan warna sesuai var --ink yaitu hitam, ukuran font adalah 1rem dengan jarak antar baris adalah 1.6
       sedangkan untuk h1, ukuran font adalah 2rem dan jarak antar baris text adalah 1.2
       Untuk p, ukuran maksimal lebar dari teks adalah 65ch.

Organisasi dan Audit:
button:focus-visible, input:focus-visible { outline: 3px solid var(--brand); outline-offset: 3px;}
Tindakan: Memasukkan dibawah button yang udh ada sebelumnya di css
Hasil Nyata: Tombol submit/daftar sudah tidak bisa ditekan karena ada focus-visible yang membuat tidak menjalankan propertinya meskipun ada
di css. jika kita menghapus focus-visible maka properti yang ada di button antara lain outline dan outline-offset akan berjalan dan muncul di tampilan halaman web kita.
Bukti: Jika dijalankan yang masih ada focus-visible, maka tidak akan diterapkan properti css di button tetapi masih di tekan tetapi auto fokus ke atas sedangkan jika kita menghapus focus-visible maka properti yang ada di button dan input akan bekerja yang dimana akan muncul outline sebesar 3 pixel dengan warna sesuai var --brand dan outline offset itu garis diluar dari kotak buttonnya sebesar 3px.

Latihan mandiri dan matriks UJI:
Kasus:
1. Zoom 200% hasilnya adalah kontennya masih muncul
2. Token brand diganti berarti setiap properti style yang memakai var --brand seperti background: var(--brand) maka jika kita menggantinya dari :root maka warna otomatis berganti kepada setiap properti yang ada var --brand
3. Tab berarti fokus akan muncul di input sebagai pemberitahu kalo kita akan di input disitu dan jika ingin lebih jelas maka bisa diperjelas dengan menggunakan css dengan membuat outline warna biru. ketika spam tab maka fokus akan turun ke bawah dan berulang.
4. Teks panjang hasilnya karena teksnya tetap rapi dan tidak terpotong karena tipografi dan reset ukuran kotak.

Format laporan:
Kasus normal
Tindakan: Saya menambah properti main dari width: 90%; max-width: 60rem; margin-inline: auto;  ke dalam main sebelumnya
Hasil aktual: Width, max-width dan margin berubah dan text menjadi tidak teratur dan ketika tampilan web diperkecil maka tampilan akan menyesuaikan.
Bukti/status: Berhasil(ss tampilan halaman)

Kasus Batasan :
Tindakan: saya memasukkan :root dan .card di css
Hasil Aktual: Terdapat banyak variabel yang dimana isinya adalah properti seperti background: red dan bisa diterapkan variabel menggunakan var(--warna).
Bukti/status: Berhasil (ss variabel)

Kasus gagal:
Tindakan: saya memasukkan button-focus dan input:focus visible
Hasil aktual: Properti dari dari  button dan input tidak muncul di tampilan sedangkan saya menghapus focus visible maka properti nya akan tampil.
Bukti/status: Gagal (ss tampilan halaman)

Milestone: Saya sudah bisa belajar dan memahami cara pengunaan variabel --var, properti lebih banyak, dan peggunaan button:focus-visible
