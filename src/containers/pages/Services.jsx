import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/services/Header"
import ServicesList from "components/services/ServicesList"
import Layout from "hocs/layouts/Layout"
import megafono_img from "assets/img/services/megafono.png"
import desarrolloweb_img from "assets/img/services/desarrollo-web.png"
import tiendaonline_img from "assets/img/services/tienda-online.png"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

const posts_services = [
    {
      title: 'Consultoría y Marketing Digital',
      img: megafono_img,
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Servicio integral digital enfocado en la eficiencia y en la optimización del ROI, optimizando la estructura digital...',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Desarrollo WEB & E-Commerce',
      img: desarrolloweb_img,
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Diseñamos y desarrollamos tu sitio web optimizado. Contamos con un equipo...',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Diseño & Content Marketing',
      img: tiendaonline_img,
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Diseños de alto impacto. Ayudamos a tu empresa a crear y optimizar su identidad de marca...',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]


function Services(){
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
    return(
        <Layout>
          <Helmet>
            <title>Marketing Agencia | Servicios</title>
            <meta name="description" content="Estos son los servicios que ofrecemos en Marketing"/> 
            <meta name="keywords" content='servicios de marketing, marketing digital servicios'/>
            <meta name="robots" content='all'/>
            <link rel="canonical" href="https://www.marketing.com/"/>
            <meta name="author" content="Marketing"/>
            <meta name="publisher" content="Franco Loto"/>

            {/* Social Media Tags */}
            <meta property='og:title' content='Marketing Agencia'/>
            <meta property='og:description' content='Estos son los servicios que ofrecemos en Marketing'/>
            <meta property='og:url' content='https://www.marketing.com/'/>
            <meta property='og:image' content='https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg'/>

            <meta name="twitter:title" content='Marketing Agencia' />
            <meta
                name="twitter:decription"
                description='Estos son los servicios que ofrecemos en Marketing'
            />
            <meta name="twitter:image" content="https://img.freepik.com/vector-gratis/plantilla-logotipo-marketing-flecha_23-2149105274.jpg"/>
            <meta name="twitter:card" content="summary_large_image"/>

          </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <ServicesList posts={posts_services} section_title={'Servicios de Marketing'}/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Services