"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.Mobile("Nokia", "3210", "Nokia", 8, "Black", false, 0, 150);
var iPhone3G = new mobile_1.Mobile("Iphone", "3G", "Apple", 32, "Black", false, 1, 300);
var SGalaxyS10 = new mobile_1.Mobile("SG10", "Galazy S10", "Samsung", 512, "White", true, 3, 700);
var mobiles = [nokia3210, iPhone3G, SGalaxyS10];
for (var i = 0; i < mobiles.length; i++) {
    console.log("Name :" + mobiles[i].name + "\n Model :" + mobiles[i].model + "\n Trademark :" + mobiles[i].trademark + "\n SD size :" + mobiles[i].sdSize + "\n Color :" + mobiles[i].color + "\n 5G :" + mobiles[i].is5G + "\n Camera Number :" + mobiles[i].cameraNumber + "\n Price :" + mobiles[i].price);
}
nokia3210.is5G = true;
nokia3210.cameraNumber = 4;
for (var i = 0; i < mobiles.length; i++) {
    console.log("Name :" + mobiles[i].name + "\n Model :" + mobiles[i].model + "\n Trademark :" + mobiles[i].trademark + "\n SD size :" + mobiles[i].sdSize + "\n Color :" + mobiles[i].color + "\n 5G :" + mobiles[i].is5G + "\n Camera Number :" + mobiles[i].cameraNumber + "\n Price :" + mobiles[i].price);
}
