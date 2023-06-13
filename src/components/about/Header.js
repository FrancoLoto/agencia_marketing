import fotomg7 from 'static/media/fotomg-7.15f5123ef0c0acb11d4b.png'

function Header(){


    return(
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12">
                    <div className="">
                    <h1 className="text-4xl font-bold pb-8 tracking-tight text-gray-900 sm:text-7xl">
                    Quienes somos
                    </h1>
                    <p className="mt-6 text-2xl leading-10 text-gray-50 max-w-5xl">Somos una empresa emergente conducida por jóvenes de la localidad de General Conesa, que observaron la necesidad de integrar una entidad de servicios de seguridad con una amplitud de criterios tal que ha permitido adaptarse y actualizar sus posibilidades y evolución que los requerimientos del país imponen.</p>
                    
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
                    <img src={fotomg7} className='w-full h-full object-cover'/>
                </div>
                
            </div>
        </main>
    )
}

export default Header