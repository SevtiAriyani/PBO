// Menggunakan List (Array)
let listMahasiswa = ["Sevti", "Dwi", "Tiwi"];
listMahasiswa.push("Eko"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Sevti", "Dwi", "Tiwi", "Eko"]

// Menggunakan Set
let setMahasiswa = new Set(["Sevti", "Dwi", "Tiwi"]);
setMahasiswa.add("Eko");
setMahasiswa.add("Sevti"); // Tidak akan menambahkan karena Sevti sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Sevti", "Dwi", "Tiwi", "Eko"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Sevti", 88);
mapNilai.set("Dwi", 92);
mapNilai.set("Tiwi", 85);
console.log(mapNilai.get("Sevti")); // Output: 88
