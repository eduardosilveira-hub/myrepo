import os


def getChuncks(__serializedFile):
    chuncks = list()
    twelveCount = 0
    stringPointer = 0
    astring = ""

    countToSum = 0

    while stringPointer < len(__serializedFile) -1:
        while twelveCount <= 2:
            if __serializedFile[stringPointer].__contains__("\n") or __serializedFile[stringPointer].__contains__("."):
                stringPointer += 1
            else:
                astring += __serializedFile[stringPointer]
                twelveCount += 1
                stringPointer += 1
        chuncks.append(astring)
        astring = ""
        twelveCount = 0

        #print("stringPointer: " + str(stringPointer))
        #print("last chunk: " + str(chuncks))
    print(chuncks)
    return chuncks

def getSummedNumbers(__allchunks):
    trippleCounter = 0
    charNumber = 0
    finalCharList = []
    count = 0
    print(str(len(__allchunks)))
    while count <= len(__allchunks):
        if trippleCounter < 3:
            charNumber += int(__allchunks[count])
            count += 1
            trippleCounter += 1
        else:
            finalCharList.append(charNumber)
            #print("charNumber: " + str(charNumber))
            #print("Count: " + str(count))
            trippleCounter = 0
            charNumber = 0
            if count == len(__allchunks):
                break
    print(finalCharList)
    return finalCharList


def getMostCommon(__items):
    return max(set(__items), key=__items.count)


def translateMessage(__finalChars, __commonItem):
    count = 0
    while count < len(__finalChars):
        print(chr(__finalChars[count] - __commonItem), end="")
        count += 1
        if count == len(__finalChars):
            break


fileLines = []
allchunks = []
finalChars = []
commonItem = 0

file = "doc.txt"

if os.path.isfile(file):
    openedFile = open(file)

fileLines = openedFile.read()

allchunks = getChuncks(fileLines)

finalChars = getSummedNumbers(allchunks)

commonItem = getMostCommon(finalChars)

translateMessage(finalChars, commonItem - 32)

print("\nMost common is :" + str(commonItem) + " which is the character: " + chr(int(commonItem)))
print("Candidate for the pass key is: " + chr(int(commonItem) - 32))

