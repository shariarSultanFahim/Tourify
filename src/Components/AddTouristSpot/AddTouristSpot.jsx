import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {toast, Toaster} from "react-hot-toast"
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import Aos from "aos";
import 'aos/dist/aos.css'



const AddTouristSpot = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    useDocumentTitle('Add Tourist Spot');
    const {user} = useContext(AuthContext);

    const handleAddNewTouristSpot =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const shortDescription = e.target.description.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const avarageCost = 'USD ' + e.target.avarageCost.value + ' per day';
        const season = e.target.season.value;
        const travelTime = e.target.travelTime.value;
        const visitorsPerYear = e.target.visitors.value;
        const userName = user.displayName;
        const userEmail = user.email;

        const newTouristSpot = {name,photo,shortDescription,country,location,avarageCost,season,travelTime,visitorsPerYear,userName,userEmail}

        // console.log(newTouristSpot);

        // Sending data to server
        fetch('http://localhost:5000/touristSpots',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.insertedId){
                e.target.reset();
                toast.success('Added Successfully');
            }

        })
    }
    return (
        <div className="container mx-auto min-h-screen my-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
             Add New Tourist <span className="font-medium md:font-bold text-green-800">Spot</span>
            </h1>
        
            <div  data-aos="fade-up" className=" rounded  p-5 shadow-md">
                    <div className="w-full shadow sm:rounded-lg">
                    <div  className="px-4 py-8">
                        <form onSubmit={handleAddNewTouristSpot} className="space-y-2 md:space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Tourist Spot Name</label>
                                <input type="text" name="name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Spot Name" required /></div>

                                <div><label className="block text-sm font-medium text-gray-700">Photo</label>
                                <input type="text" name="photo" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Photo url" required/></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Country Name</label>
                                <input type="text" name="country" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Country" required/></div>

                                <div><label className="block text-sm font-medium text-gray-700">Location</label>
                                <input type="text" name="location" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Location" required/></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Avarage Cost Per Day</label>
                                <input type="number" name="avarageCost" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="USD" required/></div>

                                <div><label className="block text-sm font-medium text-gray-700">Seasonality</label>
                                <input type="text" name="season" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="like- summer, winter etc" required/></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div><label className="block text-sm font-medium text-gray-700">Travel Time</label>
                                <input type="text" name="travelTime" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="like- 3 Days" required/></div>

                                <div><label className="block text-sm font-medium text-gray-700">Total Visitors per Year</label>
                                <input type="number" name="visitors" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="like- 10000" required/></div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Short Description</label>
                                <textarea className="w-full border rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" name="description" rows="4" required></textarea>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button bg-green-800 border-none hover:bg-green-900">Add Spot</button></div>
                        </form>
                        
                    </div>
                    </div>
            
            </div>
        <div><Toaster position="top-right"/></div>

        </div>
    );
};

export default AddTouristSpot;