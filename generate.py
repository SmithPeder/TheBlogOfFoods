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
    monthInt = element[4:6]
    monthString = calendar.month_name[int(monthInt)][:3].lower()
    day = element[6:8]
    hour = element[9:11]
    minute = element[11:13]
    id = element[:8] + element[9:]

    #Create the "when" string
    when = day + "." + monthString + " " + year
    #Create the "time" string
    time = "Kl. " + hour + ":" + minute
    #Create the "source" string
    source = "client/images/" + element + ".jpg"
    #Get the weekday
    temp = datetime.date(int(year), int(monthInt), int(day))
    weekday = calendar.day_name[temp.weekday()]

    return {
        "id": id,
        "path": element,
        "show" : True,
        "when": when,
        "time": time,
        "day": weekday,
        "source": source
    }

file_paths = [f for f in listdir("./client/images") if isfile(join("./client/images", f))]
path_ids = []
for file in file_paths:
    path_ids.append(file.split(".")[0])

json_file = json.load(open('./client/content.json'))
json_ids = []

for key,value in enumerate(json_file):
    json_ids.append(value["id"])

#Find new pictures
additions = [item for item in path_ids if item not in json_ids]

for newElement in additions:
    json_file.append(parsePictureSoruce(newElement))

with open("./client/content.json", "w") as f:
    f.write(json.dumps(json_file))
