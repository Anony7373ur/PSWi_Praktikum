const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

const jumlah = Number("3");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

const judul = ["HTML", "CSS", "js", "Audit"];
for (const item of judul) 
console.log(item);

