import clientPromise from "@/lib/database/mongodbConnect";
import { pickleCollection } from "../route";
import { NextResponse } from "next/server";

const client = clientPromise;
const pickleCollections = pickleCollection;

// export async function DELETE(req, { params }) {
//   try {
//     const { deleteid } = params;
//     console.log(deleteid);

//     return NextResponse.json(`success ${deleteid}`);
//   } catch (error) {
//     console.error("Error delete:", error);
//     return NextResponse.error(new Error("Failed to delete"), 500);
//   }
// }
export async function PATCH(req, { params }) {
  try {
    const { deleteid } = params;
    console.log(deleteid);

    return NextResponse.json(`success ${deleteid}`);
  } catch (error) {
    console.error("Error delete:", error);
    return NextResponse.error(new Error("Failed to delete"), 500);
  }
}
