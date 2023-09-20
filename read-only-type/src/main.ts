type Employee = {
  name: string;
  age: number;
  department: string;
  salary: number;
};

const employees: readonly Employee[] = [
  { name: "Nath", age: 40, department: "Sales", salary: 50600 },
  { name: "Lila", age: 35, department: "HR", salary: 45000 },
  { name: "Rapha", age: 32, department: "Sales", salary: 55700 },
  { name: "Mari", age: 23, department: "IT", salary: 48000 },
  { name: "Lara", age: 30, department: "Sales", salary: 40500 },
  { name: "Alice", age: 28, department: "HR", salary: 45000 },
  { name: "Miguel", age: 32, department: "Sales", salary: 35400 },
  { name: "Nico", age: 19, department: "Marketing", salary: 28000 },
];
