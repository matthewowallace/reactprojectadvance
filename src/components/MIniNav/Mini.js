import React from 'react';
import styled from "styled-components";

function Mini(props) {
 return(
     <nav className={"mini-navbar"}>
         <ul className={"mini-navbar-nav"}>
             {props.children}
         </ul>
     </nav>
 );
}
export default Mini;