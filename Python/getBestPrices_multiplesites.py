import bs4, requests, openpyxl
from threading import Thread


def getPrices(site, url):
    try:
        getURL = requests.get(url)
        getURL.raise_for_status()
        page = bs4.BeautifulSoup(getURL.text, "html.parser")
        if page.select(".prod-title"):
            laptopTitles = page.select(".prod-title")
            laptopPrices = page.select(".amount")

        if page.select(".head"):
            laptopTitles = page.select(".head.productMainLink.truncate.mobile-only")
            laptopPrices = page.select(".sale-price")

        wb = openpyxl.load_workbook("LaptopPrices.xlsx")
        sheet = wb.get_active_sheet()
        counter = sheet.max_row

        for eachlaptop in range(len(laptopTitles)-1):
            price = laptopPrices[eachlaptop].getText().replace("\n","")
            price = price.lstrip("$").replace(",", "")

            if (laptopTitles[eachlaptop].getText().lower().__contains__("i7") or laptopTitles[eachlaptop].getText().lower().__contains__("I7")
                or laptopTitles[eachlaptop].getText().lower().__contains__("i5") or laptopTitles[eachlaptop].getText().lower().__contains__("I5")) \
                    and (float(price) >= float(600.00) and float(price) <= float(950.00)):
                sheet.cell(row=counter+1, column=1).value = site
                sheet.cell(row=counter+1, column=2).value = laptopTitles[eachlaptop].getText()
                sheet.cell(row=counter+1, column=3).value = laptopPrices[eachlaptop].getText()
                print(site + ": " + laptopTitles[eachlaptop].getText() + " : " + laptopPrices[eachlaptop].getText().rstrip())
                counter += 1
        wb.save("LaptopPrices.xlsx")
    except Exception as exc:
        print("There was a problem: %s" %(exc))


def main():
    URLs = {"bestbuy":"https://www.bestbuy.ca/en-CA/category/laptops/36711.aspx?type=product&icmp=laptops_shopbycategory_windows_en&sortBy=price&sortDir=asc",
           "thesource":"https://www.thesource.ca/en-ca/computers-and-tablets/laptops/all-laptops/c/scc-1-2-1?q=%3Aprice-asc%3AFT-Laptop-ScreenSize%3A17.3"}

    for site, url in URLs.items():
        mainThread = Thread(target=getPrices, args=(site, url))
        mainThread.start()
    print("done")

if __name__ == "__main__":
    main()
