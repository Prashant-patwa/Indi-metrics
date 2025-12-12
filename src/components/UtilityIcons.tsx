"use client";

import { Cookie, PersonStandingIcon } from "lucide-react";

export function UtilityIcons() {
  return (
  <div className="flex flex-col gap-2 fixed left-4 bottom-6 -z-50">
    
    <div className="flex flex-col gap-3">

    {/* Accessibility */}
    <div className="">
        <button 
        aria-label="Accessibility settings"
        className=""> 
        <PersonStandingIcon />
        </button>
        <span>
    View accessibility settings
        </span>
    </div>

    {/* Cookie */}
    <div className="relative">
  <button
    aria-label="Cookie settings"
    className="peer flex items-center justify-center w-12 h-12 rounded-lg bg-white
     hover:bg-teal-500 shadow"
  >
    <Cookie className="w-5 h-5" />
  </button>

  <span
    className="absolute left-14 top-1/2 -translate-y-1/2 
               hidden peer-hover:block peer-focus:block 
               bg-gray-800 text-white text-sm rounded px-3 py-1 shadow"
  >
    View Cookie settings
  </span>
</div>


  </div>
  </div>);
}
