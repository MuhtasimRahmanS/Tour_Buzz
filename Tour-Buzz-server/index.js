const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qov5o8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const spotCollection = client.db("spotDB").collection("allSpot");
    const countryCollection = client.db("spotDB").collection("allCountry");

    app.get("/allSpot", async (req, res) => {
      const cursor = spotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/allCountry", async (req, res) => {
      const cursor = countryCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/allCountry/:country", async (req, res) => {
      const result = await spotCollection
        .find({
          country: req.params.country,
        })
        .toArray();
      res.send(result);
    });
    app.get("/myList/:email", async (req, res) => {
      const result = await spotCollection
        .find({ email: req.params.email })
        .toArray();
      res.send(result);
    });
    app.get("/update/:id", async (req, res) => {
      const result = await spotCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });
    app.get("/details/:id", async (req, res) => {
      const result = await spotCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.post("/allSpot", async (req, res) => {
      const newSpot = req.body;
      console.log(newSpot);
      const result = await spotCollection.insertOne(newSpot);
      res.send(result);
    });

    app.put("/update/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const data = {
        $set: {
          photo: req.body.photo,
          spotName: req.body.spotName,
          country: req.body.country,
          location: req.body.location,
          cost: req.body.cost,
          season: req.body.season,
          time: req.body.time,
          visitor: req.body.visitor,
          email: req.body.email,
          userName: req.body.userName,
          description: req.body.description,
        },
      };
      const result = await spotCollection.updateOne(query, data);
      console.log(result);
      res.send(result);
    });

    app.delete("/delete/:id", async (req, res) => {
      const result = await spotCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      console.log(result);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("assignment 10 running");
});

app.listen(port, () => {
  console.log(`port: ${port}`);
});
