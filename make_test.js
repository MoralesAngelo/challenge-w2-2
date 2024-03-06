export function evenOrOdd(p = 0) {
  if (p !== Math.trunc(p)) return 'numero decimal';
  return p % 2 ? 'odd [Impar]' : 'even [Par]';
}

export function factorial(p) {
  if (p < 0) {
    throw new Error('numero negagivo');
  }
  if (p !== Math.trunc(p)) {
    throw new Error('numero negagivo');
  }

  let r = 1;
  for (let i = 2; i <= p; i++) {
    r *= i;
  }
  return r;
}

// funtion like array.length

export const arrayLength = (array) => {
  let r = 0;
  for (const iterator of array) {
    r++;
  }

  return r;
};
