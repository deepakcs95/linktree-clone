// route handler enabling draft mode
import { auth } from "@/auth";
import { isUserNameAvailable } from "@/lib/db";

export async function GET(request: Request, { params }: { params: { username: string } }) {
  const session = await auth();

  console.log(params.username);

  if (!session) return Response.json("Not authorised", { status: 401 });

  const isAvailable = await isUserNameAvailable(params.username);

  //
  return new Response(JSON.stringify({ isAvailable, username: params.username }), {
    status: 200,
    headers: { "Content-Type": "application/json" }, // Explicitly set content-type
  });
}
