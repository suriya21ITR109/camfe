import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Sony Alpha ILCE 6100L 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm Power Zoom Lens (APS-C Sensor,Fast Auto Focus,Real-time Eye AF,Real-time Tracking,4K Vlogging Camera & Tiltable Screen), Black"
          price="1,00,000"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Sony Zv-1F Vlog Camera for Content Creators&Vloggers with Ultra-Wide 20Mm Prime Lens|Soft Skin Feature|Bokeh|Creative Look|Active Mode Stabilisation,Digital Zoom"
          price="2,30,000"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Sony Alpha 7IV Full-Frame Hybrid Camera (ILCE-7M4K) | 33 MP Mirrorless Camera, 10 FPS, 4K/60p, With 28 -70 Mm Zoom Lens "
          price="1,30,000"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Sony Alpha ILCE-7M3 Full-Frame 24.2MP Mirrorless Digital SLR Camera Body (4K Full Frame, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD, Low Light Camera) - Black"
          price="1,60,000"
          color="Blue"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
