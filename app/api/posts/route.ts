import { NextResponse } from "next/server";

export async function GET() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();

  return NextResponse.json({ posts }, { status: 200 });
}
