import shutil,os

sourceDir = os.path.abspath(input("Type source dir name: "))
destDir = os.path.abspathinput("Type destination dir name: ")

if not os.path.isdir(destDir):
    os.makedirs(destDir)

for foldername, subfolders, filenames in os.walk(sourceDir):
    for currentFile in filenames:
        if currentFile.__contains__("pdf") or currentFile.__contains__("jpg"):
            shutil.copy(sourceDir + "/" + currentFile, destDir + "/" + currentFile)

print("Content copied")