"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTotal = void 0;
function showTotal(first, second) {
    const total = first + second;
    console.log(`The total is: ${total}`);
    return total;
}
exports.showTotal = showTotal;
showTotal(100, 200);
