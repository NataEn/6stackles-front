import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import ProductInfo from "../ProductInfo/ProductInfo";
const ProductItem = (props) => {
  return (
    <li className="product_item">
      <ProductInfo name={props.name} desc={props.desc} id={props.id} />
      <div className="product_item_img_wrapper">
        <img src={props.imgUrl} alt={props.name} className="product_item_img" />
        <div className="product_item_img_footer">
          <span>{props.price} $</span>
          <span> 12 km</span>
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
