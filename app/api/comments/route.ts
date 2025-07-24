import { NextResponse } from "next/server";

export async function GET() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();

  return NextResponse.json({ comments }, { status: 200 });
}
