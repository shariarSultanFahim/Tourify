import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {

    const [countryInfo, setCountryInfo] = useState([]);
    const [randomCountryPhoto, setRandomCountryPhoto] = useState('');

    const countryForSearch = {countryForSearch : country};

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

            // Picking a random photo from all the tour spots in a country
            if(!randomCountryPhoto){
            const randomPhoto = data.filter(country => country.photo);
            const randomPhotoOfCountry = randomPhoto[Math.floor(Math.random() * randomPhoto.length)];
            setRandomCountryPhoto(randomPhotoOfCountry.photo);
            }
            
        })
    });

    


    return (
        <Fade triggerOnce>
           <Link to={`/countryDetails/${country}`} className={`w-[96%] mx-auto md:w-full`}>
            <div className='rounded-lg w-full h-60 md:h-96 bg-cover bg-center' 
            style={{backgroundImage:`url(${randomCountryPhoto})`}}>  
                <div className='h-full flex flex-col justify-center items-center rounded-lg'
                style={{ backgroundColor:'rgba(0, 0, 0, 0.2)'}}>

                    <div className='text-white text-3xl font-medium text-center'>
                        <h1 className='text-xl font-normal '>Visit</h1>
                        <h1 className='inline-flex items-center'><IoLocationOutline/> {country}</h1>
                    </div>

                </div>
            </div>
            
        </Link>  
        </Fade>
    );
};
CountryCard.propTypes = {
    country: PropTypes.string,
};
export default CountryCard;