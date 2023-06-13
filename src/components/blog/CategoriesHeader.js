import { Link, useLocation } from "react-router-dom"


function CategoriesHeader({categories}){

    const location = useLocation()
    
    
    return(
        <div className="w-full bg-gray-100 py-5 mt-4">
            <div className="grid grid-cols-12">
                <div className="col-span-9">

                    <div className="space-x-8 px-6">
                    <div className="relative">
                            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                                <ul
                                
                                    className="mx-4 inline-flex space-x-6 sm:mx-6"
                                >
                                    <Link to='/blog'
                                    className={`${location.pathname === '/blog' ? "text-celeste bg-white":"text-gray-900 hover:text-celeste border border-gray-100 hover:border-gray-200"} py-2 px-6  rounded-md text-lg font-regular`}>
                                        All
                                    </Link>
                                    {
                                        categories&&categories.map((category,index)=>(
                                            <Link key={index} to={`/category/${category.slug}`}
                                            className={`${location.pathname === `/category/${category.slug}` ? "text-celeste bg-white":"text-gray-900 border hover:text-celeste border-gray-100 hover:border-gray-200"} py-2 px-6 rounded-md text-lg font-regular`}>
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                </ul>
                        </div>
                    </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default CategoriesHeader