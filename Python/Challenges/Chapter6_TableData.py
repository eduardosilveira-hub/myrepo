listOfLists = [["apples", "oranges", "pineapplebays", "banana"],
               ["Alice", "Bob", "Carol", "David"],
               ["dogs", "cats", "moose", "goose"]]

colwidth = len(listOfLists[0])

def printTable(__listOfLists):
    i = 0
    j = 0
    for i in range(len(__listOfLists[j])):
        for j in range(len(__listOfLists)):
            print(__listOfLists[j][i].rjust(colwidth), end="")
            j += 1
        i += 1
        print("")

printTable(listOfLists)