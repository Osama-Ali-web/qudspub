import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./Service.css";

export default function CarouselLogo(props) {
  return (
    <div className="container-fluid">
    <img style={{width:'132px', height:'93px', paddingBottom:'32px',paddingTop:'10px'}} className="logoimage" src={props.url} alt="logo_image" />
  </div>
  );
}