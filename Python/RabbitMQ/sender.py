import pika

host = pika.ConnectionParameters('http://10.0.0.22:15672')
connection = pika.BlockingConnection(host)