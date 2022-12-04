import RPi.GPIO as GPIO
import time
from azure.servicebus.control_client import ServiceBusService, Message, Topic

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

led = 11
GPIO.setup(led, GPIO.OUT)
GPIO.output(led, False)
ledstatus = 0

topic = "ledtopic"
request = ""

bus_service = ServiceBusService(service_namespace="myiotsvcbus",
                                shared_access_key_name='RootManageSharedAccessKey',
                                shared_access_key_value='J4zcEPywZBeEsM0qgAdzXps/7zZZKNY4idLmwi4zLes=')

try:
    while True:
        print("Listening...")
        msg = bus_service.receive_subscription_message(topic,'ledsub', peek_lock=False)
        if msg.body is None:
            print("empty message")
        else:
            request = msg.body.decode()
            print("Received message:", str(request))
            print("--------------------------------")
            ledstatus = GPIO.input(led)
            if (request == "switch"):
                if (ledstatus) == 1:
                    GPIO.output(led, False)
                    print("turned off")
                    msg = Message(b'{"led":"turned off"}')
                else:
                    GPIO.output(led, True)
                    print("turned on")
                    msg = Message(b'{"led":"turned on"}')
                print("sending message back")
                bus_service.send_topic_message(topic, msg)
            print("--------------------------------")
            request = ""
            time.sleep(3)

except KeyboardInterrupt:
    pass
    
GPIO.cleanup()
