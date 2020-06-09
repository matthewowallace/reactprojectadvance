import React, {useState} from "react";
import {ReactComponent as JoinIcon} from "../../icons/join.svg";
import{ CSSTransition} from "react-transition-group";




function DropdownMenu() {
 const [activeMenu, setActiveMenu] = useState('main');
 const [menuHeight, setMenuHeight] = useState();

 function calcHeight(el){
     const height = el.offsetHeight;
     setMenuHeight(height);
 }


    function DropdownItem(props) {
        return (
            <a href={"#"} className={"menu-item"} onClick={() => props.GotoMenu && setActiveMenu(props.GotoMenu)}>
                <span className={"icon-button"}>{props.leftIcon}</span>
                {props.children}
                <span className={"icon-right"}>{props.rightIcon}</span>
            </a>
        );
    }
    return(
            <div className={"m-dropdown"} style={{height: menuHeight}}>
                <CSSTransition
                                in={activeMenu === 'main'}
                               unmountOnExit
                               timeout={500}
                               classNames={"menu-primary"}
                                onEnter={calcHeight}
                >
                    <div className={"menu"}>
                            <DropdownItem
                                leftIcon={<JoinIcon />}>
                                MY Profile
                            </DropdownItem>
                            <DropdownItem
                                leftIcon={<JoinIcon />}
                                GotoMenu={"settings"}
                            >
                                Settings
                             </DropdownItem>
                    </div>
                </CSSTransition>

                <CSSTransition in={activeMenu === 'settings'}
                               unmountOnExit
                               timeout={500}
                               classNames={"menu-secondary"}
                >
                    <div className={"menu"}>
                        <DropdownItem
                            leftIcon={<JoinIcon />}
                            GotoMenu={"main"}
                        >
                            MY Profile
                        </DropdownItem>
                        <DropdownItem
                            leftIcon={<JoinIcon />}>
                            Settings
                        </DropdownItem>
                    </div>
                </CSSTransition>
            </div>
        );
}
export default DropdownMenu;