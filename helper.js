import { client } from "./index.js";

// Create Cards
export async function createCards(data) {
  return await client.db("capstone").collection("awsdb").insertMany(data);
}

// Get All Cards
export async function getAllCards() {
  return await client.db("capstone").collection("awsdb").find({}).toArray();
}

//these allare called db commands
