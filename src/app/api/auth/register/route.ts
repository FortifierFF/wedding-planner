import { NextResponse } from "next/server";

// Temporarily disabled registration endpoint
export async function POST() {
  return NextResponse.json(
    { 
      message: "Registration is temporarily disabled", 
      user: { id: "mock-id", name: "Test User", email: "test@example.com", role: "user" }
    },
    { status: 200 }
  );
} 