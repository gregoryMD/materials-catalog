import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = params.id;
  return NextResponse.json({ id: id });
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = params.id;

  return NextResponse.json({ id: id });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const id = body.id;
  return NextResponse.json({ id: id });
}
