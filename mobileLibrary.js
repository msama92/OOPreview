"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setName = function (nombre) {
        this.name = nombre;
    };
    MobileLibrary.prototype.setLocation = function (lugar) {
        this.location = lugar;
    };
    MobileLibrary.prototype.setMobiles = function (terminal) {
        this.mobiles = terminal;
    };
    MobileLibrary.prototype.getPrice = function () {
        this.totalPriceCalculation();
        return this.totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var precio = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            precio += this.mobiles[i].getprice();
        }
        this.totalPrice = precio;
    };
    MobileLibrary.prototype.printLibrary = function () {
        var texto = 'This are all my mobiles: \n';
        for (var i = 0; i < this.mobiles.length; i++) {
            texto += this.mobiles[i].tostring() + "\n";
        }
        texto += "\nOverall Price :" + this.getPrice();
        return texto;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
