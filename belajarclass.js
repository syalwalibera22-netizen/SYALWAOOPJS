class Siswatjkt {
    constructor(nama,kelas) {
        this.nama = nama;
        this.kelas = kelas;
    }
    perkenalan() {
        console.log(`Nama: ${this.nama} `);
        console.log(`Kelas: ${this.kelas} `);
    }

seragam() {
    console.log ("menggunakan seragam jurusan");
}
}


const siswa1 = new Siswatjkt("Syalwa", "XI TJKT");
siswa1.perkenalan();
const siswa2 =new Siswatjkt();


class Produk {
  constructor(nama, harga, jumlah) {
    this.nama = nama;
    this.harga = harga;
    this.jumlah = jumlah;
  }

  tampilkanInfo() {
    console.log("Nama produk: " + this.nama);
    console.log("Harga : Rp. " + this.harga);
    console.log("jumlah : " + this.jumlah);
  }

  hitungDiskon(persen) {
    return this.harga - (this.harga * persen/100);
  }
}

let produk1 = new Produk("keyboard", 150000, 2);
produk1.tampilkanInfo();
console.log("Harga produk1 setelah diskon : " + produk1.hitungDiskon(15));
const buku1 = new Produk("buku",78000,2);
buku1.tampilkanInfo();
console.log("Harga buku1 setelah diskon :" + buku1.hitungDiskon(10));
  