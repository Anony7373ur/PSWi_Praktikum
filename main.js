

const kegiatan = [
 { id: 1, judul: "HTML", kuota: 20 },
 { id: 2, judul: "CSS", kuota: 0 },
 { id: 3, judul: "Js", kuota: 10}
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);
const judulKegiatan = kegiatan.map(k => k.judul);
console.log(judulKegiatan);

if (kegiatan.length > 0) {
    const { judul, kuota } = kegiatan[0];
    console.log(judul, kuota);
}

import { hitungTotal } from "./utils.js";
console.log(hitungTotal(2, 10000));




