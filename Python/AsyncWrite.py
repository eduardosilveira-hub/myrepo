import threading
import time


class AsyncWrite(threading.Thread):
    def __init__(self, text, outfile):
        threading.Thread.__init__(self)
        self.text = text
        self.out = outfile

    def run(self):
        f = open(self.out, "a")
        f.write(self.text + '\n')
        f.close()
        time.sleep(2)
        print("Finished Background File Write to " + self.out)


def Main():
    message = input("Enter a string to store: ")
    background = AsyncWrite(message, "out.txt")
    background.start()
    print("The program can continue while it writes in another thread")
    print("100 + 400 = ", 100 + 400)

    background.join()
    print("Waited untill thread was complete")


if __name__ == '__main__':
    Main()