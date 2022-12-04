from _md5 import md5

def evalCrossTotal(strMD5):
    intTotal = 0;
    for i in range(0, len(str(strMD5)), 1):
        arrMD5Chars = strMD5[i:i + 1]
    #arrMD5Chars = strMD5.split()
    for value in arrMD5Chars:
        intTotal += '0x0' + value
    return intTotal;


def encryptString(strString, strPassword):
    # strString is the content of the entire file with serials
    strPasswordMD5 = md5(strPassword)
    print(strPasswordMD5)
    #intMD5Total = evalCrossTotal(strPasswordMD5)
    #arrEncryptedValues = []
    #intStrlen = len(strString);
    #i = 0
    #for i in range(intStrlen):
    #    arrEncryptedValues = ord(strString[i:1]) + ('0x0' + strPasswordMD5[i % 32, 1]) - intMD5Total;
    #    intMD5Total = evalCrossTotal(md5(strString[0:i + 1])[0:16]) + md5(intMD5Total[0:16]);
    #    i += 1
    #return ' '.join(arrEncryptedValues)


def main():
    serialsfile = open("serials")
    serials = list(serialsfile.readlines())
    counter = 0

    while counter < len(serials):
        serials[counter] = serials[counter].rstrip()
        counter += 1

    password = "password"

    #encrypted = encryptString(serials, password.encode('utf-8'))
    encryptString(serials, password.encode('utf-8'))
    #print(encrypted)


if __name__ == '__main__':
    main()