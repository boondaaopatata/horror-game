import random

path = "../gameScript/location/all-floor-locations.js"

xRangeOne = -20000
xRangeTwo = 20000

fileContent = "const allFloorLocation = {\n"

num = 0
y = xRangeOne
for i in range(40):
    x = xRangeOne

    for j in range(20):
        fileContent += f"{num}: "
        fileContent += "{x: " + str(x) + ", y: " + str(y) + "}"
        if i < 40 and j < 20:
            fileContent += ",\n"
        x += 2000
        num += 1

    y += 1000
        
    

fileContent += "};\nexport default allFloorLocation;"

with open(path, 'w') as file:
    file.write(fileContent)