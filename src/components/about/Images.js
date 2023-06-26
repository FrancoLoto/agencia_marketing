import fotomg1 from 'assets/img/fotomg-1.png'


function Images() {
    return(
        <div className="w-full">
            <div className="grid grid-cols-2 gap-8">
            <img src={fotomg1}
            alt="about-img1"
            className="w-full h-96 object-cover"/>
            <img src={"https://mgseguridadprivada.s3.us-west-2.amazonaws.com/media/fotomg-5.46e7d941cadedf0b6db9.jpeg"}
            alt="about-img2"
            className="w-full h-96 object-cover"/>
            </div>
            
        </div>
    )
}

export default Images