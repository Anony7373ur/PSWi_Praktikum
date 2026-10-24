LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB Branch, Merge, dan Code Review (WEEK 7 -- seminggu sebelum UTS)

Nama    : Gabriel Christian Ronaldo Panjaitan
NIM:    : 41426009
Prodi   : DIV Teknologi Rekayasa Perangkat Lunak (41TRPL1)

Laporan:

Penggunaan AI: *Saya tidak pernah memakai AI*

Tujuan: Ini untuk melatih dan belajar untuk bisa membuat branch baru, merge branch baru ke ke branch lain dan review code. 

Asumsi sebelum menguji di modul ini/praktikum ini adalah bahwa saya hanya membuat branch baru dan merge keduanya ternyata ada yang lebih dari itu seperti sistem nama dari commit dan isi dari branch main digantikan oleh branch fitur-petunjuk

REPOSITORY AMAN
git status
git branch
git switch -c fitur-petunjuk
 Tindakan: Menjalankan 3 perintah git di terminal
 Hasil nyata: melihat branch yang ada di git lokal dan membuat branch baru bernama fitur-petunjuk
 Bukti: setelah dibuat branch fitur-petunjuk, maka ketika git branch maka akan terdapat 2 branch.
 (ss git branch dan brach)

SIMULASI REVIEW
git diff nama-branch-utama...fitur-petunjuk
 Tindakan: Menjalankan perintah git ini di terminal
 Hasil nyata: ini membandingkan branch main dengan branch fitur-petunjuk
 Bukti: file yang dibedakan dari branch main dan fitur-petunjuk (ss git diff main fitur-petunjuk)

 MENGGABUNGKAN PERUBAHAN
 git switch nama-branch-utama
git merge fitur-petunjuk
git log --oneline --max-count=5
Tindakan: menjalankan 3 perintah git ini di terminal
Hasil nyata: Ini mengganti ke branch main kemudian digabungkan dengan branch fitur-petunjuk kemudian menunjukkan commit
Bukti: isi dari branch fitur-petunjuk sudah tergabung ke branch main (ss menggabungkan perubahan)
    

--Walkthrough Kesiapan UTS--
Checklist: 
Semantik = Seluruh halaman mempunyai tag yang sesuai tujuannya dan tidak ada div atau kontainer kosong yang tidak ada makna. Contohnya seperti <header> <nav> <aside> <main> <footer> <head>. Jika tidak semantik maka  contohnya adalah <div> <span>

form = Ketika membuat formulir diawali  dengan action dan method yang dimana action adalah hasil jawaban dari formulir yang akan dikirim ke suatu server atau halaman. sedangkan method adalah cara pengiriman dari formulirnya seperti GET dan POST. Ketika mau membuat input maka menggunakan <input> dengan parameter berupa id, type, name, required, dan sebagainya. Untuk nama dari input yang diminta bisa diberi <label> sebagai nama dari input yang akan diisi. Kemudian ada  pilihan opsi dengan menggunakan <select> sebagai basisnya dan <option> untuk pilihan yang disediakan. parameter value di option untuk nama data yang akan dikirim ke server.
Kemuddian ada tag <fieldset> untuk basis radio (pilih salah satu), didalam ada legend sebagai penamaan dari basis radio, kemudian untuk membuat pilihan dapat menggunakan <input> dengan parameter type radio kemudian dibawah dibuat <label> sebagai nama dari input itu.
jika radio adalah pilih salah satu, ada namanya checkbox yang bisa memilih beberapa pilihan dan tidak salah satu. 
Terakhir ada <textarea> yaitu areatext yang dapat diisi bebas dan bisa memilih ukuran dengan bebas dengan cara menarik ujung dari teks area. Ketika mau ingin mengirim data dari formulir maka dibuat tag <button> dengan parameter type=submit dan akan dikirim sesuai action yang ada di form.

CSS = Saya sudah mempelajari penggunaan padding, color, background, media, margin, font, width, height, display flex dan grid, border, hover.

layout = saya sudah mengertikan menggunakan layout di devtool maupun di html sebagai meluruskan suatu bagian dengan bagian lain agar rapi. Jika di devtool bisa buka tab layout dan kalau menggunakan display grid maka bisa diatur keaman arah item yang di grid diletakkan.

responsive = Responsive yang dimaksud adalah ukuran layar yang diperkecil dan halaman website menyesuaikan dengan ukuran layar handphone. Bisa memakai display flex dan grid. Jika menerapkan display tersebut maka text dan bagian tersebut akan bergeser ke kiri atau turun kebawah agar tampilan dan teks masih nampak di layar perangkat apapun.

Git = saya sudah bisa menggunakan git lokal dan github, yang dimana prosedur yang saya biasa lakukan adalah git init untuk membuat repositori lokal baru, kemudian git status untuk mengecek file apa saja yang akan dimasukkan, kemudian git add . untuk membungkus seluruh file agar bisa dicommmit, terakhir adalah git commit -m "" untuk menyimpan file tersebut ke repositori lokal dan repositori tersebut bisa dijadikan online ke github dengan git push tetapi harus terlebih dahulu dikonfigurasi git remote dan git branchnya. 

Konflik yang diminta:
Konflik CSS: (SS Konflik css)
Kasus validasi gagal: (SS Validator gagal)

Latihan mandiri dan matriks UJI:
Kasus:
1. Branch fitur = Ketika commit di branch fitur-petunjuk dan balik ke branch main, maka file yang ada di branch fitur petunjuk tidak muncul di branch main
2. Review = Review.md dari branch fitur-petunjuk digabungkan ke branch main dan review dari teman sudah dibuat.
3. Merge = Ketika branch fitur-petunjuk di merge branch main, maka review.md berpindah ke branch main dan bisa diakses
4. Semua halaman = Halaman tetap bekerja dan berfungsi meskipun kedua branch digabungkan.

Format laporan:

Kasus normal :
Tindakan: Saya memasukkan git status, git branch, git switch -c fitur-petunjuk
Hasil Aktual: branch baru bernama fitur-petunjuk dibuat
Bukti/status: Berhasil (ss git branch baru fitur-petunjuk)

Kasus batasan
Tindakan: git diff main fitur-petunjuk
Hasil aktual: akan memeriksa apa yang beda dari branch main dan fitur-petunjuk
Bukti/status: Berhasil(ss git diff main fitur-petunjuk)

Kasus gagal:
Tindakan: Tidak ada kasus gagal
Hasil aktual: -
Bukti/status: berhasil (git dan gambar bukti)


Milestone: Saya sudah bisa belajar dan memahami cara membuat branch baru dan menggabungkan kedua branch dengan isi berbeda.
backlog: Halaman dicek menggunakan validator dan sengaja membuat konflik css
buglog: tidak terjadi masalah ketika melakukan branch baru dan merge kedua branch.