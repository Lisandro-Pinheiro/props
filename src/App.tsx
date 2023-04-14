import React from "react";
import HomeView from "./home";


interface Props{
  param: string;
}

export default function App(props:Props) {
  return(
      <div style={{backgroundColor: "red"}}> 
          <HomeView param="Teste"></HomeView>
          <h2>AppTsx</h2>
          <span>{props.param}</span>
      </div>
  )
}   