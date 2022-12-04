import time
import os
import sys

iterations = 0

comment = str(input("Comment: "))

while True:
    time.sleep(1)
    print(f"Iteration {str(iterations)} : Pushing")
    print("=======================================")
    os.system("git add .")

    os.system("git commit -m " + comment)
    os.system("git push")
    print("waiting...")
    time.sleep(300)
    iterations += 1
    if sys.platform.startswith('win'):
        os.system("cls")
    else:
        os.system("clear")
        
