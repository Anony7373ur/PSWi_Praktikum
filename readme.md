LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB: JSON Lokal, Promise, dan Fetch

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar koding tentang javascript asynchronous yaitu memahami cara kerja Promise dan async secara sederhana, membuat file data JSON lokal yang valid, mengambil data menggunakan Fetch API disertai pengecekan response HTTP, memvalidasi bentuk data array dan tipe propertinya, serta menampilkan status loading, error, dan isi daftar ke halaman web.

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa saya mengira fungsi fetch akan otomatis masuk ke blok catch jika file JSON tidak ditemukan dan data JSON yang diterima bisa langsung di loop tanpa dicek dulu bentuknya, tetapi setelah praktikum ini saya belajar bahwa fetch tetap dianggap berhasil oleh browser walaupun statusnya 404 sehingga harus diperiksa manual memakai if (!r.ok), serta struktur data tetap wajib divalidasi dengan Array.isArray dan typeof agar halaman tidak error saat bentuk datanya salah.

--FIXTURE STABIL--
[
  { "id": 1, "judul": "HTML", "kuota": 20 },
  { "id": 2, "judul": "CSS", "kuota": 0 }
]
Tindakan: Membuat folder data dan file data/kegiatan.json berisi dua data kegiatan, menjalankan dengan Live Server pada folder proyek, lalu membuka URL file JSON tersebut secara langsung di browser untuk memastikan formatnya valid dan bisa diakses lewat HTTP.
Hasil nyata: Saat alamat kegiatan.json dibuka di browser, seluruh isi array JSON tampil utuh tanpa pesan error parsing karena semua nama properti dan nilai string sudah memakai tanda kutip ganda dan tidak ada koma berlebih di akhir data. Dengan ini file siap dibaca oleh fungsi fetch dari halaman utama.
Bukti: tampilan isi file data/kegiatan.json yang terbuka langsung melalui URL server lokal di browser. (Screenshot Halaman web & console)

--HTML STATUS DAN DAFTAR--
<button id="muat" type="button">Muat kegiatan</button>
<p id="pesan" role="status"></p>
<ul id="daftar"></ul>
Tindakan: Menambahkan elemen tombol Muat kegiatan, paragraf status #pesan dengan atribut role="status", dan daftar #daftar ke dalam body index.html, menghubungkan main.js dengan atribut defer, mempertahankan aturan CSS responsive dari minggu sebelumnya, serta memeriksa selector di DevTools.
Hasil nyata: Tombol dengan label "Muat kegiatan" tampil jelas di halaman, elemen #pesan dan #daftar siap menampung status pemuatan maupun hasil daftar kegiatan, dan saat ketiga selector #muat, #pesan, #daftar diperiksa di console DevTools semuanya ditemukan dan tidak bernilai null karena script memakai atribut defer.
Bukti: tampilan antarmuka awal dengan tombol Muat kegiatan di browser dan hasil pengecekan elemen di tab Elements DevTools. (Screenshot halaman web & console)

--FETCH DENGAN ASYNC--
const tombol = document.querySelector("#muat");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");

async function muat() {
  try {
    const r = await fetch("./data/kegiatan.json");
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    console.log(data);
  } catch (error) {
    pesan.textContent = "Gagal memuat";
    console.error(error);
  }
}
tombol.addEventListener("click", muat);

Tindakan: Membuat file main.js berisi fungsi async yang memanggil fetch "./data/kegiatan.json" di dalam blok try dan catch, mengklik tombol Muat kegiatan sambil memantau tab Network dan Console di DevTools, lalu menguji mengganti path menjadi "./data/hilang.json" untuk melihat penanganan error 404.
Hasil nyata: Saat path benar dan tombol diklik, di tab Network tercatat permintaan ke kegiatan.json dengan status 200 OK dan di Console muncul array berisi 2 objek kegiatan. Ketika path diubah menjadi hilang.json dan tombol diklik, di tab Network muncul status 404 Not Found; karena ada pemeriksaan if (!r.ok) throw new Error(`HTTP ${r.status}`), eksekusi langsung dilempar ke blok catch sehingga elemen #pesan menampilkan tulisan "Gagal memuat" dan detail error 404 tercatat di Console.
Bukti: hasil permintaan status 200 OK dan isi array di Console saat path benar, serta status 404 di tab Network dan teks "Gagal memuat" saat menguji hilang.json. (Screenshot HTTP 404, Network, gagal memuat)

