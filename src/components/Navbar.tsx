"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


function cn(condition: boolean, className: string) {
  return condition? className : ""; 
}

export default function Navbar() {
  const path = usePathname();

  useEffect(()=>{
    console.log(path)
  },[])
  return (
    <nav className="w-full flex gap-4 py-4">
      <Link className={`p ${cn(path === "/", "text-opacity-100")}`} href="/">
        Home
      </Link>
      <Link className={`p ${cn(path === "/createpost", "text-opacity-100")}`} href="/createpost">
        Create new Post
      </Link>
    </nav>
  );
}
