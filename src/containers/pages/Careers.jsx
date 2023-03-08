import Features from "components/careers/Features"
import Header from "components/careers/Header"
import PositionsList from "components/careers/PositionsList"
import Testimonial from "components/careers/Testimonial"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function Careers(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
            <title>Marketing Agencia | Carreras</title>
            <meta name="description" content="Carreras disponibles en Marketing"/> 
            <meta name="keywords" content='carreras de Marketing, marketing digital carreras'/>
            <meta name="robots" content='all'/>
            <link rel="canonical" href="https://www.marketing.com/"/>
            <meta name="author" content="Marketing"/>
            <meta name="publisher" content="Franco Loto"/>

            {/* Social Media Tags */}
            <meta property='og:title' content='Marketing Agencia'/>
            <meta property='og:description' content='Carreras disponibles en Marketing'/>
            <meta property='og:url' content='https://www.marketing.com/'/>
            <meta property='og:image' content='https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg'/>

            <meta name="twitter:title" content='Marketing Agencia' />
            <meta
                name="twitter:decription"
                description='Carreras disponibles en Marketing'
            />
            <meta name="twitter:image" content="https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg"/>
            <meta name="twitter:card" content="summary_large_image"/>

        </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Testimonial/>
                <Features/>
                <PositionsList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Careers