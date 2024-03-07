import React from "react";
import "../../../styling/notFound.css";
import { Link } from "react-router-dom";
// import { TbError404 } from "react-icons/tb";
import didier from '../../assets/walking1.gif'

const notFound = () => {
  return (
    <>
    <main>
    <section className="notFoundSection1" >
    <div className="notFoundContainer">
       <div className="content">
        <h2>myHome <span className="notFoundSpan" >notfound</span></h2>
        <h2>myHome <span className="notFoundSpan" >notfound</span></h2>
        <h2>myHome <span className="notFoundSpan" >notfound</span></h2>
       </div>
    </div>
    </section>
    <section className="notFoundSection2">
      <div className="pHolder">
        <p className="notFoundp" >Looks like you got lost... Or we trying to confuse you...</p>
        <p className="notFoundp" >Let us bring you back <Link to="/" className="notFoundHome"> home</Link> </p>
      </div>
    </section>
    <section className="notFoundSection3">
      <div className="imageHolder">
        <marquee behavior="" direction="right"> <img className="notFoundImage" src={didier} alt="didier" /> </marquee>
      </div>
    </section>
    </main>
    
    
    </>
   
  );
};
export default notFound;