function factorial(n) {
  let result = 1;

  for (let number = n; number > 0; number--) {
    result *= number;
  }

  return result;
}
