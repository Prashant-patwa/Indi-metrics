"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  return (
    <div className="flex min-h-screen justify-center items-center px-3">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-center font-bold text-2xl">Welcome Back!</h2>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col space-y-4">

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email">Email:</Label>
              <Input id="email" type="email" required />
            </div>

            {/* Password + Forgot link */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password:</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm hover:text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Input id="password" type="password" required />
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm">
                I accept the{" "}
                <Link
                  href="/terms-of-service"
                  className="hover:text-blue-500 hover:underline"
                >
                  terms & conditions.
                </Link>
              </span>
            </label>

            {/* Submit button */}
            <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center text-sm">
          Don’t have an account?
          <Link
            href="/sign-up"
            className="ml-1 hover:text-blue-500 hover:underline"
          >
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
