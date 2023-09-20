type Employee = {
  name: string;
  age: number;
  department: string;
  salary: number;
};

const employees: readonly Employee[] = [
  { name: "Nath", age: 40, department: "Sales", salary: 50600 },
  { name: "Miguel", age: 35, department: "HR", salary: 45000 },
  { name: "Rapha", age: 32, department: "Sales", salary: 55700 },
  { name: "Mari", age: 23, department: "Sales", salary: 48000 },
  { name: "Lara", age: 30, department: "Sales", salary: 40500 },
  { name: "Alice", age: 28, department: "HR", salary: 45000 },
  { name: "Lila", age: 32, department: "Sales", salary: 35400 },
  { name: "Nico", age: 19, department: "Marketing", salary: 28000 },
  { name: "Benicio", age: 33, department: "IT", salary: 45400 },
  { name: "Helena", age: 19, department: "IT", salary: 30000 },
];

function printEmployeePerDepto(
  employees: readonly Employee[],
  department: string
): void {
  console.log(`Employees in the ${department} department:`);
  employees.forEach((employee) => {
    if (employee.department === department) {
      console.log(
        `Name: ${employee.name}, Age: ${employee.age}, Salary: £${employee.salary}`
      );
    }
  });
}

printEmployeePerDepto(employees, "Sales");
// Employees in the Sales department:
// Name: Nath, Age: 40, Salary: £50600
// Name: Rapha, Age: 32, Salary: £55700
// Name: Mari, Age: 23, Salary: £48000
// Name: Lara, Age: 30, Salary: £40500
// Name: Lila, Age: 32, Salary: £35400
