import {  AcademicCapIcon, ChartBarIcon, ClipboardDocumentCheckIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Szkolenia teoretyczne i praktyczne',
      description:
        'Oferujemy profesjonalne szkolenia z zakresu zarządzania jakością i bezpieczeństwem żywności, dostosowane do potrzeb Twojej firmy.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Audyty laboratoriów mikrobiologicznych',
      description:
        'Przeprowadzamy audyty wewnętrzne i zewnętrzne laboratoriów mikrobiologicznych, aby zapewnić najwyższą jakość i zgodność z wymogami.',
      icon: ChartBarIcon,
    },
    {
      name: 'Konsultacje kompleksowe',
      description:
        'Zapewniamy wsparcie w zakresie zarządzania jakością i bezpieczeństwem żywności, pomagając w identyfikacji obszarów do poprawy i wdrożeniu nowych strategii.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: 'Najlepsze praktyki',
      description:
        'Stosujemy najnowsze metody i praktyki w zarządzaniu jakością i bezpieczeństwem żywności, aby zapewnić skuteczność naszych usług.',
      icon: FaceSmileIcon,
    },
  ]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Specjalizujemy się w Mikrobiologii</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wszystko co potrzebujesz do bezpieczeństa Twojej firmy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Dzięki naszym usługom klienci mogą zdobyć niezbędną wiedzę i umiejętności, co przekłada się na rozwój firmy oraz zadowolenie klientów.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
