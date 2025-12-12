"use client";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <h2 className="text-center font-bold text-xl">
            Please register yourself
          </h2>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-2">
            <div className="space-y-2">
              <Label htmlFor="name">Username:</Label>
              <Input id="name" type="text" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email:</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password:</Label>
              <Input id="password" type="password" required />
            </div>

            <label className="flex  gap-2 cursor-pointer">
              <Checkbox className="mt-1"/>
              <span>
                I accept the{" "}
                <Link
                  href="/terms-of-service"
                  className="hover:text-blue-500 hover:underline"
                >
                  terms & conditions.
                </Link>
              </span>
            </label>

            <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          Already have an account?
          <Link
            href="/sign-in"
            className="hover:text-blue-500 hover:underline ml-1 "
          >
            Log in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
