import requests
import json
import os
path=os.environ.get('path_controllers')
opensearch_path = os.environ.get("opensearch_url")
res = requests.get(opensearch_path+"/store_func/_search/",headers={"Content-Type":"application/json"},verify=False)
data = json.loads(res.text)
mappingFunc = []
arrmap= []
for i in data["hits"]["hits"]:

    mappingFunc.append("from "+path+"."+i["_source"]["name"]+" import "+i["_source"]["name"])
    arrmap.append(str({"idfunc" : i["_source"]["id"],"func" :i["_source"]["name"]}))

mappingFunc.append("\n\nmapping = [")
print("=================================== START CREATE MAPING FUNCTION ==========================================")

for line in arrmap:
    allCount = 0
    count = 0
    active=[]
    for i in line:
        if i == "'":
            count+=1
        if count == 5 and i == "'":
            active.append(allCount)
        if count == 6 and i == "'":
            active.append(allCount)
        allCount+=1
    line = line[:active[0]] + line[active[0] + 1:]
    line = line[:active[1]-1] + line[active[1] -1 + 1 :]+","
    mappingFunc.append(line)

mappingFunc.append("]")
with open("../"+'mappingFunc.py', 'w') as f:
    for i in mappingFunc:
        f.write(i)
        f.write("\n")
print("========================================== DONE CREATE FUNCTION ===================================================\n\n")