import { useContext, useState } from "react";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Skeleton from "react-loading-skeleton";
import TourCards from "../Tours/TourCards";
import { BiSolidDownArrow,BiSolidUpArrow } from "react-icons/bi";
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
    TERipple,
  } from "tw-elements-react";

const AllTouristsSpot = () => {
    useDocumentTitle('All Tourist Spots');
    const [isOpenFull, setIsOpenFull] = useState(false);

    const {tours,sortedTours,setSortedTours, apiLoading,showAllBtn, setShowAllBtn} = useContext(AuthContext);

    const toggleFullList = () => {
      setIsOpenFull(!isOpenFull);
    };

    const sort = (sortBy) =>{
        if(sortBy == 'avarageCost'){
            const sorted = tours.slice().sort((a,b)=>{
                const costA = parseFloat(a.avarageCost.split(' ')[1]);
                const costB = parseFloat(b.avarageCost.split(' ')[1]);
                return costA - costB;
            })
            setSortedTours(sorted);
        }
        else if(sortBy == 'visitors'){
            const sorted = tours.slice().sort((a,b)=>{
                const costA = parseInt(a.visitorsPerYear);
                const costB = parseInt(b.visitorsPerYear);
                return costA - costB;
            });
            setSortedTours(sorted);
        }
    }

    const filter = (filterBy) =>{
        const filteredData = tours.filter((item) => {
            const country= item.country; 
            return (
              country.includes(filterBy)
            );
          });
          setSortedTours(filteredData);

          if(filterBy == '')
            setShowAllBtn(false);
          else
            setShowAllBtn(true);
    }

    const countries = [...new Set(tours?.map((option) => option.country))];
    

    

    return (
        <div className="md:container mx-auto my-10">
             <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
             Find Your Perfect <span className="font-medium md:font-bold text-green-800">Tour</span>
            </h1>
            <p className="lg:pb-4 mx-auto w-3/4 md:w-1/2 text-center opacity-70">Discover a world of exciting tours to suit every traveler. From bucket-list adventures to hidden gems, we have the perfect tour for you</p>

            <div className="mt-10 relative inline-block border rounded-md w-full">
                <div className="overflow-hidden rounded-md ">
                    {
                        apiLoading?
                        <>
                            <Skeleton count={10}/>
                        </>:
                        <>
                        {!isOpenFull && (
                            <ul className="py-1 grid grid-cols-3 items-center">
                            {countries.slice(0, 3).map((option, index) => (
                                <li
                                onClick={()=>{filter(option)}}
                                key={index}
                                className=" mx-auto px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer">
                                {option}
                                </li>
                            ))}</ul>
                        )}
                        {isOpenFull && (
                                <ul className="py-1 grid grid-cols-3 items-center">
                                
                                {countries.map((option, index) => (
                                    <li
                                    onClick={()=>{filter(option)}}
                                    key={index + 3}
                                    className=" mx-auto px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer"
                                    >
                                    {option}
                                    </li>
                            ))}
                            </ul>
                        )}
                        </>
                    }
                    
                </div>
                
                <button
                    className="mx-auto w-full text-center text-xs text-green-700 font-bold hover:cursor-pointer mt-2 inline-flex items-center gap-2 justify-center"
                    onClick={toggleFullList}>
                    {isOpenFull? 'VIEW FEWER LOCATIONS' : 'VIEW ALL LOCATIONS'}
                    {isOpenFull?<BiSolidUpArrow/>:<BiSolidDownArrow/> }
                    
                </button>
                
            </div>

            
            <div className="my-10 flex gap-2 justify-center items-center">
                <TEDropdown className="flex justify-center">
                 <TERipple rippleColor="light">
                    <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-green-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out  hover:bg-green-900 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-green-900 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] motion-reduce:transition-none">
                    Sort Tours
                    <span className="ml-2 [&>svg]:w-5 w-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </TEDropdownToggle>
                </TERipple>
                <TEDropdownMenu>
                <TEDropdownItem>
          <a onClick={()=>{sort('avarageCost')}} className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-base-100 px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100  active:bg-neutral-100 focus:bg-neutral-100 focus:outline-none active:no-underline  dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
          Avarage Cost
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a onClick={()=>{sort('visitors')}} className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-base-100 px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100  active:bg-neutral-100 focus:bg-neutral-100 focus:outline-none active:no-underline  dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
          Visitors
          </a>
        </TEDropdownItem>
      </TEDropdownMenu>
                </TEDropdown>

                <button onClick={()=>{filter('')}} 
                className={`text-white text-sm w-28 p-[9px] rounded-md  bg-green-800 border-none hover:bg-green-900 ${showAllBtn?'':'hidden'}`}
                >Show All</button>
            </div>
                
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    apiLoading?
                    <>
                    <Skeleton count={10}/>
                    <Skeleton count={10}/>
                    <Skeleton count={10}/>
                    </>
                    :
                    sortedTours.map((tour, idx)=> <TourCards key={idx} tour={tour}/>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;