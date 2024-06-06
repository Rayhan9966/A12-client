import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from '../layout/shared/SectionTitle';

// import img7 from "../../assets/New folder/image7.jpg";
import slide1 from "../../src/assets/New folder/imb7.jpg";
import slide2 from "../../src/assets/New folder/imb8.jpg";
import slide3 from "../../src/assets/New folder/imb9.jpg";
import slide4 from "../../src/assets/New folder/imb5.jpg";



const History = () => {
    return (
        <section>
            <SectionTitle
                heading={"Success History"}></SectionTitle>

            {/* <h1 className=' text-5xl font-bold text-center'>Success History</h1> <br></br> */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {/* <SwiperSlide><img src={img7} alt="" /></SwiperSlide> */}
                <SwiperSlide><img src={slide1} alt="" />
                    <p>Building a family together brought new dimensions to our relationship.
                        Celebrated 25 years of love and partnership, a journey marked by growth.</p></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" />
                    <p>
                        As we moved forward, our relationship faced the u
                        Building a family together brought new dimensions to our relationship. </p></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <p>
                        "Celebrated 25 years of love and partnership, a journey marked by growth, resilience, and countless cherished memories together."</p></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <p>From our first date to raising a family, we've built countless cherished memories together. Our bond has only strengthened through challenges and triumphs, proving that true partnership stands the test of time."</p></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <p>


          
                        Our first date was the start of a beautiful journey, filled with excitement, hope, and the promise of a future together. We quickly discovered that we complemented each other in the best ways, bringing out the best in one another. Those early days were filled with laughter, long conversations, and the joy of getting to know each other deeply.

                        As we moved forward, our relationship faced the u
                        Building a family together brought new dimensions to our relationship. 
                      </p></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <p>Our journey has also been filled with countless moments of joy and celebration. From anniversaries and birthdays to spontaneous adventures and quiet evenings at home, we've made a point to celebrate our love and the life we've built together.</p></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <p>
                        As we moved forward, our relationship faced the u
                        Building a family together brought new dimensions to our relationship. </p></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <p>success histiry</p></SwiperSlide>

            </Swiper>

        </section>
    );
};

export default History;