import { useContext, useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css'

const NavBar = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    
    
      
    const {theme, setTheme,isLoading,user,userName,setUserName,logOut,currentPhoto,setCurrentPhoto} = useContext(AuthContext);

    const handleToggleTheme = (e) => {
        if(e.target.checked) {
          setTheme('dark');
          document.querySelector("html").setAttribute("data-theme",'dark');
        }
        else{
          setTheme('light');
          document.querySelector("html").setAttribute("data-theme",'light');
        }
      };
    

    const handleLogOut =()=>{
        logOut();
        setUserName('');    
        setCurrentPhoto('https://rsctarapur.ac.in/web/public/user/assets/img/dummy-user.png')
    }

    const items = <>
    <NavLink to={"/"} className={({ isActive }) => isActive ? 'px-3 py-2 bg-transparent text-green-800  rounded-xl  ' : 'btn-ghost border-none bg-transparent hover:bg-transparent px-3 py-2 rounded-xl transition duration-300 ease-in-out hover:scale-110  '}>Home</NavLink>
    <NavLink to='/allTouristSpots' className={({ isActive }) => isActive ? 'px-3 py-2 bg-transparent text-green-800  rounded-xl ' : 'btn-ghost border-none bg-transparent hover:bg-transparent px-3 py-2 rounded-xl transition duration-300 ease-in-out hover:scale-110 '}>All Tourists Spot</NavLink>
    {
        user&&<NavLink to='/addTouristSpot' className={({ isActive }) => isActive ? 'px-3 py-2 bg-transparent text-green-800  rounded-xl ' : 'btn-ghost border-none bg-transparent hover:bg-transparent px-3 py-2 rounded-xl transition duration-300 ease-in-out hover:scale-110 '}>Add Tourists Spot</NavLink>
    }
    {
        user&&<NavLink to='/myTourList' className={({ isActive }) => isActive ? 'px-3 py-2 bg-transparent text-green-800  rounded-xl ' : 'btn-ghost border-none bg-transparent hover:bg-transparent px-3 py-2 rounded-xl transition duration-300 ease-in-out hover:scale-110 '}>My List</NavLink>
    }
    
    
    </>

    return (
        
        <div data-aos="fade-down" className="relative md:container z-[999] py-4 mb-4 mx-auto navbar ">
            <div className="md:navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    
                    </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 absolute z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    
                    {items}
                    
                </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>
            </div>
            <div>
            <Link to='/' className="navbar-center btn bg-transparent hover:bg-transparent border-none hover:border-none shadow-none text-xl pl-0">
                    <img className="hidden h-3/4 md:block " src="/Tourify.png" alt="" />
                    Tourify</Link>
            </div>
            
            <div className="navbar-end space-x-2">
                {
                    user?
                    <div className="dropdown dropdown-end" data-tip={userName}>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Profile Photo" src={currentPhoto} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow border-2 menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <Link to='/profile' className="justify-between">
                            Profile
                        </Link>
                        </li>
                        
                        <li><a onClick={handleLogOut}>Logout</a></li>
                    </ul>
                    </div>:
                    <div>
                    {
                        !isLoading?user?'':
                        <>
                        <p><Link to='/login'><span className="hover:underline">Login </span></Link>
                        / 
                        <Link to='/register'><span className="hover:underline"> Register</span></Link></p>
                        </>
                        :''
                    }
                    </div>
                }

                {/* Theme Controller */}
                <label className="cursor-pointer grid place-items-center">
                <input
                onChange={handleToggleTheme}
                checked={theme==='light'?false:true}
                 type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;