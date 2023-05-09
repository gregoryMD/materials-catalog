import { NextResponse, NextRequest } from "next/server";
import Material from "../../../model/material";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = params.id;

  const material = await Material.findById(id);
  return NextResponse.json(material);
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = params.id;

  const deletedMaterial = await Material.findByIdAndRemove(id);
  return NextResponse.json(deletedMaterial);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const id = params.id;

  const updatedMaterial = await Material.findByIdAndUpdate(
    id,
    {
      name: body.name,
      volume: body.volume,
      deliveryDate: body.deliveryDate,
      color: body.color,
      cost: body.cost,
    },
    { new: true, runValidators: true, context: "query" }
  );
  return NextResponse.json(updatedMaterial);
}
