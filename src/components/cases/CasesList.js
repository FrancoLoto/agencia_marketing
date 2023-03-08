import CaseCard from "./CaseCard"
import Carousel from '@itseasy21/react-elastic-carousel';

function CasesList(){

    const posts = [
        {
          id: '1234-qwer',
          title: 'ArTea Tienda de Té',
          href: '#',
          category: { name: 'Artículo', href: '#' },
          description:
            'Si piensas que el email es un medio del pasado, piénsalo de nuevo. En ActiveCampaign, tenemos cientos de casos de estudio recientes que demuestran lo contrario. ArTea Tienda de Té ha multiplicado sus ventas por tres durante la pandemia simplemente por aprovechar las funciones básicas del marketing.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://s1.ppllstatics.com/elcorreo/www/multimedia/202005/25/media/cortadas/artea-Rg97aHxW53e2yJo94A1bDGP-1248x770@El%20Correo.JPG',
          readingTime: '6 min',
          author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          id: '5678-asdf',
          title: 'Converse',
          href: '#',
          category: { name: 'Video', href: '#' },
          description:
            'Si se observan las principales cuentas de Instagram en el sector de la indumentaria, Converse tiene una tasa de interacción mucho mayor que la de sus competidores. Con un 1.79 %, tiene una tasa de interacción orgánica más de 15 veces superior a la de Nike.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
            'https://latexmagazine.com/wp-content/uploads/2022/06/Vitrina-Converse_-1024x784.jpg',
          readingTime: '4 min',
          author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          id: '4321-zxcv',
          title: 'Singer',
          href: '#',
          category: { name: 'Artículo', href: '#' },
          description:
            'Creativedog es una agencia de marketing digital que trabajó con Singer, la marca más representativa de máquinas de coser del mundo, para modernizar la imagen de la marca y adaptarla a los tiempos de hoy.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://www.activecampaign.com/wp-content/uploads/2022/04/Article-2-image-7-ES.png',
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
      ]


    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1},
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 960, itemsToShow: 3},
        { width: 1280, itemsToShow: 3, itemsToScroll: 2},
        // { width: 1450, itemsToShow: 5},
        // { width: 1750, itemsToShow: 6},
    ]

    return(

        <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-full ">
        <Carousel
                itemsToScroll={3}
                itemsToShow={3}
                breakPoints={breakPoints}
                pagination={false}
                itemPadding={[0, 32]}
            >
          

            {posts.map((post, index) => (
              <CaseCard index={index} data={post}/>
            ))}
          </Carousel>
        </div>
      </div>
    )
}

export default CasesList