import DotLoader from 'react-spinners/DotLoader'
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function CTA() {

    const [loading,setLoading]=useState(true)

    const [open, setOpen] = useState(false)

    return (

<div className="bg-gray-50">
      <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Tenés dudas?</span>
          <span className="block text-celeste">Contactate con nuestro equipo.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/contacto"
              type="button"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-celeste px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-celeste-dos transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Contactar
              <DotLoader className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" loading={loading} size={15} color="#ffffff"/>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/nosotros"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-celeste hover:bg-indigo-50"
            >
              Aprende más
            </a>
          </div>
        </div>
      </div>
    </div>
 )

}
