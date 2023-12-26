import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Signed out.'
    }, { status: 200 });
    
    response.cookies.set('pit', '', { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 400 });
  };
};