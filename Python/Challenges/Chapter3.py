result = 0
initialNumber = input("Type number: ")


def collats(number):
    if number % 2 == 0:
        print(number // 2)
        return number // 2

    if number % 2 == 1:
        print(3*number+1)
        return 3*number+1


result = collats(initialNumber)
while result != 1:
    result = collats(result)