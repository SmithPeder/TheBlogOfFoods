from os import listdir
from os.path import isfile, join
import json
import datetime
from datetime import date
import calendar
from pprint import pprint


def parsePictureSoruce(element):
    #Get the year, month and day
    year = element[:4]
    month = element[4:6]
    day = element[6:8]

    #Create a image source
    source = "client/images/" + element + ".jpg"

    #Create the "when" string
    when = day + "-" + month + "-" + year

    #Get the weekday
    temp = datetime.date(int(year), int(month), int(day))
    weekday = calendar.day_name[temp.weekday()]

    title = input("Title for img with id " + element + ": ")

    return {
        "id": element,
        "title": title,
        "when": when,
        "day": weekday,
        "source": source,
        "content": "..."
    }

#Files now contain the path's of all the images
file_ids = [f for f in listdir("./client/images") if isfile(join("./client/images", f))]

#Dump all files into
new_ids = []
for file in file_ids:
    new_ids.append(file.split(".")[0])

#Memory now contain contens json file
data = json.load(open('./client/content.json'))

#Dump all id's into a list
json_ids = []
for key,value in enumerate(data):
    json_ids.append(value["id"])

#Find new pictures
diff = [item for item in new_ids if item not in json_ids]

for newElement in diff:
    data.append(parsePictureSoruce(newElement))

with open("./client/content.json", "w") as f:
    f.write(json.dumps(data))
