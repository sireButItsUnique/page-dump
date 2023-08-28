filePath = "./out/index.html"

file = open(filePath, "r")
content = file.read()
file.close()

file = open(filePath, "w")
file.write(content.replace("_next", "assets"))
file.close()