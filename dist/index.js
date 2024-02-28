"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAttack = exports.checkBoard = void 0;
function checkBoard(board) {
    for (let index = 0; index < board.length; index++) {
        const element = board[index];
        if (element.length !== 8) {
            return false;
        }
        else if (board.length !== 8) {
            return false;
        }
        for (let square of element) {
            if (square === "-" || square === 'N' || square === 'B') {
                continue;
            }
            else {
                return false;
            }
        }
    }
    return true;
}
exports.checkBoard = checkBoard;
function checkAttack(board) {
    if (!checkBoard(board)) {
        throw new Error('El formato del tablero no es válido.');
    }
    return undefined;
}
exports.checkAttack = checkAttack;
const board = [
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', 'N', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', 'B', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-']
];
console.log(checkBoard(board));
//# sourceMappingURL=index.js.map