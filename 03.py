# Definisi kelas Mahasiswa
class Mahasiswa:
    # Konstruktor kelas untuk inisialisasi objek
    def __init__(self, nama, nim, jurusan):
        self.nama = nama
        self.nim = nim
        self.jurusan = jurusan

    # Metode untuk menampilkan aktivitas belajar
    def belajar(self):
        print(f"{self.nama} sedang belajar.")

# Implementasi penggunaan kelas Mahasiswa
mahasiswa1 = Mahasiswa("Sevti Ariyani", "202301110007", "Informatika")
mahasiswa2 = Mahasiswa("Ariyani Sevti", "202301110000", "Sistem Informasi")

# Menggunakan metode objek
mahasiswa1.belajar()  # Output: Budi sedang belajar.
mahasiswa2.belajar()  # Output: Ani sedang belajar.
