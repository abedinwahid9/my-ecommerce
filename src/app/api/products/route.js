import { clientPromise } from "@/lib/database/mongodbConnect";
import { NextResponse } from "next/server";

const client = clientPromise;
const pickleCollection = client.db("pickleDB").collection("pickleCollection");

export async function getPickles() {
  try {
    const result = await pickleCollection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching pickles:", error);
    return NextResponse.error(new Error("Failed to fetch pickles"), 500);
  }
}

export async function createPickle(req) {
  try {
    const newPickle = await req.json();
    const result = await pickleCollection.insertOne(newPickle);
    return NextResponse.json(result.ops[0], { status: 201 }); // 201 Created
  } catch (error) {
    console.error("Error creating pickle:", error);
    return NextResponse.error(new Error("Failed to create pickle"), 500);
  }
}

// Closing the database connection after use
export async function closeDatabase() {
  await client.close();
}
