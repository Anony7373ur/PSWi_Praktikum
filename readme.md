LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB: Selection, Elemen, dan Render DOM

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar koding tentang javascript DOM yaitu cara memilih elemen HTML dengan aman, membuat elemen baru lewat kode javascript, memisahkan data array dari tampilan web, serta melakukan render ulang dan menangani keadaan data kosong tanpa memakai framework.

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa saya mengira mengubah isi halaman web dari javascript bisa langsung memakai teks HTML biasa dan setiap kali fungsi render dipanggil maka data otomatis menyesuaikan sendiri, tetapi setelah praktikum ini saya belajar bahwa kita harus memilih selector dengan benar agar tidak menghasilkan null, memakai textContent supaya tag HTML tidak dieksekusi sembarangan, serta mengosongkan isi elemen induk terlebih dahulu dengan replaceChildren() agar daftar tidak terduplikasi saat dirender ulang.

--STARTER DOM--
<main>
<h1>Daftar Peserta</h1>
<p id="pesan" role="status"></p>
<ul id="daftar"></ul>
</main>
Tindakan: Membuat struktur HTML minimum di atas pada body, menghubungkan file main.js menggunakan atribut defer, memeriksa selector h1 dan #daftar dengan document.querySelector, menguji selector yang sengaja disalahkan untuk membaca nilai null, lalu mengembalikan selector menjadi benar.
Hasil nyata: Saat menggunakan selector yang benar yaitu document.querySelector("h1") dan document.querySelector("#daftar") beserta atribut defer pada script, kedua elemen berhasil ditemukan dan tampil saat dicek di console. Ketika selector sengaja disalahkan misalnya menjadi "#daftarr", hasilnya mengembalikan nilai null di console karena tidak ada elemen dengan id tersebut di halaman HTML. Setelah dikembalikan ke selector yang benar, elemen kembali terbaca dengan normal.
Bukti: hasil pemeriksaan elemen h1 dan #daftar yang ditemukan, serta hasil nilai null saat menguji selector salah muncul di console devtool browser. (Screenshot array kosong dan uji null)

--TEKS DAN ELEMEN BARU--
const daftar = document.querySelector("#daftar");
const li = document.createElement("li");
li.textContent = "<b>Rina</b>";
daftar.append(li);
Tindakan: Menambahkan kode pembuatan elemen li melalui javascript, mengisi nilainya menggunakan textContent berisi tag "<b>Rina</b>", memasukkannya ke dalam #daftar dengan append, lalu mengamati tampilan halaman dan memeriksa struktur DOM pada tab Elements.
Hasil nyata: Teks yang tampil di layar browser adalah tulisan literal "<b>Rina</b>" lengkap dengan tanda kurung siku tag-nya, bukan teks Rina yang tercetak tebal. Saat diperiksa pada bagian Elements di DevTools, di dalam tag <li> hanya ada teks biasa dan DOM tidak membuat elemen <b> baru. Perbedaan textContent dan HTML parsing (seperti innerHTML) adalah textContent hanya memasukkan data murni sebagai teks biasa apa adanya sehingga aman dari sisipan kode HTML atau script berbahaya, sedangkan HTML parsing akan membaca dan menerjemahkan tag di dalam string menjadi elemen HTML sungguhan di dalam DOM.
Bukti: tampilan teks literal "<b>Rina</b>" pada halaman web dan struktur tag <li> tanpa elemen <b> baru di tab Elements devtool browser. (Screenshot starter DOM dan Dom tidak membuat b baru)

--STATE DAN RENDER--
let peserta = [{ id: 1, nama: "Rina" }, { id: 2, nama: "Budi" }];
function render() {
daftar.replaceChildren();
for (const p of peserta) {
const li = document.createElement("li");
li.textContent = p.nama;
daftar.append(li);
}
}
render();
Tindakan: Memasukkan kode state array peserta dan fungsi render ke dalam main.js (memperbaiki penulisan for (const pof peserta) di modul menjadi for (const p of peserta)), memanggil fungsi render() sebanyak dua kali untuk mengecek apakah daftar menjadi ganda, lalu menguji mengubah peserta = [] dan memanggil render() kembali.
Hasil nyata: Ketika fungsi render() dipanggil dua kali berturut-turut, daftar nama Rina dan Budi tetap hanya tampil masing-masing satu kali dan tidak duplikat karena perintah daftar.replaceChildren() di baris awal selalu membersihkan semua isi di dalam <ul> sebelum perulangan membuat ulang elemen <li> dari array peserta. Ketika diuji dengan mengubah isi state menjadi array kosong peserta = [] lalu memanggil render(), seluruh daftar nama di halaman langsung hilang dan jumlah elemen <li> pada DOM menjadi nol sesuai dengan isi state.
Bukti: tampilan daftar peserta yang tidak ganda saat render dipanggil dua kali dan tampilan daftar yang bersih saat peserta = [] di browser serta tab Elements. (Screenshot State and Render dan array kosong)

