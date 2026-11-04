LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB: Variabel, Conditional, dan Loop

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar koding menggunakan javascript yaitu konversi tipe data, penjumlahan, penggunaan if, array dan pengulangan.

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa saya koding di javascript untuk belajar penerapan langsung ke dom html tetapi
ternyata belajar dasarnya yaitu konversi, tipe data, array dan lain sebagainya.

 --FILE DAN CONSOLE--
<script src="main.js" defer></script>
 Tindakan: Mengaitkan html ke javascript menggunakan tag script
 Hasil nyata: dengan mengaitkan javascript ke html maka kode akan berfungsi dengan baik
 Bukti: hasil tampak di console devtool browser(screenshot hasil console.log)

 --KONVERSI DATA--
const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);
 Tindakan: Memasukkan kode ini ke dalam javascript dan menjalankannya
 Hasil nyata: pada console.log pertama hanya menggabungkan string yaitu "2" ke 1 yang dimana hasilnya adalah 21. 
 Pada console.log kedua mengonversi string teks yang 2 menjadi angka atau number agar bisa di tambahkan dengan 1.
 Bukti: penggabungan string dan konversi angka muncul di console devtool browser. (screenshot konversi data dan experimen konversi data)

 --ATURAN JUMLAH TIKET--
 const jumlah = Number("3");
 if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
 } else { console.log(jumlah * 10000); }
Tindakan: Memasukkan kode ini ke dalam javascript dan menjalankannya
Hasil nyata: meggunakan if yang dimana jika jumlah tidak integer, jumlah < 1, atau jumlah > 5 maka jumlah tidak valid. Jika salah satu
tidak true maka akan menjalankan console.log(jumlah * 10000) di kali dengan nilai dari variabel jumlah.
Bukti: hasil muncul di console devtool yaitu hasil dari kondisi if yang terpenuhi atau tidak.(screenshoot jumlah = 1, jumlah = 5, jumlah tidak valid, )
    

 --LOOP KOLEKSI--
 const judul = ["HTML", "CSS", "Audit"];
 for (const item of judul) console.log(item);
Tindakan: Memasukkan kode ini ke dalam javascript dan menjalankannya
Hasil nyata: membuat item didalam array variabel judul yang kemudian menggunakan perulangan untuk memasukkan seluruh isi ke dalam item dan
mencetak isi dari variabel judul tersebut dari item.
Bukti: isi Array dari judul muncul di console devtool browser(screenshoot array, 4 item array, array kosong)
    

== AUDIT KESELURUHAN (termasuk matriks uji dan laporan) ==
Kasus:
1. string 2 + 1 -- harapan: 21 -- hasil nyatanya: di console devtool akan menampilkan hasil dari console.log(teks + 1) yaitu 21
2. number 2 + 1 -- harapan: 3 -- hasil nyatanya: di console devtool akan menampilkan hasil dari console.log(number(teks) + 1) yaitu 3 karena 2 + 1
3. jumlah 0/6 -- harapan: Ditolak -- karena kondisi if terpenuhi yaitu jumlah < 1 atau jumlah > 5 yang dimana jumlah tidak valid
4. array kosong -- harapan: tidak ada iterasi -- hasil nyatanya: karena tidak isi dalam array maka for tidak menemukan data untuk dimasukkan ke item


Format laporan:

Kasus normal :
Tindakan: Saya mengaitkan javascript dengan html menggunakan <script>
Hasil Aktual: Javascript bisa dijalankan melalui console devtool di browser
Bukti/status: Berhasil (screenshot hasil console.log)

Kasus batasan
Tindakan: nilai dari jumlah diubah menjadi 6 atau 0 di bagian if
Hasil aktual: ketika dijalankan maka jumlah tidak valid dikarenakan jumlah < 1 dan jumlah > 5
Bukti/status: Berhasil(screenshot jumlah tidak valid)

Kasus gagal:
Tindakan: membuat array judul kosong dan pengulangan pada item di array tersebut
Hasil aktual: tidak ada iterasi dan item yang ingin dicetak dari console.log
Bukti/status: Gagal (ss array kosong)



Milestone: Saya sudah bisa belajar dan memahami cara menggunakan variabel, kondisi if else, dan array juga loop di javascript
backlog: Devtool console untuk melihat hasil dari console.log yang ada di kode dalam javascript
buglog: array kosong tidak tampil di console dan dicobai isFloat tetapi tidak ada fungsi tersebut jadi untuk memeriksa sebuah nilai itu hanya
ada isInteger untuk melihat apakah nilai dalam jumlah tersebut bilangan bulat.
