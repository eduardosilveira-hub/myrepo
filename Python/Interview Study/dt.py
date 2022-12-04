import time

def lists():
    myList = ["Rock","Paper","Scissors","Lizard","Spock"]
    # find index by name
    i = myList.index('Paper')
    print(f"Index of Paper: {i}")
    print(f"What is on index {i}: {myList[i]}")

    # print by idex

    # mutable
    

def tuples():
    myTuple = (3,2,4,5,2,7,8,9,4,3,5)

def sets():
    mySets = {4,3,6,4,6,8,4,2,4,6}

def main():
    for i in range(1,30):
        print(f"{i}")
        time.sleep(1)

if __name__ == '__main__': main()