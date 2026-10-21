class Kucing{
    bersuara (){
        console.log("Meong...");
    }
}
class Anjing{
    bersuara(){
        console.log("Guk guk...");
    }
}
class hamster{
    bersuara(){
        console.log("Sik Sik ...");
    }
}
const hewan =[new Kucing(), new Anjing()];
hewan.forEach(hewan=>hewan.bersuara()); 

const hewan3=new hamster ();
hewan3.bersuara();
