from datetime import date
from datetime import time
from datetime import datetime

class myClass():
    def method1(self):
        print("method 1")

    def method2(self, a_string):
        print(f"method 2 has {a_string} passed to it")

class newClass(myClass):
    def newmethod1(self):
        print("newClass method1")

    def newmethod2(self):
        print(f"newClass Method 2")


def main():
    obj1 = myClass()
    obj1.method1()
    obj1.method2(a_string="this one")
    obj2 = newClass()
    obj2.method1()
    obj2.method2("test")
    print(f"Today\'s date is {date.today()}")
    print(f"Date components: {date.today().weekday()}")
    now = datetime.now()
    # %y/%Y - Year
    # %a/%A - weekday
    # %b/%B - month
    # %d - day of month 
    print(now.strftime("Current year is: %Y"))


if __name__ == "__main__":
    main()
