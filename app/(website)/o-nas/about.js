import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Katarzyna Cybulska - założycielka firmy Food SQ
      </h1>
      <div className="text-center">
        <p className="text-lg max-w-[40rem] mx-auto"> Jestem mikrobiologiem praktykiem i audytorem systemu zarządzania
laboratorium mikrobiologicznym wg normy PN-EN ISO/IEC 17025. <br/><br/>
Posiadam 20 letnim doświadczenie w realizacji projektów badawczych
oraz szkoleniowych z zakresu mikrobiologii.</p>
      </div>

      <div className="mx-auto max-w-[30rem] gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
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
                 
                  className=" object-cover mx-auto"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <p>
        Specjalizuję się w prowadzeniu konsultacji i szkoleń z obszaru mikrobiologii żywności, diagnostyki
mikrobiologicznej żywności, prawa żywnościowego, systemu zarządzania w laboratorium
mikrobiologicznym, zagrożeń mikrobiologicznych w produkcji, dystrybucji i przetwórstwie żywności.
        </p>
        <ul className="list-none">
  <li>Specjalizuję się w prowadzeniu konsultacji i szkoleń z obszaru mikrobiologii żywności, diagnostyki
mikrobiologicznej żywności, prawa żywnościowego w zakresie mikrobiologii, systemu zarządzania w
laboratorium mikrobiologicznym, zagrożeń mikrobiologicznych w produkcji, dystrybucji i przetwórstwie
żywności.</li>
  <li>Przez 16 lat zarządzałam laboratorium akredytowanym w celu dostarczenia wyników i rozwiązań
spełniających branżowe standardy, optymalizując procesy i systematycznie wdrażając nowe metody
badawcze.</li>
  <li>Mam 20-letnie doświadczenie w zarządzaniu projektami laboratoryjnymi: planowanie, realizacja,
monitorowanie, raportowanie.</li>
  <li>Od kilku lat prowadzę specjalistyczne szkolenia dla największych firm produkujących żywność</li>

  <li>Posiadam wykształcenie wyższe techniczne - mgr inż. technologii żywności </li>
  <li>Opracowałam autorskie szkolenia dotyczące bezpieczeństwa żywności w zakresie mikrobiologii w
szczególności nadzoru nad patogenami w środowisku produkcyjnym i zmniejszaniu ryzyka zakażeń
krzyżowych.</li>
  <li>Przeprowadzałam audyty w firmach identyfikując istniejące zagrożenia i wdrażając działania naprawcze i
zapobiegawcze.</li>
  <li>Doradzałam przy opracowywaniu planów badania próbek w oparciu o analizę ryzyka w danej branży i
specyfice produkcji.</li>
<li>Posiadam wykształcenie wyższe techniczne - mgr inż. technologii żywności </li>
  <li>Dobrze znam zasady Dobrej Praktyki Laboratoryjnej (GLP) oraz obowiązujące normy, w tym normy
PN-EN ISO/IEC 17025</li>
  <li>Byłam członkiem KT ds. Analizy Żywności i KT ds. Mleka i Przetworów Mlecznych w PKN</li>
 
</ul>


        <p>
          <Link href="/contact">Porozmawiajmy</Link>
        </p>
      </div>
    </Container>
  );
}
