import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyG25Wv8BVSj5xWko7Dr1cK9XWpBNqZzXC3dEwrTjmK974mpWCeUCY5HesSxglH7Irn5Q/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const textResult = await response.text();
    console.log("Google Script Dönüşü:", textResult);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Google Sheets yanıt vermedi" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API Route Hatası:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
