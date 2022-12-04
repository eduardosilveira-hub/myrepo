import RPi.GPIO as GPIO
from time import sleep

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
motor = 7
GPIO.setup(7, GPIO.OUT, initial=GPIO.LOW)
GPIO.cleanup()
try:
	while True:
		print("--------------------------------")
		motorstatus = GPIO.input(motor)
		if (motorstatus) == GPIO.HIGH:
			GPIO.output(motor, GPIO.LOW)
			print("turned off")
		else:
			GPIO.output(motor, GPIO.HIGH)
			print("turned on")
		sleep(3)
		print("--------------------------------")
		
except KeyboardInterrupt:
	pass
	
GPIO.cleanup()