--KEADAAN KOSONG--
const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "" : "Belum ada peserta";
Tindakan: Memilih elemen #pesan, memasukkan logika pengecekan panjang array peserta.length ke dalam fungsi render(), memisahkan aturan gaya tampilan pesan ke dalam file style.css, lalu menguji tampilan saat array peserta kosong dan saat array berisi data.
Hasil nyata: Setelah kode dimasukkan ke dalam fungsi render(), ketika array peserta berisi data Rina dan Budi maka elemen #pesan menjadi kosong (tidak menampilkan tulisan apa-apa) dan daftar nama muncul seperti biasa. Sebaliknya, ketika array diubah menjadi kosong peserta = [] dan dirender, daftar <ul> menjadi kosong dan pada elemen #pesan langsung muncul teks "Belum ada peserta" dengan gaya CSS yang sudah diatur di style.css sehingga pengguna tahu bahwa data memang sedang kosong.
Bukti: tampilan pesan "Belum ada peserta" saat array kosong dan tampilan daftar peserta tanpa pesan saat array berisi data di browser. (Screenshot State and render dan Keadaan Kosong)

== AUDIT KESELURUHAN (termasuk matriks uji dan laporan) ==
Kasus:

1. Selector salah -- harapan: null terdiagnosis -- hasil nyatanya: saat menguji document.querySelector dengan id yang salah ketik seperti "#daftarr", di console devtool terdeteksi nilai null karena elemen tidak ditemukan di dokumen HTML


2. Markup sebagai nama -- harapan: Teks literal -- hasil nyatanya: saat memasukkan nama "<b>Rina</b>" menggunakan properti textContent, halaman menampilkan tulisan "<b>Rina</b>"


3. Render dua kali -- harapan: Tidak duplikat -- hasil nyatanya: saat fungsi render() dipanggil dua kali, jumlah item <li> di dalam #daftar tetap sesuai jumlah data di array peserta dan tidak bertambah ganda karena adanya daftar.replaceChildren()


4. Array kosong -- harapan: Pesan empty tampil -- hasil nyatanya: saat state diubah menjadi peserta = [] lalu fungsi render() dijalankan, item di dalam daftar bersih dan muncul teks "Belum ada peserta" pada elemen #pesan



Format laporan:

Kasus normal :
Tindakan: Saya menghubungkan main.js ke index.html memakai atribut defer, memilih elemen #daftar dan #pesan dengan selector yang benar, mengisi array peserta dengan data normal (Rina dan Budi), serta memanggil fungsi render() termasuk menguji pemanggilan render() dua kali
Hasil Aktual: Halaman berhasil berjalan lewat server lokal, elemen ditemukan tanpa error, daftar nama Rina dan Budi tampil sesuai isi array state tanpa duplikat, dan pesan empty state tidak muncul karena data terisi
Bukti/status: Berhasil 

Kasus batasan
Tindakan: Menguji perubahan state menjadi array kosong peserta = [], menambahkan satu data peserta dengan nama yang sangat panjang, serta menguji input nama yang mengandung markup HTML seperti "<b>Rina</b>"
Hasil aktual: Ketika array kosong, daftar <ul> menjadi kosong dan pesan "Belum ada peserta" tampil dengan jelas. Ketika diisi nama yang sangat panjang maupun teks "<b>Rina</b>", keduanya tetap dirender dengan aman sebagai teks literal di dalam elemen <li> tanpa merusak struktur DOM
Bukti/status: Berhasil 

Kasus gagal:
Tindakan: Sengaja menyalahkan penulisan selector menjadi "#daftarr" lalu mencoba menjalankan append, menyalin mentah kode perulangan dari modul yaitu for (const pof peserta) tanpa spasi, serta memasukkan objek peserta dengan string nama kosong "" tanpa validasi
Hasil aktual: Selector yang salah menghasilkan nilai null sehingga memicu TypeError: Cannot read properties of null di console, penulisan pof tanpa spasi memunculkan SyntaxError di console devtool, dan nama string kosong membuat bulatan list <li> tampil kosong tanpa teks di layar sebelum akhirnya diperbaiki dan di-retest
Bukti/status: Gagal

Milestone: Saya sudah bisa memilih elemen DOM menggunakan querySelector, membuat elemen HTML baru secara aman dengan createElement dan textContent, memisahkan data state array dari tampilan, melakukan render ulang tanpa duplikat menggunakan replaceChildren(), serta menampilkan pesan empty state saat data kosong
backlog: merapikan struktur kode pada javascript
buglog: Ketika selector salah ketik atau script dijalankan sebelum DOM siap tanpa atribut defer, querySelector menghasilkan null dan memicu TypeError saat memanggil replaceChildren atau append. Selain itu, penulisan for (const pof peserta) dari modul memicu SyntaxError karena kurang spasi antara variabel p dan kata kunci of, serta jika replaceChildren() dihapus dari fungsi render maka daftar peserta akan terduplikasi setiap kali render() dipanggil ulang.