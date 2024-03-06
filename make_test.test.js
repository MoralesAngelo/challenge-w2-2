import { arrayLength, evenOrOdd, factorial } from './make_test.js';

describe('evenOrOdd', () => {
  test('ir should return "odd [Impar]" when parametear is 3', () => {
    //arrange valores ;
    const r = 3;
    const expected = 'odd [Impar]'; // lo que espera
    // act (actualizar la funcion)
    const result = evenOrOdd(r);
    //assert
    expect(factorial(0)).toBe(expected(1)); // esta es la manera de resumirlo en una linea
  });
  test('ir should return "even [Par]" when parametear is 2', () => {
    //arrange;
    const r = 2;
    const expected = 'even [Par]';
    // act (actualizar la funcion)
    const x = evenOrOdd(r);
    //assert
    expect(x).toBe(expected);
  });

  test('ir should return "numero decimal" when parametear is 2.5', () => {
    //arrange;
    const r = 2.5;
    const expected = 'numero decimal';
    // act (actualizar la funcion)
    const x = evenOrOdd(r);
    //assert
    expect(x).toBe(expected);
  });
});

describe('factorial', () => {
  test('it should return 1 when argument is 0', () => {
    const x = 0;
    const expected = 1;
    const result = factorial(x);
    expect(result).toBe(expected);
  });

  test('it should return 1 when argument is 1', () => {
    const x = 1;
    const expected = 1;
    const result = factorial(x);
    expect(result).toBe(expected);
  });

  test('it should return 120 when argument is 5', () => {
    const x = 5;
    const expected = 120;
    const result = factorial(x);
    expect(result).toBe(expected);
  });

  test('it should ... when argument is -5', () => {
    const x = -5;
    const expected = 'numero negativo';
    const result = factorial(x);
    expect(result).toBe(expected);
  });

  test('it should ... when argument is 5,5', () => {
    const x = 5.5;
    const expected = 'numero negativo';
    expect(result).toBe(expected);
    expect(() => factorial(x)).toThrow(); //manera de
  });
});

describe.only('arrayLength', () => {
  test('it should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('it should be 1 when argument is [0]', () => {
    const x = [6];
    const expected = 1;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('it should be 3 when argument is [6,6,6]', () => {
    const x = [6, 6, 6];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('it should be 1 when argument is [false,false,false]', () => {
    const x = [false, false, false];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});
