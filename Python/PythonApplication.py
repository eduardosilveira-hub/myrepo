import bs4, requests, openpyxl


def getPrices(_url, _spellNumber):
    global rowcount
    try:
        print("URL: " + _url + str(_spellNumber))
        getURL = requests.get(_url + str(_spellNumber))
        getURL.raise_for_status()
        page = bs4.BeautifulSoup(getURL.text, "html.parser")
        skipcounter = 1  

        if not page.select(".database-detail-page-not-found-message"):
            fields = {}

            table = bs4.BeautifulSoup(str(page.select("#spelldetails")))
            rows = table.select("tr")

            colcounter = 0

            fields['Title'] = bs4.BeautifulSoup(str(page.select(".heading-size-1"))).getText().replace("[","").replace("]","")
            fields['Page'] = _url + str(_spellNumber)
            sheet.cell(row=rowcount, column=1).value = str(fields['Title'])
            sheet.cell(row=rowcount, column=2).value = str(fields['Page'])

            for row in rows:
                if (skipcounter > 3):
                    thpart = str(bs4.BeautifulSoup(str(row.select("th"))).getText()).replace("[", "").replace("]","")
                    tdpart = str(bs4.BeautifulSoup(str(row.select("td"))).getText()).replace("[", "").replace("]","")
                    fields[thpart] = tdpart
                elif (skipcounter == 3):
                    thpart = str(bs4.BeautifulSoup(str(row.select("th"))).getText()).replace("[", "").replace("]","")
                    tdpart = str(bs4.BeautifulSoup(str(row.select("td"))).getText()).replace("[", "").replace("]","")
                    fields[thpart] = tdpart
                else:
                    skipcounter += 1

            for thpart in fields:
                for i in range(1, 25):
                    if sheet.cell(row=1, column=i).value == thpart:
                        sheet.cell(row=rowcount, column=i).value = fields[thpart]
                        break
            rowcount += 1
    except Exception as exc:
        print("There was a problem: %s" %(exc))
        errorLine = len(sheet['B'])
        sheet.cell(row=errorLine + 1, column=1).value = "ERROR"
        sheet.cell(row=errorLine + 1, column=2).value = _url + str(_spellNumber)


def main():
    url = "http://www.wowhead.com/spell="
    maxSpellNumber = 300000
    global wb
    wb = openpyxl.load_workbook("WoWHead_03.xlsx")
    global sheet
    sheet = wb.get_active_sheet()
    global rowcount
    rowcount = spellNumber = len(sheet['B'])
    spellNumberReadLink = sheet.cell(row=spellNumber, column=2).value

    if spellNumberReadLink is not None:
        spellCharacterPosition = str(spellNumberReadLink).find("=")+1
        spellNumber = int(spellNumberReadLink[spellCharacterPosition:]) + 1
        rowcount += 1
    else:
        spellNumber = 1

    while (spellNumber <= maxSpellNumber):
        getPrices(url, spellNumber)
        spellNumber += 1

    wb.save("WoWHead_03.xlsx")
    wb.close()

if __name__ == "__main__":
    global wb
    try:
        main()
    except KeyboardInterrupt:
        wb.save("WoWHead_03.xlsx")
        wb.close()