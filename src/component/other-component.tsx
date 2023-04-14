import React from "react";

interface Props{
    param: string;
}

export default function OtherComponent(props:Props) {
    return(
        <div style={{backgroundColor: "orange"}}> 
            <h2>OtherComponent</h2>
            <span>{props.param}</span>
        </div>
    )
}   