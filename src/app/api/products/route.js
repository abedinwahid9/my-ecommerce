import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      mango: "mango",
      category: "single",
    },
  ]);
}

export async function POST(req, res) {
  const body = await req.json();

  console.log(body);

  return NextResponse.json(body);
}
