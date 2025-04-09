function highlight(table) {
  for (let index = 0; index < table.querySelector('tbody').rows.length; index++) {
    const row = table.querySelector('tbody').rows[index];
    const age = table.querySelector('tbody').rows[index].cells[1];
    const gender = table.querySelector('tbody').rows[index].cells[2];
    const status = table.querySelector('tbody').rows[index].cells[3];

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
