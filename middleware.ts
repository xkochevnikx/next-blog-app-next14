import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";

export function middleware(req: NextRequest) {
  //! тут должна быть логика получения языка из cookies если его там нет то перенаправляет на дефолтный язык
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
