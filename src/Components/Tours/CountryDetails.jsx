import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import { useParams } from "react-router-dom";
import TourCards from "./TourCards";


const CountryDetails = () => {

    const {countryName} = useParams();

    useDocumentTitle(`${countryName} Details`);

    const [countryInfo, setCountryInfo] = useState([]);

    const countryForSearch = {countryForSearch : countryName};

    useEffect(()=>{
        fetch('https://ph-assingment-10-tourify-server.vercel.app/countries',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(countryForSearch)
        })
        .then(res => res.json())
        .then(data => {
            setCountryInfo(data);
        })
    });

    if(!countryInfo)
        return <>
        <Skeleton count={10}/>
        <Skeleton count={10}/>
        <Skeleton count={10}/>
        </>

    return (
        <div className="mb-10">
        <div className="md:container mx-auto mb-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
            Explore the Enchantment of <span className="font-medium md:font-bold text-green-800">{countryName}</span>
            </h1>
            <p className="lg:pb-4 mx-auto w-3/4 md:w-1/2 text-center opacity-70">Discover hidden gems, iconic landmarks, and unforgettable experiences. Immerse yourself in diverse landscapes, vibrant cultures, and adventure</p>
            </div>
        <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                countryInfo?.map((tour, idx)=> <TourCards key={idx} tour={tour}/>)
            }
        </div>
        </div>
    );
};

export default CountryDetails;