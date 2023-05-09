import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Food SQ Katarzyna Cybulska
      </h1>
      <div className="text-center">
        <p className="text-lg"> Jestem charyzmatycznym mikrobiologiem praktykiem i audytorem systemu zarządzania laboratorium mikrobiologicznym wg normy PN-EN ISO/IEC 17025 <br/> Posiadam 20 letnim doświadczenie w realizacji projektów badawczych oraz szkoleniowych z zakresu mikrobiologii.</p>
      </div>

      <div className="mx-auto w-1/2 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square ">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover mx-auto"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>
        👉 Specjalizuję się w prowadzeniu konsultacji i szkoleń z obszaru mikrobiologii żywności, diagnostyki mikrobiologicznej żywności, prawa żywnościowego, systemu zarządzania w laboratorium mikrobiologicznym, zagrożeń mikrobiologicznych w produkcji, dystrybucji i przetwórstwie żywności. 
<br/><br/>📍 Przez 16 lat skutecznie zarządzałam laboratorium akredytowanym w celu dostarczenia wyników i rozwiązań spełniających branżowe standardy, optymalizując procesy i systematycznie wdrażając nowe metody badawcze.
        </p>
        <ul>
  <li>20-letnie doświadczenie w zarządzaniu projektami laboratoryjnymi: planowanie, realizacja, monitorowanie, raportowanie</li>
  <li>Wykształcenie wyższe techniczne - mgr inż. technologii żywności</li>
  <li>Specjalistyczna wiedza z zakresu mikrobiologii</li>
  <li>Bardzo dobra znajomość mikrobiologicznych metod analitycznych</li>
  <li>Budowanie trwałych relacji z klientem biznesowym</li>
  <li>Umiejętność przekazywania wiedzy w sposób dostosowany do potrzeb i możliwości klienta</li>
  <li>Prowadzenie ciekawych i angażujących szkoleń</li>
  <li>Znajomość zasad Dobrej Praktyki Laboratoryjnej (GLP)</li>
  <li>Znajomość normy PN-EN ISO/IEC 17025</li>
  <li>Umiejętność obsługi specjalistycznych urządzeń laboratoryjnych i systemów do wprowadzania danych</li>
  <li>Skuteczne zarządzanie zespołem projektowym</li>
  <li>Wysokie umiejętności interpersonalne</li>
  <li>Doskonałe umiejętności organizacyjne i przywódcze</li>
  <li>Samodzielność połączona z proaktywnością</li>
  <li>Myślenie analityczne i strategiczne</li>
  <li>Tworzenie raportów, zestawień i analiz</li>
  <li>Doskonała znajomość MS Office (Excel)</li>
</ul>

<p>𝐊𝐨𝐦𝐩𝐞𝐭𝐞𝐧𝐜𝐣𝐞 𝐦𝐚𝐧𝐚𝐠𝐞𝐫𝐬𝐤𝐢𝐞, które wesprą niejeden zespół i projekt 💯:</p>
<ul>
  <li>Określanie celów i dopasowywanie do nich zadań</li>
  <li>Zapewnienie wysokiego poziomu zarządzania projektami i budżetem</li>
  <li>Zarządzanie zespołem, ocena efektów pracy</li>
  <li>Delegowanie zadań i motywowanie, coaching</li>
  <li>Koordynowanie harmonogramów projektów, udzielanie informacji zwrotnych</li>
  <li>Prowadzenie spotkań i szkoleń</li>
  <li>Umiejętność perswazji w zakresie zarządzania i wywierania wpływu na wszystkich szczeblach firmy</li>
  <li>Zarządzanie zmianami i optymalizacja procesów</li>
  <li>Umiejętność myślenia procesowego</li>
  <li>Wysoka etyka pracy</li>
</ul>
        <p>
          <Link href="/contact">Porozmawiajmy</Link>
        </p>
      </div>
    </Container>
  );
}
