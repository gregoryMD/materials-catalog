import { NextResponse } from "next/server";
import { Material } from "@/types";

const data: Material[] = [
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
