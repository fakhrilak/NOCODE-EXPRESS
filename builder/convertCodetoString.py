import json
import requests
import os
opensearch_path = os.environ.get("opensearch_url")
name= "main_processor"
count=10
with open("../"+'controllers/'+name+'.py') as f:
    lines = f.readlines()
    data = []
    for i in lines:
        data.append(str(i).replace("\n", ""))
    newscema = {
        "id" : count,
        "data" : data,
        "type" : ["aritmatics"],
        "name" : name,
        "ext"  : "py" 
    }
    loads = json.dumps(newscema)
    res = requests.put(
        opensearch_path+'/store_func/_doc/'+str(newscema["id"]),
        data=loads.encode(),
        headers={"Content-Type":"application/json"},
        verify=False
    )
    print(res.text)
    print(data)