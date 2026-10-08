
let skor = 0;

const nilai = document.getElementById("nilai");
const greetingButton = document.getElementById("greeting-button");
greetingButton.addEventListener('click', () => {

 skor = skor + 1;

nilai.innerText = skor;
if (skor === 5) {
    alert("Sudah cukup nekannya, kesya!");
}
}
);



