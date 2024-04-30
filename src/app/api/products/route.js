import clientPromise from "@/lib/database/mongodbConnect";
import { NextResponse } from "next/server";

const client = clientPromise;
const pickleCollection = client.db("pickleDB").collection("pickleCollection");

export async function GET() {
  const result = await pickleCollection.find().toArray();
  return NextResponse.json(result);
}

export async function POST(req, res) {
  const newPickle = await req.json();
  const result = await pickleCollection.insertOne(newPickle);

  return NextResponse.json(result);
}
