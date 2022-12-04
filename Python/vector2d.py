class Employee:

    raise_amount = 1.04

    def __init__(self, _first, _last, _pay):
        self.first = _first
        self.last = _last
        self.pay = _pay
        self.email = self.first + "." + self.last + "@company.com"

    def printfullname(self):
        print('{} {}'.format(self.first, self.last))

    def applyRaise(self):
        self.pay = int(self.pay * self.raise_amount)

    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount

employee1 = Employee("Eduardo", "Silveira", 100000)
employee2 = Employee("Eduardo", "Silveira", 60000)

Employee.raise_amount = 1.07

print(Employee.raise_amount)
print(employee1.raise_amount)
print(employee2.raise_amount)