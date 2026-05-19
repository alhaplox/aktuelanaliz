import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyG25Wv8BVSj5xWko7Dr1cK9XWpBNqZzXC3dEwrTjmK974mpWCeUCY5HesSxglH7Irn5Q/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
    });

    const textResult = await response.text();

    console.log("Google Script Status:", response.status);
    console.log("Google Script Response:", textResult);

    let result: any = null;

    try {
      result = JSON.parse(textResult);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Google Script geçerli JSON döndürmedi.",
          detail: textResult,
        },
        { status: 500 },
      );
    }

    if (!response.ok || result.result !== "success") {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Google Sheets kayıt işlemi başarısız oldu.",
          detail: result,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form başarıyla kaydedildi.",
    });
  } catch (error: any) {
    console.error("API Route Hatası:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Beklenmeyen bir hata oluştu.",
      },
      { status: 500 },
    );
  }
}
