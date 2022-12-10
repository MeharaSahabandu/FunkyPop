import React, { useState, useEffect } from "react";
import Axios from "axios";
import '../css/style.css';
import '../css/responsive.css';
import slide01 from '../images/slide01.png';
import slide02 from '../images/slide02.png';
import slide03 from '../images/slide03.png';
import pro1 from '../images/pro1.png';
import pro2 from '../images/pro2.png';
import pro3 from '../images/prod3.png';
import pro4 from '../images/pro4.png';
import pro5 from '../images/pro5.png';
import pro6 from '../images/pro6.png';
import pro7 from '../images/pro7.png';
import pro8 from '../images/pro8.png';
import pro9 from '../images/pro9.png';
import about from '../images/about.png';


export default function MainHome() {


    return (
        <section>
            <div className="hero_area">

                <header className="header_section">
                    <div className="header_top">
                        <div className="container-fluid">
                            <div className="top_nav_container">
                                <div className="contact_nav">
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Call : +01 123455678990
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            Email : demo@gmail.com
                                        </span>
                                    </a>
                                </div>

                                <div className="user_option_box">
                                    <a href="/MemberLogin" className="account-link">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span>
                                            Login
                                        </span>
                                    </a>
                                    <a href="" className="cart-link">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <span>
                                            Cart
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
                                    <span>
                                        Funky Pop
                                    </span>
                                </a>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className=""> </span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home</a>
                                        </li>
                                       
                                        <li className="nav-item">
                                            <a className="nav-link" href="/allCarts">Products</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/DeliverySection">Delivery</a>
                                        </li>


                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                
              
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h1>
                                                    Welcome to Funky Pop
                                                </h1>
                                                <p>
                                                    Get all the trendy designs from one place.<br/>
                                                    Your Favourite products are one click away. SHOP NOW!
                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={slide01} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </section>
              
            </div>


   

            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our Products
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro1} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                    White Oversize Tshirt - Men
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1700
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro2} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Navy Blue - Men
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1700
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro3} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Crop Top - Alpaca
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1400
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro4} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                    Crop Top - Astro
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1400
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro5} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                    Crop Top - Alpaca
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1400
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro6} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Crop Top - Monkey
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1400
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro7} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                    White Oversize Tshirt - Women
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1700
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro8} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Navy Blue - Women
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs.</span> 1700
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={pro9} alt=""/>
                                        <a href="" className="add_cart_btn">
                                            <span>
                                                Add To Cart
                                            </span>
                                        </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Crop Top - Alpaca
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>Rs. </span> 1400
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_box">
                        <a href="/AllCarts" className="view_more-link">
                            View More
                        </a>
                    </div>
                </div>
            </section>

        

            <section className="about_section">
                <div className="container-fluid  ">
                    <div className="row">
                        <div className="col-md-5 ml-auto">
                            <div className="detail-box pr-md-3">
                                <div className="heading_container">
                                   
                                </div>
                                <p>
                                    Funky pop is a renowned clothing brand in Sri Lanka bringing you the hihghest quality products 
                                    at the most affordable prices. Our Funky Pop team thrives to bring you the latest fashion 
                                    to your door steps. 
            
                                </p>
                                
                            </div>
                        </div>
                        <div className="col-md-6 px-0">
                            <div className="img-box">
                                <img src={about} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         

            <section className="why_us_section layout_padding text-light">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Why Choose Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/w1.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Fast Delivery
                                    </h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/w2.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Free Shipping
                                    </h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/w3.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Best Quality
                                    </h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info_contact">
                                
                                
                                <p>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    +94 714717010
                                </p>
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    funkypopsyles@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_info">
                                <h5>
                                    Information
                                </h5>
                                <p>
                                    Contact us through our Socials. @funky_pop
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_links">
                                <h5>
                                    Useful Link
                                </h5>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            Home
                                        </a>
                                    </li>
                                  
                                    <li>
                                        <a href="product.html">
                                            Products
                                        </a>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_form ">
                                <h5>
                                    Newsletter
                                </h5>
                                <form action="">
                                    <input type="email" placeholder="Enter your email"/>
                                        <button>
                                            Subscribe
                                        </button>
                                </form>
                                <div className="social_box">
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-youtube" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </section>
    )
}
