import React, { useState } from 'react';
import Navbar from './Navbar';
import image from "../images/serviceItem.jpg";
import dp2 from "../images/dp2.jpg";
import cleaning from "../images/cleaning.jpg";
import giffy from "../images/giphy.gif";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { Carousel } from "react-bootstrap";

const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="custom-background-about">
      <Navbar />
      <div id="container">
      </div>
      <div id="content" style={{ marginLeft: "5px" }}>
        <div id="leftPan">
          <div id="room">
            <h2></h2>
            <img src={dp2} width="400" height="300" alt="" style={{marginLeft : 0}}/>
            
          </div>
        </div>
        <div id="rightPan">
          <div id="welcome">
            <h2></h2>
            <p style={{  fontSize: '18px' }}><span className="headline" style={{ fontWeight: 'bold', fontSize: '24px' }}>MyTour</span><br />
              Search and Compare Hundreds of Travel Sites. Find Great Deals for any Hotel Now!<br/> Create a Hotel Price Alert and Monitor Lodging Fares for Specific Travel Dates.<br/> No hidden costs. Book quick & easy. Save time and money. Exclusive deals
              . </p>
            <div className="clear"></div>
          </div>
          <div className="services">
            <h2></h2>
            <div className="servItem"><img src={image} width="400" height="300" alt="" style = {{marginLeft : 0}}/>
              
              <div className="clear"></div>
            </div>
            <div className="servItem">
              
              <div className="clear"></div>
            </div>
            <div className="servItem">
            
              
              <div className="clear"></div>
            </div>
          </div>
          <div className="activities">
            <h2></h2>
          
            <p><span className="headline" style={{ fontWeight: 'bold', fontSize: '24px' }}>MyTour is the best service provider</span><br />
              Discover the great deals, compare hotel prices & save money on your next holiday or trip.<br/>Get savings when you search hotel with MyTour!
            </p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="footer" style={{ marginLeft: "25%" }}>
        <p style={{ fontFamily: "fantasy", fontSize:30,color:'white'}}
        >
          Copyright &copy; MyTour | Designed by Farazi(2005038) and Rifat(2005032)</p>
      </div>
    </div>
  );
}

export default About;
