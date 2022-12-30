exports.kal=async(data)=>{
    try{
        return [200 , 200*data["1"] ,{message:"success",data:200*data["1"]}]
    }catch(err){
        return [500 , err , err]
    }
}

//ket   "fungsi ini digunakan untuk mengalikan parsingan integer dengan angka 200"


//req   {"name" : "kal" , "proces" : [20] }
//res   "fungsi ini mereturn array dengan 3 index, index pertama status, index kedua object atau data yang akan di teruskan"
//res   "ke fungsi selanjutnya"