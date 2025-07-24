import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();

  return NextResponse.json({ post }, { status: 200 });
}
