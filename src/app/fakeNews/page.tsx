import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FakeNewsAccordion } from "@/components/FakeNewsAccordian";
import { FakeNewsCards } from "@/components/FakeNewsCards";

export default function FakeNews() { // Renamed function to PascalCase
    return(
        <div className="flex items-center "> 
                    <FakeNewsAccordion />

            <div className="flex flex-col items-center space-x-2 border rounded-md p-2">
                <span className="flex"> 
                <Input type="text" placeholder="Search" />
                <Search className="h-4 w-4 text-gray-500" />
                </span> 
                <FakeNewsCards />
            </div> 
                    
        </div>
    );
}