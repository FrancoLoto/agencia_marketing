import vision from 'assets/img/vision.png'
import mision from 'assets/img/mision.png'
import valores from 'assets/img/valores.png'

const incentives = [

    {
      name: 'Visión',
      imageSrc: vision,
      description: "Convertirnos en la empresa elegida por aquellos que reconocen la importancia fundamental de la protección y la tranquilidad en su vida. Nos esforzamos por liderar el sector de la seguridad, adoptando una mentalidad de constante innovación y comprometiéndonos a invertir en recursos y tecnología de vanguardia.",
    },
    {
      name: 'Misión',
      imageSrc: mision,
      description: "Establecer relaciones sólidas y duraderas con nuestros clientes, convirtiéndonos en sus socios estratégicos y conocer en profundidad sus necesidades para asesorarlos de la mejor manera. Disponer de las mejores prácticas de seguridad, capacitando a nuestro equipo y utilizando tecnología de última generación. Trabajar incansablemente para garantizar la protección y tranquilidad de nuestros clientes, y superar continuamente sus expectativas en términos de calidad y confiabilidad.",
    },
    {
      name: 'Valores',
      imageSrc: valores,
      description:
        "Nuestros valores fundamentales son el pilar de nuestra ética profesional y se reflejan en cada aspecto de nuestro trabajo. Valoramos el respeto mutuo como equipo y hacia nuestros clientes, fomentando un ambiente de colaboración y confianza. Estos valores nos guían en nuestro camino hacia la excelencia, asegurando que cada servicio que brindamos sea respaldado por un compromiso sólido y una conducta ética impecable.",
    },

  ]


  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Tu protección, nuestro compromiso.
              </h2>
              <p className="mt-4 text-gray-500">                
              Nuestro compromiso se basa en brindarte servicios de seguridad integrales y confiables, respaldados por un equipo altamente capacitado y comprometido. Nos dedicamos a salvaguardar tu tranquilidad y bienestar, ofreciendo soluciones personalizadas que se adaptan a tus necesidades específicas. Con nosotros, puedes estar seguro de que tu protección estará garantizada.
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