import React, { useState } from "react";
import Image from 'next/image'
import Nav from '../styles/Navbar.module.css'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  hamburber: {
    width: "30px",
    height: "3px",
    background: "#000000",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      zIndex:"1",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(45deg) translate(35px, -35px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      zIndex:"1",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(-45deg) translate(35px, 35px)",
    },
  },
  sidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "fff",
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },
  activeSidenav: {
    position: "fixed",
    width: "70%",
    height: "100vh",
    background: "fff",
    transform: "translateX(50%)",
    transition: "all 0.5s ease-in-out",
    transition: "all 0.5s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      padding: "20px 0",
    },
  },
  a: {
    margin: "20px 0",
    color: "black",
  },
}));


const Navbar = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (
    <div className={Nav.main}>
      <div className={Nav.container}>   
        <div className={Nav.img}>
          <Image src="/Metal_Station_Logo.png" alt="logo" 
          width={150}
          height={50}
          />
          </div>
          <div className={Nav.hidetitles}>
<div className={Nav.searchcontainer}>
    <form action=" ">
      <input type="text" placeholder="Search" name="search" className={"search"}/>
      <button type="submit" className={Nav.btn}><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
  </div>
  <div className={Nav.nav_right}>
                    <li className={Nav.nav_item}>Buy</li>
                    <li className={Nav.nav_item}>Sell</li>
                    <li className={Nav.nav_item}>Blog</li>
                    <li className={Nav.nav_item}>About us</li>
                    <li className={Nav.nav_item}><i className="fa-regular fa-bell"></i></li> 
                    <button className={Nav.login}>Log in <i className="fa-solid fa-angle-right"></i> </button>
                </div>
    </div>
<div className={Nav.hideham}>
          <div onClick={() => setActive(!active)}>
            <div
              className={active ? classes.activeHamburger : classes.hamburber}
            />
          </div>
      </div>
      <div className={active ? classes.activeSidenav : classes.sidenav}>
      <div className={Nav.mobcontainer}>
      <i className="fa-solid fa-user">Login</i>
    </div>
        <div className={Nav.Design}> 
        </div>
        <ul className={classes.ul}>
          <li><i className="fa-solid fa-house-chimney"></i> Home</li>
          <li> <Image src="/buy.png" alt="" className="img"
          height={30}
          width={30}
          /><p>Buy Scrap</p></li>
          <li> <Image src="/sell.png" alt="" className="img"
          height={30}
          width={30}
          /><p> Sell Scrap </p></li> 
          <li><Image src="/blog.png" alt="" className="img"
          height={30}
          width={30}
          /> <p>Blog </p></li> 
          <li><Image src="/info.png" alt="" className="img"
          height={30}
          width={30}
          /><p>About us </p> </li>
          <li> <Image src="/information.png" alt="" className="img"
          height={30}
          width={30}
          /><p>FAQ </p></li>
        </ul>
      
      
    
      </div>
      </div>

    </div>
  );
};

export default Navbar;
