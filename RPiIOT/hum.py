import Adafruit_DHT
import RPi.GPIO as GPIO
import sys
import time
import os

# Led Setup
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
led = 11
GPIO.setup(led, GPIO.OUT)
ledon = False

try:
    GPIO.output(led,True)
    while True:
        print("--------------------------------")
        hum, temp = Adafruit_DHT.read_retry(11, 18)
        print('{"temp":"'+str(temp)+'","hum":"'+str(hum)+'"}')
        time.sleep(10)
        
except KeyboardInterrupt:
    pass
finally:
    pass
    
GPIO.cleanup()
