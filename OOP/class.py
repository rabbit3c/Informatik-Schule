class Employee:
    def __init__(self, id, first_name, surname, age):
        self.id = id
        self.first_name = first_name
        self.surname = surname
        self.age = age
        self.__private = 'Nithus ist gay'

    def display(self):
        print(f"ID: {self.id}, Name: {self.first_name} {self.surname}, Age: {self.age}")

    def getPrivate(self):
        return self.__private


class FulltimeEmployee(Employee):
    def __init__(self, id, first_name, surname, age, salary):
        super().__init__(id, first_name, surname, age)
        self.salary = salary

emp1 = Employee(0, "Nithus", "Sabesan", 20)
emp2 = FulltimeEmployee(1, "Lukas", "Köllner", 19, 1)

emp1.display()
emp2.display()

print(emp1.getPrivate())

