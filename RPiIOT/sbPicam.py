from picamera import PiCamera
import time, json, base64, zlib, sys
from azure.servicebus.control_client import ServiceBusService, Message, Topic

topic = "picamtopic"

bus_service = ServiceBusService(service_namespace="myiotsvcbus", 
                                shared_access_key_name='RootManageSharedAccessKey', 
                                shared_access_key_value='J4zcEPywZBeEsM0qgAdzXps/7zZZKNY4idLmwi4zLes=')

camera = PiCamera()
camera.resolution = (350, 240)

#camera.start_recording('test.h264')
#time.sleep(5)
#camera.stop_recording()

ZIPJSON_KEY = 'base64(zip(o))'

try:
    while True:
        print("Listening...")
        msg = bus_service.receive_subscription_message(topic,'picamsub', peek_lock=False)
        if msg.body is None:
            print("empty message")
        else:
            request = msg.body.decode()
            print("Received message:", str(request))
            print("--------------------------------")
            if (request == "picture"):
                camera.capture('test.jpg')
                with open('test.jpg', 'rb') as imageFile:
                    mystr = base64.b64encode(imageFile.read())
                print(sys.getsizeof(str(mystr)))
                msg = Message(mystr)
                print(sys.getsizeof(str(msg.body)))
                bus_service.send_topic_message(topic, msg)
                print("Message sent")
            else:
                print("Message not for me - Back to waiting untill message clears")
            print("--------------------------------")
            request = ""
        time.sleep(3)
        
except KeyboardInterrupt:
    print("Exiting program")
