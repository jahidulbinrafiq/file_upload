const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


const port = 5000


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d9qlc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


const client = new MongoClient(uri,{useUnifiedTopology: true,useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("fileUploadSystem").collection("addFile");
  
  app.post('/addImage',(req,res) => {
 
     const imageUrl = req.body
     console.log(imageUrl);
    collection.insertOne(imageUrl)
    .then(res =>console.log(res))
  })

});



app.get('/', (req, res) => {
  res.send('finally database running successfully')
})

app.listen(process.env.PORT || port)