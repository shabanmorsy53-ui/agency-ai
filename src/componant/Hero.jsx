import React from "react";
import assets from "../assets/assets";

const Hero = ({theme}) => {
  return (
    <div className={`hero ${theme}`}>
        <div className="container pt-5">

        <div className="cont m-auto d-flex align-items-center gap-1 p-1 border rounded-5 border-black">
            <img src={assets.group_profile} alt="" />
            <h6>Trusted by 10k+ people</h6>
        </div>

        <h2 className="text-center mt-4 headT">
            Turning imagination into <br /> <span>digital</span> impact.
        </h2>

        <p className="text-center mt-2 ptext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste
            <br />
            amet sint eum accusantium? Ducimus.
        </p>

        <div className="m-auto" style={{width:'80%'}}>
            <img style={{width: '100%'}} src={assets.hero_img} alt="" />
        </div>

        </div>
    </div>
  );
};

export default Hero;