--VALIDASI DAN RENDER--
if (!Array.isArray(data)) throw new Error("Data harus array");
daftar.replaceChildren();
for (const k of data) {
  if (typeof k.judul !== "string") throw new Error("Judul tidak sesuai");
  const li = document.createElement("li");
  li.textContent = k.judul;
  daftar.append(li);
}
Tindakan: Menambahkan pengecekan Array.isArray(data) dan typeof k.judul !== "string" serta perulangan render elemen <li> setelah proses await r.json di dalam blok try, menguji mengubah isi kegiatan.json sementara menjadi bentuk object bukan array, serta menguji mengganti nilai judul dengan tag markup seperti "<b>HTML</b>".
Hasil nyata: Ketika kegiatan.json berisi data normal, daftar judul "HTML" dan "CSS" tampil di halaman dan tidak bertambah ganda meskipun tombol diklik berkali-kali karena adanya daftar.replaceChildren(). Saat isi file JSON diubah menjadi bentuk object bukan array, pemeriksaan !Array.isArray(data) langsung melempar error sehingga ditolak dan memunculkan pesan "Gagal memuat". Saat judul diisi tag markup "<b>HTML</b>", properti textContent menampilkannya sebagai tulisan literal "<b>HTML</b>" apa adanya tanpa mengubahnya menjadi huruf tebal atau mengeksekusi tag HTML di DOM.
Bukti: tampilan daftar kegiatan HTML dan CSS di browser, tampilan pesan error saat JSON berbentuk object, serta tampilan teks literal saat judul berisi tag markup. (Screenshot judul tidak sesuai, Data garis array, dan uji judul dengan markup)

== AUDIT KESELURUHAN (termasuk matriks uji dan laporan) ==
Kasus:

1. JSON valid -- harapan: Dua kegiatan -- hasil nyatanya: saat tombol Muat kegiatan diklik dengan path ./data/kegiatan.json yang sah, permintaan di Network berstatus 200 OK dan daftar menampilkan dua item kegiatan yaitu HTML dan CSS


2. 404 -- harapan: Error jelas -- hasil nyatanya: saat path diubah ke ./data/hilang.json, pemeriksaan if (!r.ok) mendeteksi status HTTP 404 dan menampilkan pesan "Gagal memuat" di halaman serta detail error di console devtool


3. Bentuk object -- harapan: Ditolak -- hasil nyatanya: saat isi JSON diubah dari array menjadi object, validasi if (!Array.isArray(data)) menolak data tersebut menghentikan render dan menampilkan pesan "Gagal memuat"


4. Judul markup -- harapan: Teks literal -- hasil nyatanya: saat properti judul pada JSON diisi teks berisi tag seperti <b>HTML</b>, properti textContent merendernya sebagai teks biasa <b>HTML</b> tanpa membuat elemen tag baru di DOM



Format laporan:

Kasus normal :
Tindakan: Saya menjalankan server lokal pada folder sesi-02, membuka index.html, dan mengklik tombol Muat kegiatan untuk membaca file ./data/kegiatan.json yang valid
Hasil Aktual: Permintaan fetch berhasil dengan status 200 OK di tab Network, validasi array dan string lolos tanpa error, serta dua item kegiatan (HTML dan CSS) tampil rapi di dalam elemen #daftar
Bukti/status: Berhasil 

Kasus batasan
Tindakan: Menguji data JSON dengan nilai judul berisi tag markup HTML ("<b>HTML</b>"), menguji judul kegiatan yang sangat panjang, menguji file JSON berisi array kosong [], serta mengklik tombol Muat kegiatan berulang kali
Hasil aktual: Judul bermarkup dan judul panjang tetap tampil aman sebagai teks literal di dalam elemen <li> tanpa merusak tata letak, array kosong tidak menyebabkan error dan membersihkan daftar, serta klik berulang kali tidak membuat daftar duplikat karena ada replaceChildren()
Bukti/status: Berhasil 

Kasus gagal:
Tindakan: Mengubah path fetch menjadi ./data/hilang.json untuk memicu HTTP 404, mengubah struktur JSON menjadi object tunggal {...}, mengubah tipe nilai judul menjadi angka 123 (bukan string), serta mencoba membuka index.html langsung dari file explorer (file://) tanpa server lokal
Hasil aktual: Uji file hilang.json memicu error HTTP 404, struktur object ditolak oleh Array.isArray(data), judul bernilai angka ditolak oleh pemeriksaan typeof k.judul !== "string", dan membuka lewat protokol file:// memicu error CORS di console sehingga semuanya tertangkap blok catch dan menampilkan pesan "Gagal memuat"
Bukti/status: Gagal

Milestone: Saya sudah bisa membuat file fixture JSON lokal yang valid, menjelaskan alur Promise dengan async/await dan try...catch, mengambil data melalui fetch() disertai pemeriksaan response.ok untuk menangkap status HTTP error, serta memvalidasi tipe data sebelum merender elemen DOM secara aman menggunakan textContent
backlog: Menyiapkan file JSON kosong pada praktikum Sesi 3
buglog: Fungsi fetch() tidak menolak saat server mengembalikan status 404 sehingga wajib dicek manual dengan if !r.ok dan pada contoh kode halaman 6-7 terdapat kesalahan cetak seperti tanda = yang hilang dan kurung kurawal fungsi muat() yang tertutup terlalu awal sehingga harus diperbaiki agar tidak memicu Error.