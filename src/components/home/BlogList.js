import { Link } from "react-router-dom";

  export default function BlogList({posts}) {

    const latestPosts = posts.slice(0, 3);

    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto lg:mx-12 max-w-lg divide-y-2 divide-gray-200 lg:max-w-full">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Últimas publicaciones</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Aquí encontrarás las publicaciones más recientes de nuestro blog, creadas por nuestro equipo. Visita la sección de blog para ver todas las publicaciones.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {latestPosts.map((post) => (
              <div key={post.title}>
                <div>
                  <div className="inline-block">
                    <span
                      className='text-gray-50 inline-flex items-center px-3 py-0.5 rounded-full bg-celeste-dos text-sm font-medium'                     
                    >
                      {post.category.name}
                    </span>
                  </div>
                </div>
                <Link to='/' className="mt-4 block">
                  <figure className="lg:flex-shrink-0">
                      <img className="h-64 lg:w-96 w-full object-cover rounded" src={post.thumbnail} alt="" />
                  </figure>
                  <p className="mt-3 text-xl font-semibold text-gray-900 hover:text-celeste">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </Link>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    
                      <span className="sr-only">{post.author}</span>
                      
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href='/'>{post.author}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>
                      {new Date(post.published).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.time_read} min lectura.</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }