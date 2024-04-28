import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CountryCard from "./CountryCard";



const Countries = () => {
    const {tours,apiLoading} = useContext(AuthContext);

    if(apiLoading)
        return <>
        <br /><br /><br />
        <Skeleton/>
        <br />
        <Skeleton/>
        <br />
        <Skeleton count={10}/>
        </>

    const countries = [...new Set(tours?.map((option) => option.country))];

    

    return (
        <div>
            <div className="md:container mx-auto mt-10 md:mt-16 lg:mt-32 mb-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
            Where Will You Go <span className="font-medium md:font-bold text-green-800">Next</span>
            </h1>
            <p className="lg:pb-4 mx-auto w-3/4 md:w-1/2 text-center opacity-70">Dive deeper into each country and discover its hidden treasures</p>
            </div>

            <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                countries.map((country,idx)=>
                <CountryCard key={idx} country={country}></CountryCard>)
            }
            </div>
        </div>
    );
};

export default Countries;