const res = require("express/lib/response")
const { mapping } = require(".")
const { Mapper } = require("./Mapper")
exports.MainProcessors=async(datas)=>{
    try{
        let results_process = []
        let data = datas["data"]

        ////////////////////////////// Mapper action
        for(let a = 0;a<data.length;a++){
            const [status , func] = await Mapper(data[a]["name"],mapping)
            console.log(func)
            if (status){
                data[a]["func"] = func
            }
        }
        /////////////////////////////////////////////////////////

        ///////////////////////////// PROCES EXC FUNC MAPPING
        for(let i=0;i<data.length;i++){
            let par = {}
            for(let j = 0; j<data[i]["proces"].length;j++){
                try{
                    
                    par[(j+1).toString()] = data[data[i]["proces"][j].toString().split(' ')[1]]["result"]
                }catch(err){
                    par[(j+1).toString()] = data[i]["proces"][j]
                }
            }
            const [status , result, result_data] =  await data[i]["func"](par)
            console.log(result, " ======== result")
            data[i]["result"] = result
            results_process.push({status : status,data:result_data,step:i,nameFunc:data[i]["name"]})
            if (status >= 300){
                return [status , {
                    data : result_data,
                    result_proces : results_process,
                    step : i
                } ]
            }
        }
        /////////////////////////////////////////////////////////
        return [200 , {
            message:"Success",
            results_process:results_process,
            data:results_process[0]["data"]
        }]
    }catch(err){
        console.log(err)
        return "hello"
    }
}