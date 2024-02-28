import 'mocha';
import {expect} from 'chai';
import {checkBoard, getPositions, checkAttack, allowedChars} from '../src/ejercicio-1';

describe('Ejercicio 1', () => {
  const board: allowedChars[][] = [

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', 'N', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', 'B', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-']

  ];

  const board2: allowedChars[][] = [

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', 'N', '-', '-', 'B', '-', '-'],

    ['-', '-', '-', 'N', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-']

  ];

  const board3: allowedChars[][] = [

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', 'N', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', 'B', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-'],

    ['-', '-', '-', '-', '-', '-', '-', '-']

  ];

  it('checkBoard funciona correctamente', () => {
    expect(checkBoard(board)).to.be.true;
    expect(checkBoard(board2)).to.be.false;
  });

  it('getPositions funciona correctamente', () => {
    expect(getPositions(board)).to.deep.equal([[2,4],[4,6]]);
    expect(() => getPositions(board2)).to.throw('Solo debe haber una reina de cada color.');
  });

  it('checkAttack funciona correctamente', () => {
    expect(checkAttack(board)).to.be.true;
    expect(() => checkAttack(board2)).to.throw('El formato del tablero no es válido.');
    expect(checkAttack(board3)).to.be.false;
  });

});