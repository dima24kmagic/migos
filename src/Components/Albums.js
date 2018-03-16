import React, { Component } from 'react';

import img1 from '../images/pic-1.jpg';
import img2 from '../images/pic-2.jpg';
import img3 from '../images/pic-3.jpg';
import img4 from '../images/pic-4.jpg';
import img5 from '../images/pic-5.png';
import img6 from '../images/pic-6.png';
import img7 from '../images/pic-7.jpg';
import img8 from '../images/pic-8.jpeg';
import img9 from '../images/pic-9.jpg';
import img10 from '../images/pic-10.jpg';
import img11 from '../images/pic-11.jpg';
import img12 from '../images/pic-12.jpg';

const Albums = (props) => {
  return(
    <div className="container">
      <p className="display-4 text-center mt-5 glow">CULTURE II</p>

      <div className="my-line mb-3">
        <div className="line"></div>
        <span className="circle"></span>
        <div className="line"></div>
      </div>

      <div className="row text-center">
        <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100" src={img1} alt=""/></div>
        <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100" src={img2} alt=""/></div>
        <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100" src={img3} alt=""/></div>
        <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100" src={img4} alt=""/></div>
        <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100" src={img5} alt=""/></div>
        <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100" src={img6} alt=""/></div>
      </div>

      <div className="my-line my-3">
        <div className="line"></div>
        <span className="squad"></span>
        <div className="line"></div>
      </div>

      <p className="display-4 text-center glow">YOUNG RICH NATION</p>

      <div className="my-line my-3">
        <div className="line"></div>
        <span className="squad"></span>
        <div className="line"></div>
      </div>

        <div className="row text-center">
          <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100 obj-fit" src={img7} alt=""/></div>
          <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100 obj-fit" src={img8} alt=""/></div>
          <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100 obj-fit" src={img9} alt=""/></div>
          <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100 obj-fit" src={img10} alt=""/></div>
          <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100 obj-fit" src={img11} alt=""/></div>
          <div className="col-12 col-sm-6 col-lg-4"><img className="img-thumbnail img-fluid w-100 h-100 obj-fit" src={img12} alt=""/></div>
      </div>


      <div class="my-line my-sm-2 mt-3">
    		<div class="line"></div>
    		<span class="squad"></span>
    		<div class="line"></div>
    	</div>

    	<h1 class="display-4 text-center mb-sm-5 mb-4">Reviews</h1>




<div class="row d-sm-flex flex-sm-row justify-content-start reviews mb-sm-3">
     {props.reviews.map((review, index) => {
       return(
         <div className="col-12 col-sm-6 col-lg-4 mb-2" key={index}>
   	      <div className="row flex-row flex-sm-column flex-xl-row">
   			    <img src={review.img} className="big-sean mr-1 review align-self-center align-self-lg-left obj-fit"/>
     				<blockquote className="blockquote text-left mb-1">
     					<h2 className="m-0 align-self-center text-left text-sm-center text-xl-left">{review.name}</h2>
     					<footer className="blockquote-footer text-capitalize text-center text-xl-left">
     					{review.text}
     					</footer>
     				</blockquote>
   		   </div>
   	   </div>
       )
     })}
</div>








    </div>
  )
}

export default Albums;
