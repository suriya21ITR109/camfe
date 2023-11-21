import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Canon EOS 3000D 18MP Digital SLR Camera (Black) with 18-55mm is II Lens, 16GB Card and Carry Case"
          price="2,10,000"
          color="Blank"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Canon EOS 6D Mark II Digital SLR Camera Body [Wi-Fi Enabled, Black] 33 MP Mirrorless Camera, 10 FPS, 4K/60p, With 28 -70 Mm Zoom Lens"
          price="1,50,000"
          color="Gray"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Canon EOS R7 32.5MP Mirrorless Digital Camera with RF-S18-150mm Kit Lens (APS-C Sensor, 30 FPS, Next Gen Auto Focus, Next Level Image Stabilisation, 4K) – Black"
          price="2,15,000"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Canon EOS M50 Mark II Optical (Black) + EF-M 15-45mm & EF-M 55-200mm is STM Bundle"
          price="1,20,000"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
