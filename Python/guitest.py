from tkinter import *
import tkinter.font as ft

def quit():
    import sys; sys.exit()

root = Tk()
lbl = Label(root, text="Press the button below to exit")
lbl.pack()
btn = Button(root, text="Quit", command=quit)
btn.pack()
root.mainloop( )