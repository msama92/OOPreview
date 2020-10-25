"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model,
            this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getname = function () {
        return this.name;
    };
    Mobile.prototype.getmodel = function () {
        return this.model;
    };
    Mobile.prototype.gettrademark = function () { return this.trademark; };
    Mobile.prototype.getsdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.getis5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getcameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.setname = function (name) {
        this.name = name;
    };
    Mobile.prototype.setmode = function (model) {
        this.model = model;
    };
    Mobile.prototype.settrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setsdSize = function (size) {
        this.sdSize = size;
    };
    Mobile.prototype.setcolor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setis5G = function (G) {
        this.is5G = G;
    };
    Mobile.prototype.setcameraNumber = function (number) {
        this.cameraNumber = number;
    };
    Mobile.prototype.setprecio = function (price) {
        this.price = price;
    };
    Mobile.prototype.tostring = function () {
        return "The characteristics of the mobile " + this.name + " are :\n Name :" + this.name + "\n Model :" + this.model + "\n Trademark :" + this.trademark + "\n SD size :" + this.sdSize + "\n Color :" + this.color + "\n 5G :" + this.is5G + "\n Camera Number :" + this.cameraNumber + "\n Price :" + this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
