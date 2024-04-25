import useDocumentTitle from "../../CustomHook/useDocumentTitle"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { Typewriter } from 'react-simple-typewriter'
import { useContext, useState } from "react";
import OurTeam from "../OurTeam/OurTeam";
import { BiSolidDownArrow,BiSolidUpArrow } from "react-icons/bi";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Home = () => {
    useDocumentTitle('Home');


    const [isOpenFull, setIsOpenFull] = useState(false);
    const options = ['Bangladesh', 'Thailand', 'Indonesia', 'Malaysia', 'Vietnam','Florida','Cambodia'];
  
    const toggleFullList = () => {
      setIsOpenFull(!isOpenFull);
    };

    const {property,setFilterProperty , setShowAllBtn} = useContext(AuthContext);
    

    const filter = (filterBy) =>{

        const filteredData = property.filter((item) => {
            const country= item.country; 
            return (
              country.includes(filterBy)
            );
          });
          setFilterProperty(filteredData);
          setShowAllBtn(true);
    }


    return (
        <div className="container mx-auto min-h-screen">
            
            {/* Corousel Banner */}
            <div className="mx-auto w-[95%] h-[170px] md:w-full md:h-[500px] overflow-hidden rounded-lg">
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
                
                </Swiper>
            </div>

            {/* Property Listing Header and Filter*/}
            <div className=" container mx-auto my-10">
            <h1 className="font-jetBrains text-xl pl-2 md:pl-0">
                Top Tourists Spot
            </h1>

            <div className="mt-10 relative inline-block border rounded-md w-full">
                <div className="overflow-hidden bg-white rounded-md ">
                    {!isOpenFull && (
                        <ul className="py-1 grid grid-cols-3 items-center">
                        {options.slice(0, 3).map((option, index) => (
                            <li
                            onClick={()=>{filter(option)}}
                            key={index}
                            className=" mx-auto px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer">
                            {option}
                            </li>
                        ))}</ul>
                    )
                    }
                    {isOpenFull && (
                        <ul className="py-1 grid grid-cols-3 items-center">
                        {options.map((option, index) => (
                            <li
                            onClick={()=>{filter(option)}}
                            key={index + 3}
                            className=" mx-auto px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer"
                            >
                            {option}
                            </li>
                        ))}
                        </ul>
                    )}
                    
                </div>
                
                <button
                    className="mx-auto w-full text-center text-xs text-green-700 font-bold hover:cursor-pointer mt-2 inline-flex items-center gap-2 justify-center"
                    onClick={toggleFullList}>
                    {isOpenFull? 'VIEW FEWER LOCATIONS' : 'VIEW ALL LOCATIONS'}
                    {isOpenFull?<BiSolidUpArrow/>:<BiSolidDownArrow/> }
                    
                </button>
                
            </div>
            
            </div>

            {/* Team Section */}
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;