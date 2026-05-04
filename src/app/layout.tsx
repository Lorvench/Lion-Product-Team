import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lion Group Placeholder Home",
  description:
    "Pixel-accurate Next.js placeholder clone of the uploaded Lion Group home design.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fff4d6",
};

const stripInjectedAttrsScript = `
(() => {
  const attrs = ["bis_skin_checked"];

  const cleanElement = (element) => {
    attrs.forEach((attr) => element?.removeAttribute?.(attr));
  };

  const cleanTree = (root) => {
    cleanElement(root);
    attrs.forEach((attr) => {
      root?.querySelectorAll?.(\`[\${attr}]\`)?.forEach(cleanElement);
    });
  };

  const start = () => {
    cleanTree(document.documentElement);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes") {
          cleanElement(mutation.target);
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            cleanTree(node);
          }
        });
      }
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: attrs,
    });

    window.addEventListener(
      "load",
      () => {
        cleanTree(document.documentElement);
        window.setTimeout(() => observer.disconnect(), 5000);
      },
      { once: true },
    );
  };

  if (document.documentElement) {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Script
          id="strip-injected-hydration-attrs"
          strategy="beforeInteractive">
          {stripInjectedAttrsScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
