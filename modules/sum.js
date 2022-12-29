exports.sum=async(data)=>{
    try{
        return [200 , 200 + data["1"] , {message:"success",data:200+data["1"]}]
    }catch(err){
        return [500 , err , err]
    }
}

//ket   "fungsi ini digunakan untuk menambahkan parsingan integer dengan angka 200"
//ket   "contoh keterangan lebih dari 2 baris"


//req   {"name" : "sum" , "proces" : [20] }
//res   "fungsi ini mereturn array dengan 3 index, index pertama status, index kedua object atau data yang akan di teruskan"
//res   "ke fungsi selanjutnya"