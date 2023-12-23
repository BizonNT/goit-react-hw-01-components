export function makeFirstLetterToUpperCase(value) {
  return (
    value.toUpperCase().split('').slice(0, 1) + value.split('').slice(1).join('')
  );
}