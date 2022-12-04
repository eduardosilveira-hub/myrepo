import RPi.GPIO as GPIO
import time
from azure.servicebus import ServiceBusClient, QueueClient, Message

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

led = 11
GPIO.setup(led, GPIO.OUT)
GPIO.output(led, False)

connectionString = "Endpoint=sb://myiotsvcbus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=J4zcEPywZBeEsM0qgAdzXps/7zZZKNY4idLmwi4zLes="
queue_client = QueueClient.from_connection_string(connectionString, "test")
ledstatus = 0

try:
    while True:
        with queue_client.get_receiver() as queue_receiver:
            print("Listening...")
            messages = queue_receiver.fetch_next()
            for mess in messages:
                print("message received: ", str(mess))
                ledstatus = GPIO.input(led)
                if (str(mess).strip() == "switch"):
                    if (ledstatus) == 1:
                        GPIO.output(led, False)
                        print("turned off")
                        msg = Message(b'{"result":"turned off"}')
                        mess.complete()
                    else:
                        GPIO.output(led, True)
                        print("turned on")
                        msg = Message(b'{"result":"turned on"}')
                        mess.complete()
                else:
                    print('{"result":"message not recognized"}')
        print("Sending acknowledge message")

        queue_client = QueueClient.from_connection_string(connectionString, "test")

        queue_client.send(msg)
        print("message sent")


except KeyboardInterrupt:
    pass
    
GPIO.cleanup()
