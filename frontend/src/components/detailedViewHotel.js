import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/logoproject.jpg";
import {useNavigate} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import data from "./data";
import data2detail from './Data2detailedView'
import { styled } from '@mui/material/styles';
import {CardActions, Collapse, Grid} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import image1 from "../images_cards/hotelcard-1.jpg"
import image2 from "../images_cards/hotelcard-2.jpg"
import image3 from "../images_cards/hotelcard-3.jpg"
import image4 from "../images_cards/hotelcard-4.jpg"
import image5 from "../images_cards/hotelcard-5.jpg"
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import logo2 from "../images/profileicon.jpg"
import {hotelDetails,hotel_name,hotelServices,hotelFacilities} from "./AfterSearchFromHome";
import {isLoggedIn} from "../App";

var nav


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



const DetailedViewHotel = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    nav = useNavigate();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace',fontSize:25}}
                            class="nav-item" onClick={() => {
                            nav("/detailedViewHotel")
                        }}>
                            {hotel_name}
                        </li>
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace',fontSize:25}}
                            class="nav-item" onClick={() => {
                            nav("/afterSearchFromHome")
                        }}>
                            Hotels
                        </li>
                        {/*<li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}*/}
                        {/*    class="nav-item" onClick={() => {*/}
                        {/*    nav("/Servicehotel")*/}
                        {/*}}>*/}
                        {/*    Services*/}
                        {/*</li>*/}
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace',fontSize:25}}
                            class="nav-item" onClick={() => {
                                if(isLoggedIn){
                                    nav("/bookingDate")
                                }
                                else
                                {
                                    alert("you must sign in to book roomes")
                                    nav("/login");
                                }

                        }}>
                            Book
                        </li>


                    </ul>

                </div>
            </nav>


            <Carousel style={{height: "600px"}}>
                <Carousel.Item interval={100}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/hotelpic5.jpg"
                         alt="First slide"

                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/hotelpic1.jpg"
                         alt="First slide"

                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/hotelpic2.jpeg"
                         alt="First slide"

                    />
                </Carousel.Item>

            </Carousel>
            <h4 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Featured Rooms</h4>
            <h1 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Rooms and Suites</h1>
            <Grid container spacing={4} padding={4}>
                {hotelDetails.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Card sx={{maxWidth: 500}} className="a" >
                                <CardMedia
                                    component="img"
                                    height="250"
                                    src={image2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {item.room_type}
                                    </Typography>
                                    <Typography variant="body" color="textSecondary" style={{ color: 'black', fontFamily: 'Arial',fontSize:23 }}>
                                        cost per night: {item.cost}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ color: 'black', fontFamily: 'Calibri',fontSize:18 }}>
                                        {item.available_rooms} rooms available
                                    </Typography>
                                </CardContent>
        
                                <CardActions>

                                    <Button size="small">Book now</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    )
                })}
            </Grid>
            <div style={{marginTop: "150px", background: "#d4ebf3"}}>
               

            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <h3 style={{marginLeft: "2%"}}>Services & Facilities:</h3>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{fontWeight:'bold',fontSize:18,marginLeft:320}}>*24/7 Front Desk<br/>*Room Cleaning<br/>*Room Amenities<br/>*Room Service<br/>*Restaurants and Dining<br/>*Swimming Pool<br/>*Fitness Center<br/>*Wi-Fi and Internet Access<br/>*Parking</p>
            </div>
            
            <div className="columns cols_33" style={{display: "flex", flexDirection: "row"}}>
                <ul style={{fontFamily: "Times New Roman"}}>
                {hotelServices.map((item)=>{
                    return (
                        <ul style={{fontFamily: "Times New Roman"}}>
                        <li> {item.description} </li>
                            cost:{item.cost} tk
                    </ul>
                    )
                })}
                </ul>

                <ul style={{fontFamily: "Georgia, serif", marginLeft: "25%"}}>
                    {hotelFacilities.map((item)=>{
                        return (
                            <ul style={{fontFamily: "Georgia, serif"}}>
                                <li> {item.description} </li>
                            </ul>
                        )
                    })}
                </ul>
            </div>
            <Carousel style={{height: "600px"}}>
                <Carousel.Item interval={100}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/food.jpg"
                         alt="First slide"

                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/parking.jpg"
                         alt="First slide"

                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/wifi.jpg"
                         alt="First slide"

                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/pool.jpg"
                         alt="First slide"

                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/gym.jpg"
                         alt="First slide"

                    />
                </Carousel.Item>

            </Carousel>
            {/*<div>*/}
            {/*    <h4 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Reviews________</h4>*/}
            {/*    <h1 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Guest Reviews</h1>*/}
            {/*    <Grid container spacing={4} padding={4}>*/}
            {/*        {hotelDeatils.map((item2, index) => {*/}
            {/*            return (*/}
            {/*                <Grid item xs={12} md={4}>*/}
            {/*                    <Card sx={{maxWidth: 345}} style={{background:"#c1c5c5"}}>*/}
            {/*                        <CardHeader*/}
            {/*                            avatar={*/}
            {/*                                <Avatar alt="Remy Sharp" src={item2.image}/>*/}
            {/*                            }*/}

            {/*                            title={item2.room_type}*/}
            {/*                            subheader={item2.header}*/}
            {/*                        />*/}

            {/*                        <CardContent>*/}
            {/*                            <Typography variant="body2" color="text.secondary">*/}
            {/*                                {item2.cost}*/}
            {/*                            </Typography>*/}
            {/*                        </CardContent>*/}

            {/*                    </Card>*/}
            {/*                </Grid>*/}
            {/*            )*/}
            {/*        })*/}
            {/*        }*/}


            {/*    </Grid>*/}



            {/*</div>*/}

        </>
    )


}
export default DetailedViewHotel