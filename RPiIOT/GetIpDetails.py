import requests
import ipinfo

ipInfoAccessToken = "5284957e102e8e"

class GetIpInfo():
	def __init__(self, ipInfoAccessToken, ip_address=requests.get('https://api.ipify.org').text):
		self.ipInfoAccessToken = ipInfoAccessToken
		self.ip_address = ip_address
		self.handler = ipinfo.getHandler(ipInfoAccessToken)

	def getDetails(self):
		return self.handler.getDetails(self.ip_address).loc

my = GetIpInfo(ipInfoAccessToken)
lat,lon = str(my.getDetails()).split(',')

print("lat: " + lat + " | lon: " + lon)
