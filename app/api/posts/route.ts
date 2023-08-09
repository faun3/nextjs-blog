import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post, { PostInterface } from "@/models/Post";

export const GET = async (req: Request) => {
  try {
    await connect();
    const posts: PostInterface[] = await Post.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("db error", { status: 500 });
  }
};
