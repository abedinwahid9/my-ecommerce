import { MongoClient, ServerApiVersion } from "mongodb";

const userName = process.env.USER_NAME;
const userPassword = process.env.PASSWORD_SECRET;

console.log(userName, userPassword);

const uri = `mongodb+srv://${userName}:${userPassword}@cluster0.os721gq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const clientPromise = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await clientPromise.connect();
    // Send a ping to confirm a successful connection
    await clientPromise.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

export default clientPromise;
