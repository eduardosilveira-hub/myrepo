def factorial(num):
    result: int = 0
    if (type(num) != int):
        return None
    
    if (num < 0):
        return None
    
    while num != 1:
        if (result == 0):
            result = num * (num -1)
        else :
            result = result * (num - 1)
        
        num = num -1

    return result

print(factorial('asdasdad'))