class PPLG{
    constructor(nama,umur){
        this.nama =nama;
        this.umur=umur;
    }
    perkenalan(){
        console.log("Halo,saya siswa dari XI PPLG ,nama saya" + this.nama);
        console.log("Umur saya"+ this.umur);
    }
}

class Siswa extends PPLG {
       constructor(nama,umur,kelas){
        this.kelas= kelas;
       }
       belajar () {
        console.log(this.nama+"sedang belajar");
       }
}
// buat objek baru
const siswa1=new Siswa("Syalwa",17,"XI PPLG");
//memanggil method yang diwariskan
siswa1.perkenalan();
//memanggil method milik class siswa
siswa1.belajar();
//menampilkan properti class
console.log("kelas :"+ siswa1.kelas);
    