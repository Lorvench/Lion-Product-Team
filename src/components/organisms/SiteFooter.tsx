"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/atoms/Icons";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

type SiteFooterProps = {
  brand: {
    leftLabel: string;
    rightLabel: string;
  };
  navigation: Array<{
    href: string;
    label: string;
  }>;
  venueLinks: Array<{
    href: string;
    title: string;
  }>;
  groupLinks: Array<{
    href: string;
    label: string;
  }>;
  footer: {
    tagline: string;
    crmLabel: string;
    crmHeading: string;
    crmEmailPlaceholder: string;
    directoriesTitle: string;
    portfolioTitle: string;
    bottomLinks: string[];
    copyright: string;
  };
};

export function SiteFooter({
  brand,
  navigation,
  venueLinks,
  groupLinks,
  footer,
}: SiteFooterProps) {
  return (
    <footer
      id="footer"
      className="scroll-mt-24 border-t border-white/5 bg-deep-night pb-12 pt-20 text-warm-ivory md:scroll-mt-28 md:pt-24 xl:pt-32">
      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4 md:gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20 mb-20 md:mb-28 xl:mb-32">
          {/* Col 1: Brand + tagline + socials + CRM */}
          <div className="md:col-span-2 lg:col-span-5">
            <Logo
              leftLabel={brand.leftLabel}
              rightLabel={brand.rightLabel}
              inverted
              href="#home"
              className="mb-8 md:mb-10"
            />
            <p className="mb-10 font-display text-3xl leading-tight tracking-tighter sm:text-4xl md:text-5xl md:leading-[1.1] max-w-sm">
              {footer.tagline}
            </p>

            {/* Social icons */}
            <div className="mb-12 flex gap-5 md:gap-6 md:mb-14">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all hover:border-lion-gold hover:text-lion-gold">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all hover:border-lion-gold hover:text-lion-gold">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all hover:border-lion-gold hover:text-lion-gold">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>

            {/* LION CRM card */}
            <div className="max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <span className="mb-5 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold">
                {footer.crmLabel}
              </span>
              <h4 className="mb-5 font-display text-xl">{footer.crmHeading}</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={footer.crmEmailPlaceholder}
                  className="grow rounded-xl border border-white/10 bg-deep-night px-4 py-3 text-xs text-warm-ivory placeholder:text-warm-ivory/40 focus:border-lion-gold/50 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="rounded-xl bg-lion-gold p-3 text-deep-night transition-all hover:brightness-110">
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Directories */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="mb-8 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold opacity-40 md:mb-10 xl:mb-12">
              {footer.directoriesTitle}
            </h4>
            <ul className="space-y-5 md:space-y-6">
              {navigation.map((item, index) => (
                <li key={`footer-dir-${index}`}>
                  <Link
                    href={item.href}
                    className="font-display text-xl transition-colors hover:text-lion-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              {groupLinks.map((item, index) => (
                <li key={`footer-sub-${index}`}>
                  <Link
                    href={item.href}
                    className="text-[10px] font-black uppercase tracking-widest text-warm-ivory/40 transition-colors hover:text-lion-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: The Portfolio */}
          <div className="md:col-span-1 lg:col-span-4">
            <h4 className="mb-8 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold opacity-40 md:mb-10 xl:mb-12">
              {footer.portfolioTitle}
            </h4>
            <div className="space-y-0">
              {venueLinks.map((item, index) => (
                <Link
                  key={`footer-venue-${index}`}
                  href={item.href}
                  className="group block">
                  <div className="flex items-center justify-between border-b border-white/10 py-4 transition-colors group-hover:border-lion-gold/40">
                    <span className="text-base transition-colors group-hover:text-lion-gold md:text-lg">
                      {item.title}
                    </span>
                    <ChevronRightIcon className="h-4 w-4 opacity-20 transition-all group-hover:text-lion-gold group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center md:pt-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
            {footer.copyright}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.bottomLinks.map((linkLabel, index) => (
              <Link
                key={`footer-bottom-${index}`}
                href="#"
                className="text-[10px] font-black uppercase tracking-widest text-lion-gold/40 transition-all hover:text-lion-gold">
                {linkLabel}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
