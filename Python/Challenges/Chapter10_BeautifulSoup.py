import requests, bs4

res = requests.get("https://hackthissite.org")
try:
    res.raise_for_status()
    parsedHtml = bs4.BeautifulSoup(res.text, "lxml")
    username = parsedHtml.select("input[name=username]")

except Exception as exec:
    print("Error: %s" %(exec))