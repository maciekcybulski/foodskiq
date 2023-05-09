import { getSettings } from "@/lib/sanity/client";
import Konsultacje from "./konsultacje";

export default async function ContactPage() {
  const settings = await getSettings();
  return <Konsultacje settings={settings} />;
}

// export const revalidate = 60;
