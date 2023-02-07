import clientPromise from "../../../../lib/db/conn";
const ObjectID = require("mongodb").ObjectID;

export default async function handler(req, res) {
  const client = await clientPromise;
  let { userID } = req.query;

  const db = client.db("occuper");
  if (req.method === "GET") {
    const userProjects = await db
      .collection("listings")
      .find({ userID: userID })
      .toArray();
    if (userProjects.length) {
      res.json({ status: 200, data: userProjects });
    } else {
      res.json({ status: 404, data: "No projects found" });
    }
  } else {
    res.json({ status: 405, data: "Method not allowed" });
  }
}
