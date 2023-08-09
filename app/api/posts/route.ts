import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  return new NextResponse("cool", { status: 200 });
};
