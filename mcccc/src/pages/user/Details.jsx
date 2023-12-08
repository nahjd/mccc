import React, { useEffect, useState } from 'react'
import './../../style/sass/detail.scss'
import axios from 'axios';
import {  useParams } from 'react-router-dom'
import Footer from '../../layout/Footer';
function Detail() {
    const {id} = useParams();
    const [meals, setMeal] = useState([])
    useEffect(()=>{
        axios(`http://localhost:3000/meals/${id}`).then((res)=>{
            setMeal(res.data)
        })
    },[id])
    
    return (
        <section className='burgerdetail'>
            <div className="container">
                <div className="burgerdiv">
                    <div className="leftburger">
                        <img src={meals.image} alt="" />
                    </div>
                    <div className="rightburger">
                        <h1>{meals.name}</h1>
                        <div className="text">
                            <p>{meals.description} </p>
                        </div>
                    </div>
                </div>
                <section className='burgermedium'>
                    <div className="container2"> <br />
                        <h1>Əlaqədar məhsullar</h1>
                        <div className="cardburger">

                            <div className=" card card1">
                                <img src="https://mcdonalds.az/images/d8435c28c90f173578fe8be07fc3f8f1.png" alt="" />
                                <span>Chicken Fresh</span>
                            </div>
                            <div className=" card card2">
                                <img src="https://mcdonalds.az/images/03b40005e5a59f4a669df3fdc5086e23.png" alt="" />
                                <span>Fish Fresh</span>
                            </div>
                            <div className=" card card3">
                                <img src="https://mcdonalds.az/images/f3e9c70d0d9c7b7f1244f95802b3d0a3.png" alt="" />
                                <span>Shaurma Roll</span>
                            </div>
                            <div className=" card card4">
                                <img src="https://mcdonalds.az/images/2055e139434f99ea933a48f0e5b9fdd2.png" alt="" />
                                <span>McCrispy™</span>
                            </div>
                            {/* <div className=" card card4">
                                <img src="https://mcdonalds.az/images/2055e139434f99ea933a48f0e5b9fdd2.png" alt="" />
                                <span>McCrispy™</span>
                            </div> */}

                        </div>
                    </div>

                </section>
                {/* <button >Salam</button> */}
            </div>
            <Footer />
        </section>
    )
}

export default Detail