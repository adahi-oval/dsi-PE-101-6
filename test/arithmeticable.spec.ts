import 'mocha';
import {expect} from 'chai';
import {Arithmeticable, ArithmeticableCollection} from '../src/ejercicio-1-2';
import {Rational} from '../src/rational';
import {Complex} from '../src/ejercicio-3';

describe('Arithmeticable tests', () => {
  let ratio1: Rational = new Rational(1,2);
  let ratio2: Rational = new Rational(1,3);
  let ratio3: Rational = new Rational(1,3);
  let ratio4: Rational = new Rational(2,3);
  let expectedRatio1: Rational = new Rational(2,3);
  let expectedRatio2: Rational = new Rational(1,6);
  let expectedRatio3: Rational = new Rational(3,2);
  let ratioCollection: ArithmeticableCollection<Rational> = new ArithmeticableCollection<Rational>([ratio1, ratio2]);

  let complex1: Complex = new Complex(2,1);
  let complex2: Complex = new Complex(4,2);
  let expectedComplex1: Complex = new Complex(6,3);
  let expectedComplex2: Complex = new Complex(8,2);
  let expectedComplex3: Complex = new Complex(2,2);
  let complexCollection: ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>([complex1, complex2]);
  describe('ArithmeticableCollection tests', () =>{
    it('Sus métodos funcionan correctamente', () =>{
      expect(ratioCollection.getNumberofArithmeticals()).to.eq(2);
      expect(ratioCollection.getArithmeticable(0)).to.deep.eq(ratio1);
      expect(complexCollection.getNumberofArithmeticals()).to.eq(2);
      expect(complexCollection.getArithmeticable(0)).to.deep.eq(complex1);
    });
  });

  describe('Rational tests', () => {
    it('Sus métodos add, sub, mult y div funcionan correctamente', () => {
      expect(ratio2.add(ratio3)).to.deep.equal(expectedRatio1);
      expect(ratio4.sub(ratio3)).to.deep.equal(ratio3);
      expect(ratio1.mult(ratio2)).to.deep.equal(expectedRatio2);
      expect(ratio1.div(ratio2)).to.deep.equal(expectedRatio3);
    });
  });

  describe('Complex tests', () => {
    it('Sus métodos add, sub, mult y div funcionan Correctamente', () =>{
      expect(complex1.add(complex2)).to.deep.equal(expectedComplex1);
      expect(complex2.sub(complex1)).to.deep.equal(complex1);
      expect(complex1.mult(complex2)).to.deep.equal(expectedComplex2);
      expect(complex2.div(complex1)).to.deep.equal(expectedComplex3);
    });
  });
});