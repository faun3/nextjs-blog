import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface AuthResponse {
  name: string;
  email: string;
  password: string;
}

export const POST = async (req: Response) => {
  const { name, email, password } = (await req.json()) as AuthResponse;

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    let message = "Someone threw something stupid. JS is a nightmare";

    if (err instanceof Error) message = err.message;

    return new NextResponse(message, {
      status: 500,
    });
  }
};
