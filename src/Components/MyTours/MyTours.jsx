import { useContext, useEffect, useState } from "react";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const MyTours = () => {
    useDocumentTitle('My Tour List');
    const [myList, setMyList] = useState([]);
    const {user,tours,setTours,sortedTours,setSortedTours} = useContext(AuthContext);

    const email = {email : user.email}

    useEffect(()=>{
        fetch('https://ph-assingment-10-tourify-server.vercel.app/myTourList',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(email)
        })
        .then(res => res.json())
        .then(data => {
            setMyList(data);
        })
    });

    
    const handleDelete = id =>{
        
        Swal.fire({
            title: "Do you want Delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
          }).then((result) => {
            if (result.isConfirmed) {

                // Deleting 
                fetch(` https://ph-assingment-10-tourify-server.vercel.app/myTourList/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0){

                        const remainingMyTours = myList.filter(tour => tour._id == id);
                        const remainingTours = tours.filter(tour => tour._id == id);
                        const remainingSortedTours = sortedTours.filter(tour => tour._id == id);
                        setMyList(remainingMyTours);
                        setTours(remainingTours);
                        setSortedTours(remainingSortedTours);

                       Swal.fire("Deleted!",
                        "Your Tour has been deleted.", 
                        "success"); 
                    }
                })
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });

    }

    return (
        <div className="mx-auto min-h-screen my-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl">Tours Added by <span className="font-medium md:font-bold text-green-800">You</span></h1>
            {!myList?
                    <>
                    <div className='h-full w-full flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
                    </>:
            <div>
                
            <div className="overflow-x-auto">
                
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Tours</th>
                        <th className="hidden md:table-cell">Avarage Cost</th>
                        <th className="hidden md:table-cell">Visitors per year</th>
                        <th className="hidden md:table-cell">Season</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        myList?.map((list, idx) => 
                        <tr key={idx}>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={list.photo} alt="Tour Photo" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{list.name}</div>
                            <div className="text-sm opacity-50">{list.country}</div>
                            </div>
                        </div>
                        </td>
                        <td className="hidden md:table-cell">
                            {list.avarageCost}
                        </td>
                        <td className="hidden md:table-cell">
                            {list.visitorsPerYear}
                        </td>
                        <td className="hidden md:table-cell">
                            {list.season}
                        </td>
                        <td>
                            <Link to={`/updateTour/${list._id}`} className="btn btn-xs text-white bg-green-800 hover:bg-green-900">Update</Link>
                        </td>
                        <th>
                        <button onClick={()=>{handleDelete(list._id)}} className="btn btn-xs text-white bg-green-800 hover:bg-green-900">Delete</button>
                        </th>
                        </tr>
                    )
                    }
                    
                    </tbody>
                </table>
                
                </div>
            </div>
}
        </div>
    );
};

export default MyTours;