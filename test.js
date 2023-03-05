"use strict";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Right"] = 2] = "Right";
    Direction1[Direction1["Left"] = 3] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Right"] = "RIGHT";
    Direction2["LEft"] = "LEFT";
})(Direction2 || (Direction2 = {}));
function runEnum(obj) {
    return obj.Up;
}
let text = runEnum(Direction2);
console.log(text); // UP
