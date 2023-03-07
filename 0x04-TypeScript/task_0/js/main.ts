interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'Phillip', lastName: 'Phillips', age: 32, location: 'Georgia' };
const student2: Student = { firstName: 'Thomas', lastName: 'Thomason', age: 99, location: 'Wyoming' };
const studentsList: Array<Student> = [student1, student2];

function CreateTable(table: HTMLTableElement, studentsList: Array<Student>) {
  for (const student of studentsList) {
    let row: HTMLTableRowElement = table.insertRow();
    const firstName: HTMLTableCellElement = row.insertCell();
    const location: HTMLTableCellElement = row.insertCell();
    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
  }
  document.body.appendChild(table);
}
let table: HTMLTableElement = document.createElement('table');
CreateTable(table, studentsList);
