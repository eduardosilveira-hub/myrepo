import requests


class TempApiCalls():
	def __init__(self, _name, _street, _city, _province, _status, _temp, _hum, _operation):
		print("class initiated")
		self.name = _name
		self.street = _street
		self.city = _city
		self.province = _province
		self.status = _status
		self.temp = _temp
		self.hum = _hum
		self.API_URL = "https://myiotapp.azurewebsites.net/"
		self.API_OPERATION = _operation


	def insertTempTelemetry(self):
		print("Method accessed")
		dataParameters = '{"name":"'+self.name+'","street":"'+self.street+'","city":"'+self.city+'","province":"'+self.province+'","status":"'+self.status+'","temp":"'+self.temp+'","hum":"'+self.hum+'"}'
		try:
			print("Sending request to API")
			response = requests.post(url = self.API_URL+self.API_OPERATION, json=dataParameters)
			print("Got response %s " % response.content)
			return response
			
		except Exception as e:
			return e
