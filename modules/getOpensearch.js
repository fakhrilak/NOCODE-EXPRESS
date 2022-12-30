const axios = require("axios")
exports.getOpenSearch=async()=>{
    try{
        // url = data["1"]
        // username = data["2"]
        // password = data["3"]
        let res = ""
        var config = {
            method: 'get',
            url: 'https://admin:admin@opensearch.zilog.online/testjs/_search',
            headers: {},
            data : {"query":{"match_all":{}}}
          };
          
          await axios(config)
          .then((response)=>{
            res = response
            return [200,res.data,{"message" : "success",data:res.data}]
          })
          .catch(function (error) {
            console.log(error);
          });
          return [res.status,res.data.hits.hits,{"message" : "success",data:res.data.hits.hits}]
    }catch(err){
        console.log(err)
        return [500 , err ,{message:"internal server errors"}]
    }
}