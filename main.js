const daftar = document.querySelector("#daftar");
const li = document.createElement("li");
li.textContent = "<b>Rina</b>";
daftar.append(li);

let peserta = [{ id: 1, nama: "Rina" }, { id: 2, nama: "Budi" }];
function render() {
 daftar.replaceChildren();
 for (const c of peserta) {
 const li = document.createElement("li");
 li.textContent = c.nama; 
 daftar.append(li);
 }
}
render();


const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "" : "Belum ada peserta";
