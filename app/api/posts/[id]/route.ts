import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post, { PostInterface } from "@/models/Post";

interface Params {
    params: {
        id: string,
    }
}

export const GET = async (req: Request, {params}:Params) => {
  try {
    await connect();
    const post = await Post.findById(params.id);
    return NextResponse.json(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("db error", { status: 500 });
  }
};
