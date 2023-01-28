import React from "react";
// import Layout from "@/components/common/layout";
import { Top } from "../body/Top";
import { Discount } from "../body/Discount";
import { FavoriteCategory } from "../body/FavoriteCategory";
import LayoutT from "../../../components/common/layout/Layout";

const HomePage = () => {
  return (
    <LayoutT>
      <Top />
      <Discount />
      <FavoriteCategory />
    </LayoutT>
  );
};
export default HomePage;
