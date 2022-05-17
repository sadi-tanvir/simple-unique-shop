const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: false}))
// app.static('public')

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jnizw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run (){
    try {
      await client.connect();
    console.log(`mongodb connected`);
    const Product = client.db("tShirt-shop").collection("data");

    app.get('/product', async (req, res) => {
        const products = await Product.find({}).toArray()
        res.send(products)
    })

  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

app.listen(port, () => {
  console.log(`this server is listening on port ${port}`);
});
