import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA1"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list } from "redux/actions/blog/blog";


function Home({
    get_categories,
    categories,
    get_blog_list,
    posts
}){
    useEffect(()=>{
        window.scrollTo(0,0);
        get_categories();
        get_blog_list();
    },[]);

    if (!categories || !posts) {
        return null; // O puedes mostrar un spinner de carga en su lugar
    }

    return(
        <Layout>
            <Navbar/>
            <div className="pt-40">
                <Header/>
                <Incentives/>
                <Features/>
                <BlogList posts={posts&&posts} categories={categories&&categories}/>
                <CTA/>
            </div>
            <Footer/>
        </Layout>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
});



export default connect(mapStateToProps, {
    get_categories,
    get_blog_list
})(Home)