import { Link } from "react-router-dom";

function Carousel(){

return(    
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators z-index-2" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators z-index-2" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators z-index-2" data-slide-to="2"></li>
        </ol>
        <Link to={"/store"} className="carousel-inner">
            <div className="carousel-item carousel-item1 active">
                <img className="d-block w-100 carousel-pc" src="/assets/images/home/img1.png" alt="First slide"/>
            </div>
            <div className="carousel-item carousel-item2">
                <img className="d-block w-100 carousel-pc" src="/assets/images/home/img2.png" alt="Second slide"/>
            </div>
            <div className="carousel-item carousel-item3">
                <img className="d-block w-100 carousel-pc" src="/assets/images/home/img3.png" alt="Third slide"/>
            </div>
        </Link>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
)}

export default Carousel;
