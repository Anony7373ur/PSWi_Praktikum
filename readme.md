LAPORAN PRAKTIKUM Formulir dasar (Pengembangan situs web)

Nama    : Gabriel Christian Ronaldo Panjaitan
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)
NIM     : 41426009

Laporan pembuatan form:

Di modul ini saya ditugaskan untuk membuat sebuah formulir dasar menggunakan tag label, input, select, form, fieldset dan legend. Formulir ini bertujuan untuk meminta data dari pengguna untuk dimasukkan ke database.

tag dalam formulir dasar:
<form> adalah beberapa masukan atau inputan tentang sesuatu yang akan dimasukkan atau submit ke server.
<label> adalah sebuah caption yang bisa dikaitkan dengan sesuatu yang bisa di input.
<input> adalah sebuah masukan yang berupa tambah atau edit sebuah nilai melalui input. dapat berupa hanya kata dan nomor.
<select> adalah beberapa pilihan yang bisa dipilih untuk dimasukkan ke data.
<option> adalah bagian dari select yang menunjukkan pilihan apa aja yang dapat dipilih.
<fieldset> adalah formulir yang berisi beberapa pilihan seperti radio dan checklist berada di grup fieldset     tersebut.
<legend> adalah caption untuk judul dari fieldset tersebut.
<textarea> adalah sebuah area yang bisa diisi teks dan nomor dengan panjang dan bisa dibesarkan ukuran areanya.

Hasil submit dari query URL:
file:///D:/Semester%201/Pengembangan%20situs%20web%201/week%203/pswi-minggu-03/sesi-02/index.html?nama=Gabriel+Christian+Ronaldo+Panjaitan&email=example%40del.ac.id&telpon=0877986637372&prodi=trpl&ticket=3&mode=luring&gambar=topik&form=topik&teks+alternatif=alternatif&terjemahan=terjemahan&catatan=aku+akan+belajar+peletakan+gambar+dan+pembuatan+form#

langkah menjalankan:
pertama membuatkan <form> untuk bisa dapat menggunakan input dan label dengan benar. Kemudian buatlah label sebagai penanda atau caption dari sebuah input <label for=""> kemudian diikuti oleh input yang diiringi oleh label sebagai caption. Tipe input adalah text, word, number, tel, email dan lain lain. kemudian setelah input maka buat id dan name agar bisa terhubung ke label dan ketika diklik text label nya maka otomatis bisa langsung mengetik di inputnya. Kemudian ada select. Buat label nya kemudian buat <select> agar bisa membuat pilihan dan untuk menambah pilihan maka buat <option> agar bisa memberi beberapa opsi yang dipilih. Fieldset dibuat agar lebih terstruktur dan menjadi pembatas dengan yang lainnya. <Legend> dibuat untuk sebagai caption utama dari pilihan dan input yang akan dibuat. Kemudian input terlebih dahulu dengan tipe radio seperti <input type="radio"> yang dimana akan membuat beberapa pilihan tapi hanya bisa memilih 1 sedangkan untuk tipe data checkbox seperti <input type="checkbox"> maka akan membuat beberapa pilihan tapi bisa memilih beberapa bahkan semua dari pilihan tersebut. dan yang terakhir adalah tombol submit yang bisa dibuat dengan <button type="submit"> tipe submit yang akan mengirimkan data yang kita isi ke database.


Eksperimen data pengiriman:
Saya menghapus name="" dari input nama. Di halaman web memang tampak normal dan bisa diisi dan di submit tapi ketika di cek di konsol, ternyata data tersebut tidak akan terkirim ke apapun melainkan hanya input yang hasilnya kosong. kalo dilihat dari dev console dengan memasukkan const form = document.querySelector("form");
[...new FormData(form).entries()]; maka akan muncul beberapa array yang itu artinya data yang akan disimpan setelah diinput dan ternyata tidak muncul array name berarti datanya tidak bisa disimpan sama sekali.

Latihan mandiri
Saya sudah membuat input tel untuk memasukkan nomor telepon kemudian menambah jumlah tiket yang dimana hanya nomor dan batasnya adalah 1 sampai 5 jika selebihnya maka akan invalid. Kemudian menambahkan checkbox yaitu mencentang opsi yang tersedia dengan cara menambah type checkbox di input yang akan membuat opsi yang bisa dicentang. Saya kemudian menguji ketiga label dan ketika di klik, akan otomatis mencentang walaupun tidak mengklik lingkaran atau box di opsinya. Ketika di validasi HTML tidak ditemukan error.




