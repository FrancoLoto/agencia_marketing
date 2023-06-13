import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const features = [
  { name: 'Vigilancia física', description: 'Supermercado, bancos, instituciones privadas y públicas.' },
  { name: 'Vigilancia local y rural', description: 'Casas y barrios privados, campos, chacras.' },
  { name: 'Traslado y seguimiento de valores en ruta', description: 'Seguimiento en ruta para todo tipo de vehículos.' },

  { name: 'Vigilancia para eventos', description: 'Control de admisión y permanencia. Cumpleaños, casamientos, eventos privados y públicos.' },
  { name: 'Custodia VIP', description: 'Destinado para altos directivos, figuras públicas, grupos familiares.' },
  { name: 'Seguridad de maquinaria vial', description: 'Seguridad para maquinaria vial en zonas rurales o parques cerrados.' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-celeste">Servicios de seguridad</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">¿Qué servicios ofrecemos?</p>
          <p className="mt-4 text-lg text-gray-500">
            Estos son los servicios de seguridad que ofrecemos, diseñados para brindarte tranquilidad y protección en cada aspecto de tu vida. Estamos comprometidos en adaptar nuestras soluciones a tus necesidades específicas, para garantizar una protección integral y personalizada. Si deseas obtener más información acerca de nuestros servicios y cómo podemos ayudarte, te invitamos a hacer <Link to="/servicios" className='text-celeste hover:text-celeste-dos'>click aquí</Link>.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <StarIcon className="absolute h-6 w-6 text-yellow-400" aria-hidden="true" />
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