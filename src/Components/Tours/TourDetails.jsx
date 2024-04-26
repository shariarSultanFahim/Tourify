import { useEffect, useState } from "react";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import { useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";



const TourDetails = () => {
    useDocumentTitle('Tour Details');
    const [currentTour, setCurrentTour] = useState(null);
    const id = useParams().id;

    useEffect(()=>{
        fetch(` https://ph-assingment-10-tourify-server.vercel.app/updateTour/${id}`,{
            method:'GET'
        })
        .then(res => res.json())
        .then(data => {
            setCurrentTour(data);
        })
    })
    return (
        <div className="md:container mx-auto min-h-screen ">
            <div className="mx-auto relative">
            <div className="absolute w-full h-[400px] rounded-lg bg-center bg-cover bg-no-repeat" 
            style={{backgroundImage:`url(${currentTour?.photo})`}}></div>

            <div className="absolute translate-y-[100%] left-[50%] -translate-x-[50%] w-[96%] md:w-auto md:h-auto bg-white  shadow-2xl rounded-lg px-2 py-4 md:p-4 space-y-4">

                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-black">{currentTour?.name}</h1>
                    <h1 className="text-sm font-light text-black w-full">{currentTour?.shortDescription}</h1>
                </div>
                <div className="text-sm md:text-md text-black grid grid-cols-2 gap-2">

                    <div>
                    <h1 className="inline-flex items-center gap-1"><IoLocationOutline /> {currentTour?.location}</h1>
                    </div>

                    <div>
                    <h1 className="inline-flex items-center gap-1"><FaMapLocationDot /> {currentTour?.country}</h1>
                    </div>

                    <div>
                    <h1 >Suggested Season : {currentTour?.season}</h1>
                    </div>

                    <div>
                    <h1 className="inline-flex items-center gap-1"><FaPeopleRobbery />{currentTour?.visitorsPerYear} visitors per year</h1>
                    </div>

                    <div>
                    <h1 className="inline-flex items-center">${currentTour?.avarageCost.split(' ')[1]} pey day</h1>
                    </div>
                    <div>
                    <h1 className="inline-flex items-center gap-1">Travel Time : {currentTour?.travelTime}</h1>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default TourDetails;