import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA1"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { connect } from "react-redux";
import { get_blog_list } from "redux/actions/blog/blog";
import whatsapp_icon from "assets/img/whatsapp-icon.svg"
import { Link } from "react-router-dom"


function Home({
    get_blog_list,
    posts
}){
    useEffect(()=>{
        window.scrollTo(0,0);
        get_blog_list();
    },[]);


    return(
        <Layout>
            <Navbar/>
            <div className="pt-40">
                <Header/>
                <Incentives/>
                <Features/>
                {posts&&posts.length > 0 ? (
                    <BlogList posts={posts} />
                ) : (
                    <div>No hay publicaciones disponibles en este momento.</div>
                )}
                <CTA/>
                <div className="sociales">
                    <Link to="https://wa.me/5492920248332" target="_blank"
                    ><img
                        src={whatsapp_icon}
                        alt="whatsapp-logo"
                        loading="lazy"
                        className="socicon"
                    /></Link>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

const mapStateToProps = state => ({
    posts: state.blog.blog_list,
});



export default connect(mapStateToProps, {
    get_blog_list
})(Home)