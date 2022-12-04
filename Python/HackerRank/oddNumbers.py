def oddNumbers(l, r):
    # Write your code here
    result = []
    for i in range(l,r+1):
        if i % 2 != 0:
            result.append(i)
    return result

l = 3

r = 9

result = oddNumbers(l, r)

print('\n'.join(map(str, result)))
print('\n')