import time
import concurrent.futures

start = time.perf_counter()

def do_task(seconds):
    print(f'Sleeping {seconds} second...')
    time.sleep(seconds)
    return 'Awake'


with concurrent.futures.ThreadPoolExecutor() as executor:
    results = [executor.submit(do_task, 1) for _ in range(10)]
    print(f1.result())
    print(f2.result())

# threads = []

# for _ in range(10):
#     t = threading.Thread(target=do_task, args=[1.5])
#     t.start()
#     threads.append(t)

# for thread in threads:
#     thread.join()

finish = time.perf_counter()

print(f'Finished in {round(finish - start, 2)} seconds')