import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/organisms/Header";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { getSiteContent } from "@/lib/site-content";
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
  title: "Lion Group",
  description: "Elevating Lagos hospitality.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fff4d6",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContent = await getSiteContent();

  const brand = {
    leftLabel: siteContent.siteBrand?.leftLabel ?? "",
    rightLabel: siteContent.siteBrand?.rightLabel ?? "",
  };
  const navigation = siteContent.siteNavigation ?? [];
  const venueLinks = siteContent.siteVenueLinks ?? [];
  const groupLinks = siteContent.siteGroupLinks ?? [];
  const headerExtras = siteContent.siteHeaderExtras;
  const footer = siteContent.siteFooter;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Header
          brand={brand}
          navigation={navigation}
          menuCta={headerExtras?.menuCta ?? ""}
          venueLinks={venueLinks}
          groupTitle={headerExtras?.groupTitle ?? ""}
          groupLinks={groupLinks}
          overlayMainDirLabel={headerExtras?.overlayMainDirLabel ?? ""}
          overlayVenuesLabel={headerExtras?.overlayVenuesLabel ?? ""}
          overlayCrmHeading={headerExtras?.overlayCrmHeading ?? ""}
          overlayCrmAction={headerExtras?.overlayCrmAction ?? ""}
          contact={
            headerExtras?.contact ?? {
              eyebrow: "",
              primary: "",
              secondary: "",
            }
          }
          footerLinks={headerExtras?.footerLinks ?? []}
          copyright={headerExtras?.copyright ?? footer?.copyright ?? ""}
        />

        {children}

        <SiteFooter
          brand={brand}
          navigation={navigation}
          venueLinks={venueLinks}
          groupLinks={groupLinks}
          footer={footer}
        />
      </body>
    </html>
  );
}
