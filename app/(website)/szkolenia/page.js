import { getSettings } from "@/lib/sanity/client";
import Szkolenia from "./szkolenia";

export default async function ContactPage() {
  const settings = await getSettings();
  return <Szkolenia settings={settings} />;
}

// export const revalidate = 60;
