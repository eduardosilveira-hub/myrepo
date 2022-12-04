import RPi.GPIO as GPIO
import sys, time, os, Adafruit_DHT, MyApiCalls
import requests

# Led Setup
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
led = 11
GPIO.setup(led, GPIO.OUT)
ledon = False
# Led Setup


# Azure Service Bus Setup
from MyApiCalls import TempApiCalls as tempapi
from azure.servicebus.control_client import ServiceBusService, Message, Topic
topic = "ledtopic"
sensorName = "DTH11"
request = ""
bus_service = ServiceBusService(
    service_namespace="myiotsvcbus",
    shared_access_key_name='RootManageSharedAccessKey',
    shared_access_key_value='J4zcEPywZBeEsM0qgAdzXps/7zZZKNY4idLmwi4zLes='
)
# Azure Service Bus Setup

def getData():
    return Adafruit_DHT.read_retry(11, 18)

try:
    GPIO.output(led,True)
    while True:
        print("Listening...")
        msg = bus_service.receive_subscription_message(topic,'tempsub', peek_lock=False)
        if msg.body is None:
            print("empty message")
        else:
            request = msg.body.decode()
            print("Received message:", str(request))
            print("--------------------------------")
            if (request == "temperature"):
                hum, temp = getData()
                msg = Message('{"temp":"'+str(temp)+'","hum":"'+str(hum)+'"}')
                bus_service.send_topic_message(topic, msg)
            else:
                print("Message not for me - Back to waiting untill message clears")
            print("--------------------------------")
            request = ""
            time.sleep(3)

except KeyboardInterrupt:
    pass
finally:
    pass

GPIO.cleanup()
