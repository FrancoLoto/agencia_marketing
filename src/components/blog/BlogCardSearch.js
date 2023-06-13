import moment from "moment"
import { Link } from "react-router-dom"

function BlogCardSearch({data, index}){


    return(
        <li
        >
              <Link to={`/blog/${data.slug}`}
                onMouseEnter={()=>{
                    const title = document.getElementById(`title`+data.id)
                    title.classList.add('text-celeste')
                    const img = document.getElementById(index)
                    img.classList.add('object-fill')
                }}
                onMouseLeave={()=>{
                    const title = document.getElementById(`title`+data.id)
                    title.classList.remove('text-celeste')
                    const img = document.getElementById(index)
                    img.classList.remove('object-fill')
                }} 
                className="block transition duration-300 ease-in-out">
                <div className="flex items-center my-10">
                  <div className="lg:flex min-w-0 lg:flex-1 items-center">
                    
                    <div className="min-w-0 flex-1 px-8 p-4">
                        <p id={`title`+data.id} className="leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out">
                            {data.title.length > 100 ? data.title.slice(0,99):data.title}
                        </p>
                        <div className="">
                            <span className="hover:text-celeste mx-1 font-medium text-sm"><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
                            <span className="mt-2 ml-2 mr-1 font-medium text-sm">{moment(data.published).format('LL')}</span> &middot;
                            <span className="mt-2 mx-2 font-medium text-sm">{data.time_read} min lectura</span>
                            <p className="mt-4 text-lg font-regular text-gray-800 leading-8">
                            {data.description}
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
    )
}
export default BlogCardSearch