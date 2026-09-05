interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Mugisha',
  age: 20,
  location: 'Kigali',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Nkurunziza',
  age: 22,
  location: 'Nairobi',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const nameCell: HTMLTableCellElement = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
