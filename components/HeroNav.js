"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function HeroNav({ dark = false, onToggleVersion, onOpenCV, className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const ToggleIcon = dark ? Sun : Moon;
  const toggleLabel = dark ? "Light mode" : "Dark mode";
  const toggleAriaLabel = dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <nav className={cn("relative z-20 flex items-center justify-end", className)}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={cn(
          "h-9 px-3 backdrop-blur-[2px] lg:hidden",
          dark
            ? "border-[#191b1e]/35 bg-white/70 text-[#191b1e]/92 hover:bg-[#191b1e] hover:text-[#F5F7FC]"
            : "border-[#263247]/35 bg-[#f2eee8]/80 text-[#263247]/90 hover:bg-[#263247] hover:text-white",
        )}
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-expanded={isMenuOpen}
        aria-controls="hero-mobile-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <div
        className={cn(
          "hidden flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] tracking-[0.1em] lg:flex lg:gap-4 lg:text-base lg:tracking-[0.12em]",
          dark ? "text-white/80" : "text-[#263247]/78",
        )}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              dark
                ? "hover:text-white focus-visible:ring-white focus-visible:ring-offset-black"
                : "hover:text-[#263247] focus-visible:ring-[#263247]",
            )}
          >
            {link.label}
          </a>
        ))}
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "group h-8 bg-transparent px-2.5 text-[11px] sm:h-9 sm:px-3 sm:text-sm",
            dark
              ? "border-white/40 text-white/88 hover:bg-white hover:text-[#191b1e]"
              : "border-[#263247]/35 text-[#263247]/85 hover:bg-[#263247] hover:text-white",
          )}
          onClick={onOpenCV}
          aria-label="View CV"
        >
          <FileText className="h-3.5 w-3.5" />
          CV
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "group h-8 justify-center bg-transparent px-2.5 text-[11px] sm:h-9 sm:min-w-[118px] sm:px-3 sm:text-sm",
            dark
              ? "border-white/40 text-white/88 hover:bg-white hover:text-[#191b1e]"
              : "border-[#263247]/35 text-[#263247]/85 hover:bg-[#263247] hover:text-white",
          )}
          onClick={onToggleVersion}
          aria-pressed={dark}
          aria-label={toggleAriaLabel}
        >
          <ToggleIcon className="h-3.5 w-3.5" />
          {toggleLabel}
        </Button>
      </div>

      {isMenuOpen && (
        <div
          id="hero-mobile-menu"
          className={cn(
            "absolute right-0 top-12 w-52 rounded-xl border p-3 shadow-lg backdrop-blur-[2px] lg:hidden",
            dark
              ? "border-white/12 bg-[#1e1e1e]/95 right-4 top-16 backdrop-blur-sm"
              : "border-[#263247]/16 bg-[#f8f4ec]/95",
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-1 text-sm tracking-[0.1em]",
              dark ? "text-white/80" : "text-[#263247]/85",
            )}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-md px-2 py-2 transition",
                  dark ? "hover:bg-white/8" : "hover:bg-[#263247]/8",
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "mt-2 h-9 justify-start bg-transparent px-2.5 text-sm",
                dark
                  ? "border-white/30 text-white/85 hover:bg-white hover:text-[#191b1e]"
                  : "border-[#263247]/35 text-[#263247]/90 hover:bg-[#263247] hover:text-white",
              )}
              onClick={() => {
                onOpenCV?.();
                closeMenu();
              }}
              aria-label="View CV"
            >
              <FileText className="h-3.5 w-3.5" />
              CV
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "h-9 justify-start bg-transparent px-2.5 text-sm",
                dark
                  ? "border-white/30 text-white/85 hover:bg-white hover:text-[#191b1e]"
                  : "border-[#263247]/35 text-[#263247]/90 hover:bg-[#263247] hover:text-white",
              )}
              onClick={() => {
                onToggleVersion?.();
                closeMenu();
              }}
              aria-pressed={dark}
              aria-label={toggleAriaLabel}
            >
              <ToggleIcon className="h-3.5 w-3.5" />
              {toggleLabel}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
