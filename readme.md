LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB: Event Form, Validasi, dan Event Delegation

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar koding tentang javascript DOM lanjutan yaitu cara menghubungkan form HTML ke javascript, mengolah event submit dan tombol klik, melakukan validasi input sederhana tanpa framework, membuat tombol hapus di setiap item saat render, serta memakai event delegation untuk menghapus data dari state dan tampilan.

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa saya mengira atribut required pada HTML sudah cukup untuk mencegah semua input kosong dan setiap tombol hapus harus dipasangi addEventListener satu per satu, tetapi setelah praktikum ini saya belajar bahwa input berisi spasi saja tetap bisa lolos jika tidak dibersihkan dengan trim(), tombol di dalam daftar yang dirender ulang cukup ditangani lewat satu listener pada elemen induk <ul> menggunakan event delegation, serta data di memori akan kembali ke awal jika halaman di-reload.

--FORM INPUT--
<form id="form-peserta">
<label for="nama">Nama (wajib)</label>
<input id="nama" name="nama" required>
<button type="submit">Tambah</button>
</form>
Tindakan: Melanjutkan struktur daftar dari Sesi 2 dengan menambahkan elemen form di atas elemen #pesan dan #daftar, memeriksa apakah klik pada label langsung mengarahkan fokus ke kotak input, serta menguji pengisian dengan nama fiktif.
Hasil nyata: Karena label for="nama" pada label sudah sesuai dengan id="nama" pada elemen input, maka ketika teks label diklik, kursor otomatis langsung aktif di dalam kotak input nama. Elemen ul #daftar dan p #pesan dari sesi sebelumnya tetap dipertahankan di bawah form sehingga struktur halaman siap dihubungkan ke event handler di main.js.
Bukti: tampilan form input nama beserta tombol Tambah di halaman browser dan kursor yang otomatis fokus ke kotak input saat label diklik. (Screenshot form input)

--TAMBAH PESERTA--
const form = document.querySelector("#form-peserta");
let berikutnya = 3;
form.addEventListener("submit", event => {
event.preventDefault();
const nama = String(new FormData(form).get("nama") ?? "").trim();
if (!nama) { pesan.textContent = "Nama harus diisi"; return; }
peserta.push({ id: berikutnya++, nama });
render(); form.reset();
});
Tindakan: Memasukkan kode event listener submit ke main.js, menggunakan event.preventDefault() agar halaman tidak reload sendiri saat disubmit, mengambil input nama dengan FormData lalu membersihkannya dengan .trim(), menguji tambah peserta lewat klik tombol Tambah maupun tekan tombol Enter, serta menguji input berisi spasi saja.
Hasil nyata: Saat saya mengetik nama peserta yang sah lalu menekan tombol Enter atau klik tombol Tambah, halaman tidak ter-reload karena ada event.preventDefault(), data peserta di state bertambah satu dengan id yang naik otomatis dari variabel berikutnya++, tampilan daftar langsung ter-update lewat render(), dan kotak input kembali kosong karena form.reset(). Ketika saya menguji mengisi spasi saja lalu submit, atribut required pada HTML berhasil dilewati tetapi fungsi .trim() menghapus spasi tersebut menjadi string kosong "" sehingga tertahan oleh kondisi if (!nama) dan memunculkan pesan "Nama harus diisi" tanpa menambah item kosong ke daftar.
Bukti: hasil penambahan peserta baru lewat klik dan tombol Enter, serta munculnya pesan "Nama harus diisi" saat menguji input berisi spasi saja. (Screenshot tambah peserta & tombol hapus dan Nama harus diisi)

--TOMBOL HAPUS SAAT RENDER--
const btn = document.createElement("button");
btn.type = "button"; btn.textContent = "Hapus";
btn.dataset.id = String(p.id);
li.append(btn);
Tindakan: Menambahkan kode pembuatan elemen button Hapus di dalam perulangan for (const p of peserta) pada fungsi render() setelah pengisian teks nama peserta, memberikan atribut data-id sesuai p.id masing-masing peserta, lalu melakukan render ulang dan memeriksa atribut data-id di tab Elements DevTools.
Hasil nyata: Setiap item <li> yang tampil di daftar sekarang memiliki tombol "Hapus" di sebelahnya. Saat diperiksa melalui tab Elements pada DevTools, masing-masing tombol memiliki atribut data-id yang merujuk tepat ke ID peserta tersebut (misalnya data-id="1", data-id="2", dan seterusnya). Potongan kode ini harus diletakkan di dalam loop render karena membutuhkan variabel p dan li dari perulangan; ketika dicoba diletakkan di luar loop maka akan muncul ReferenceError karena variabel p dan li tidak dikenali di luar blok perulangan.
Bukti: tampilan tombol Hapus di samping setiap nama peserta dan atribut data-id pada masing-masing elemen button di tab Elements devtool browser. (Screenshot tambah peserta & tombol hapus)

