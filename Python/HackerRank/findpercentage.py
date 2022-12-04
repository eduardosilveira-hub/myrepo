from statistics import mean
marks = {
    'alpha': [20, 30, 40],
    'beta': [30, 40, 50],
    'charlie': [40, 50, 60],
}

student = 'beta'

print(format(mean(marks[student]), ".2f"))