// abstraksi.js 
class Mobil {
  constructor(merek) {
    this.merek = merek;
  }

  // method public
  nyalakan() {
    console.log(`Nyalakan mobil ${this.merek}`);
    this.#prosesMesin();
    console.log("Mobil siap digunakan");
    console.log("---"); 
  }

  // method private
  #prosesMesin() {
    console.log("Proses mesin...");
  }
}

const mobil = new Mobil("Toyota");
mobil.nyalakan();

const mobilSport = new Mobil("Mercedes");
mobilSport.nyalakan();

const mobilSUV = new Mobil("Honda");
mobilSUV.nyalakan();