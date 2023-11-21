import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Brand = ({ products, setFilteredProducts }) => {
  const brands = [
    "Sony",
    "Canon",
    "Nikon",
  ];

  const [selectedBrand, setSelectedBrand] = useState(null);

  const selectBrand = (brand) => {
    setSelectedBrand(brand);

    // Filter products based on the selected brand
    const filteredProducts = products.filter((product) => product.brand === brand);

    setFilteredProducts(filteredProducts);
  };

  const clearSelection = () => {
    setSelectedBrand(null);
    setFilteredProducts(products);
  };

  return (
    <div>
      <div className="cursor-pointer">
        <NavTitle title="Popular Brands" icons={true} />
      </div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {brands.map((brand) => (
            <li
              key={brand}
              className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 ${
                selectedBrand === brand ? "text-primeColor" : ""
              }`}
            >
              <button
                onClick={() =>
                  selectedBrand === brand ? clearSelection() : selectBrand(brand)
                }
                className="focus:outline-none"
              >
                {brand}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Brand;
