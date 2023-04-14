import OtherComponent from "./other-component";
import React from "react";

interface Props{
    param: string;
}

export default function TextComponent(props:Props) {
    return(
        <div style={{backgroundColor: "#a5a5a5"}}> 
            <h2>TextComponent</h2>
            <span>{props.param}</span>
            <OtherComponent param ={props.param} />
        </div>
    )
}   