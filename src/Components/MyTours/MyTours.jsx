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



    return (
        <div className="container mx-auto min-h-screen my-10">
            <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl">Tours Added by <span className="font-medium md:font-bold text-green-800">You</span></h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Tour Name</th>
                        <th>Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        <br/>
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default MyTours;