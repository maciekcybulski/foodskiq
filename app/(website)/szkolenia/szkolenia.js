import React from 'react'
import Image from 'next/image'
import { ScissorsIcon, WrenchIcon, HandThumbUpIcon, UserPlusIcon,BoltIcon, CheckCircleIcon, FaceSmileIcon } from '@heroicons/react/20/solid'
const features = [
  {
  name: 'Szkolenia dostosowane do potrzeb',
  description:
  'Oferujemy szkolenia "szyte na miarę", dopasowane do potrzeb i oczekiwań klienta, co pozwala na skoncentrowanie się na konkretnych zagadnieniach związanych z danym przedsiębiorstwem.',
  icon: ScissorsIcon,
  },
  {
  name: 'Teoria i praktyka',
  description:
  'Nasze szkolenia łączą wiedzę teoretyczną z praktycznymi aspektami wykorzystania nabytych umiejętności w codziennej pracy, dzięki czemu uczestnicy mogą natychmiast zastosować nową wiedzę w swoim zakładzie.',
  icon: WrenchIcon,
  },
  {
  name: 'Wsparcie po zakończeniu szkolenia',
  description:
  'Po zakończeniu szkolenia uczestnicy otrzymują wsparcie w formie konsultacji, aby móc dalej rozwijać swoje umiejętności i odpowiednio wdrażać nabyte kompetencje w praktyce.',
  icon: HandThumbUpIcon ,
  },
  ]


  const featurety = [
    {
    name: 'Rozwój kompetencji pracowników',
    description:
    'Szkolenia pomagają w rozwijaniu kompetencji pracowników, co przekłada się na lepsze wykorzystanie ich potencjału i wzrost efektywności przedsiębiorstwa.',
    icon: UserPlusIcon,
    },
    {
    name: 'Innowacyjność i konkurencyjność',
    description:
    'Dzięki szkoleniom, pracownicy zdobywają wiedzę na temat nowoczesnych technologii i rozwiązań, co pozwala firmie na utrzymanie konkurencyjności na rynku.',
    icon: BoltIcon,
    },
    {
    name: 'Zmniejszenie ryzyka błędów',
    description:
    'Szkolenia zwiększają świadomość pracowników na temat istotnych zagadnień związanych z jakością i bezpieczeństwem żywności, co prowadzi do zmniejszenia ryzyka błędów i niezgodności.',
    icon: CheckCircleIcon,
    },
    {
    name: 'Wzmocnienie wizerunku firmy',
    description:
    'Inwestycja w rozwój pracowników i dbałość o jakość produktów wpływa na wzmocnienie wizerunku firmy, co przyczynia się do zwiększenia zaufania klientów i partnerów biznesowych.',
    icon: FaceSmileIcon,
    },
    ]
const audyty = () => {
  return (
  
  <>
    <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Szkolenia
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">
          z zakresu zarządzania jakością i bezpieczeństwem żywności 
          </p>
        </div>
     <div className="overflow-hidden bg-white py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Rozwijaj kompentencje swoich pracowników</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wprowadzaj innowacyjne rozwiązania </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Proponujemy szeroki wybór szkoleń teoretycznych i praktycznych, dostosowanych do potrzeb i wymagań każdej firmy.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/szkoleniafood.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Zrealizuj szkolenie w swojej firmie</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Inwestycja w rozwój pracowników, która pomoże Ci w poprawie wyników.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featurety.map((featurety) => (
              <div key={featurety.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <featurety.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {featurety.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{featurety.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Chcesz wykonać szkolenie 
              <br />
              w swojej firmie?
            </h2>
            <p className="mt-6 text-lg leading-8 text-black ">
            Budujemy trwałe relacje z klientem biznesowym i posiadamy znajomość zasad Dobrej Praktyki Laboratoryjnej (GLP).
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/kontakt"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Kontakt
              </a>
              <a href="o-nas" className="text-sm font-semibold leading-6 text-black ">
                Przeczytaj więcej<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/kontakt.jpg"
              alt="Szkolenia bezpieczeństwo żywnośći"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
      </>
  
  )
}

export default audyty