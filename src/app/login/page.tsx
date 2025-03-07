import React, { Suspense } from "react";
import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login | Wedding Planner",
  description: "Login to your wedding planner account",
};

// Loading fallback for Suspense
function LoginFormSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-12 bg-gray-200 rounded mb-4"></div>
      <div className="w-full h-12 bg-gray-200 rounded mb-6"></div>
      <div className="w-full h-12 bg-gray-200 rounded"></div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Wedding Planner
          </h1>
          <p className="mt-2 text-gray-600">
            Welcome back! Log in to continue planning your perfect day.
          </p>
        </div>
        <Suspense fallback={<LoginFormSkeleton />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
