spam = ['apples', 'bananas']


def breakList(listName):
    newString = ""
    counter = 1
    for char in listName:
        if counter == len(listName):
            newString = newString.rstrip(", ") + " and " + char.rstrip()
        else:
            newString = char.rstrip() + ", " + newString
        counter += 1

    print(newString)

breakList(sorted(spam))