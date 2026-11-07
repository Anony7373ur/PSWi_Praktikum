LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB: Function, Array, Object, dan Module

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar koding tentang javascript yaitu let, const, tipe data, operator, array, loop, function, object, scope dan module.

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa saya koding di javascript untuk hanya mengenal tipe data, operator tetapi saya belajar lebih dalam yaitu array, loop, object, function, destructuring, scope, dan module.

--FUNCTION MURNI SEDERHANA--
function hitungTotal(n, harga) {
if (!Number.isInteger(n) || n < 1) return null;
return n * harga;
}
console.log(hitungTotal(2, 10000));
Tindakan: Mengaitkan kode ini ke dalam javascript serta menguji nilai normal dan tidak valid lalu menjalankannya.
Hasil nyata: jika kita memasukkan nilai argumen ke n juga harga maka hasilnya adalah perkalian dari keduanya karena n adalah bilangan pertama dan harga adalah bilangan kedua, tetapi jika n lebih kecil dari 1 misalnya 0 atau dimasukkan desimal maupun alfabet maka proses perkalian tidak akan jalan dan akan menghasilkan return null sebagai tanda data tidak valid. Perbedaan return dan console.log adalah return mengembalikan nilai hasil proses dari function agar bisa disimpan atau dipakai lagi, sedangkan console.log hanya menampilkan nilai ke console browser.
Bukti: hasil dari 2 kali 10000 yaitu 20000 dan hasil uji nilai tidak valid yaitu null akan muncul di console devtool browser. (Screenshot hasil console.log normal dan return null)

--KOLEKSI KEGIATAN--
const kegiatan = [
{ id: 1, judul: "HTML", kuota: 20 },
{ id: 2, judul: "CSS", kuota: 0 },
{ id: 3, judul: "Audit", kuota: 10 }
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);
console.log(tersedia.map(k => k.judul));
Tindakan: Memasukkan kode ini ke dalam javascript, menambahkan kegiatan ketiga, menguji saat semua kuota bernilai nol, dan menggunakan map untuk mengambil judul lalu menjalankannya.
Hasil nyata: pada variabel tersedia, fungsi filter menyaring isi array object kegiatan yang memiliki kuota > 0 sehingga hanya kegiatan dengan kuota lebih dari nol yang tampil. Ketika semua kuota diubah menjadi 0 maka hasil filter adalah array kosong [], sedangkan saat menggunakan map(k => k.judul) maka hasilnya adalah array baru yang hanya berisi daftar nama judul kegiatan yang tersedia.
Bukti: hasil filter kegiatan tersedia, hasil uji semua kuota nol, dan hasil pengambilan judul dengan map muncul di console devtool browser. (Screenshot hasil console, 3 kegiatan, array kosong, dan kegiatan.map)

--DESTRUCTURING DAN SCOPE--
const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);
Tindakan: Memasukkan kode destructuring ini ke dalam javascript, mencoba membaca variabel di dalam block {} dari luar block untuk melihat ReferenceError, lalu memperbaiki letak scopenya dan menjalankannya.
Hasil nyata: kode destructuring mengambil nilai properti judul dan kuota secara langsung dari elemen pertama array kegiatan yaitu "HTML" dan 20. Ketika mencoba memanggil variabel yang dideklarasikan dengan let atau const di dalam block dari luar block, muncul ReferenceError karena variabel tersebut terbatas pada block scopenya, sehingga diperbaiki dengan mengakses variabel di dalam scope yang sesuai tanpa membuat semua variabel menjadi global.
Bukti: hasil destructuring judul dan kuota, pesan ReferenceError saat variabel diakses di luar block, dan hasil perbaikan scope muncul di console devtool browser. (Screenshot hasil console, ReferenceError, dan Scope diperbaiki)

--MODULE DAN UJI--
// utils.js
export function hitungTotal(n, harga) { return n * harga; }
// main.js
import { hitungTotal } from "./utils.js";
console.log(hitungTotal(2, 10000));
// HTML: 
Tindakan: Membuat file utils.js dan main.js, mengubah script pada HTML menjadi type="module", memeriksa path import, dan menjalankannya melalui server lokal.
Hasil nyata: fungsi hitungTotal pada utils.js berhasil dikirim menggunakan export dan diambil di main.js menggunakan import sehingga saat dijalankan lewat server lokal menghasilkan 20000 di console. Ketika diuji dengan mengubah path import yang berbeda, proses pemuatan module gagal dan menampilkan error pada console browser.
Bukti: hasil perhitungan dari module dan pengujian tabel fungsi serta koleksi muncul di console devtool browser melalui server lokal. (Screenshot hasil console, path import salah import dan status)

== AUDIT KESELURUHAN (termasuk matriks uji dan laporan) ==
Kasus:

1. Function valid -- harapan: Total benar -- hasil nyatanya: di console devtool akan menampilkan hasil perkalian yang benar dari hitungTotal(2, 10000) yaitu 20000


2. Filter semua nol -- harapan: Array kosong -- hasil nyatanya: di console devtool akan menampilkan array kosong [] karena tidak ada data kegiatan yang memenuhi kondisi k.kuota > 0


3. Path import salah -- harapan: Error terdeteksi -- hasil nyatanya: di console devtool muncul error gagal memuat file module karena path import yang dituju tidak ditemukan


4. Scope block -- harapan: Binding tidak tersedia di luar -- hasil nyatanya: karena variabel dideklarasikan di dalam block {}, maka saat dipanggil dari luar block muncul ReferenceError karena variabel tidak bisa diakses di luar scopenya



Format laporan:

Kasus normal :
Tindakan: Saya mengaitkan main.js ke html menggunakan  dan menguji fungsi hitungTotal(2, 10000) serta filter kegiatan yang kuotanya tersedia
Hasil Aktual: Module berjalan melalui server lokal, fungsi menghasilkan total 20000, dan daftar kegiatan yang tersedia tampil di console devtool browser
Bukti/status: Berhasil 

Kasus batasan
Tindakan: Menguji nilai batas jumlah pada fungsi hitungTotal yaitu 0, 1, 5, dan 6 serta menguji filter ketika semua kuota kegiatan diubah menjadi 0
Hasil aktual: Ketika dijalankan, jumlah 1 dan 5 menghasilkan total harga yang benar, jumlah 0 dan 6 menghasilkan null karena di luar batas 1 sampai 5, dan filter semua kuota 0 menghasilkan array kosong []
Bukti/status: Berhasil 

Kasus gagal:
Tindakan: Memasukkan nilai tidak valid seperti angka desimal 1.5 ke hitungTotal, sengaja menyalahkan path import pada main.js, dan memanggil variabel block scope dari luar block
Hasil aktual: Fungsi hitungTotal mengembalikan nilai null, path import yang salah menghasilkan error pemuatan module di console, dan pembacaan variabel di luar block menghasilkan ReferenceError
Bukti/status: Gagal

Milestone: Saya sudah bisa belajar dan memahami cara menggunakan function murni, mengolah array dan object dengan filter serta map, melakukan destructuring, memahami batas block scope, dan memisahkan file kode dengan module di javascript
backlog: Menggunakan server lokal dan Devtool console untuk melihat hasil dari console.log pada module javascript
buglog: Ketika memanggil variabel di luar block {} muncul ReferenceError karena batas scope, nilai desimal seperti 1.5 ditolak oleh Number.isInteger sehingga menghasilkan null, dan jika path import pada module salah maka file gagal dimuat di console browser.




