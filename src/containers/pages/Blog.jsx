import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog";
import BlogList from "components/blog/BlogList";

function Blog({
    get_categories,
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous
}){
    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
    },[])

    return(
        <Layout>
            <Helmet>
                <title>MG Seguridad Privada | Blog</title>
                <meta name="description" content="Sección de blog de MG Seguridad Privada"/> 
                <meta name="keywords" content='blog de mg seguridad privada, mg seguridad privada blog'/>
                <meta name="robots" content='all'/>
                <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/"/>
                <meta name="author" content="Seguridad"/>
                <meta name="publisher" content="Franco Loto"/>

                {/* Social Media Tags */}
                <meta property='og:title' content='MG Seguridad Privada'/>
                <meta property='og:description' content='Sección de blog de MG Seguridad Privada'/>
                <meta property='og:url' content='https://www.mgseguridadprivada.com.ar/'/>
                <meta property='og:image' content='https://postimg.cc/060wgC76'/>

                <meta name="twitter:title" content='MG Seguridad Privada' />
                <meta
                    name="twitter:decription"
                    description='Sección de blog de MG Seguridad Privada'
                />
                <meta name="twitter:image" content="https://postimg.cc/060wgC76"/>
                <meta name="twitter:card" content="summary_large_image"/>

            </Helmet>
            <Navbar/>
            <div className="pt-36">
                

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl my-10">
                        <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous 
});

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list,
    get_blog_list_page
}) (Blog)