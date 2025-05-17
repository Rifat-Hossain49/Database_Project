import React from 'react'
import Navbar from './Navbar'

import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {customer_id, isLoggedIn,mail} from "../App";
import axios from "axios";

import farazi from '../images/farazi.jpg'; // Replace with actual image path
import rifat from '../images/rifat.jpg'; // Replace with actual image path
import bg from '../images/bg.jpg';

const Contact = () => {
    const click = async () => {
        var msg = document.getElementById("message").value;
        if (isLoggedIn) {
            try {
                console.log("in dashboard");
                var res = await axios.post('http://localhost:8080/contact', {
                    id: customer_id,
                    mail: mail,
                    txt: msg
                })
                alert(" Your message was sent");
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert("please login first");
        }
    }
    return (
        <div className="custom-background-contact">
            <Navbar />
            <div className="downbox">
                <div style={{ height: "0px" }} className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p style={{ marginLeft:930, fontFamily: "monospace", fontSize: 35,fontWeight:'bold',marginTop : -205,color:'black' }}>Developers Information</p>
                            <div className="row justify-content-center">
                                <Card sx={{ maxWidth: 350, marginLeft: 50, marginBottom: 5}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={farazi}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Musa Tur Farazi
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Student Of BUET.<br />
                                                Email: musatur330@gmail.com
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 350, marginLeft: 150, marginBottom: 5, marginTop : -69}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={rifat}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Rifat Hossain
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Student Of BUET.<br />
                                                Email: rifathosain2@gmail.com
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            <div className="col-md-6">
                <h3 className="heading mb-4" style={{marginLeft : 500,fontWeight:'bold',fontFamily : "sans-serif",color:'white',fontSize:50}}>Let's talk about everything!</h3>
                
            </div>
            <div className="col-md-6">
                <form className="mb-5" method="post" id="contactForm" name="contactForm">
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="text" style={{ marginTop: "15%" ,fontSize:20,fontWeight:'bold',color:'black'}} className="form-control" name="name" id="name"
                                placeholder="Your name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="text" style={{ marginTop: "3%" ,fontSize:20,fontWeight:'bold',color:'black'}} className="form-control" name="email" id="email"
                                placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="text" style={{ marginTop: "3%",fontSize:20,fontWeight:'bold',color:'black' }} className="form-control" name="subject" id="subject"
                                placeholder="Subject" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <textarea style={{ marginTop: "3%",fontSize:20,fontWeight:'bold',color:'black' }} className="form-control" name="message" id="message" cols="30"
                                rows="7" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input value="Send Message" style={{ marginTop: "3%",fontSize:20,fontWeight:'bold',color:'black' }}
                                className="btn btn-primary rounded-0 py-2 px-4" onClick={() => click()} />
                            <span ></span>
                        </div>
                    </div>
                </form>
                <div id="form-message-warning mt-4"></div>
                <div id="form-message-success" style={{marginTop:260,marginLeft:100,fontWeight:'bold',fontSize:30,color:'white'}}>
                “Traveling – it leaves you speechless,<br/> then turns you into a storyteller.”<br/> – Ibn Battuta
                </div>
            </div>
            
        </div>
    )
}

export default Contact;
