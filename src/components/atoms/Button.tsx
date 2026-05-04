"use client";

import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonVariant =
  | "gold"
  | "dark"
  | "outline-light"
  | "outline-dark"
  | "ghost-dark"
  | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
};

type LinkButtonProps = SharedProps &
  LinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps | "children" | "className" | "onClick"
  > & {
    href: LinkProps["href"];
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  };

type NativeButtonProps = SharedProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className" | "onClick"
  > & {
    href?: undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };

const baseClassName =
  "min-w-0 max-w-full items-center justify-center rounded-full text-center font-black uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-lion-gold/55 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 text-[10px]";

const sizeClassNames: Record<ButtonSize, string> = {
  sm: "px-8 py-3",
  md: "px-12 py-5",
  lg: "px-16 py-6",
};

const variantClassNames: Record<ButtonVariant, string> = {
  gold: "bg-lion-gold text-deep-night shadow-xl shadow-lion-gold/10 hover:bg-amber-warm active:bg-lion-gold",
  dark: "bg-deep-night text-warm-ivory shadow-xl shadow-deep-night/20 hover:bg-deep-night/80 active:bg-deep-night",
  "outline-light":
    "border border-warm-ivory/30 text-warm-ivory hover:bg-white/10 active:bg-white/5",
  "outline-dark":
    "border border-deep-night/20 text-deep-night hover:bg-deep-night hover:text-warm-ivory active:bg-deep-night/90",
  "ghost-dark":
    "text-deep-night hover:bg-deep-night/5 hover:text-lion-gold active:bg-deep-night/10",
  "ghost-light":
    "text-warm-ivory hover:bg-white/5 hover:text-lion-gold active:bg-white/10",
};

const classNames = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(" ");

const hasDisplayOverride = (className?: string) =>
  Boolean(
    className
      ?.split(/\s+/)
      .some((token) =>
        /(^|:)(hidden|block|inline|inline-block|flex|inline-flex)$/.test(token),
      ),
  );

const getComputedClassName = (
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) =>
  classNames(
    hasDisplayOverride(className) ? undefined : "inline-flex",
    baseClassName,
    sizeClassNames[size],
    variantClassNames[variant],
    className,
  );

export function Button(props: LinkButtonProps | NativeButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      variant = "gold",
      size = "md",
      className,
      ariaLabel,
      href,
      onClick,
      ...linkProps
    } = props;

    return (
      <Link
        href={href}
        className={getComputedClassName(variant, size, className)}
        aria-label={ariaLabel}
        onClick={onClick}
        {...linkProps}>
        {children}
      </Link>
    );
  }

  const nativeProps = props as NativeButtonProps;

  const {
    children,
    variant = "gold",
    size = "md",
    className,
    ariaLabel,
    type = "button",
    onClick,
    ...buttonProps
  } = nativeProps;

  return (
    <button
      type={type}
      className={getComputedClassName(variant, size, className)}
      aria-label={ariaLabel}
      onClick={onClick}
      {...buttonProps}>
      {children}
    </button>
  );
}
