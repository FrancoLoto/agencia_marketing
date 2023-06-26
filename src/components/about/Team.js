import fotomg2 from 'assets/img/fotomg-2.png'
import fotomg3 from 'assets/img/fotomg-3.png'
import fotomg4 from 'assets/img/fotomg-4.jpeg'
import fotomg10 from 'assets/img/fotomg-10.png'
import fotomg11 from 'assets/img/fotomg-11.png'
import fotomg12 from 'assets/img/fotomg-12.png'
import fotomg13 from 'assets/img/fotomg-13.png'
import fotomg14 from 'assets/img/fotomg-14.png'
import fotomg15 from 'assets/img/fotomg-15.png'



const people = [
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg2,
      
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg3,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg4,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg10,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg11,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg12,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg13,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg14,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        fotomg15,
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
  