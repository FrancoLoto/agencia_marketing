import analytics from 'assets/img/analitycs.png'
import megafono from 'assets/img/megafono.png'

const incentives = [

    {
      name: 'Análisis',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/1472/1472090.png',
      description: "Conocer el comportamiento del mercado permite un mejor rendimiento para tu empresa y te ayuda a estar alerta sobre los factores de riesgo. Por esta razón, hacer un análisis de mercado le traerá grandes beneficios a su empresa.",
    },
    {
      name: 'Contenido',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/1997/1997928.png',
      description: "El marketing de contenidos es una técnica de marketing basada en la creación, publicación y distribución de contenidos relevantes, útiles y valiosos con el objetivo de atraer público potencial a nuestra marca o productos.",
    },
    {
      name: 'SEO',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/2977/2977742.png',
      description:
        "Es el conjunto de técnicas y estrategias centradas en optimizar el posicionamiento orgánico en buscadores de internet.",
    },

  ]


  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Construimos nuestro negocio en el servicio al cliente
              </h2>
              <p className="mt-4 text-gray-500">
                Al principio al menos, pero luego nos dimos cuenta de que podíamos ganar mucho más dinero si dejáramos de preocuparnos por eso.
                Nuestra nueva estrategia es escribir un montón de cosas que se ven muy bien en los titulares,
                luego aclararlas en letra pequeña pero esperar que la gente no las lea.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }