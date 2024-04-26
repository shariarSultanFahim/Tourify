import { useContext, useEffect, useState } from "react";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyTours = () => {
    useDocumentTitle('My Tour List');
    const [myList, setMyList] = useState([]);
    const {user} = useContext(AuthContext);

    const email = {email : user.email}

    useEffect(()=>{
        fetch('http://localhost:5000/myTourList',{
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

    const handleUpdate = (id) =>{
        console.log(id)
    }
    const handleDelete = (id) =>{
        console.log(id)
    }

    return (
        <div className="mx-auto min-h-screen my-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl">Tours Added by <span className="font-medium md:font-bold text-green-800">You</span></h1>
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
                        myList.map((list, idx) => 
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
                            <button onClick={()=>{handleUpdate(list._id)}} className="btn btn-xs text-white bg-green-800 hover:bg-green-900">Update</button>
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
        </div>
    );
};

export default MyTours;