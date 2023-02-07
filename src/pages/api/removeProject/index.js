import clientPromise from "../../../../lib/db/conn";
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("occuper");
  if (req.method === "POST") {
    let { id } = req.query;
    let myPost = await db
      .collection("listings")
      .deleteOne({ _id: ObjectId(id) });

    if (myPost.deletedCount === 1) {
      res.json({
        status: 200,
        data: `Deleted ${myPost.deletedCount} Listings.`,
      });
    } else {
      res.json({ status: 404, data: "Deleted 0 Listings" });
    }
  } else {
    res.json({ status: 405, data: "Method not allowed" });
  }
}
