"use-client"

import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import Link from "next/link";

export function Header() {
    return(
        <header>
            <div className="flex">
            <div>
                Indi-metrics
            </div>
            <ButtonGroup>
                <Button variant="outline">
                    Home
                </Button>
                    <Button variant="outline">
                    Features
                </Button>
                <Link href="/fakeNews">
                    <Button variant="default">
                    Fake news
                </Button>
                </Link>
            </ButtonGroup>

            <ButtonGroup className="flex p-3 ml-120">
                <Link href="/sign-in">
                    <Button variant="ghost" className="hover:bg-teal-600">
                    Sign in
                </Button>
                </Link>
                <Link href="/sign-up">
                    <Button variant="ghost" className="hover:bg-teal-600">
                    Sign-up
                </Button>
                </Link>
            </ButtonGroup>

             </div>
        </header>
    )
}