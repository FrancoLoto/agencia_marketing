import Features from "components/about/Features"
import Header from "components/about/Header"
import Images from "components/about/Images"
import Team from "components/about/Team"
import TestStats from "components/about/TestStats"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function About(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>MG Seguridad Privada | Nosotros</title>
                <meta name="description" content="Sobre nosotros en MG Seguridad Privada"/> 
                <meta name="keywords" content='mg seguridad privada, mg seguridad privada quienes somos'/>
                <meta name="robots" content='all'/>
                <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/"/>
                <meta name="author" content="Seguridad"/>
                <meta name="publisher" content="Franco Loto"/>

                {/* Social Media Tags */}
                <meta property='og:title' content='MG Seguridad Privada'/>
                <meta property='og:description' content='Sobre nosotros en MG Seguridad Privada'/>
                <meta property='og:url' content='https://www.mgseguridadprivada.com.ar/'/>
                <meta property='og:image' content='https://postimg.cc/060wgC76'/>

                <meta name="twitter:title" content='MG Seguridad Privada' />
                <meta
                    name="twitter:decription"
                    description='Sobre nosotros en MG Seguridad Privada'
                />
                <meta name="twitter:image" content="https://postimg.cc/060wgC76"/>
                <meta name="twitter:card" content="summary_large_image"/>

            </Helmet>
            <Navbar/>
            <div className="pt-40">
                <Header/>
                <TestStats/>
                <Images/>
                
            </div>
            <Features/>
            <Team/>
            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Tenés dudas?</span>
                <span className="block text-celeste">Contactate con nuestro equipo.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-celeste px-5 py-3 text-base font-medium text-white hover:bg-celeste-dos"
                >
                Contactar
                </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                <a
                href="/servicios"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-celeste hover:bg-indigo-50"
                >
                Aprender más
                </a>
            </div>
        </div>
      </div>
    </div>
            <Footer/>
        </Layout>
    )
}
export default About