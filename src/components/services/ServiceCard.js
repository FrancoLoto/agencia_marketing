function ServiceCard({data}) {
    return(
        <div
        
        className="w-full relative p-8 h-96 lg:h-[200pm] bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full">
                <img src={data.img} className='w-18 h-18'/>
                <h2 className="text-xl font-semibold text-celeste-dos pt-8">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.description}</p>
            </div>

        </div>
    )
}

export default ServiceCard