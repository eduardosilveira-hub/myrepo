from PIL import Image

def extract_text(iname):
    last = 0
    chars = []
    for i,v in enumerate(bytearray(Image.open(iname).tobytes())):
        if v:
            chars.append(chr(i - last))
            last = i
    return ''.join(chars)


morse = {'a':'.-','b':'-...','c':'-.-.',
         'd':'-..','f':'..-.','g':'--.',
         'h':'....','i':'..','j':'.---',
         'k':'-.-','l':'.-..','m':'--',
         'n':'-.','o':'---','p':'.--.',
         'q':'--.-','r':'.-.','s':'...',
         't':'-','u':'..-','v':'...-',
         'w':'.--','x':'-..-','y':'-.--',
         'z':'--..','1':'.----','2':'..---',
         '3':'...--','4':'....-','5':'.....',
         '6':'-....','7':'--...','8':'---..',
         '9':'----.','0':'-----'}


def main():
    result = extract_text('download.png')
    print(result)

    group = ""
    finalstring = ""
    for code in result:
        if code != " ":
            group = group + code
        else:
            for key, value in morse.items():
                if group == value:
                    finalstring = finalstring + key
                    group = ""
    print(finalstring.rstrip())

if __name__ == '__main__':
    main()