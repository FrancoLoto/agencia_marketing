import { Typewriter } from 'react-simple-typewriter'
import fotomg6 from 'assets/img/fotomg-6.png'

function Header(){


    return(
        <main>
            <div className="relative">
                <div className="mx-auto xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight pb-10 text-gray-900 sm:text-7xl">
                        Seguridad en cada paso. <span> </span>
                <Typewriter
                    words={['Control', 'Vigilancia', 'Custodia',]}
                    loop={0}
                    cursor
                    cursorStyle='-'
                    typeSpeed={120}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    //onLoopDone={handleDone}
                    //onType={handleType}
                />
                </h1>
                <p className="mt-4 lg:text-2xl text-lg leading-8 text-gray-50">En MG Seguridad Privada nos esforzamos por ser líderes en la provisión de soluciones integrales de seguridad en nuestra área de servicio, mediante una sólida propuesta de sostenibilidad, trabajo en equipo y la implementación de tecnología de vanguardia.
                </p>
                <div className="mt-10 items-center flex gap-x-6">
                    <a href="/contacto" className="rounded-md bg-celeste px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-celeste-dos focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-celeste-dos">Contactar</a>
                    <a href="/nosotros" className="text-base font-semibold leading-7 text-gray-900">Aprende más <span aria-hidden="true">→</span></a>
                </div>
                </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9089FC" />
                    <stop offset="1" stopColor="#FF80B5" />
                    </linearGradient>
                </defs>
                </svg>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-md lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src={fotomg6} alt="home-header-img" className='w-full h-full object-cover'/>
            </div>
            </div>
        </main>
    )
}

export default Header