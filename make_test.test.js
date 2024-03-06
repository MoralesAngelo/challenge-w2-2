import { evenOrOdd } from './make_test.js';

describe('evenOrOdd', () => {
  test('ir should return "odd [Impar]" when parametear is 3', () => {
    //arrange;
    const r = 3;
    const expected = 'odd [Impar]';
    // act (actualizar la funcion)
    const x = evenOrOdd(r);
    //assert
    expect(x).toBe(expected);
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
  test('should first', () => {
    second;
  });
});
