import random

filePath = "../gameScript/location/all-tree-locations.js"

xRangeOne = -20000
xRangeTwo = 20000
treeHeight = 500
treeWidth = treeHeight * 0.6

y = xRangeOne

treeNumber = 10000

xList = []
yList = []

fileContent = "const allTreeLocations = {\n"  

for i in range(treeNumber):
    keepRunning = True
    while keepRunning:
        newXRangeTwo = xRangeTwo - int(treeWidth) 
        x = random.randint(xRangeOne, newXRangeTwo)
        if len(xList) == 0:
            xList.append(x)
        for i in range(len(xList)):

            if x == xList[i]:
                keepRunning = True
            else:
                keepRunning = False
    
    if keepRunning == False:
        xList.append(x)
    
    yList.append(y)

    if y <= xRangeTwo - treeHeight:
        y += 4

    fileContent += str(i) + ": " + "{x: " + str(xList[i]) + ",y: " + str(yList[i]) + "}"

    if i != treeNumber - 1:
        fileContent += ","
    fileContent += "\n"

    print((i / treeNumber) * 100)

fileContent += "};\nexport default allTreeLocations"
    

    
    



with open(filePath, "w") as fs:
    fs.write(fileContent)