--DELEGATION DAN PENGUJIAN--
daftar.addEventListener("click", event => {
const btn = event.target.closest("button[data-id]");
if (!btn || !daftar.contains(btn)) return;
const id = Number(btn.dataset.id);
peserta = peserta.filter(p => p.id !== id);
render();
});
Tindakan: Memasang satu event listener click pada container #daftar menggunakan teknik event delegation dengan closest, menguji hapus item pertama dan terakhir, menambah item baru lalu menghapusnya, menguji input nama mirip markup seperti <b>Tono</b>, serta melakukan reload halaman browser.
Hasil nyata: Dengan memasang satu listener saja di elemen induk #daftar, semua tombol Hapus baik yang sudah ada sejak awal maupun tombol dari peserta yang baru ditambahkan dapat bekerja dengan baik. Saat tombol Hapus pada item pertama atau terakhir diklik, fungsi filter(p => p.id !== id) menyaring keluar peserta dengan ID tersebut dari array state lalu memanggil render() sehingga item langsung hilang dari layar. Saat menguji nama mirip markup HTML, teks tampil aman apa adanya sebagai tulisan biasa dan tetap bisa dihapus. Ketika halaman di-reload (refresh), seluruh perubahan tambah atau hapus hilang dan daftar kembali ke data awal karena state hanya disimpan di memori javascript sementara, belum disimpan ke penyimpanan permanen atau database.
Bukti: hasil penghapusan item pertama, item terakhir, dan item baru di browser, tampilan aman untuk nama mirip markup, serta kondisi daftar yang kembali ke awal setelah halaman di-reload. (Screenshot tidak ada item)

== AUDIT KESELURUHAN (termasuk matriks uji dan laporan) ==
Kasus:

1. Submit Enter -- harapan: Tambah satu item -- hasil nyatanya: saat mengetik nama di kotak input lalu menekan tombol Enter di keyboard, event submit pada form berjalan dan menambah tepat satu peserta baru ke dalam state dan tampilan daftar


2. Nama spasi -- harapan: Ditolak -- hasil nyatanya: saat kotak input hanya diisi beberapa ketukan spasi lalu disubmit, fungsi .trim() mengubahnya menjadi string kosong sehingga ditolak oleh validasi if (!nama) dan menampilkan teks "Nama harus diisi"


3. Hapus item dinamis -- harapan: State/DOM benar -- hasil nyatanya: saat menambah peserta baru lalu mengklik tombol Hapus miliknya, event delegation pada #daftar menangkap data-id tombol tersebut, menghapusnya dari array peserta, dan memperbarui DOM dengan benar


4. Reload -- harapan: State memori kembali awal -- hasil nyatanya: saat tombol refresh/reload pada browser ditekan, semua data peserta yang baru ditambah atau dihapus selama pengujian hilang dan kembali ke kondisi state awal di kode main.js



Format laporan:

Kasus normal :
Tindakan: Saya mengisi nama peserta fiktif yang valid pada form lalu menekan tombol Enter dan mengklik tombol Tambah, kemudian menguji tombol Hapus pada item pertama, terakhir, serta item yang baru ditambahkan
Hasil Aktual: Setiap submit yang sah menambah tepat satu peserta ke dalam daftar beserta tombol Hapus dengan data-id yang sesuai, form otomatis di-reset, dan saat tombol Hapus diklik maka peserta terkait berhasil terhapus dari state maupun DOM
Bukti/status: Berhasil 

Kasus batasan
Tindakan: Menguji input form dengan karakter spasi saja, memasukkan nama peserta yang sangat panjang, memasukkan nama yang mengandung tag markup HTML seperti "<b>Andi</b>", serta menghapus seluruh peserta hingga daftar habis
Hasil aktual: Input berisi spasi saja berhasil ditolak dengan pesan "Nama harus diisi", nama panjang dan teks mirip markup tetap tampil sebagai teks literal yang aman karena memakai textContent, dan ketika semua item dihapus maka daftar menjadi bersih serta menampilkan pesan "Belum ada peserta"
Bukti/status: Berhasil 

Kasus gagal:
Tindakan: Mencoba meletakkan kode pembuatan tombol Hapus di luar loop for pada fungsi render(), menghapus sementara baris event.preventDefault() saat submit form, serta menyalin kesalahan penulisan filter dari halaman 7 modul yaitu peserta.filter(p => p.id == id) dan penulisan koma Number(btn,dataset.id) dari lampiran
Hasil aktual: Peletakan kode tombol di luar loop memunculkan ReferenceError: p is not defined di console, tanpa event.preventDefault() halaman selalu ter-reload setiap kali form disubmit sehingga data baru langsung hilang, penulisan p.id == id membuat tombol Hapus justru menyisakan item yang diklik dan menghapus item lainnya, serta koma pada btn,dataset.id menyebabkan error sebelum semuanya diperbaiki menjadi kode yang benar dan di-retest
Bukti/status: Gagal

Milestone: Saya sudah bisa membuat dan menghubungkan form HTML ke event submit di javascript, mencegah reload bawaan form dengan event.preventDefault, memvalidasi input kosong dan spasi menggunakan FormData serta .trim(), membuat tombol Hapus dinamis ber-atribut data-id di dalam loop render, dan menerapkan event delegation dengan closest() untuk menghapus item
backlog: Mempertahankan pola state dan fungsi render
buglog: Jika lupa menambahkan event.preventDefault() pada listener submit maka halaman akan reload dan mereset state di memori, jika kode pembuatan tombol Hapus ditaruh di luar loop for maka muncul ReferenceError karena variabel p dan li berada di dalam block scope perulangan.