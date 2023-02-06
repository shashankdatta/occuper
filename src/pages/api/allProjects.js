import clientPromise from "../../../lib/db/conn";
const ObjectID = require("mongodb").ObjectID;

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("occuper");
  if (req.method === "GET") {
    const allPosts = await db.collection("listings").find({}).toArray();
    res.json({ status: 200, data: allPosts });
  } else {
    res.json({ status: 405, data: "Method not allowed" });
  }
}
