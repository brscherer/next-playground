import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const url = new URL(request.url);
    const name = url.searchParams.get("name") ?? "Guest";

    const res = NextResponse.redirect(new URL("/", request.url));

    res.cookies.set("name", name, { path: "/", maxAge: 60 * 60 * 24 });
    return res;
}