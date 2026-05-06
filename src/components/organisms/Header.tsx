"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/atoms/Icons";
import { Logo } from "@/components/atoms/Logo";
import { NavItem } from "@/components/molecules/NavItem";
import { OverlayVenueLink } from "@/components/molecules/OverlayVenueLink";

type HeaderProps = {
  brand: {
    leftLabel: string;
    rightLabel: string;
  };
  navigation: Array<{
    href: string;
    label: string;
  }>;
  menuCta: string;
  venueLinks: Array<{
    href: string;
    title: string;
  }>;
  groupTitle: string;
  groupLinks: Array<{
    href: string;
    label: string;
  }>;
  overlayMainDirLabel: string;
  overlayVenuesLabel: string;
  overlayCrmHeading: string;
  overlayCrmAction: string;
  contact: {
    eyebrow: string;
    primary: string;
    secondary: string;
  };
  footerLinks: Array<{
    label: string;
    href: string;
  }>;
  copyright: string;
  darkHero?: boolean;
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

export function Header({
  brand,
  navigation,
  menuCta,
  venueLinks,
  groupTitle,
  groupLinks,
  overlayMainDirLabel,
  overlayVenuesLabel,
  overlayCrmHeading,
  overlayCrmAction,
  contact,
  footerLinks,
  copyright,
  darkHero = false,
}: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : originalOverflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const syncScrollState = () => setIsAtTop(window.scrollY <= 8);
    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });
    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsAtTop(window.scrollY <= 8);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((c) => !c);
  const closeMenu = () => setIsOpen(false);

  const usesDarkHeroChrome = darkHero || pathname === "/";
  const usesLightChrome = usesDarkHeroChrome && !isOpen && isAtTop;

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────────────────── */}
      <header
        suppressHydrationWarning
        className={classNames(
          "fixed left-0 right-0 top-0 z-50 border-b py-3.5 transition-[background-color,border-color,backdrop-filter] duration-500 md:py-4",
          isOpen
            ? "border-deep-night/10 bg-warm-ivory"
            : isAtTop
              ? "border-transparent bg-transparent"
              : "border-deep-night/5 bg-warm-ivory/92 backdrop-blur-md",
        )}>
        <Container className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          <Logo
            leftLabel={brand.leftLabel}
            rightLabel={brand.rightLabel}
            inverted={usesLightChrome}
            onClick={closeMenu}
          />

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavItem
                key={`${item.href}-${item.label}`}
                href={item.href}
                label={item.label}
                inverted={usesLightChrome}
              />
            ))}
          </nav>

          <div className="relative z-60 flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-6">
            <Button
              href="#contact"
              size="sm"
              variant={usesLightChrome ? "outline-light" : "gold"}
              className="hidden lg:inline-flex">
              {menuCta}
            </Button>
            <Button
              size="sm"
              variant={
                isOpen
                  ? "ghost-dark"
                  : usesLightChrome
                    ? "ghost-light"
                    : "ghost-dark"
              }
              className="flex h-11 w-11 p-0!"
              onClick={toggleMenu}
              ariaLabel={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="site-navigation-overlay">
              {isOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </Container>
      </header>

      {/* ── Full-screen overlay ─────────────────────────────────────────────── */}
      <div
        id="site-navigation-overlay"
        suppressHydrationWarning
        aria-hidden={!isOpen}
        className={classNames(
          "fixed inset-0 z-40 bg-warm-ivory text-deep-night transition-all duration-500",
          isOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}>
        {/*
          overflow-y-auto  → scrollable on small screens
          pt-20            → clears the fixed header bar
          pb-6             → breathing room at the bottom
        */}
        <Container className="flex min-h-full flex-col overflow-y-auto pb-6 pt-20 sm:pb-8 sm:pt-24">
          {/* 3-column grid */}
          <div className="grid flex-1 gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            {/* Col 1 — Main directories */}
            <div className="space-y-1">
              <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold opacity-60">
                {overlayMainDirLabel}
              </span>
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={`overlay-${item.href}-${item.label}`}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-1 font-display text-2xl leading-tight tracking-tighter transition-colors hover:text-lion-gold sm:text-3xl lg:text-4xl">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 2 — Venues */}
            <div>
              <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold opacity-60">
                {overlayVenuesLabel}
              </span>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {venueLinks.map((item, index) => (
                  <OverlayVenueLink
                    key={`venue-${index}`}
                    href={item.href}
                    label={item.title}
                    onClick={closeMenu}
                  />
                ))}
              </div>
            </div>

            {/* Col 3 — The Group */}
            <div className="flex flex-col gap-4">
              <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold opacity-60">
                {groupTitle}
              </span>

              {/* Group links */}
              <ul className="space-y-3">
                {groupLinks.map((item, index) => (
                  <li key={`group-link-${index}`}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="text-[10px] font-black uppercase tracking-widest text-deep-night/40 transition-colors hover:text-lion-gold">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact card */}
              <div className="rounded-3xl border border-deep-night/10 bg-white/40 p-5">
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold opacity-60">
                  {contact.eyebrow}
                </span>
                <p className="font-display text-lg text-deep-night">
                  {contact.primary}
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-deep-night/40">
                  {contact.secondary}
                </p>
              </div>

              {/* CRM card */}
              <div className="rounded-3xl bg-deep-night p-5 text-warm-ivory">
                <h4 className="mb-4 font-display text-lg">
                  {overlayCrmHeading}
                </h4>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-lion-gold py-3 px-5 text-[10px] font-black uppercase tracking-[0.2em] text-deep-night transition-all hover:brightness-110">
                  {overlayCrmAction}
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-deep-night/10 pt-5 md:flex-row md:items-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
              {copyright}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {footerLinks.map((linkItem, index) => (
                <a
                  key={`footer-link-${index}`}
                  href={linkItem.href}
                  onClick={closeMenu}
                  className="text-[10px] font-black uppercase tracking-widest opacity-40 transition-opacity hover:opacity-100">
                  {linkItem.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
