import React from "react";
import "./Categeories.scss";
import allCategories from "../../data/allCategories";
import { Link } from "react-router-dom";

const Categeories = () => {
  return (
    <div className="categories" id="categories">
      <span className="note">Categories</span>
      <h1>Pet Categories</h1>
      <div className="categories-cont">
        {allCategories.map((category) => {
          return (
            <div className="category">
              <Link className="a" to={`/category/${category.id}`}>
                <div className="img-con">
                  <img src={category.img} alt="" />
                </div>
              </Link>
              <h3>{category.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categeories;
