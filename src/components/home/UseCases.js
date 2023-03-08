const posts = [
    {
      title: 'Facebook Meta',
      href: '#',
      category: { name: 'Artículo', href: '#' },
      description:
        'Creamos una campaña para una pequeña empresa llamada Facebook Meta que se dedica a vender alimentos no perecederos a traves de su red social.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      imageUrl:
        'https://about.fb.com/ltam/wp-content/uploads/sites/14/2022/07/HomeandFeeds_Android.png',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Campaña Gucci ',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'En este caso, realizamos un spot publicitario para la famosa marca de bebidas espumantes Gucci. Mirá el video',
      date: 'Mar 10, 2023',
      datetime: '2023-03-10',
      imageUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d6f06e116172219.605c808b1a7ee.jpg',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Slogan Coca-Cola',
      href: '#',
      category: { name: 'Artículo', href: '#' },
      description:
        'Tuvimos el honor de poder realizar este slogan para la reconocida compañía de fertilziantes para las plantas Coca-Cola.',
      date: 'Feb 12, 2023',
      datetime: '2023-02-12',
      imageUrl:
        'https://e7.pngegg.com/pngimages/925/569/png-clipart-coca-cola-diet-coke-brand-advertising-coke-cola-advertising-campaign.png',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function UseCases() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto lg:mx-12 max-w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros trabajos</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Estos son algunos de nuestros trabajos recomendados por clientes de todo el mundo.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
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