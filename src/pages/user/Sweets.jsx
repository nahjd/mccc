import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "./../../style/sass/meals.scss";
import { Link,useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import {
  addToFavorite,
  removeFavorite,
  addToCart,
  removeFromCart,
  clearCart,
} from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import "./../../style/sass/meals.scss";
import { current } from "@reduxjs/toolkit";
import Footer from "../../layout/Footer";
import { IoSearchOutline } from "react-icons/io5";
function Sweets() {
  let [meals, setMeal] = useState([]);

  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const favinlocal = localStorage.getItem('favmeal');
    if (favinlocal) {
      dispatch(addToFavorite(JSON.parse(favinlocal))); 
    }
    const cartinlocal = localStorage.getItem('cartmeal');
    if (favinlocal) {
      dispatch(addToFavorite(JSON.parse(favinlocal))); 
    }
    axios(`http://localhost:3000/meals?categoryID=7`).then((res) => {
      setMeal(res.data);
    });
  }, [dispatch,categoryId]);
  const currentUser = useSelector((state) => state.login.currentUser);

  let [fav, setFav] = useState([]);
  const favItems = useSelector((state) => {
    return state.login.wishlist;
  });
  const cartItems = useSelector((state) => {
    return state.login.cart;
  });
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredMeals([]);
    } else {
      const filtered = meals.filter((meal) =>
        meal.name.toLowerCase().includes(query)
      );
      setFilteredMeals(filtered);
    }
  };
  return (
    <>
      <Container>
      <div style={{ border: "none" }} className="search-bar">
          <input
            style={{ fontSize: "23px", borderRadius: "6px", cursor: "pointer", height: "40px", marginRight: "10px", marginBottom: "10px" }}
            type="text"
            placeholder="Search meals..."
            value={searchQuery}
            onChange={handleSearch}

          />

          < IoSearchOutline fontSize={24} />


        </div>
        <Grid container spacing={2}>
          <Grid item xs={2}>
          <div className="sidenavs">
             {/* <div className="sevimliler">
                <img
                  className="sevimlimg"
                  src="https://mcdonalds.az/images/static/full_menu.jpg"
                  alt=""
                style={{width:"100px", marginBottom:"20px"}}
                />
                <h4>Müştəri sevimliləri</h4>
              </div> */}
              <div className="meals">
                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/5d61dc895b83f47eafc0f6cbfb353bad.png"
                    alt=""
                  />
                  <h4><Link to="/meals">Burgerlər</Link></h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg"
                    alt=""
                  />
                  <h4><Link to="/drinks">İçkilər</Link></h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/867cff5309d79402a604b6b8b6f6fcce.jpg"
                    alt=""
                  />
                  <h4><Link to="/happymeal">Happy Meal</Link></h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/d53a391310a492a79740d611bbfd53b9.jpg"
                    alt=""
                  />
                  <h4><Link to="/snacks">Qəlyanaltılar</Link></h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/5226794fdd6873f66f37ae0397286b8c.png"
                    alt=""
                  />
                  <h4><Link to="/salads">Salatlar</Link></h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/5465ab8529156a71e76c3d569863862b.png"
                    alt=""
                  />
                  <h4><Link to="/sauces">Souslar</Link></h4>
                </div>

                <div className="sortdiv" style={{ display: "flex" }}>
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/fed86781205af0e755e7553dbf0da55b.jpg"
                    alt=""
                  />
                  <h4><Link to="/sweets">Şirniyyat və kokteyllər</Link></h4>
                </div>

                <div className="sortdiv" style={{ display: "flex" }}>
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/decdafe4e7aa96fbb17420635b19eec3.jpg"
                    alt=""
                  />
                  <h4><Link to="/hotdrinks">İsti içkilər</Link></h4>
                </div>

                <div className="sortdiv">
                  <img
                    className="sevimlimg"
                    src="https://mcdonalds.az/images/879d7da33c37647f84a6a22e87c658b3.png"
                    alt=""
                  />
                  <h4><Link to="/mccafe">Mc Cafe®</Link></h4>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="cards">
              <h1 className="cardsmealheading">Şirniyyat</h1>
              <Grid container spacing={2}>
              {(searchQuery.length > 0 ? filteredMeals : meals).map((meal) => {
                    return (
                      <Grid
                        item
                        xs={4}
                        key={meal.id}
                        style={{ position: "relative" }}
                      >
                        <div
                          className="card"
                          style={{ borderStyle: "none", textAlign: "center" }}
                        >
                          <Link to={`/meals/${meal.id}`}>
                            <img
                              src={meal.image}
                              height={250}
                              width={300}
                              className="meal-image"
                            />
                            <p className="mealname">{meal.name}</p>
                          </Link>
                          <Button style={{ backgroundColor: "#ffbc0d", color: "black", padding: "5px", marginTop: "15px", borderRadius: "7px" }}
                            className="cartButton"
                            onClick={(e) => {
                              e.stopPropagation();
                              if( currentUser && currentUser.id){
                                axios.patch(`http://localhost:3000/users/${currentUser.id}`,{
                                  basket: [...cartItems, meal]
                                })
                                localStorage.setItem("cartmeal", JSON.stringify(meal))
                               }
                              dispatch(addToCart(meal));
                            }}
                          >
                            Add to Cart
                          </Button>
                          <FontAwesomeIcon
                            icon={
                              favItems.find((favItem) => favItem.id === meal.id)
                                ? solidHeart
                                : regularHeart
                            }
                            style={{
                              position: "absolute",
                              top: 10,
                              right: 10,
                              color: "red",
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const isFavorite = favItems.find(
                                (favItem) => favItem.id === meal.id
                              );
                              if (isFavorite) {
                                if (currentUser && currentUser.id) {
                                  axios.patch(`http://localhost:3000/users/${currentUser.id}`, {
                                    wishlist: favItems.filter((item) => item.id !== meal.id),
                                  });
                                  
                                  localStorage.removeItem("favmeal");
                                }
                                dispatch(removeFavorite(meal.id));
                              
                                
                              } else {
                                if( currentUser && currentUser.id){
                                  axios.patch(`http://localhost:3000/users/${currentUser.id}`,{
                                    wishlist: [...favItems, meal]
                                  })
                                  localStorage.setItem("favmeal", JSON.stringify(meal))
                                 }
                                dispatch(addToFavorite(meal));
                              }
                            }}
                          />
                        </div>
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
          </Grid>
          <Footer />
        </Grid>
      </Container>
    </>
  );
}

export default Sweets;