import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from "react";
import {toast, Toaster} from "react-hot-toast"
import { useParams } from "react-router-dom";

const UpdateTour = () => {
    useDocumentTitle('Update Tourist Spot');
    const [currentTour, setCurrentTour] = useState(null);
    const id = useParams().id;

    useEffect(()=>{
        Aos.init();
        
        fetch(` https://ph-assingment-10-tourify-server.vercel.app/updateTour/${id}`,{
            method:'GET'
        })
        .then(res => res.json())
        .then(data => {
            setCurrentTour(data);
        })
    })

    const handleUpdateTouristSpot =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const shortDescription = e.target.description.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const avarageCost = e.target.avarageCost.value;
        const season = e.target.season.value;
        const travelTime = e.target.travelTime.value;
        const visitorsPerYear = e.target.visitors.value;

        const updatedTourSpot = {name,photo,shortDescription,country,location,avarageCost,season,travelTime,visitorsPerYear};

        fetch(` https://ph-assingment-10-tourify-server.vercel.app/updateTour/${id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedTourSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.modifiedCount);
            if(data.modifiedCount > 0){
                toast.success('Updated Successfully');
            }
        })
        
        
    }
    return (
        <div className="md:container mx-auto min-h-screen my-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
             Update Tourist <span className="font-medium md:font-bold text-green-800">Spot</span>
            </h1>
        
            <div  data-aos="fade-up" className=" rounded  p-5 shadow-md">
                    <div className="w-full shadow sm:rounded-lg">
                    <div  className="px-4 py-8">
                        <form onSubmit={handleUpdateTouristSpot} className="space-y-2 md:space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Tourist Spot Name</label>
                                <input  type="text" name="name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                defaultValue={currentTour?.name}/></div>

                                <div><label className="block text-sm font-medium text-gray-700">Photo</label>
                                <input type="text" name="photo" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                defaultValue={currentTour?.photo}/></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Country Name</label>
                                <input type="text" name="country" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue={currentTour?.country}/></div>

                                <div><label className="block text-sm font-medium text-gray-700">Location</label>
                                <input type="text" name="location" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue={currentTour?.location}/></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Avarage Cost Per Day</label>
                                <input type="text" name="avarageCost" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                defaultValue={currentTour?.avarageCost}/></div>

                                <div><label className="block text-sm font-medium text-gray-700">Seasonality</label>
                                <input type="text" name="season" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue={currentTour?.season}/></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Travel Time</label>
                                <input type="text" name="travelTime" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue={currentTour?.travelTime}/></div>

                                <div><label className="block text-sm font-medium text-gray-700">Total Visitors per Year</label>
                                <input type="number" name="visitors" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue={currentTour?.visitorsPerYear}/></div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Short Description</label>
                                <textarea className="w-full border rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" name="description" defaultValue={currentTour?.shortDescription} rows="4"></textarea>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button bg-green-800 border-none hover:bg-green-900">Update Info</button></div>
                        </form>
                        
                    </div>
                    </div>
            
            </div>
        <div><Toaster position="top-right"/></div>

        </div>
    );
};

export default UpdateTour;