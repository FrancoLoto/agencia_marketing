import { connect } from "react-redux";
import Layout  from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get_blog } from "redux/actions/blog/blog";
import moment from "moment";
import DOMPurify from 'dompurify'

function PostDetail({
    get_blog,
    post
}){

    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        window.scrollTo(0, 0)
        get_blog(slug)
    },[])

    return(
        <Layout>
            <Navbar/>
            {
                post && post.slug == slug ?
                <div className="pt-36">

                    <div className="relative bg-indigo-800">
                        <div className="absolute inset-0">
                            <img
                            className="h-full w-full object-cover"
                            src={post.thumbnail}
                            alt=""
                            />
                        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{post.title}</h1>
                        <div className="min-w-0 flex-1 p-4 pt-8">
                        
                            <div className="">
                                <Link to={`/category/${post.category.slug}`} className="hover:text-indigo-500 mt-2 font-medium text-sm">{post.category.name}</Link> &middot;
                                <span className="mt-2 font-medium text-sm mx-1">{moment(post.published).format('LL')}</span> &middot;
                                <span className="mt-2 font-medium text-sm mx-1">{post.time_read} min lectura</span>
                                <p className="mt-4 text-lg font-regular text-gray-800 leading-8">
                                {post.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden bg-white py-16">

                    <div className="relative px-4 sm:px-6 lg:px-8">
                        
                        <div className="prose prose-lg max-w-6xl prose-indigo mx-auto mt-6 text-gray-500">
                            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}} />
                        
                            
                        </div>
                    </div>
                </div>
                </div>
                :
                <>Loading</>
            }
            
            <Footer/>
        </Layout>
    )
}

const mapStateToProps=state=>({
    post: state.blog.post
})

export default connect(mapStateToProps, {
    get_blog
})(PostDetail)