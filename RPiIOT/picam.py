from picamera import PiCamera
import time
import json
import base64

camera = PiCamera()
camera.capture('test.jpg')
#camera.start_recording('test.h264')
#time.sleep(5)
#camera.stop_recording()

with open('test.jpg', 'rb') as imageFile:
	mystr = base64.b64encode(imageFile.read())

newfile = open('newimage.jpg','wb')
myfile = base64.b64decode(mystr)
newfile.write(myfile)
newfile.close()


#a = json.dumps({'picture':str(decoded)})

