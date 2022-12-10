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
                                    <a href="" className="account-link">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span>
                                            My Account
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
                                            <a className="nav-link" href="about.html"> About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="product.html">Products</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="product.html">Delivery</a>
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
                                                    Welcome to our shop
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt
                                                    quo quidem ad optio.
                                                </p>
                                                <a href="">
                                                    Read More
                                                </a>
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
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h1>
                                                    Welcome to our shop
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt
                                                    quo quidem ad optio.
                                                </p>
                                                <a href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={slide02} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h1>
                                                    Welcome to our shop
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt
                                                    quo quidem ad optio.
                                                </p>
                                                <a href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={slide03} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_btn_box">
                            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                <span className="sr-only">Next</span>
                            </a>
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
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
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_box">
                        <a href="" className="view_more-link">
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
                                    <h2>
                                        We Provide Best For You
                                    </h2>
                                </div>
                                <p>
                                    Totam architecto rem beatae veniam, cum officiis adipisci soluta perspiciatis ipsa, expedita maiores quae
                                    accusantium. Animi veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis sit labore
                                    officia!
                                    Repellat expedita, deserunt eum soluta rem culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae
                                    aperiam animi sint earum, ex unde cupiditate, molestias dolore quos quas possimus eveniet facilis magnam?
                                    Vero, dicta.
                                </p>
                                <a href="">
                                    Read More
                                </a>
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

         

            <section className="why_us_section layout_padding">
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
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
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
                                        Free Shiping
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
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
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
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
                                <h5>
                                    <a href="" className="navbar-brand">
                                        <span>
                                            Minics
                                        </span>
                                    </a>
                                </h5>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    Address
                                </p>
                                <p>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    +01 1234567890
                                </p>
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    demo@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_info">
                                <h5>
                                    Information
                                </h5>
                                <p>
                                    Eligendi sunt, provident, debitis nemo, facilis cupiditate velit libero dolorum aperiam enim nulla iste
                                    maxime corrupti ad illo libero minus.
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
                                        <a href="about.html">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="product.html">
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="why.html">
                                            Why Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="testimonial.html">
                                            Testimonial
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
