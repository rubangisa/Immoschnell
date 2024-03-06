import React from "react";
import "../../../styling/notFound.css";
import { TbError404 } from "react-icons/tb";


// import didier from '../../assets/walking.gif'

const notFound = () => {
  return (
    <>
    <section className="section1" >
    <div className="notFoundContainer">
       <div className="content">
        <h2>myHome<TbError404 className="home" /></h2>
        <h2>myHome<TbError404 className="home" /></h2>
        <h2>myHome<TbError404 className="home" /></h2>
       </div>
    </div>
    </section>
    <section className="section2">
    <div className="imageHolder"></div>
    </section>
    
    </>
   
  );
};
export default notFound;