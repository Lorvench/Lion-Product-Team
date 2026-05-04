import { getSiteContent } from "@/lib/site-content";
import { VenuesPageClient } from "./VenuesPageClient";

export default async function VenuesPage() {
  const siteContent = await getSiteContent();

  return <VenuesPageClient siteContent={siteContent} />;
}
