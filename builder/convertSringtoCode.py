import requests
import json
import os
path=os.environ.get('path_controllers')
opensearch_path = os.environ.get("opensearch_url")
res = requests.get(opensearch_path+"/store_func/_search/",headers={"Content-Type":"application/json"},verify=False)
data = json.loads(res.text)
for i in data["hits"]["hits"]:
    print("=================================== START CONVERT STRING TO FILE ==========================================")
    print(" FILE NAME = ",i["_source"]["name"]+"."+i["_source"]["ext"])
    with open("../"+path+"/"+i["_source"]["name"]+"."+i["_source"]["ext"], 'w') as f:
        for line in i["_source"]["data"]:
            f.write(line)
            f.write('\n')
    print("========================================== DONE CONVERT ===================================================\n\n")