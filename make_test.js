export function evenOrOdd(p = 0) {
  if (p !== Math.trunc(p)) return 'numero decimal';
  return p % 2 ? 'odd [Impar]' : 'even [Par]';
}

export function factorial() {}
