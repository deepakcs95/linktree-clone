// route handler enabling draft mode
import { auth } from "@/auth";
import { getUserLinks, isUserNameAvailable } from "@/lib/db";

export async function GET(request: Request, { params }: { params: { username: string } }) {
  const session = await auth();

  console.log(params.username);

  if (!session) return Response.json("Not authorised", { status: 404 });
  const isAvailable = await isUserNameAvailable(params.username);

  //
  return Response.json({ isAvailable, params: params.username });
}
