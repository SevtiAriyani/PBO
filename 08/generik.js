// Fungsi generik menggunakan pola
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [15, 25, 35]; // Modifikasi angka
let kata = ["empat", "lima", "enam"]; // Modifikasi kata

console.log(getElementAtIndex(angka, 1)); // Output: 25
console.log(getElementAtIndex(kata, 0)); // Output: "empat"
