import React, { Component } from 'react';
import tour from '../images/tour.png';
const Tours = (props) => {
  return(
    <div className="container d-flex flex-column align-items-center">
    	<h1 className="display-1 text-center">Migos Tour's</h1>
    	<img className="w-100 obj-fit" src={tour} alt=""/>

    	<table className="table table-dark w-100 table-striped table-hover">
    	  <thead className="thead-dark">
    		<tr>
    		  <th className="border-right" scope="col">Date</th>
    		  <th scope="col">City</th>
    		</tr>
    	  </thead>
    	  <tbody>
    		<tr>
    		  <th className="border-right" scope="row">MARCH 27</th>
    		  <td>MOWSCOW, RUSSIA SPACE CLUB</td>
    		</tr>
    		<tr>
    		  <th className="border-right" scope="row">MARCH 28</th>
    		  <td>JUAN-LES-PINS, FRANCE KISS CLUB</td>
    		</tr>
    		<tr>
    		  <th className="border-right" scope="row">MARCH 29</th>
    		  <td>LILLE, FRANCE LE NETWORK</td>
    		</tr>
    		<tr>
    		  <th className="border-right" scope="row">MARCH 30</th>
    		  <td>MALMO, SWEDEN BABEL</td>
    		</tr>
    		<tr>
    		  <th className="border-right" scope="row">MARCH 31</th>
    		  <td>BERLIN, GERMANY IMPERIAL</td>
    		</tr>
    	  </tbody>
    	</table>
    </div>
  )
}

export default Tours;
