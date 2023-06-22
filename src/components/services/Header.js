import fotomg9 from 'assets/img/fotomg-9.png'

function Header(){


    return(
        <main>
            <div className="relative px-6 lg:px-8">
            <div className="mx-auto lg:mx-12 max-w-full py-32 sm:py-48 lg:py-36">
                <div className="">
                <h1 className="text-4xl font-bold pb-10 tracking-tight text-gray-900 sm:text-7xl">
                Servicios de Seguridad
                </h1>
                <p className="mt-6 text-2xl leading-8 text-gray-50">Ofrecemos una amplia gama de servicios de seguridad especializados y adaptados a las necesidades de nuestros clientes. Contamos con un equipo de profesionales altamente capacitados y comprometidos, dispuestos a brindar soluciones efectivas y confiables para garantizar la protección de personas, propiedades y activos valiosos.</p>
                
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
              <img src={fotomg9} alt="services-header-img" className='w-full h-full object-cover'/>
            </div>
            </div>
        </main>
    )
}

export default Header