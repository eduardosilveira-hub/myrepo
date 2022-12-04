import requests

myApiKey = "ayk9pUagv1r8AMIiBe5oAPANPFXNSsGq"


class translateCoord():
	def __init__(self, lat, lon):
		self.response = requests.get("http://www.mapquestapi.com/geocoding/v1/reverse?key="+myApiKey+"&location="+lat+","+lon+"&includeRoadMetadata=true&includeNearestIntersection=true")
		
	def translated(self):
		return self.response.json()["results"]


#a = translateCoord("30.333472","-81.470448")
#print(a.translated())
