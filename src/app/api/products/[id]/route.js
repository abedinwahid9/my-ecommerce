import clientPromise from "@/lib/database/mongodbConnect";
import { pickleCollection } from "../route";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

const pickleCollections = pickleCollection;

// export async function DELETE(req, { params }) {
//   try {
//     const { id } = params;
//     console.log(id);

//     return NextResponse.json(`success ${id}`);
//   } catch (error) {
//     console.error("Error delete:", error);
//     return NextResponse.error(new Error("Failed to delete"), 500);
//   }
// }
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const updatePickle = await req.json();
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };

    const updateData = {
      $set: {
        productName: updatePickle.name,
        category: updatePickle.category,
        stock: updatePickle.stock,
        price: updatePickle.price,
      },
    };
    const result = await pickleCollections.updateOne(
      filter,
      updateData,
      options
    );

    if (result.matchedCount === 0) {
      return NextResponse.error(new Error("Document not found"), 404);
    }
    return NextResponse.json(`success ${result}`);
  } catch (error) {
    console.error("Error delete:", error);
    return NextResponse.error(new Error("Failed to delete"), 500);
  }
}
