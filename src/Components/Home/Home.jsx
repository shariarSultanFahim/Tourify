import useDocumentTitle from "../../CustomHook/useDocumentTitle"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { Typewriter } from 'react-simple-typewriter'
import OurTeam from "../OurTeam/OurTeam";

import Tours from "../Tours/Tours";
import Countries from "../Countrys/Countries";



const Home = () => {
    useDocumentTitle('Home');

    return (
        <div className="md:container mx-auto min-h-screen transition duration-300 ease-in-out">
            
            {/* Corousel Banner */}
            <div className="mx-auto w-[98%] h-[170px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                <Swiper
                 modules={[Pagination, Scrollbar, A11y,Autoplay]}
                 autoplay={{
                     delay: 3000,
                     disableOnInteraction: false,
                   }}
                 spaceBetween={50}
                 slidesPerView={1}
                 loop={true}
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
            
                 className="mySwiper"
                 >
                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Cox's Bazar
                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['Longest Sea Beach']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg"/>  

                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Bandarban
                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['The Land of Wonder']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://i.pinimg.com/736x/2e/82/32/2e8232edb7980535819fb00afc168ce7.jpg"/>  

                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Siem Reap
                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['Legendary Landmark']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/D%27Angkor.jpg/640px-D%27Angkor.jpg"/>  

                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Bangkok
                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['Best Nightlife']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://content.r9cdn.net/rimg/dimg/26/5b/01e97574-city-26166-1592813274a.jpg?width=1366&height=768&xhint=1038&yhint=725&crop=true"/>  

                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Ha Long Bay
                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['Worlds Prettiest Place']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://lp-cms-production.imgix.net/features/2019/04/HalongBay-aa0f7e71a1db.jpg"/>  

                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Panang
                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['Northwest Malaysia']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/09/07/b8e6b2d2c95f445ba3c9463018740156_Penang_Header.jpg"/>  

                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Yogyakarta
                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['City Ruled by Monarchy']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg/1200px-Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg"/>  

                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className="relative">
                    
                        <h1 className="text-center animate__animated animate__bounceInLeft text-3xl md:text-6xl lg:font-bold left-[50%] top-[30%] -translate-x-[50%] -translate-y-[30%]   absolute z-50 text-white ">Phi Phi Islands

                        <br />
                        <span className="text-sm md:text-xl lg:text-3xl font-thin">
                        <Typewriter 
                            words={['An island group in Thailand']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                        />
                        </span>
                        </h1>

                        <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                        </div>

                        <img className="w-full h-full absolue z-10 lg:-translate-y-[10%]" src="https://a.cdn-hotels.com/gdcs/production115/d361/49459e8d-eb1e-46a7-8a3b-269f54958346.jpg"/>  

                    </div>
                </SwiperSlide>
                
                </Swiper>
            </div>

            {/* Property Listing Header and Filter*/}
            <div className="md:container mx-auto mt-10 md:mt-16 lg:mt-32 mb-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
            Unveiling Hidden <span className="font-medium md:font-bold text-green-800">Gems</span>
            </h1>
            <p className="lg:pb-4 mx-auto w-3/4 md:w-1/2 text-center opacity-70">Explore unique destinations and off-the-beaten-path experiences on our most sought-after tours</p>
            </div>
            {/* Tours Cards */}
            <Tours></Tours>

            {/* Countries Card */}
            <Countries></Countries>

            {/* Team Section */}
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;