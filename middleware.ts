import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";

export function middleware(req: NextRequest) {
  
  let lang = fallbackLng;
  if (!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))) {
    return NextResponse.redirect(
      new URL(`/${lang}${req.nextUrl.pathname}`, req.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
};
