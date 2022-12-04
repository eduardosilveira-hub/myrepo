import os

searchDir = os.path.abspath(input("Search Dir: "))

if not os.path.isdir(searchDir):
    print("This direcroty doesn\'t exist in the current dir!")
    exit()

os.chdir(searchDir)

for foldername, subfolders, filenames in os.walk(searchDir):
    print("Current folder: " + foldername)
    print("Searching for files with size greater than 7k...")

    for filename in filenames:
        if os.path.getsize(filename) > 7000:
            os.unlink(filename)