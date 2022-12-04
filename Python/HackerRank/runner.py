def runner(arr):
    mymax = -100
    runner_up = -100
    for i in arr:
        if i > mymax:
            runner_up = mymax
            mymax = i
        if i > runner_up and i < mymax:
            runner_up = i
    print(runner_up)


if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    runner(arr)
