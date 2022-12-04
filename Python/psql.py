import psycopg2
import time

# number of rows to add in each batch
n = 10000

# Generate single insert into query
single_query = """INSERT INTO post (user_id, post_text)
                VALUES (1, 'text in text field');"""

# Generate one big query
big_query = "INSERT INTO post (user_id, post_text) VALUES "
for i in range(n):
    big_query += "(" + str(i) + ",'text into text field'),"

big_query = big_query.strip(",") + ';' # remove the last ',' and add a ';'

#password = open('password.txt','r').read()
connection = psycopg2.connect("dbname=socratica user=postgres password={0}".format("Amarelo.135!"))

cursor = connection.cursor()

# Insert single query many times in DB
start_time = time.time()
for i in range(n):
    cursor.execute(single_query)
connection.commit()
stop_time = time.time()
print('{0} individual queries took {1} seconds.'.format(n, stop_time - start_time))

# Insert the big query, one time on DB
start_time = time.time()
cursor.execute(big_query)
connection.commit()
stop_time = time.time()
print('{0} big query took {1} seconds.'.format(n, stop_time - start_time))

cursor.close()
connection.close()
