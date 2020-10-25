"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.Mobile("Nokia", "3210", "Nokia", 8, "Black", false, 0, 150);
var iPhone3G = new mobile_1.Mobile("Iphone", "3G", "Apple", 32, "Black", false, 1, 300);
var SGalaxyS10 = new mobile_1.Mobile("SG10", "Galazy S10", "Samsung", 512, "White", true, 3, 700);
var moviles = [nokia3210, iPhone3G, SGalaxyS10];
for (var i = 0; i < moviles.length; i++) {
    console.log(moviles[i].toString());
}
nokia3210.setis5G(true);
nokia3210.setcameraNumber(4);
for (var i = 0; i < moviles.length; i++) {
    moviles[i].toString();
}
