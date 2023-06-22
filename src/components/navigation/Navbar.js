import { connect } from "react-redux"
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from "react"
import {Link, NavLink} from 'react-router-dom'




const solutions = [
    {
      name: 'Nosotros',
      description: 'Quienes somos.',
      href: '/nosotros',
      icon: IconOne,
    },
    {
        name: 'Servicios',
        description: 'Nuestros servicios.',
        href: '/servicios',
        icon: IconOne,
      },
      {
        name: 'Blog',
        description: 'Sección de blog.',
        href: '/blog',
        icon: IconOne,
      },
      {
        name: 'Contacto',
        description: 'Contáctate con nuestro equipo.',
        href: '/contacto',
        icon: IconOne,
      },
]


function Navbar(){


    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');

            }
        }
    }



    return(
        <nav data-scroll data-scroll-id="hey" id='navbar' className='bg-black w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-2 sm:px-4">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2">
                    <Link to="/" className="ml-4 mt-2">
                    <img
                    src={'https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/logo.4922371bf8e945770760.png'}
                    alt="logo"
                    width={80}
                    height={60}
                    className=""/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/nosotros' className="text-lg inline-flex font-semibold leading-6 text-gray-50 border-b-2 border-transparent hover:border-celeste transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                    <NavLink to='/servicios' className="text-lg inline-flex font-semibold leading-6 text-gray-50 border-b-2 border-transparent hover:border-celeste transition duration-300 ease-in-out mx-4">Servicios</NavLink>
                    <NavLink to='/blog' className="text-lg inline-flex font-semibold leading-6 text-gray-50 border-b-2 border-transparent hover:border-celeste transition duration-300 ease-in-out mx-4">Blog</NavLink>
                    <NavLink to='/contacto' className="text-lg inline-flex font-semibold leading-6 text-gray-50 border-b-2 border-transparent hover:border-celeste transition duration-300 ease-in-out mx-4">Contacto</NavLink>

                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2">
                    <Link to="/" className="ml-4 mt-2">
                    <img
                    src={'https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/logo.4922371bf8e945770760.png'}
                    alt="logo"
                    width={80}
                    height={60}
                    className=""/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">

                    <Popover className="relative bg-gray-50 rounded-sm">
                        {({ open }) => (
                        <>
                            <Popover.Button
                            className={`
                                ${open ? '' : 'text-opacity-90'}
                                focus:ring-none focus:outline-none`}
                            >
                            {
                                open ?
                                <i  className='bx bx-x text-4xl'></i>
                                :
                                <i  className='bx bx-menu text-4xl'></i>
                            }
                            </Popover.Button>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-celeste focus-visible:ring-opacity-50"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                        <item.icon aria-hidden="true" />
                                        </div>
                                        <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {item.description}
                                        </p>
                                        </div>
                                    </Link>
                                    ))}
                                </div>
                                
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>

                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)

function IconOne() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#01b8b6" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#1b83ac"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#1b83ac"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#1b83ac"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  