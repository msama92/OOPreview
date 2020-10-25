import {Mobile} from "./mobile"

let nokia3210 = new Mobile("Nokia","3210","Nokia",8,"Black",false,0,150)
let iPhone3G = new Mobile("Iphone","3G","Apple",32,"Black",false,1,300)
let SGalaxyS10  = new Mobile ("SG10","Galazy S10","Samsung",512,"White",true,3,700)

let moviles = [nokia3210,iPhone3G,SGalaxyS10]

for (let i=0; i<moviles.length; i++)
{
    console.log(moviles[i].toString());
}
nokia3210.setis5G(true);
nokia3210.setcameraNumber(4);

for (let i=0; i<moviles.length; i++)
{
    moviles[i].toString()
}
