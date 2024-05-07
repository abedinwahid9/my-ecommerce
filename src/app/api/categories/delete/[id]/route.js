import clientPromise from "@/lib/database/mongodbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const client = clientPromise;
const pickleCategoryCollection = client
  .db("pickleDB")
  .collection("pickleCategoryCollection");

export async function DELETE(req, { params }) {
  const { id } = await params;

  const query = await { _id: new ObjectId(id) };
  console.log(query);
  const result = await pickleCategoryCollection.deleteOne(query);

  return NextResponse.json(result);
}
