const { Fragment } = require("react");

import React from "react";
import HeroBanner from "./HeroBanner";

export default class App extends React.Component{
    render(){
        return (
            <Fragment>
               <HeroBanner bgImg={{
                   desk: { img: "https://ss7.vzw.com/is/image/VerizonWireless/security-banner1-d-11202019?&scl=1", height: 470 },
                   mobile: { img: "https://ss7.vzw.com/is/image/VerizonWireless/security-banner1-m-11202019?scl=1", height: 640 }
               }}>
               </HeroBanner>
            </Fragment>
        )
    }
}

