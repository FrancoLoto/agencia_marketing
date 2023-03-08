function ServiceCard({data, index}) {
    return(
        <div
        onMouseEnter={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-indigo-500')
            title_element.classList.remove('text-indigo-900')
        }}
        onMouseLeave={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-indigo-900')
            title_element.classList.remove('text-indigo-500')
        }}
        className="w-full relative p-8 h-96 lg:h-[200pm] bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full">
                <img src={data.img} className='w-18 h-18'/>
                <h2 className="text-xl font-semibold text-indigo-900 pt-8">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
                <a href="#" id={index} className="items-end text-l font-semibold">Leer más</a>
            </div>
        </div>
    )
}

export default ServiceCard