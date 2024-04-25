import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Tours = () => {
    const {filterSortTours, apiLoading} = useContext(AuthContext);

    return (
        <div>
            {
                apiLoading?
                <>
                <Skeleton/>
                <Skeleton count={10}/>
                </>
                :
                filterSortTours.map((tour, idx)=> <h1 key={idx}>{tour.name}</h1>)
            }
            
        </div>
    );
};

export default Tours;