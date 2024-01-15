import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";

export function middleware(req: NextRequest) {
  //логика получения языка - сначала проверяю на сервере потом смотрю куки и если нет иду за дефолтным
  let lng = fallbackLng;

  // Redirect if lang in path is not supported
  if (!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Do not run the middleware on the following paths
  matcher:
    "/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
};
