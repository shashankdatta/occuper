import clientPromise from "../../../lib/db/conn";
const ObjectID = require("mongodb").ObjectID;

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("occuper");
  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);
    let myPost = await db.collection("listings").insertOne(bodyObject);
    res.json({ status: 200, data: myPost.ops[0] });
  } else {
    res.json({ status: 405, data: "Method not allowed" });
  }
}
