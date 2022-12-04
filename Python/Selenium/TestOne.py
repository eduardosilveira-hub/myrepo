from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = 'C:\\Users\\silve\\OneDrive\\repository\\Generic\\Python\\Selenium\\chromedriver.exe'
driver = webdriver.Chrome(PATH)

driver.get("https://www.google.ca")
print(driver.title)

searchBox = driver.find_element_by_name("q")
 
searchBox.send_keys("python")
searchBox.send_keys(Keys.RETURN)

try:
    search = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "search"))
    )

    h3 = search.find_elements_by_tag_name("h3")
    for article in h3:
    	print(article.text)

finally:
    driver.quit()