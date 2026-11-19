LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB: Loading, Error, Empty, dan Timeout

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar koding tentang pengelolaan state asynchronous pada Fetch API yaitu menampilkan status loading dan menonaktifkan tombol sementara dengan blok finally, membedakan keadaan data kosong dari error, membatalkan permintaan jaringan yang terlalu lama memakai AbortController dan setTimeout, serta menguji berbagai kategori kegagalan seperti 404, JSON rusak, salah struktur, dan mode offline.

Asumsi sebelum menguji di praktikum ini adalah bahwa saya mengira proses fetch di server lokal selalu berjalan instan dan jika terjadi error atau data kosong maka tombol otomatis bisa langsung dipakai lagi tanpa perlu diatur, tetapi setelah praktikum ini saya belajar bahwa pada koneksi lambat pengguna bisa mengklik tombol berkali-kali dan memicu request ganda jika tombol tidak di-disabled sementara, data array kosong bukan merupakan error sehingga harus dibedakan pesannya, serta fetch perlu diberi batas waktu menggunakan AbortController agar tidak menggantung terus saat jaringan bermasalah.

--LOADING DAN FINALLY--
tombol.disabled = true;
pesan.textContent = "Memuat data...";
daftar.replaceChildren();
// setelah catch tambahkan finally:
finally {
  clearTimeout(timer);
  tombol.disabled = false;
}
Tindakan:  menambahkan penonaktifan tombol (tombol.disabled = true), pesan "Memuat data...", dan pembersihan daftar di awal sebelum blok try, lalu menambahkan blok finally setelah catch untuk mengaktifkan kembali tombol. Setelah itu saya mengatur throttling jaringan di tab Network DevTools menjadi Slow 3G dan mencoba mengklik tombol Muat kegiatan berkali-kali saat proses berlangsung.
Hasil nyata: Saat tombol Muat kegiatan diklik pada kondisi jaringan lambat (Slow 3G), tombol langsung berubah menjadi disabled sehingga tidak bisa diklik berulang kali dan mencegah terjadinya request ganda di tab Network, sementara di layar muncul tulisan "Memuat data...". Setelah proses fetch selesai, baik saat hasilnya sukses maupun saat terjadi error, blok finally tetap dijalankan sehingga tombol aktif kembali (tombol.disabled = false) dan siap ditekan lagi.
Bukti: tampilan tombol yang nonaktif disertai teks "Memuat data" saat jaringan throttle, tidak ada request ganda di tab Network, dan tombol aktif kembali setelah selesai. (Screenshot throttling jaringan)

--EMPTY DAN PESAN SUKSES--
pesan.textContent = data.length
  ? `${data.length} kegiatan dimuat`
  : "Belum ada kegiatan";
Tindakan: Memperbarui bagian tampilan pesan setelah proses parsing dan validasi JSON berhasil agar bisa membedakan hasil array kosong dengan array berisi data, memastikan daftar.replaceChildren() dipanggil di awal proses sebelum render, lalu menguji memakai file fixture kosong.json yang berisi array kosong.
Hasil nyata: Ketika file normal.json dimuat, daftar tampil dan elemen #pesan menampilkan "2 kegiatan dimuat". Ketika diuji memakai fixture kosong.json yang berisi [], daftar lama langsung dibersihkan oleh daftar.replaceChildren() di awal proses sehingga data lama tidak dianggap sebagai data terbaru, daftar tampil kosong tanpa masuk ke blok catch (karena empty bukan error), dan elemen #pesan menampilkan tulisan "Belum ada kegiatan".
Bukti: tampilan pesan "Belum ada kegiatan" saat memuat fixture array kosong [] dan pesan "2 kegiatan dimuat" saat memuat data normal di browser. (Screenshot Data kosong dan tampil, tampilan web & console)

--TIMEOUT DENGAN ABORT--
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 5000);
// di dalam try:
const r = await fetch("./data/kegiatan.json", { signal: controller.signal });
// di dalam catch:
pesan.textContent = error.name === "AbortError"
  ? "Waktu tunggu habis. Coba lagi."
  : "Data gagal dimuat. Coba lagi.";
