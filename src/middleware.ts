import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/chapter-4')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname === '/api/todos-authed') {
    const authToken = request.headers.get('authorization');
    console.log('middleware fired 🔥');
    if (!authToken) {
      return NextResponse.json({
        message: 'No token found! this is an authenticated route',
      });
    }
    return NextResponse.next();
  }

  return NextResponse.next();
};

// export const config = {
//   matcher: '/api/todos-authed',
// };
