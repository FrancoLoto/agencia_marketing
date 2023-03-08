import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function Contact(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
            <title>Marketing Agencia | Contacto</title>
            <meta name="description" content="Sección de contacto de Marketing"/> 
            <meta name="keywords" content='contactar Marketing, marketing digital contacto'/>
            <meta name="robots" content='all'/>
            <link rel="canonical" href="https://www.marketing.com/"/>
            <meta name="author" content="Marketing"/>
            <meta name="publisher" content="Franco Loto"/>

            {/* Social Media Tags */}
            <meta property='og:title' content='Marketing Agencia'/>
            <meta property='og:description' content='Sección de contacto de Marketing'/>
            <meta property='og:url' content='https://www.marketing.com/'/>
            <meta property='og:image' content='https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg'/>

            <meta name="twitter:title" content='Marketing Agencia' />
            <meta
                name="twitter:decription"
                description='Sección de contacto de Marketing'
            />
            <meta name="twitter:image" content="https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg"/>
            <meta name="twitter:card" content="summary_large_image"/>

        </Helmet>
            <Navbar/>
            <div className="pt-28">
                Contact
            </div>
            <Footer/>
        </Layout>
    )
}
export default Contact