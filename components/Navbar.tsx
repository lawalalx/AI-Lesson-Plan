import React from 'react';
import { createClient } from "@/utils/supabase/server";
import LogoButton from './Logo';
import AuthButton from './Menubar';
import Link from 'next/link';
import MenuButtons from './Menubar';
const Navbar = () => {

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-blue-700">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <LogoButton />
          <MenuButtons />
        </div>
    </nav>
  )
}

export default Navbar