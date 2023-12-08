import React, { useState } from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Card, CardMedia, CardContent, Typography, CardActions, } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { addToCart, addToFavorite, clearCart, clearFav, removeFavorite } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Wishlist = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state)=> state.login.currentUser)
  const favItems = useSelector(state => {   
    return state.login.wishlist;  
  });
  
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <Container className="py-4 mt-5">
      <h1
        
      >
        {isEmpty ? "Your Wishlist is Empty" : "The Wishlist:"}
      </h1>
      <Container className="py-4 mt-5">
      <Grid container spacing={3}>
      {
         favItems.map((favItem)=> {  
     return      (
    <Grid item xs={4} key={favItem.id}>
    <Card sx={{ maxWidth: 345 }} style={{ marginLeft: 50 }}>
                    <FontAwesomeIcon icon={faHeart} style={{ marginLeft: 310, color: 'red', cursor: "pointer" }} onClick={()=>{
      if (currentUser && currentUser.id) {
        axios.patch(`http://localhost:3000/users/${currentUser.id}`, {
          wishlist: favItems.filter((item) => item.id !== favItem.id),
        });
        
        localStorage.removeItem("favmeal");
      }
      dispatch(removeFavorite(favItem.id));

    }} />
   
        <CardMedia
          sx={{ height: 140 }}
          image={favItem.image}
          
          style={{width:200, margin:"0 auto"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {favItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{marginLeft:110}}>
           {favItem.description}
          </Typography>
        </CardContent>
        <button style={{backgroundColor:'gold', padding:10, width:120, border:"none", borderRadius:8 , marginLeft:200, marginBottom:20 , cursor:"pointer"}}
                  variant="danger"
                  className="m-2"
                 onClick={()=>{
                  dispatch(addToCart(favItem))
                 }}
                >
                  <BsCartX size="1.7rem" />
                  Add to Cart
                </button>
      </Card>
    </Grid>
    )
  
  })
 }
 
  

       </Grid>
        {/* {!isEmpty && ( */}
          <Row
            style={{ position: "absolute", bottom: "850px" }}
           
          >
            <div style={{ display: "flex" }}></div>
            <div style={{ position: "relative", left: "1480px", top: "70px" }}>
           <div>
              <h1>Total Price: Rs. {cartTotal}</h1>
            </div>
            <div  >
              
            <button variant="success" className="m-2" style={{ backgroundColor: 'gold', cursor: "pointer", padding: 10, width: 150, border: "none", borderRadius: 8, position: "absolute", left: "80px", top: "52px", background: "gold" }} 
              onClick={()=>{
                dispatch(clearFav())
              }}
              >
                <BsCartCheck size="1.7rem" />
                Clear All
              </button>
            </div></div>
          </Row>
         {/* )}  */}
      </Container>
    </Container>
  );
};

export default Wishlist;