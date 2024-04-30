import  { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
        document.querySelector("html").setAttribute("data-theme",storedTheme);
      }

    }, []);


    const [user,setUser] = useState(null)
    const [userName, setUserName] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [showAllBtn , setShowAllBtn] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState('https://rsctarapur.ac.in/web/public/user/assets/img/dummy-user.png');
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    
    
    const registerUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
       
    }
    const loginUser = (email,password) =>{
       return signInWithEmailAndPassword(auth,email,password)
        
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider)
    }
    const logOut = () =>{
        localStorage.clear();
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
           setUser(currentUser);
           setUserName(currentUser.displayName);
           setCurrentPhoto(currentUser.photoURL);
          } else {
            setUser(null)
          }
          setLoading(false);
        });

        return ()=>{
          unsubscribe()
        }
  },[]) 
    


  // API Loading
      const [tours, setTours] = useState(null);
      const [apiLoading, setApiLoading] = useState(true);
      const [error, setError] = useState(null);
      const [sortedTours, setSortedTours] = useState(null);

      const fetchData = async () => {
        try {
          const response = await fetch('https://ph-assingment-10-tourify-server.vercel.app/touristSpots',{
            method:'GET'
          });
          const responseData = await response.json();
          setTours(responseData);
          setSortedTours(responseData);

        } catch (error) {
          setError(error);  
        } finally {
          setApiLoading(false);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

      

    const authInfo={
        theme, 
        setTheme,
        isLoading,
        registerUser,
        loginUser,
        user,
        userName,
        setUserName,
        error,
        logOut,
        setUser,
        googleLogin,
        githubLogin,
        currentPhoto, 
        setCurrentPhoto,
        tours,
        setTours,
        apiLoading,
        sortedTours,
        setSortedTours,
        showAllBtn ,
        setShowAllBtn,
        
    }
    
    

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
