import React from "react";
import "./Categeories.scss";
import allCategories from "../../data/allCategories";
import { Link } from "react-router-dom";

const Categeories = () => {
  return (
    <div className="categories line" id="categories">
      <span className="note">Categories</span>
      <h1>Which One is Your Pet?</h1>
      <p>Here are some pet categories choose one and read more about them!</p>
      <div className="categories-cont">
        {allCategories.map((category) => {
          return (
            <div className="category">
              <Link className="a" to={`/category/${category.name}`}>
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
