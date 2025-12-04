"use client";

import * as React from "react";
import Image from "next/image";

import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-background">
      <div className="relative hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1628431668031-6e3db588c9e3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Workspace illustration"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/60" />
      </div>

      <div className="flex flex-col h-full p-6 md:p-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h1 className="text-3xl mb-2 font-semibold tracking-tight">
                Sign in to Insta<span className="text-primary">Card</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Continue to your board and manage your links with ease.
              </p>
            </div>

            <React.Suspense fallback={<div>Loading...</div>}>
              <LoginForm />
            </React.Suspense>
          </div>
        </div>

        <div className="mt-8 text-xs text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Instacard App</p>
        </div>
      </div>
    </div>
  );
}
