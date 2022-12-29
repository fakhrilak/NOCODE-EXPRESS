import json
import requests
import os
opensearch_path = os.environ.get("opensearch_url")
name= "sum"
import pprint

def getSringFromText(states):
    return states[5:len(states)]

with open("../"+'modules/'+name+'.js') as f:
    lines = f.readlines()
    data = []
    ket = []
    example_req = []
    example_res = []
    state = ""
    for i in lines:
        states = str(i).replace("\n", "")
        state = states[2:5]
        if state == "ket":
            ket.append(getSringFromText(states))
        elif state == "req":
            example_req.append(getSringFromText(states))
        elif state == "res":
            example_res.append(getSringFromText(states))
        else:
            data.append(str(i).replace("\n", ""))
    newscema = {
        "data" : data,
        "type" : ["aritmatics"],
        "name" : name,
        "ext"  : "js" ,
        "ket"  : ket,
        "req"  : example_req,
        "res"  : example_res
    }
    # loads = json.dumps(newscema)
    # res = requests.post(
    #     opensearch_path+'/testjs/_doc/',
    #     data=loads.encode(),
    #     headers={"Content-Type":"application/json"},
    #     verify=False
    # )
    pprint.pprint(newscema)