import React , {useState}  from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { auth ,provider , signInWithPopup } from './firebase';


// import ToggleOffIcon from '@material-ui/icons/ToggleOff';


const Navbar = () => {
 
    const [userRes , setUserRes] = useState(false);

    const signInHandler = () => {
    
        signInWithPopup(auth, provider)
  .then((result) => {

    // The signed-in user info.
    const user = result.user;
    setUserRes(user);
   
    // ...
  }).catch((error) => {
    // Handle Errors here.
  
    const errorMessage = error.message;
    alert(errorMessage);
    // The email of the user's account used.
   

    // ...
  });
    }
   
    return (
        <div className="navbar__library" >
            
        <div className="logo-div__library">
        <span className="sidebar--toogle" onClick={ () => document.getElementById('sidebar__toggle').classList.toggle('displayBlock')  } >
                <div className="sidebar--block"></div>
                <div className="sidebar--block"></div>
                <div className="sidebar--block"></div>
            </span>
            <img className="logo__library" src="/images/icons8-library-building-100.png" alt="" />
        </div>

        <div className="search-div__library">
            <input type="text" className="search-input" /> <SearchIcon className="search-icon" />
        </div>

        <div className="info-div__library">
        
            <div className="profile-user">
              
                {userRes ? (
                    <React.Fragment  >
                       <img src={userRes.photoURL} alt="" className="user-profile" />
                <h3 className="username__profile"> {userRes.displayName} </h3> 
                    </React.Fragment>
                ) : (
                    <button className="login_btn" onClick={() => signInHandler() } >Login</button>
                )}
             
               
                <button className="donate-btn"> Donate </button>
            <button className="shop-btn"> Shop </button>
            </div>
        </div>

        </div>
    )
}

export default Navbar
