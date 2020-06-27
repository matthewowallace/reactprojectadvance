import React from "react";
import "../../assets/css/cardShadow.css";
import"../../assets/css/icofont.min.css";

const Socialnav = () =>(
    <>
        <div className={"wrapper"}>
            <div className={"socialcard"}>
                <div className={"purple"}>
                    <div className={"text-wrapper"}>
                        <i className={"text icofont-facebook"}></i>
                    </div>
                </div>
            </div>
            <div className={"socialcard"}>
                <div className={"pink"}>
                    <div className={"text-wrapper"}>
                        <i className={"text icofont-brand-whatsapp"}></i>
                    </div>
                </div>
            </div>
            <div className={"socialcard"}>
                <div className={"blue"}>
                    <div className={"text-wrapper"}>
                        <i className={"text icofont-instagram"}></i>
                    </div>
                </div>

            </div>
            <div className={"socialcard"}>
                <div className={"red"}>
                    <div className={"text-wrapper"}>
                        <i className={"text icofont-twitter"}></i>
                    </div>
                </div>
            </div>
        </div>
    </>
);
export default Socialnav;