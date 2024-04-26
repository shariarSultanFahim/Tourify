import PropTypes from 'prop-types';
import { useContext } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const TourCards = ({tour}) => {
    const {_id, name, photo, shortDescription,location,country,avarageCost} = tour;
    const {theme} = useContext(AuthContext);

    return (
        <Link to={`/tourDetails/${_id}`} className={`w-[96%] mx-auto md:w-full border-2 border-transparent rounded-xl shadow-2xl hover:border-green-800`}>
            <div className='rounded-lg w-full h-60 md:h-96 bg-cover bg-center' 
            style={{backgroundImage:`url(${photo})`}}>  
                <div className='p-6 h-full flex flex-col justify-between rounded-lg'
                style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>

                    <div className='text-white text-3xl font-medium'>
                        <h1 className='text-xl font-normal'>Pay Daily</h1>
                        <h1>${avarageCost.split(' ')[1]}</h1>
                    </div>

                    <div className='text-white text-xl md:text-2xl lg:text-3xl font-light'>
                        <h1>{name}</h1>
                        <h1 className='text-base md:text-xl font-medium inline-flex items-center gap-1'><IoLocationOutline/>{location},{country}</h1>
                    </div>
                </div>
            </div>
            
        </Link>
    );
};
TourCards.propTypes = {
  tour: PropTypes.array.isRequired,
};
export default TourCards;