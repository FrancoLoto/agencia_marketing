import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect, useState  } from "react"
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

function Contact(){
    
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    const [enabled, setEnabled] = useState(false)

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
    });

    const { 
    name,
    email,
    subject,
    message,
    phone, 
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(enabled){
            setLoading(true);

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('subject', subject)
            formData.append('message', message)


            const fetchData = async()=>{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,formData, config)
                if(res.status === 200){
                    setLoading(false);
                    setFormData({
                        name:'',
                        email:'',
                        subject:'',
                        message:'',
                        phone:'',
                    })
                    alert('Message has been sent.')
                }else{
                    setLoading(false);
                    alert('Error sending message.')
                }
            }
            fetchData()

        }else{
            alert('You must accept the terms of service and conditions')
        }
    }

    return(
        <Layout>
            <Helmet>
            <title>MG Seguridad Privada | Contacto</title>
            <meta name="description" content="Sección de contacto MG Seguridad Privada" />
            <meta name="keywords" content='mg seguridad privada contacto, mg seguridad privada telefono' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/" />
            <meta name="author" content='Seguridad' />
            <meta name="publisher" content='Franco Loto' />

            {/* Social Media Tags */}
            <meta property="og:title" content='MG Seguridad Privada | Contacto' />
            <meta property="og:description" content='Sección de contacto MG Seguridad Privada.' />
            <meta property="og:url" content="https://www.mgseguridadprivada.com.ar/" />
            <meta property="og:image" content='https://postimg.cc/060wgC76' />

            <meta name="twitter:title" content='MG Seguridad Privada | Contacto' />
            <meta
                name="twitter:description"
                content='Sección de contacto MG Seguridad Privada'
            />
            <meta name="twitter:image" content='https://postimg.cc/060wgC76' />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
            <Navbar/>
            <div className="pt-40">
            <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contactanos</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Dejanos un mensaje y nuestro equipo se encargará de responder a la brevedad. También podes comunicarte con nosotros por teléfono o a través de nuestras redes sociales.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>Ruta Nacional 251, Km 117,5-</p>
                  <p>General Conesa, Río Negro 8503</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+54 2920 248332</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">MGseguridadprivada2017@hotmail.com</span>
                </dd>
              </div>
            </dl>
            
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
              <div>
                
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={e=>onChange(e)}
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-celeste-dos focus:ring-celeste-dos"
                  placeholder="Nombre"
                />
              </div>

              <div>
                
                <input
                  value={email}
                  onChange={e=>onChange(e)}
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-celeste-dos focus:ring-celeste-dos"
                  placeholder="Email"
                />
              </div>

                <div>
                
                <input
                type="text"
                name="phone"
                value={phone}
                required
                onChange={e=>onChange(e)}
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-celeste-dos focus:ring-celeste-dos"
                placeholder="Teléfono"
                aria-describedby="price-currency"
                />
                
                </div>

              <div>
                
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  required
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-celeste-dos focus:ring-celeste-dos"
                  placeholder="Asunto"
                />
              </div>

              <div>
                
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  required
                  onChange={e=>onChange(e)}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-celeste-dos focus:ring-celeste-dos"
                  placeholder="Mensaje"
                />
              </div>

            
              <div className="px-4 py-5 sm:px-6">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                        <div className="grid-cols-12 ml-4 mt-2 flex">
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-celeste-dos' : 'bg-gray-300'}
                                col-span-3 relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
                                    pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                            <p className="col-span-9 ml-4 text-md font-regular leading-6 text-gray-600">
                                Al seleccionar aceptas con nuestros <span className="text-blue-500"><Link to='/terms'>Términos y condiciones</Link></span> y <span className="text-blue-500"><Link to='/privacy/policy'>Política de privacidad</Link></span>.
                            </p>
                            
                        </div>
                        <div className="ml-4 mt-2 flex-shrink-0">
                            {
                                loading ?
                                <div
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-celeste px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-celeste-dos focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    <CircleLoader loading={loading} size={25} color="#ffffff"/>
                                </div>
                                :
                                <button
                                    type="submit"
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-celeste px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-celeste-dos focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    Enviar mensaje
                                </button>

                            }
                        </div>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Contact