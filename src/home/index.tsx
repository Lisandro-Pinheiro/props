import { Component } from "react";
import TextComponent from "../component/text-component";
import React from "react";

interface Props{
    param: string;
}

export default class HomeView extends Component <Props> {
    render(){
        return(
            <div style={{backgroundColor: "blue"}}>
                <h1>HomeView</h1>
                <TextComponent param={this.props.param} />
            </div>
        )
    }
}