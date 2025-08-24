import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

type NavbarProps = {
  leftLogo?: React.ReactNode;
  rightLogo?: React.ReactNode;
  className?: string;
};

/**
 * Reusable top navbar for government portals.
 * Accepts arbitrary React nodes for left and right logos to allow different renderers (e.g., next/image).
 */
export function Navbar({ leftLogo, rightLogo, className }: NavbarProps) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        'w-full border-b border-black/10 bg-white',
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3 py-2 md:px-4 md:py-3">
        <div className="flex min-h-10 items-center gap-2 md:min-h-12">{leftLogo}</div>
        <div className="flex min-h-10 items-center gap-2 md:min-h-12">{rightLogo}</div>
      </div>
    </header>
  );
}

export default Navbar;


