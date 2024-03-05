export const obtenerLongitud = (cadena) => {
  let longitud = 0;
  while (cadena[longitud] !== undefined) {
    longitud++;
  }
  return longitud;
};

export const simulateString = (p) => {
  let newString = '';
  const stringinput = obtenerLongitud(p);
  for (let i = start; i < end && i < stringinput; i++) {
    newString += p[i];
  }
  return newString;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const element = 6;

export const includes = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
};

console.log(includes(array, element));
