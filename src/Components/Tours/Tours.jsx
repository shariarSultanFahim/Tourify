import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TourCards from "./TourCards";


const Tours = () => {
    const {tours,apiLoading} = useContext(AuthContext);
    
    

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                apiLoading?
                <>
                <Skeleton/>
                <Skeleton count={10}/>
                </>
                :
                tours?.slice(0, 6).map((tour, idx)=> <TourCards key={idx} tour={tour}/>)
            }
            
        </div>
    );
};

export default Tours;