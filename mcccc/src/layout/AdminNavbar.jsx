import React, { useContext } from "react";
// import Cristmas from "../../image/cristmas.png";
// import FooterLogo from "../../image/FooterLogo.jpg";
import './../style/sass/adminavbar.scss'
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
import { UserAuth } from '../context/UserAuth';

function AdminNavbar() {
    const  {isLogin, setIsLogin} = useContext(UserAuth)
  return (
    <div className="container">
      <header className="header-mc">
        <nav className="nav-mc">
          <div className="global-div-mc">
          <Link to="/"> <img className="image-mc" src="https://mcdonalds.az/images/static/mcdonalds-logo.jpg" alt="" /></Link>

    


          <div className="wholeheader">
          <div className="top-headers">
          <div className="language">
                <Button>Dil</Button>
                
              </div>
              <div className="email-div">
                <Button><Link to="/admin">Dashboard</Link> </Button>
              </div>
              <div className="email-div">
              <Button><Link to="/admin/addnewmeals">Meals</Link> </Button>
              </div>
              <div className="karier-div">
              <Button><Link to="/admin/addmeals">Add New Meals</Link></Button>
               
              </div>
            </div>
            <div className="end-header">
                  <Button>
                   <Link to="/login">Login</Link>
                  </Button>
                  <Button>
                   <Link to="/register">Register</Link>
                  </Button>
                  <Button>
                   <Link to="/wishlist">Wishlist</Link>
                  </Button>
                  <Button>
                   <Link to="/cart">Cart</Link>
                  </Button>
                </div>
          </div>





          
         
          </div>
       

        </nav>
      </header>
    </div>
  );
}

export default AdminNavbar
