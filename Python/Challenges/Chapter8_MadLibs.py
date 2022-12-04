import os

def replacingWords():
    madfile = open("madlibsFile.txt", "r")
    madlines = madfile.readlines()
    for line in madlines:
        if "ADJECTIVE" in line:
            line = line.replace("ADJECTIVE", adjective)
        if "NOUN1" in line:
            line = line.replace("NOUN", noun1)
        if "VERB" in line:
            line = line.replace("VERB", verb)
        if "NOUN2" in line:
            line = line.replace("NOUN", noun2)
    madfile.close()

    madfile = open("madlibsFile.txt", "w")
    madfile.write(line)
    madfile.close()




adjective = input("Enter an adjective: ")
noun1 = input("Enter an noun: ")
verb = input("Enter an verb: ")
noun2 = input("Enter another Noun: ")

replacingWords()


