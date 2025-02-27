import { NextResponse } from "next/server";

export async function GET() {
  console.log("API call");

  const data = {
    date: new Date().toISOString(), // Convert Date to string
    bigNumber: "12345678901234567890", // Convert BigInt to string (JSON does not support BigInt)
    set: Array.from(new Set([1, 2, 3])), // Convert Set to Array
    map: Object.fromEntries(
      new Map([
        ["key1", "value1"],
        ["key2", "value2"],
      ])
    ), // Convert Map to Object
  };

  return NextResponse.json(data);
}
