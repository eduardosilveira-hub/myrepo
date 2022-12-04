import bs4, requests, openpyxl
from threading import Thread

def getPrices():
    try:
        getURL = requests.get(
            "https://www.bestbuy.ca/en-CA/Search/SearchResults.aspx?type=product&filter=category%3AComputers+%26+Tablets%3Bcategory%3ALaptops+%26+MacBooks%3Blaptopsscreensizefs0enrchrange%3A17+Inches&Lang=en-ca&icmp=laptops_shopbyscreensize_17&sortBy=price&sortDir=asc")

        getURL.raise_for_status()
        bestbuy = bs4.BeautifulSoup(getURL.text, "html.parser")
        laptopTitles = bestbuy.select(".prod-title")
        laptopPrices = bestbuy.select(".amount")
        wb = openpyxl.load_workbook("LaptopPrices.xlsx")
        sheet = wb.get_active_sheet()
        counter = 0
        for eachlaptop in range(len(laptopTitles)-1):
            if (laptopTitles[eachlaptop].getText().lower().__contains__("i7") or laptopTitles[eachlaptop].getText().lower().__contains__("I7")) and float(laptopPrices[eachlaptop].getText().lstrip("$").replace(",", "")) <= float(899.00):
                sheet.cell(row=counter+1, column=1).value = laptopTitles[eachlaptop].getText()
                sheet.cell(row=counter+1, column=2).value = laptopPrices[eachlaptop].getText()
                counter += 1
        wb.save("LaptopPrices.xlsx")
    except Exception as exc:
        print("There was a problem: %s" %(exc))


def main():
    mainThread = Thread(target=getPrices)
    mainThread.start()


if __name__ == "__main__":
    main()
