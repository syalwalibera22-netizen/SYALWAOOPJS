class Hewan{
    bersuara(){
        console.log("Suara Hewan");
    }
}

class Kucing extends Hewan{
    mengeong (){
        console.log("Mengeong..");
    }
}

const Kucing1 =new Kucing();
Kucing1.bersuara();
Kucing1.mengeong();