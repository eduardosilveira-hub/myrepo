dragonLoot = ["gold coin", "dagger", "gold coin", "gold coin", "ruby", "rope"]

inventory = {"rope": 1, "torch": 6, "gold coin": 42, "dagger": 1, "arrow": 12}

toadd = {}

def addToInventory(__inventory, __addedItems):
    for key, value in __inventory.items():
        countItem = 0
        for item in __addedItems:
            newvalue = 0
            if item == key:
                value += 1
                __inventory[key] = value
            if item not in __inventory:
                toadd[item] = value

    __inventory.update(toadd)
    return(__inventory)



result = addToInventory(inventory, dragonLoot)
print(result)