import React from "react";
import banner from "../assets/winter.png";
import Catcard from "../COMPONENTS/catcard";
import mfas from "../assets/mfas.jpg";
import wfas from "../assets/wfas.jpg";
import Bag from "../assets/bag.jpg";
import '../App.css'
function home() {
  return (
    <div>
      <img className="banner" src={banner} alt="" />
      {/* <Carousel/>  */}
      <h1 className="heading">Categories</h1>
      <div className="cat">
        <Catcard title="Men's Fashion" src={mfas} />
        <Catcard title="Women's Fashion" src={wfas} />
        <Catcard title="Accessories" src={Bag} />
      </div>
    </div>
  );
}

export default home;
