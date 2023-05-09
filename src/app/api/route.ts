import { NextResponse, NextRequest } from "next/server";
import Material from "../../model/material";

export async function GET(request: Request): Promise<NextResponse> {
  const materials = await Material.find({});
  return NextResponse.json(materials);
}

export async function POST(request: Request) {
  const body = await request.json();

  const material = new Material({
    name: body.name,
    volume: body.volume,
    deliveryDate: body.deliveryDate,
    color: body.color,
    cost: body.cost,
  });

  const savedMaterial = await material.save();

  return NextResponse.json(savedMaterial);
}
