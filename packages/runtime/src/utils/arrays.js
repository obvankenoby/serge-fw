export function withoutNulls(arr) {
  return arr.filter((item) => item != null); // нестрогое неравенство для удаление null и undefined
}
