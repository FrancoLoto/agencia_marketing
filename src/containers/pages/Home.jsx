import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA1"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"



function Home(){
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return(
        <Layout>
            <Navbar/>
            <div className="pt-40">
                <Header/>
                <Incentives/>
                <Features/>
                <BlogList  />
                <CTA/>
            </div>
            <Footer/>
        </Layout>
    )
}





export default Home