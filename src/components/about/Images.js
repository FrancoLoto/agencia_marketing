import fotomg1 from 'assets/img/fotomg-1.png'
import fotomg5 from 'assets/img/fotomg-5.jpeg'

function Images() {
    return(
        <div className="w-full">
            <div className="grid grid-cols-2 gap-8">
            <img src={fotomg1}
            alt="about-img1"
            className="w-full h-96 object-cover"/>
            <img src={fotomg5}
            alt="about-img2"
            className="w-full h-96 object-cover"/>
            </div>
            
        </div>
    )
}

export default Images