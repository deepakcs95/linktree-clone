// route handler enabling draft mode

import { auth } from "@/auth";

export async function GET(request: Request, { params }: { params: { username: string } }) {
  const session = await auth();
  console.log(session?.user?.name);

  if (!session) return Response.json("Not authorised", { status: 404 });

  const userName = params.username;
  return Response.json({ isAvailable: true });
}
