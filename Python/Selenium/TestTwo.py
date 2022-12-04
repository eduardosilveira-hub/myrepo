from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome("C:\\Users\\silve\\OneDrive\\repository\\Generic\\Python\\Selenium\\chromedriver.exe")
driver.get("http://www.python.org")

assert "Python" in driver.title
elem = driver.find_element_by_name("q")
elem.clear()
elem.send_keys("cacete belho")
elem.send_keys(Keys.RETURN)

assert "No results found." not in driver.page_source
driver.close()