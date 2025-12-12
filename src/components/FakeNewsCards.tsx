import { Card,
  CardDescription,
  CardFooter,
  CardTitle, } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { BadgeCheckIcon } from "lucide-react";

export function FakeNewsCards() {
    return(
        <Link href="/viral"> 
        <Card className="w-full">
        <CardTitle className="font-bold"> World ends in 2026 </CardTitle>
        <CardDescription>
           News like "2026 ko to duniya khatam hai" are going viral quickly in these days on social media platforms. 
        </CardDescription>
        <CardFooter>
            <span> <Badge className="bg-red-500">Viral</Badge> <Badge className="bg-blue-500"><BadgeCheckIcon />Debunked</Badge> </span>
        </CardFooter>    
        </Card>
        </Link>
    )
}