import {Mobile} from "./mobile"
import {MobileLibrary} from "./mobileLibrary"

let nokia3210 = new Mobile("Nokia","3210","Nokia",8,"Black",false,0,150)
let iPhone3G = new Mobile("Iphone","3G","Apple",32,"Black",false,1,300)
let SGalaxyS10  = new Mobile ("SG10","Galazy S10","Samsung",512,"White",true,3,700)
let Note10 =  new Mobile("Note 10","Galaxy Note 10","Samsung",256,"Plata",true,3,1000)

let moviles = [nokia3210,iPhone3G,SGalaxyS10,Note10];

//for (let i=0; i<moviles.length; i++)
//{
//    console.log(moviles[i].tostring());
//}
nokia3210.setis5G(true);
nokia3210.setcameraNumber(4);

//for (let i=0; i<moviles.length; i++)
//{
//    console.log(moviles[i].tostring())
//}

let libreria = new MobileLibrary("SNKRS","Eu",moviles)
console.log(libreria.getPrice())
console.log(libreria.printLibrary())