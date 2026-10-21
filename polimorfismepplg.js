class Sevila{
    skillCoding(){
        console.log("Sangat Bagus Sekali");
    }
    levelCoding(){
        console.log(80);
    }
}
class Manci{
    skillCoding(){
        console.log("Sangat bagus Sekali");
    }
    levelCoding(){
        console.log(2234567890);
    }
}
class Oktavia{
    skillCoding(){
        console.log("Dia pintar sekali");
    } 
    levelCoding(){
        console.log(2);
    }
}

const orang=new Sevila();
orang.skillCoding();
orang.levelCoding();

const orang2 = [new Manci(),new Oktavia()];
orang2.forEach(orang2=orang2.skillCoding());
orang2.forEach(orang2= orang2.levelCoding());