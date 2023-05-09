import { getSettings } from "@/lib/sanity/client";
import Audyty from "./audyty";

export default async function ContactPage() {
  const settings = await getSettings();
  return <Audyty settings={settings} />;
}

// export const revalidate = 60;
