import React, { useContext } from "react";
// import Cristmas from "../../image/cristmas.png";
// import FooterLogo from "../../image/FooterLogo.jpg";
import "./../style/sass/navbar.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/UserAuth";
import { ThemeProvider } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
function Navbar() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <div className="container" >
      <header className="header-mc" style={{marginTop:0}}>
        <nav className="nav-mc">
          <div className="global-div-mc">
            <Link to="/">
              {" "}
              <img
                className="image-mc"
                src="https://mcdonalds.az/images/static/mcdonalds-logo.jpg"
                alt=""
              />
            </Link>

            <div className="wholeheader" >
              <div className="top-headers">
                <div className="language">
                  <Button><h4>Dil </h4></Button>
                </div>
                <div className="email-div" >
                 
                    <Link> <h4>E-məktublara abunəlik</h4></Link>{" "}
                
                </div>
                <div className="karier-div">
                  <Button>
                    
                    <Link><h4>Karyera</h4></Link>
                    
                  </Button>
                  
                </div>
                
              </div>
              <div 
              className="end-header"
              style={{display:"flex",justifyContent:"space-between"}}>
                <Button>
                 <Link to="/meals"><h4>Menyumuz</h4></Link>
                </Button>
                <Button>
                  <Link to="/about"> <h4>Yeməklərimiz haqqında</h4></Link>
                 
                </Button>
                <Button>
                 <Link to="/adress"><h4>Restoranların ünvanları </h4></Link>
                </Button>
               
              </div>
            </div>  
            <button className="header-btn"  > <Link to="/profile"> 
            
            Profil</Link></button>
                {!isLogin ? (
              <>
               <Link to="/login"><LoginIcon className="login-icon"></LoginIcon></Link>
               <Link to="/register"><HowToRegIcon className="reg-icon"></HowToRegIcon ></Link>
              </>

                ): (
               <Link to="/login" onClick={()=>{localStorage.removeItem("loggeduser")}}><LoginIcon className="login-icon"></LoginIcon></Link>

                )}
                 <Link to="/wishlist"> <FavoriteIcon className="fav-icon1" ></FavoriteIcon></Link>

               <Link to="/cart" > <ShoppingBasketIcon className="basket-icon"></ShoppingBasketIcon></Link>

              
          </div>
          {/* <div className="profile">
            <div className="user">
              {!isLogin ? (
                <>`
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button>
                    <Link
                      to="/login"
                      onSubmit={() => {
                        dispatch(logout());
                        
                      }}
                    >
                      Logout
                    </Link>
                  </Button>
                  <Button>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
            <div className="icns">
              <Button>
                <Link to="/wishlist">Wishlist</Link>
              </Button>
              <Button>
                <Link to="/cart">Cart</Link>
              </Button>
            </div>
          </div> */}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;