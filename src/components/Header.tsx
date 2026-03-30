"use client";

import { useState } from "react";
import Image from "next/image";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 rounded-[10px] px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-white/10">
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[180px] pt-2">
          <div className="rounded-xl border border-white/10 bg-[#1a1f3a] py-2 shadow-xl">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-white/90 transition-colors hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const tradeItems: DropdownItem[] = [
  { label: "Perps", href: "#" },
  { label: "Options", href: "#" },
];

const earnItems: DropdownItem[] = [
  { label: "Perps Liquidity (TLP)", href: "#" },
  { label: "Options Vaults (DOV)", href: "#" },
  { label: "Protected Yield (SAFU)", href: "#" },
];

export default function Header() {
  return (
    <header className="relative z-50 mx-auto flex w-full max-w-[1440px] items-center px-3 py-3">
      <div className="flex flex-1 items-center justify-between rounded-xl bg-[rgba(14,18,42,0.7)] px-6 py-3 backdrop-blur-[10px]">
        {/* Logo */}
        <div className="flex items-center gap-[3.2px]">
          <Image
            src="/assets/whale-logo.svg"
            alt="Typus"
            width={29}
            height={32}
          />
          <Image
            src="/assets/typus-text.svg"
            alt="Typus"
            width={66}
            height={12}
          />
        </div>

        {/* Nav */}
        <div className="flex items-center gap-2">
          <NavDropdown label="Trade" items={tradeItems} />
          <NavDropdown label="Earn" items={earnItems} />
        </div>

        {/* CTA */}
        <a
          href="#"
          className="rounded-[6px] bg-brand-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover"
        >
          Launch App
        </a>
      </div>
    </header>
  );
}
