import requests

res = requests.get("http://www.gutenberg.org/cache/epub/1112/pg1112.txt")
print(type(res))

#if res.status_code == requests.codes.ok:
#    print("Status: " + str(res.status_code))

try:
    res.raise_for_status()
    print("text: " + str(len(res.text)))
    print(res.text[1:50])

    print("content: " + str(len(res.content)))
    print(res.content[1:50])

    file = open("download", "wb")
    for chunks in res.iter_content(10000):
        file.write(chunks)
    file.close()

except Exception as exeception:
    print("There was a problem: %s" %(exeception))