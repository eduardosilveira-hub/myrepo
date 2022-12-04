from threading import Thread
import time


def readwordlist(wordlistfilename):
    filecontent_return = []
    openedFile = open(wordlistfilename)
    filecontent = openedFile.readlines()
    for eachitem in filecontent:
        filecontent_return.append(eachitem.rstrip())
    return filecontent_return


def readscrambledlist(scrambledfilename):
    scrambledfilecontent_return = []
    openedscrambledfile = open(scrambledfilename)
    scrambledfilecontent = openedscrambledfile.readlines()
    for eachitem in scrambledfilecontent:
        scrambledfilecontent_return.append(eachitem.rstrip())
    return scrambledfilecontent_return


def processwords(name, scrambledwords, wordlistcontent):
    start = time.time()
    print("\nThread " + name + " Started")
    result = ""
    for scrambledlistcounter in range(len(scrambledwords)):
        print("Unscrambling " + str(scrambledlistcounter) + " word")
        for wordlistcounter in range(len(wordlistcontent)):
            if (len(scrambledwords[scrambledlistcounter]) == len(wordlistcontent[wordlistcounter])):
                __sortedscrambledword = list(scrambledwords[scrambledlistcounter])
                __sortedeachword = list(wordlistcontent[wordlistcounter])
                if (sorted(__sortedscrambledword) == sorted(__sortedeachword)):
                    result = result + wordlistcontent[wordlistcounter] + ","
                    if scrambledlistcounter == len(scrambledwords) - 1:
                        print(result.rstrip(","))
                        match = True
        wordlistcounter = 0
    end = time.time()
    print("\nThread " + name + " Ended")
    duration = (end - start) * 100
    print("Duration = " + str(duration) + " ms")


def main():
    wordlist = "wordlist.txt"
    scrambledfile = "scrambled"
    wordlistcontent = readwordlist(wordlist)
    scrambledwords = readscrambledlist(scrambledfile)
    #match = False
    for count in range(len(scrambledwords)): # creating same amount of threads as scrambled words... change to unscramble one per thread
        name = "Thread_" + str(count)
        t = Thread(target=processwords, args=(name, scrambledwords,wordlistcontent))
        t.start()
    print("Main Completed")
        #match = processwords(scrambledwords, wordlistcontent)


if __name__ == '__main__':
    main()
