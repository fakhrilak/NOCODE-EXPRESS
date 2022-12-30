const express = require('express')
const { mapping } = require('./modules')
const { MainProcessors } = require('./modules/MainProcessors')
const app = express()
const port = 5002
const cors = require('cors');
app.use(cors());

app.get('/', async(req, res) => {

    //////// DATA INPUT //////////
    const data = {
        "data" :[
            {
                "name" : "sum",
                "proces" : [20]
            },
            {
                "name" : "kal",
                "proces" : [20]
            }
        ]
    }
    //////////////////////////////

   const [status , datas ]= await MainProcessors(data)
   return res.status(status).send(datas)
})

app.get('/opensearch', async(req, res) => {

    //////// DATA INPUT //////////
    const data = {
        "data" :[
            {
                "name" : "getopensearch",
                "proces" : []
            }
        ]
    
    }
    //////////////////////////////
    
   const [status , datas ]= await MainProcessors(data)
   return res.status(status).send(datas)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})