nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

# print("LAMBDA")
# name = input("Name: ")
# fn, ln = name.split(" ")
# result = lambda fn, ln: fn.strip().title() + " " + ln.strip().title()
# print(result(fn, ln))

print()
print("MAP")
duplicates = list(map(lambda x: x*2, nums))
print(duplicates)

print()
print("FILTER")
bytwo = list(filter(lambda x: x%2 == 0, nums))
print(bytwo)

countries = ["", "Argentina", "", "Brazil"]
clean_list = filter(None, countries)
print(list(clean_list))
