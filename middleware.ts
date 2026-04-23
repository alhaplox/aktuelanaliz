import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value, options),
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Oturumu kontrol et
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // --- KORUMA MANTIĞI BURADA ---

  // Eğer kullanıcı giriş yapmamışsa ve korumalı bir sayfaya gitmeye çalışıyorsa:
  const protectedRoutes = ["/my-profile", "/eğitimler", "/dashboard"]; // Korumak istediğin yollar
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (!user && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Eğer kullanıcı giriş yapmışsa ve tekrar /login veya /register sayfasına gitmeye çalışıyorsa:
  if (
    user &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/my-profile", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Aşağıdaki yollar dışındaki tüm yollarda middleware çalışır:
     * - _next/static (statik dosyalar)
     * - _next/image (resim optimizasyonu)
     * - favicon.ico (ikon dosyası)
     * - public klasörü içindeki dosyalar (svg, png vb.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
