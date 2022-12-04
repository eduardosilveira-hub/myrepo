inventory = {"rope": 1, "torch": 6, "gold coin": 42, "dagger": 1, "arrow": 12}

def displayInventory(inventory):
    countItems = 0
    print("Inventory: ")
    for key, value in inventory.items():
        print(key + ": " + str(value))
        countItems = countItems + value
    print("The total number of items: " + str(countItems))


displayInventory(inventory)