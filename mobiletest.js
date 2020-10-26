"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileLibrary_1 = require("./mobileLibrary");
var nokia3210 = new mobile_1.Mobile("Nokia", "3210", "Nokia", 8, "Black", false, 0, 150);
var iPhone3G = new mobile_1.Mobile("Iphone", "3G", "Apple", 32, "Black", false, 1, 300);
var SGalaxyS10 = new mobile_1.Mobile("SG10", "Galazy S10", "Samsung", 512, "White", true, 3, 700);
var Note10 = new mobile_1.Mobile("Note 10", "Galaxy Note 10", "Samsung", 256, "Plata", true, 3, 1000);
var moviles = [nokia3210, iPhone3G, SGalaxyS10, Note10];
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
var libreria = new mobileLibrary_1.MobileLibrary("SNKRS", "Eu", moviles);
console.log(libreria.getPrice());
console.log(libreria.printLibrary());
