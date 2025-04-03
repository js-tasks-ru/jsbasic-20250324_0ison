function sumSalary(salaries) {
  return Object.values(salaries).reduce((sum, value) =>
    isFinite(value) ? sum + value : sum, 0
  );
}
