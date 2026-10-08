LAPORAN PRAKTIKUM Struktur Dokumen dan Elemen Semantik HTML (Pengembangan situs web)

Nama    : Gabriel Christian Ronaldo Panjaitan
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak
NIM     : 41426009

 Catatan Pengujian
    
 Saya sudah melakukan experimental dan tugas mandiri yang ada di modul praktikum PSW dan saya akhirnya mengerti bagaimana cara menambah
 header, section, list, article, nav, aside dan footer yang dimana header sebagai judul di bagian atas halaman, 
 section adalah untuk mengkategorikan suatu article, kalimat atau list di dalam suatu section yang bisa dipanggil melalui nav atau navigation.
 list adalah barisan barisan dengan simbol bullet yang bisa memiliki tautan atau kalimat.
 article adalah membuat artikel yang harus didalam section untuk halaman web.
 nav adalah sebuah list yang terdiri dari tautan section yang dibuat agar bisa lebih mudah mencari informasi atau bagian dalam website kita.
 aside adalah sebuah informasi atau kalimat apapun yang berada diluar main.
 footer adalah sebuah informasi yang biasa nya terdiri email atau hak cipta dari sebuah website yang posisinya di paling bawah website.

    DEVTOOL
Pada inspect website yang masih dalam kondisi error, di console tidak muncul karena hanya berlaku pada javascript tetapi ketika ada kesalahan
dalam pengetikan kode di vscode, jika dijalankan maka kalimatnya atau struktur tetap normal karena websitenya otomatis memperbaiki untuk sementara
tetapi jika dijalankan di validator maka akan muncul error dalam kode.

    Validasi
Sebelum diperbaiki, saya validasi kode halaman index saya yang berisi error karena penghapusan tag dan typo pada kode. Masalah yaitu dalam
article, heading, section id, main dan h4. jadi setelah saya memperbaiki kodenya dan melakukan validator kembali dan hasilnya tidak ada muncul error.

 EKSPERIMEN TERARAH
1.Hapus tag penutup article, muat ulang, dan periksa DOM.
   gejala   : artikel tidak muncul
   bukti    : <section> yang memuat <article>
   penyebab : </article> tidak ada
   perbaikan: menambahkan </artikel>
   hasil    : berhasil

2 Ubah salah satu id section sehingga tautan navigasi tidak menemukan tujuan.
   gejala   : tidak bisa membuka tautan section melalui nav
   bukti    : <section id="kegiatan"> yang memiliki id
   penyebab : penamaan section id salah
   perbaikan: menyesuaikan id section dengan id tautan di nav
   hasil    : berhasil


3 Tambahkan h4 langsung setelah h2 tanpa h3, lalu evaluasi hierarkinya.
   gejala   : struktur tidak sesuai yang menyebabkan error di validator
   bukti    : <h4> dibuat dibawah <h2>
   penyebab : h4 dibawah h2 tapi tidak sesuai struktur heading
   perbaikan: membuat h3 diatas h4 agar bisa sesuai struktur heading.
   hasil    : berhasil

    
4 Letakkan main di dalam header, jalankan validator, kemudian perbaiki.
   gejala   : main berada di header
   bukti    : <main> didalam <header>
   penyebab : <main> diletakkan dalam header yang tidak sesuai struktur html yang benar
   perbaikan: <main> memindahkan main dibawah header
   hasil    : berhasil

