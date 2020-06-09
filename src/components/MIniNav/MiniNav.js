import React, { useState} from "react";
import Mini from "./Mini";
import NavItem from "./NavItem"
import { ReactComponent as JoinIcon} from '../../icons/join.svg';
import {ReactComponent as Menu} from '../../icons/menu.svg';
import DropdownMenu from "./dropdownMenu";


const  NavMini = () => (
     <>
       <Mini>
           <NavItem  icon={ <JoinIcon />} />
           <NavItem icon={ <Menu />}>
               <DropdownMenu />
           </NavItem>
       </Mini>
    </>

);
export default NavMini;