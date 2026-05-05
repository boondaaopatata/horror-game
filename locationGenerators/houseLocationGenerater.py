import random

path = "../gameScript/location/all-house-locations.js"

xRangeOne = -20000
xRangeTwo = 20000

y = 1000

fileContent = "const allHouseLocation = {\n"

for i in range(10):
    fileContent += f"{i}: "
    x = random.randint(xRangeOne, xRangeTwo)
    fileContent += "{x: " + str(x) + ", y: " + str(y) + "}"
    if i < 10:
        fileContent += ",\n"
    y += 1800
    

fileContent += "};\nexport default allHouseLocation;"

with open(path, 'w') as file:
    file.write(fileContent)