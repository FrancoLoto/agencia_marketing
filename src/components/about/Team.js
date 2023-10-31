

const people = [
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-mamxi.jpg",
      
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-3.973decec8c9f2a655496.png",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-4.d21b5111715a8c835eb3.jpeg",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-10.f923c484f0cb10a5e7cf.png",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-11.dbd784120ae8145ccde0.png",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-12.923d945bc29be3e60c0f.png",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-auto2.jpg",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-14.0c4d168bb9d6343282ac.jpeg",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        "https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-15.8e094dcfd9d841005bf3.png",
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white">
        <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestro Equipo</h2>
              <p className="text-xl text-gray-500">
                Algunas imágenes de nuestro equipo realizando distintos servicios en diferentes eventos de nuestra localidad y alrededores. Estamos orgullosos de nustro trabajo y creemos que es el camino para seguir creciendo. Gracias por confiar en nosotros!
              </p>
            </div>
            <ul
              
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li >
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                    </div>
  
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  