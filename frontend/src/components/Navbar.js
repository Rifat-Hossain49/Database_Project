import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import {navigate, isLoggedIn, setLoginName, Setting, isAdmin, customer_id} from '../App'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logoproject.jpg'
import bgt from '../images_cards/hotelcard-4.jpg'
import Cookies from 'universal-cookie';
import axios from "axios";
import {check_indate, check_outDate} from "./Home";
import {hotel_name, hotelDeatils, hotelFacilities, hotelServices} from "./AfterSearchFromHome";
import {Menu, Tooltip} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
const settings=[
    {
        name:'Profile',
        location:'/userprofile'
    },
    {
        name: 'Dashboard',
        location: '/prebooking'
    }
]


const cookies = new Cookies();

var nav
var adminHotel=[];
const Navbar= (props) =>{
    nav=useNavigate();

    console.log(isLoggedIn);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [value, setValue] = React.useState(0);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const click = (hotel_id) => {
        console.log(hotel_id);
        nav('/detailedViewHotel')

    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    if(isLoggedIn==false)
    {
        return(
            <>
                <nav  class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#" style={{ backgroundImage : 'bgt', backgroundSize: 'cover', width: '200px', height: '50px' }}>
                        <img src={logo} alt="logo"/> 
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul class="navbar-nav m-auto">
                            <li style={{cursor:'pointer',marginLeft:1150,fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/home")
                            }} >
                                Home
                            </li>
                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/about")
                            }} >
                                About
                            </li>
                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/contact")
                            }} >
                                Contact
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} className="nav-item"
                                onClick={() => {
                                    nav("/login")
                                }}>
                                LogIn
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                //Setting(false)
                                nav("/signup")
                            }} >
                                SignUp

                            </li>
                        </ul>

                    </div>
                </nav>
            </>
        )
    }
    else if(isAdmin)
    {
        return(
            <>
                <nav  class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <li style={{cursor:'pointer',marginLeft:400,fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/home")
                            }} >
                                Home
                            </li>
                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/about")
                            }} >
                                About
                            </li>
                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/contact")
                            }} >
                                Contact
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} className="nav-item"
                                onClick={async () => {

                                        try{

                                            var res=await  axios.post('http://localhost:8080/adminhotel',{
                                                admin_id:customer_id
                                            })
                                            adminHotel=res.data.data;
                                            console.log(res.data.data)
                                        }
                                        catch(e){
                                            console.log(e);
                                        }
                                        nav("/firstpageofadmin")
                                }}>
                                {setLoginName}
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                cookies.remove('user',{ path: '/' })
                                Setting(false,null,null,null,false);
                                nav("/home")
                            }} >
                                Logout

                            </li>
                        </ul>

                    </div>
                </nav>
            </>
        )
    }
    else if(isLoggedIn)
    {
        return(
            <>
                <nav  class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <li style={{cursor:'pointer',marginLeft:420,fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/home")
                            }} >
                                Home
                            </li>
                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/about")
                            }} >
                                About
                            </li>
                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                nav("/contact")
                            }} >
                                Contact
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} className="nav-item"
                                onClick={async () => {
                                    nav("/userprofile")
                                }}>
                                {setLoginName}
                            </li>

                            <li style={{cursor:'pointer',marginLeft:"40px",fontFamily:'helvetica',fontSize:25,color:"blue"}} class="nav-item" onClick={()=>{
                                cookies.remove('user',{ path: '/' })
                                Setting(false,null,null,null,false);
                                nav("/home")
                            }} >
                                Logout

                            </li>
                            <li>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings" >
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src={logo} />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting.name}   onClick={()=>{
                                                handleCloseUserMenu();
                                                nav(setting.location);

                                            }}>
                                                <Typography textAlign="center" >{setting.name}</Typography>
                                                {<a href={"/userprofile"}>click me</a>}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </li>

                        </ul>

                    </div>
                </nav>
            </>
        )
    }

}

export default Navbar
export {adminHotel}

