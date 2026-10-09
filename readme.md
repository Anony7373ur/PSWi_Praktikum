LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB (CSS Grid dan Class yang Dapat Dipakai Ulang)

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: Saya tidak pernah memakai AI

Tujuan: Ini untuk melatih dan belajar menggunakan Grid beserta properti nya dan class yang dapat dipakai ulang
dengan mengganti nama class.

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa grid sama seperti flexbox tapi berbeda karena grid fokus ke layout yang biasa diatur seperti align-content, justify-content, align-items, dan justify-items jadi lebih fokus ke mengatur layout item tetapi masih bisa menyesuaikan dengan layar perangkat.

Mengubah Container:
.catalog { display: grid; gap: 1rem; grid-template-columns: 1fr 1fr; }
 Tindakan: Meletakkan properti dari .catalog ke css yang berisi display: grid, gap, grid-template-columns.
 Hasil nyata: Layout dari class .catalog berubah jadi berbaris seperti kardus kardus yang ditumpuk rapi jadi fungsinya
hampir sama dengan flex tetapi lebih rapi karena kita menggunakan item yang dimana harus menyesuaikan dengan layar perangkat.
 Bukti: Ketika diperkecil maka kotak beserta text dari .catalog akan berpindah ke bawah dalam struktur yang utuh & rapi


Grid Adaptif:
.catalog { grid-template-columns:
 repeat(auto-fit, minmax(min(100%, 15rem), 1fr)); }
 Tindakan: Meletakkan properti dari .catalog yaitu grid-template-columns, repeat, autofit, dan minmax.
 Hasil nyata: properti tersebut memungkinkan item nya akan auto menyesuaikan dan terstruktur. kolom akan diulangi
dengan autofit dan ukurannya yaitu max 15 rem dengan min 100% 1 fr.
 Bukti: Ketika layar diperkecil, maka item akan otomatis menyesuaikan diri berurutan ke bawah dengan ukuran yang tetap yaitu 15 rem, sudah dicoba di ukuran 320, 768px, dan 1200px

Card internal dan Gap:
.card { display: flex; flex-direction: column; gap: .5rem; }
.card h2, .card p { margin: 0; }
.card a { align-self: start; }
Tindakan: Menambahkan properti dari .card, .card h2, .card a ke css
Hasil nyata: tag yang mempunyai class .card akan menyesuaikan diri dengan layar perangkat dan arah penyesuaiannya adalah kolom dengan jarak 0.5rem, kemudian h2 dan p di .card tetap margin 0, dan terakhir .card a yang dimana align nya akan mulai sendiri.
Bukti: Ketika Layar diperkecil, maka item atau tag yang mempunya class di atas kana menyesuaikan diri dengan layar perangkat dan peletakan teks link nya akan sama dan tidak turun kebawah.

Review Layout:
/* urutan konten tetap ditentukan HTML */
.card { padding: var(--space-2, 1rem); }
Tindakan: Menempatkan .card di bawah properti .card yang sudah dibuat di css.
Hasil nyata: tag yang mempunyai .card akan diterapkan properti sebagai berikut yaitu padding sesuai dengan var --space yang ada di :root dan 1 rem.
Bukti: Ketika layar diperkecil, maka jarak dari tag yang mempunyai class .card akan berjarak 1 rem dan dari variabel.

Latihan mandiri dan matriks UJI:
Kasus:
1. 320px tanpa overflow maka teks menembus border dan garis, jika dibuat overflow maka akan turun dan tetap nampak.
2. satu card = card tetap terbaca karena masih diterapkan properti .card yang ketika layar diperkecil, satu card tetap menyesuaikan meskipun tidak ada card
3. Lima card = auto placement benar karena memakai display: grid yang dimana setiap item yang memakai class .card akan dideteksi sebagai kolom dan baris yang akan disusun rapi, jika layar diperkecil maka 5 card tersebut akan menyesuaikan dengan layar dan jarak nya masih tetap teratur.
4. Urutan tab = sama dengan alur dom berarti jika dalam ukuran normal, link kedua akan disamping di link satu tapi jika diperkecil sampai mentok maka link kedua akan dibawah link pertama yang berarti sesuai DOM.

Format laporan:

Kasus normal :
Tindakan: saya memasukkan .catalog { grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr)); }
Hasil Aktual: tag yang classnya .catalog akan memakai template kolom grid yang dimana ketika diperkecil akan otomatis dipaskan sesuai gridnya dengan min 100% dan max nya adalah 15 rem dan kolom nya adalah 1 fr
Bukti/status: Berhasil (ss tampilan halaman)

Kasus batasan
Tindakan: Saya menambahi .card { display: flex; flex-direction: column; gap: .5rem; }
.card h2, .card p { margin: 0; }
.card a { align-self: start; }
Hasil aktual: Tag yang ada class .card, .card h2, dan .card a akan mengikuti properti disini dan hampir sama dengan kasus normal tapi masih ada batasan yang dimana bagian align-self: start yang tidak tampak hasilnya.
Bukti/status: Berhasil(ss tampilan halaman web)

Kasus gagal:
Tindakan: Saya memasukkan .card { padding: var(--space-2, 1rem); } di css
Hasil aktual: jika tidak ada :root maka padding tidak bekerja sama sekali dan memakai 1rem.
Bukti/status: Gagal

Milestone: Saya sudah bisa belajar dan memahami cara pengunaan Display: grid, grid-template-columns, repeat, autofit, minmax, flex-direction: column, dan align-self: start.
