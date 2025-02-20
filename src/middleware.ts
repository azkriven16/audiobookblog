import { NextResponse } from "next/server";

export function middleware(req: Request) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
        return new NextResponse("Unauthorized", {
            status: 401,
            headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
        });
    }

    const base64Credentials = authHeader.split(" ")[1];
    const [username, password] = atob(base64Credentials).split(":");

    // Use environment variables
    const validUsername = process.env.BASIC_AUTH_USERNAME;
    const validPassword = process.env.BASIC_AUTH_PASSWORD;

    if (username !== validUsername || password !== validPassword) {
        return new NextResponse("Unauthorized", {
            status: 401,
            headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
        });
    }

    return NextResponse.next();
}

// Apply middleware only to /create page
export const config = {
    matcher: ["/create(.*)"],
};
