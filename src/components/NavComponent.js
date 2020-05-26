import React from "react";
import {Link} from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components'

const Navlink = styled.li`
    list-style:none;
    display:inline-block;
`
const Nav = styled.div`
 display:flex;
 justify-content: space-between;
 align-items:center;
 padding: 10px 10%;
 background-color:#5CBDD0;
`

/*
const Seacrh  = () => {

}
("#search-icon").click(function() {
    (".nav").toggleClass("search");
    (".nav").toggleClass("no-search");
    (".search-input").toggleClass("search-active");
});

('.menu-toggle').click(function(){
    (".nav").toggleClass("mobile-nav");
    (this).toggleClass("is-active");
});
*/

const NavBar = () =>(
    <>
             <Nav className={"navigator"}>
                 <h2 className={"Brand"}><Link to={"/"} style={{ textDecoration: 'none'}}>Young Creator</Link></h2>
                 <Navlink>
                     <ul className="nav">
                         <li className="nav-item"><Link to={"/SocialPagelist"} style={{ textDecoration: 'none'}}>Young Creator</Link></li>
                         <li>About</li>
                         <li>Contact</li>
                         <li><Link to={"/"} style={{ textDecoration: 'none'}}>LOGIN / CREATE ACCOUNT</Link></li>
                     </ul>
                 </Navlink>
             </Nav>
    </>
);
export default NavBar;