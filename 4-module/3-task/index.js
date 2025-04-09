function highlight(table) {
  const tBody = table.querySelector('tbody');

  for (let index = 0; index < tBody.rows.length; index++) {
    const row = tBody.rows[index];
    const age = row.cells[1];
    const gender = row.cells[2];
    const status = row.cells[3];

    // Status
    if (status.dataset.available == 'true') {
      row.classList.add('available');
    }
    else if (status.dataset.available == 'false') {
      row.classList.add('unavailable');
    }
    else {
      row.hidden = true;
    }

    // Gender
    if (gender.innerHTML == 'm') {
      row.classList.add('male');
    }
    else {
      row.classList.add('female');
    }

    // Age
    if (Number(age.innerHTML) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
