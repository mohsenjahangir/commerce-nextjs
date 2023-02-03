import React from "react";
// import Layout from "@/components/common/layout";
import  Top  from "../body/Top";
import  Discount  from "../body/Discount";
import  FavoriteCategory  from "../body/FavoriteCategory";
import LayoutT from "../../../components/common/layout/Layout";
import  Amazing  from "../body/Amazing";
import Mostsells from '../body/Mostsells'
import  Phonenav  from "../body/Phonenav";
const HomePage = () => {
  return (
    <LayoutT>
      <Top />
      <Discount />
      <FavoriteCategory />
      <Amazing/>
      <Mostsells/>
      <Phonenav/>
    </LayoutT>
  );
};
export default HomePage;
