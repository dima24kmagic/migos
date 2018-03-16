import React, { Component } from 'react';
import quavo from '../images/meet-quavo.jpg';
import takeoff from '../images/meet-takeoff.jpg';
import offset from '../images/meet-offset.jpg';
console.log(quavo);
const Migos = (props) => {
  return(
    <div className="row d-flex flex-row">
      <div className="col-12">
        <h1 className="text-center display-4 display-sm-1 intro">Meet The Migos</h1>
      </div>
		<div className="col-12 meet-quavo">
			<h1 className="text-center display-3 font-weight-bold">QUAVO</h1>
			<img className="meet img-thumbnail w-100 obj-fit" src={quavo} alt=""/>
			<p className="lead">Quavious Keyate Marshall (born April 2, 1991), known professionally as Quavo, is an American rapper, singer, songwriter and record producer. He is best known as a member of the hip hop and trap music group Migos and the rap super group, Huncho Jack. The members of the Migos are all directly related. Quavo is Takeoff’s uncle and Offset's cousin</p>
		</div>
		<div className="col-12 meet-offset">
			<h1 className="text-center display-3 font-weight-bold">Takeoff</h1>
			<img className="img-thumbnail w-100 obj-fit" src={takeoff} alt=""/>
			<p className="lead">Krishnik Khari Ball is better known in the music industry by his stage name Takeoff and is part of this cool hip hop trio called ‘Migos’ with partners Quavo and Offset. Takeoff is known for his crazy beats and can produce groovy music out of thin air. He is extremely talented and a versatile performer sporting the genre appropriate looks with colored glasses and lots of bling. </p>
		</div>
		<div className="col-12 meet-takeoff">
			<h1 className="text-center display-3 font-weight-bold">Offset</h1>
			<img className="img-thumbnail w-100 obj-fit" src={offset} alt=""/>
			<p className="lead">Kiari Kendrell Cephus (born December 14, 1991), known professionally as Offset, is an American rapper, singer, and songwriter. He is best known as a member of the hip hop trio Migos, alongside his family members Takeoff and Quavo. He is also known for his current relationship with New York rapper Cardi B.</p>
		</div>
	</div>
  )
}

export default Migos;