// di dalam finally:
clearTimeout(timer);
tombol.disabled = false;
Tindakan: Menambahkan AbortController dan timer setTimeout sebelum blok try, mengganti baris fetch lama dengan menyertakan opsi { signal: controller.signal } tanpa mendeklarasikan variabel r dua kali di scope yang sama, membersihkan timer di blok finally dengan clearTimeout(timer), membedakan pengecekan error.name === "AbortError" di blok catch, lalu menguji dengan memperpendek waktu timer (misal 200 ms) disertai throttling jaringan Slow 3G.
Hasil nyata: Ketika waktu timer diperpendek dan jaringan di-throttle sehingga respon server melewati batas waktu, controller.abort() otomatis membatalkan permintaan fetch yang sedang berjalan (di tab Network statusnya tercatat sebagai canceled). Eksekusi langsung masuk ke blok catch dan karena error.name bernilai "AbortError", elemen #pesan menampilkan "Waktu tunggu habis. Coba lagi.", lalu blok finally membersihkan timer dan mengaktifkan tombol kembali sehingga UI pulih seperti semula.
Bukti: status permintaan canceled di tab Network DevTools dan munculnya pesan "Waktu tunggu habis. Coba lagi." di halaman browser saat melewati batas waktu. (Screenshot timeout dan HTTP 404)

--MATRIKS KEGAGALAN--
Fixture yang diuji:
normal.json | kosong.json | rusak.json | salah-bentuk.json
Tindakan: Membuat salinan file fixture di folder data yaitu normal.json, kosong.json, rusak.json (JSON dengan tanda kurung atau koma salah), dan salah-bentuk.json (berupa object bukan array), lalu menguji kondisi 404, JSON rusak, mode Offline di DevTools, dan jaringan lambat sambil mencatat status Network serta pesan halaman sebelum mengembalikan fixture ke normal.json.
Hasil nyata: Setiap kategori kegagalan berhasil dibedakan dengan jelas:
1) Uji 404 (path salah): Network mencatat status 404 Not Found, pemeriksaan !r.ok melempar error, dan halaman menampilkan "Data gagal dimuat. Coba lagi.".
2) Uji JSON rusak (rusak.json): Network mencatat status 200 OK karena file ditemukan, tetapi r.json() gagal melakukan parsing (SyntaxError di Console) sehingga masuk catch dan menampilkan "Data gagal dimuat. Coba lagi.".
3) Uji salah bentuk (salah-bentuk.json): Network 200 OK, tetapi validasi !Array.isArray(data) menolak data tersebut sehingga menampilkan "Data gagal dimuat. Coba lagi.".
4) Uji Offline (centang Offline di tab Network): Network mencatat (failed) net::ERR_INTERNET_DISCONNECTED dan halaman menampilkan "Data gagal dimuat. Coba lagi." dengan tombol tetap pulih kembali.
Batasan aplikasi: Halaman ini tidak bisa dibuka langsung melalui protokol file:// (klik ganda file HTML) karena browser menerapkan kebijakan keamanan CORS yang memblokir fungsi fetch() ke file lokal, sehingga wajib dijalankan melalui server lokal (HTTP). Selain itu, aplikasi ini masih berupa prototipe statis tanpa server backend atau database nyata, sehingga simulasi error dan jaringan lambat dilakukan lewat file fixture lokal dan pengaturan DevTools.
Bukti: catatan status pada tab Network dan pesan yang tampil di halaman untuk masing-masing skenario uji 404, JSON rusak, salah bentuk, dan offline. (Screenshot hasil uji matriks kegagalan di Network dan halaman browser)

== AUDIT KESELURUHAN (termasuk matriks uji dan laporan) ==
Kasus:

