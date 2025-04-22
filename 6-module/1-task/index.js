/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.#renderTable();
  }

  #renderTable() {
    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        ${this.rows.map(row => `
          <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button class="remove-btn">X</button></td>
          </tr>
        `).join('')}
      </tbody>
    `;

    table.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-btn')) {
        const row = event.target.closest('tr');
        row.remove();
      }
    });

    return table;
  }
}


