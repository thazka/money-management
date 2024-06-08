import { Wallet } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Wallet className="stroke h-11 w-11 stroke-emerald-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Money Management
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Money Management
      </p>
    </a>
  );
}

export default Logo;
