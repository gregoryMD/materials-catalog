import { NextResponse, NextRequest } from "next/server";
import { Material } from "@/types";

let data: Material[] = [
  {
    id: 1,
    name: "Sand",
    volume: 102234,
    deliveryDate: "12/10/2023",
    color: "#F7B500",
    cost: 0.1,
  },
  {
    id: 2,
    name: "Gravel",
    volume: 10000,
    deliveryDate: "12/10/2023",
    color: "#F7B500",
    cost: 0.5,
  },
];

export async function GET(request: Request): Promise<NextResponse> {
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const maxId = data.length > 0 ? Math.max(...data.map((n) => n.id)) : 0;

  const material: Material = {
    id: maxId + 1,
    name: body.name,
    volume: body.volume,
    deliveryDate: body.deliveryDate,
    color: body.color,
    cost: body.cost,
  };

  data = data.concat(material);

  return NextResponse.json({ material });
}
