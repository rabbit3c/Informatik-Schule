class Employee {
    static number = 0;

    constructor(id, first_name, surname, age) {
        this.id = id;
        this.first_name = first_name;
        this.surname = surname;
        this.age = age;
    }

    display() {
        console.log(`${this.id} ${this.first_name} ${this.surname} ${this.age}`);
    }

    static counter() {
        this.number++;
        console.log(`Number: ${this.number}`)
    }
}

class FulltimeEmployee extends Employee {
    constructor(id, first_name, surname, age, salary) {
        super(id, first_name, surname, age);
        this.salary = salary;
    }
}

const emp1 = new Employee(0, "Nithus", "Sabesan", 20);
const emp2 = new FulltimeEmployee(1, "Lukas", "Köllner", 19, 75);

console.log(emp2.salary);
emp2.salary = 2;
console.log(emp2.salary);

emp1.display();
Employee.counter();
Employee.counter();