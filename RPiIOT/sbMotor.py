import RPi.GPIO as GPIO
from time import sleep
from azure.servicebus.control_client import ServiceBusService, Message, Topic

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

motor = 7

GPIO.setup(motor, GPIO.OUT, initial=GPIO.LOW)

topic = "ledtopic"
request = ""

bus_service = ServiceBusService(service_namespace="myiotsvcbus",
                                shared_access_key_name='RootManageSharedAccessKey',
                                shared_access_key_value='J4zcEPywZBeEsM0qgAdzXps/7zZZKNY4idLmwi4zLes=')

try:
    while True:
        print("Listening...")
        msg = bus_service.receive_subscription_message(topic,'motorsub', peek_lock=False)
        if msg.body is None:
            print("empty message")
        else:
            request = msg.body.decode()
            print("Received message:", str(request))
            print("--------------------------------")
            motorstatus = GPIO.input(motor)
            if (request == "trigger"):
                if (motorstatus) == GPIO.HIGH:
                    GPIO.output(motor, GPIO.LOW)
                    print("turned off")
                    msg = Message(b'{"motor":"turned off"}')
                else:
                    GPIO.output(motor, GPIO.HIGH)
                    print("turned on")
                    msg = Message(b'{"motor":"turned on"}')
                print("sending message back")
                bus_service.send_topic_message(topic, msg)
            print("--------------------------------")
            request = ""
            sleep(3)

except KeyboardInterrupt:
    pass
    
GPIO.cleanup()
