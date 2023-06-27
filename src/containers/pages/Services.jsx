import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/services/Header"
import ServicesList from "components/services/ServicesList"
import Layout from "hocs/layouts/Layout"
import vigilancia_fisica from "assets/img/vigilancia-fisica.png"
import vigilancia_eventos from "assets/img/vigilancia-eventos.png"
import vigilancia_local_rural from "assets/img/vigilancia-local-y-rural.png"
import seguridad_coche from "assets/img/seguro-de-coche.png"
import escudo_seguro from "assets/img/escudo-seguro.png"
import cono_trafico from "assets/img/cono-de-trafico.png"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

const posts_services = [
    {
      id: 1,
      title: 'Vigilancia física',
      img: vigilancia_fisica,
      description:
        'El servicio consiste en la implementación del plan de seguridad establecido, que tendrá como misión la protección preventiva del objetivo. Para bancos, supermercados, empresas, etc.',
    },
    {
      id: 2,
      title: 'Vigilancia para eventos',
      img: vigilancia_eventos,
      description:
        'Ofrecemos el servicio de control de admisión y permanencia para todo tipo de eventos privados y públicos: cumpleaños, casamientos, fiestas privadas, actos, etc.',
    },
    {
      id: 3,
      title: 'Vigilancia local y rural',
      img: vigilancia_local_rural,
      description:
        'Servicio de vigilancia y monitoreo para casas, barrios privados, campos y chacras. Realizamos análisis de riesgo.',
    },
    {
      id: 4,
      title: 'Custodia de mercadería en tránsito',
      img: seguridad_coche,
      description:
        'Realizamos seguimiento y traslado de mercadería, bienes y valores en tránsito.',
    },
    { 
      id: 5,
      title: 'Custodia VIP',
      img: escudo_seguro,
      description:
        'Este servicio está orientado hacia personas expuestas a riesgos por su empleo, status de celebridad, asociaciones, etc.',
    },
    {
      id: 6,
      title: 'Seguridad para maquinaria vial',
      img: cono_trafico,
      description:
        'Servicio de seguridad especializado para maquinaria vial en zonas rurales o parques cerrados.',
    },
  ]


function Services(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
    return(
        <Layout>
          <Helmet>
            <title>MG Seguridad Privada | Servicios</title>
            <meta name="description" content="Estos son los servicios que ofrecemos en MG Seguridad Privada"/> 
            <meta name="keywords" content='servicios de seguridad, mg servicios de seguridad'/>
            <meta name="robots" content='all'/>
            <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/"/>
            <meta name="author" content="Seguridad"/>
            <meta name="publisher" content="Franco Loto"/>

            {/* Social Media Tags */}
            <meta property='og:title' content='MG Seguridad Privada'/>
            <meta property='og:description' content='Estos son los servicios que ofrecemos en Marketing'/>
            <meta property='og:url' content='https://www.mgseguridadprivada.com.ar/'/>
            <meta property='og:image' content='https://postimg.cc/060wgC76'/>

            <meta name="twitter:title" content='MG Seguridad Privada' />
            <meta
                name="twitter:decription"
                description='Estos son los servicios que ofrecemos en MG Seguridad Privada'
            />
            <meta name="twitter:image" content="https://postimg.cc/060wgC76"/>
            <meta name="twitter:card" content="summary_large_image"/>

          </Helmet>
            <Navbar/>
            <div className="pt-40">
                <Header/>
                <ServicesList posts={posts_services} section_title={'Servicios de Seguridad'}/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Services