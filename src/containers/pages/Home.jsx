
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
            
            <Footer/>
        </Layout>
    )
}




export default Home