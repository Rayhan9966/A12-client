import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// import img1 from "../../assets/New folder/imb.jpg";
import img2 from "../../assets/New folder/imb4.jpg";
import img3 from "../../assets/New folder/imb1.jpg";
import img4 from "../../assets/New folder/imb4.jpg";
import img5 from "../../assets/New folder/imb1.jpg";
// import slide1 from "../../src/assets/New folder/imb7.jpg";
// import slide2 from "../../src/assets/New folder/imb8.jpg";
// import slide3 from "../../src/assets/New folder/imb9.jpg";
// import slide4 from "../../src/assets/New folder/imb5.jpg";
// import img6 from "../../assets/New folder/imb4.jpg";
// import img1 from "../../assets/New folder/image1.jpg";

// import img2 from "../../assets/New folder/imb7.jpg";
// import img3 from "../../assets/New folder/imb8.jpg";
// import img4 from "../../assets/New folder/imb9.jpg";
// import img5 from "../../assets/New folder/imb5.jpg";

const Banner = () => {
    return (
        <Carousel>
     
        <div>
            <img src={img2} />

        </div>
        <div>
            <img src={img3} />

        </div>
        <div>
            <img src={img4} />

        </div>
        <div>
            <img src={img5} />

        </div>

    </Carousel>
    );
};

export default Banner;


// import img2 from "../../assets/New folder/imb4.jpg";
// import img3 from "../../assets/New folder/imb1.jpg";
// import img4 from "../../assets/New folder/imb4.jpg";
// import img5 from "../../assets/New folder/imb1.jpg";

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

// const Banner = () => {
//     return (
//         <AwesomeSlider>
//             <div>
//                 <img src={img2} />

//             </div>
//             <div>
//                 <img src={img3} />

//             </div>         <div>
//                 <img src={img4} />

//             </div>
//             <div>
//                 <img src={img5} />

//             </div>
//         </AwesomeSlider>
//     );
// };

// export default Banner;