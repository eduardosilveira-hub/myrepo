from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = 'C:\\Users\\silve\\OneDrive\\repository\\Generic\\Python\\PythonApp1\\PythonApp1\\chromedriver.exe'
driver = webdriver.Chrome(PATH)

driver.get("https://www.google.ca")
print(driver.title)

search = driver.find_element_by_name("q")

search.send_keys("python")
search.send_keys(Keys.RETURN)

try:
    search = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "search")))

    h3 = search.find_elements_by_tag_name("h3")
    for article in h3:
    	print(article.text)

finally:
    driver.quit()