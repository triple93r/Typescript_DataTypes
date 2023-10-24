"use strict";
var CarName;
(function (CarName) {
    CarName[CarName["Honda"] = 0] = "Honda";
    CarName[CarName["Toyota"] = 1] = "Toyota";
    CarName[CarName["BMW"] = 2] = "BMW";
    CarName[CarName["Swift"] = 3] = "Swift";
})(CarName || (CarName = {}));
let ggt = CarName.BMW;
console.log(CarName);
console.log("Value of BMW is : " + ggt);
