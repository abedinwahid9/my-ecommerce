import clientPromise from "@/lib/database/mongodbConnect";
import { NextResponse } from "next/server";

const client = clientPromise;
const pickleCategoryCollection = client
  .db("pickleDB")
  .collection("pickleCategoryCollection");

export async function GET() {
  try {
    const pickleData = await pickleCategoryCollection.find().toArray();
    return NextResponse.json(pickleData);
  } catch (error) {
    console.log("pickle collection error", error);
    return NextResponse.error(new Error("pickle collection failed", 500));
  }
}

export async function POST(req) {
  try {
    const category = await req.json();
    const result = await pickleCategoryCollection.insertOne(category);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error(new Error("Failed to create categories"), 500);
    // Handle error response
  }
}
