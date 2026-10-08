LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB "Validasi Native dan Aksesibilitas Form"

NAMA: GABRIEL CHRISTIAN RONALDO PANJAITAN
NIM : 41426009
PRODI: DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan validasi dan aksesibilitas form:

Hasil data yang dikirim di query: file:///D:/Semester%201/Pengembangan%20situs%20web%201/week%203/pswi-minggu-03/sesi-03/index.html?nama=Gabriel+C.R+Panjaitan&email=example%40del.ac.id&telpon=087776545534&prodi=trpl&jumlah=4&kode=234467&mode=luring&gambar=topik&form=topik&teks+alternatif=alternatif&terjemahan=terjemahan&catatan=Aku+suka+belajar+HTML#

Tujuannya dibuat website ini ialah:
Untuk memvalidasi dan menggunakan akesisbilitas form dari devtool untuk mengecek apakah setiap tag yang dibuat bisa berfungsi dengan baik dan bisa diakses. Kemudian penggunaan css untuk melihat ketika di tab apakah kotak yang difokuskan akan jadi biru sebagai penanda. Kemudian membuat format kode peserta dengan pattern yang bisa membuat batasan berapa karakter yang bisa diinput/diketik.

Keyboard dan fokus:
Ketika di tab, maka akan muncul kotak biru di input itu yang menandakan bahwa itu kefokus atau keselect jadi tidak perlu mouse untuk menekannya. Ketika tab ditekan berkali kali maka fokus akan turun dan berulang sedangkan jika shift tab maka fokus nya akan naik dan berulang. Ketika menggunakan tombol panah untuk radio dan select, itu otomatis kecentang dan jika di space maka checkbox akan kecentang. Untuk submit tinggal enter karena sudah difokuskan melalui tab.

Audit Aksesibilitas:
Cara  membukanya dengan melalui devtool yaitu inspect dan tampilan sudah muncul maka akan ada 2 tanda panah kekanan yang ada di samping maka jika ditekan akan ada beberapa pilihan yang muncul salah satunya lighthouse, ketika diklik maka akan muncul beberapa checkbox yang dimana salah satu nya adalah aksesibilitas, kemudian centang snapshot karena ini belum masih dalam bentuk http tapi masih lokal. ketika dijalankan dan diperiksa maka akan muncul skor aksesibilitas dari website kita yang dimana jika hijau kalo di website saya itu 19/19 maka semua tag berfungsi dengan baik sedangkan jika ada typo atau kesalahan dalam pengkodean maka skornya tidak memenuhi dan memerlukan perbaikan.

Matriks UJI dan Experimen Kegagalan:
Kasus:
1. Email kosong Ditolak dan harus diisi karena kita buat required dalam kode nya.
2. Email abc Ditolak dan harus ada @ karena tipe datanya email.
3. Email contoh valid Diterima jika lainnya valid
4. Jumlah 0 / 6 Ditolak karena step dan valuenya 1 dan tidak 0 juga min nya itu 1
5. Jumlah 1 / 5 Diterima karena step dan value nya 1 dan minnya adalah 0 dan max adalah 5
6. Jumlah 1.5 Ditolak bila step=1
7. Kode 12345 Ditolak karena pattern dari kode nya itu harus 6 tidak boleh kecil dan lebih besar dari situ
8. Kode 001234 Diterima karena sesuai pattern dari kode itu
9. Keyboard Semua kontrol dapat dicapai buktinya yaitu bisa di tab, di arrow otomatis kecentang dan enter untuk submit.

Mengapa server tetap perlu memvalidasi karena server sudah dikaitkan ke form maka jika ada salah satu yang belum terisi maka akan dilarang
untuk dikirim kecuali diisi.

cara menjalankan:
ini diambil dari sesi 2 jadi hanya menambah kode perserta yaitu
<label for="kode">Kode peserta (6 angka, wajib)</label>
<p id="kode-help">Contoh: 001234. Gunakan tepat enam angka.</p>
<input id="kode" name="kode" type="text" inputmode="numeric" pattern="[0-9]{6}" aria-describedby="kode-help" required>
dan image dengan figure, fcaption, dan altnya. 
pada kode peserta ada inputmode="numeric" yang berarti harus angka dan patternya itu [0-9] yang berarti hanya bisa diisi dari angka 0 sampai 9
sedangkan {6} adalah batas dan harus sesuai dengan jumlah karakter tersebut, jadi input nya tidak boleh lebih kecil dan lebih besar dari 6 karakter. kemudian gambar dibuat sebagai pelengkap sebuah form.

Hasil ujinya:
ketika input di kode peserta, tidak bisa mengetik huruf alpabet dan harus number atau numerik dan harus sesuai dengan 6 karakter agar bisa di 
dikirim.






