import { carouselImg } from "../utils/constants";

const Carousel = ({carouselRes}) => {
    return (
        <div key={carouselRes?.id}  className="flex" >
            {carouselRes.map((restaurant) => (
            <div className="">
                <img src= {carouselImg + restaurant?.imageId}/>
            </div>
        ))}

        </div>
        
    );
};

export default Carousel;