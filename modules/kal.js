exports.KAL=async(data)=>{
    try{
        return [200 , 200*data ,200*data]
    }catch(err){
        return [500 , err , err]
    }
}