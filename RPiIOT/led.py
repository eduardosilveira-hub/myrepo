import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

led = 11

GPIO.setup(led, GPIO.OUT)

ledon = False

try:
#    for i in range(10):
#        time.sleep(0.5)
#        if (GPIO.input(led) == False):
            GPIO.output(led,True)
#        else:
#            GPIO.output(led,False)
#        time.sleep(0.5)
except KeyboardInterrupt:
    pass

GPIO.cleanup()
