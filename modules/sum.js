exports.SUM=async(data)=>{
    try{
        return [200 , 200 + data["1"] , {message:"success",data:200+data["1"]}]
    }catch(err){
        return [500 , err , err]
    }
}