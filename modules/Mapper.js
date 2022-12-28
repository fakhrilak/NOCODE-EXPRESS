exports.Mapper=async(data,arr)=>{
    try{
        for(let i = 0 ;i<arr.length;i++){
            if (arr[i]["name"] == data){
                return [true , arr[i]["func"]]
            }
        }
        return [false, false]
    }catch(err){
        return [false, false]
    }
}