1. Lambat -- harapan: Loading terlihat -- hasil nyatanya: saat jaringan diatur ke Slow 3G di tab Network DevTools dan tombol diklik, tulisan "Memuat data..." langsung tampil di layar dan tombol berubah menjadi disabled sampai proses selesai


2. Offline -- harapan: Error dan tombol aktif kembali -- hasil nyatanya: saat mode Offline diaktifkan di DevTools lalu tombol diklik, fetch gagal terhubung (ERR_INTERNET_DISCONNECTED), halaman menampilkan pesan "Data gagal dimuat. Coba lagi.", dan blok finally mengaktifkan tombol kembali


3. Kosong -- harapan: Empty tampil -- hasil nyatanya: saat memuat fixture kosong.json yang berisi array kosong, daftar dibersihkan tanpa dianggap error dan halaman menampilkan pesan "Belum ada kegiatan"


4. Timeout -- harapan: Abort ditangani -- hasil nyatanya: saat durasi setTimeout dibuat lebih singkat dari waktu respon jaringan, AbortController membatalkan fetch (status canceled di Network), blok catch menangkap AbortError dan menampilkan "Waktu tunggu habis. Coba lagi.", serta UI pulih kembali



Format laporan:

Kasus normal :
Tindakan: Saya menjalankan server lokal pada folder sesi 3, memastikan fixture mengarah ke normal.json, lalu mengklik tombol Muat kegiatan pada kondisi jaringan normal
Hasil Aktual: Muncul status loading singkat, permintaan di Network berstatus 200 OK, dua data kegiatan beserta kuotanya tampil di dalam #daftar, elemen #pesan menampilkan "2 kegiatan dimuat", dan tombol kembali aktif
Bukti/status: Berhasil 

Kasus batasan
Tindakan: Menguji fixture kosong.json berisi array [], mengaktifkan throttling Slow 3G lalu mengklik tombol Muat kegiatan berkali-kali selama proses loading berlangsung, serta menguji data dengan judul panjang dan teks mirip markup HTML
Hasil aktual: Fixture kosong menampilkan empty state "Belum ada kegiatan" tanpa error, klik berkali-kali saat loading tidak memicu request ganda karena tombol dalam keadaan disabled, daftar lama selalu terhapus sebelum data baru tampil.
Bukti/status: Berhasil 

Kasus gagal:
Tindakan: Menguji path file tidak ada 404, file rusak.json dengan sintaks JSON cacat, file salah-bentuk.json berupa object, mode Offline di DevTools, waktu timeout singkat (AbortError), mencoba membuka index.html langsung lewat file:// tanpa server lokal, serta mencoba menulis deklarasi const r dua kali di dalam blok try seperti potongan acuan modul
Hasil aktual: Semua kategori kegagalan berhasil tertangkap dengan pesan error atau timeout yang sesuai dan tombol tetap pulih berkat blok finally; sementara membuka lewat file:// diblokir oleh kebijakan CORS browser, dan menulis const r dua kali dalam satu blok try memicu SyntaxError: Identifier 'r' has already been declared sebelum diperbaiki menjadi satu deklarasi const r dan di-retest
Bukti/status: Gagal

Milestone: Saya sudah bisa menerapkan state loading dengan menonaktifkan tombol sementara dan memulihkannya di blok finally, membedakan empty state dari error, mengatur batas waktu permintaan fetch menggunakan AbortController dan setTimeout untuk menangani AbortError, serta menguji dan membedakan berbagai kategori kegagalan jaringan maupun struktur data JSON
backlog: Menyiapkan struktur data daftar untuk praktikum Minggu 12
buglog: Mendeklarasikan variabel const r dua kali di dalam blok try yang sama memicu SyntaxError sehingga baris fetch lama harus diganti bukan di copy paste; lupa memanggil daftar.replaceChildren di awal fungsi muat membuat daftar dari pemuatan sebelumnya masih tertinggal saat pemuatan berikutnya gagal atau kosong; dan membuka halaman langsung lewat file:// tanpa server lokal memicu kegagalan fetch karena aturan CORS.