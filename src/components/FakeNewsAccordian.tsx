import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";

export function FakeNewsAccordion() {
  return (
    <Accordion collapsible type="single">
      <AccordionItem value="1"> 
        <AccordionTrigger> Categories </AccordionTrigger>  
        <AccordionContent>
          <div className="flex flex-col">
            <Link href="/fakeNews/viral">
            <Button variant="outline"> Viral </Button>
            </Link>
            <Link href="/education">
            <Button variant="outline"> Education </Button>
            </Link>
            <Link href="/health">
            <Button variant="outline"> Heathcare </Button>
            </Link>
            <Link href="/politics">
            <Button variant="outline"> Politics </Button>
            </Link>
            <Link href="/economics">
            <Button variant="outline"> Economics </Button>
            </Link>
            </div>
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
  );
}
