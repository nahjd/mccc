import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../style/sass/profile.scss";
const Profile = () => {
  const currentUser = useSelector((state) => state.login.currentUser);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

  
     <div className="pro"> 
     <div className="pro2">
     <h2>Profile Page</h2> 
      <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="" /> 

      {currentUser ? (
        <div className="data">
          <div>
            <strong>Name:</strong> {currentUser.name}
          </div>
          <div>
            <strong>Password:</strong> 
            {showPassword ? currentUser.password : "**"} 
            <button style={{background:"#ffbc0d", color:"black", cursor:"pointer", border:"none",borderRadius:"5px", fontSize:"21px", margin:"5px", padding:"5px"}} onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div><div>
            <strong>Balance:</strong> {currentUser.balance}
          </div>
          <div>
            <strong>Wishlist:</strong> {currentUser.wishlist}
          </div> <div>
            <strong>Cart:</strong> {currentUser.cart}
          </div>
        </div>
      ) : (
        <p style={{marginLeft:150}}>Please log in to view your profile.</p>
      )}
  
     </div>

     

    </div>
   
  );

};



export default Profile;










          {/* <strong>Wishlist:</strong> {currentUser.wishlist.map((item) => item.name).join(", ")} */}
          {/* </div> <div>
          <strong>Cart:</strong>
{currentUser.basket.map((item) => (
  <div key={item.id}>
    {item.name} - {item.price}
  </div>
))}          </div> */}
      