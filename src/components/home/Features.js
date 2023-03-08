import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Consultoría digital',
    description: 'Dada la rápida digitalización global cualquier negocio debe tener buena presencia online.',
  },
  { name: 'Google ADS Search', description: 'Anuncios de Google para el momento de la búsqueda en el navegador.' },
  {
    name: 'Google ADS Display',
    description: 'Campañas con anuncios visualmente atractivos en la red de Display de Google.',
  },
  { name: 'Google ADS Remarketing', description: 'Anuncios personalizados en función de los productos o servicios que los clientes vieron en su sitio web.' },
  { name: 'Google ADS Shopping', description: 'Es un tipo de anuncio que muestra información detallada acerca de productos específicos que vendes.' },
  { name: 'Facebook e Instagram ADS', description: 'Creación de anuncios para las redes sociales Facebook e Instagram.' },
  { name: 'Email Marketing', description: 'Anuncios enviados al mail de la persona registrada o subscripta en su web.' },
  { name: 'Ecommerce Marketing', description: 'Creamos anuncios personalizados para su sitio web de ecommerce.' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">Todo lo que necesitas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Nuestros servicios</p>
          <p className="mt-4 text-lg text-gray-500">
            Aquí encontrarás los servicios que nuestro equipo ofrece para tu empresa. Hecha un vistazo.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}