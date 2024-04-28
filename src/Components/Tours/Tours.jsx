import { useContext} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TourCards from "./TourCards";
import { Link } from "react-router-dom";


const Tours = () => {
    const {tours,apiLoading} = useContext(AuthContext);
    
    

    return (
        <>
        <div id="exploreTour" className="md:container mx-auto mt-10 md:mt-16 lg:mt-32 mb-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
            Unveiling Hidden <span className="font-medium md:font-bold text-green-800">Gems</span>
            </h1>
            <p className="lg:pb-4 mx-auto w-3/4 md:w-1/2 text-center opacity-70">Explore unique destinations and off-the-beaten-path experiences on our most sought-after tours</p>
            </div>
        <div  className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                apiLoading?
                <>
                <Skeleton count={10}/>
                <Skeleton count={10}/>
                <Skeleton count={10}/>
                </>
                :
                tours?.slice(0, 6).map((tour, idx)=> <TourCards key={idx} tour={tour}/>)
            }
            
        </div>
        <div className=" flex justify-center py-6">
        <Link to='/allTouristSpots'  className=" btn btn-primary bg-green-800 text-white hover:bg-green-900 border-none hover:borded-none">All Tours</Link>
        </div>
        
        </>
    );
};

export default Tours;