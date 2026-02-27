import React from "react";
import "./CategoryPet.scss";
import { useParams } from "react-router-dom";
import allCategories from "../../data/allCategories";
import Navbar from "../../components/navbar/Navbar";
import allPets from "../../data/allPets";
import { Link } from "react-router-dom";

const CategoryPet = () => {
  const { categoryName } = useParams();
  const decodedName = decodeURIComponent(categoryName);

  const category = allCategories.find(
    (cat) => cat.name.toLowerCase() === decodedName.toLowerCase(),
  );

  /*I want to check if the category the user chose matches the categroy of the pets in the allPets data file, then show only matching pets*/
  if (!category)
    return <h1 style={{ padding: "10vh" }}>Category not found... :(</h1>;

  const subCategoryPets = allPets.filter(
    (pet) => pet.category === category.name,
  );
  const pros = category.facts.pros;
  const cons = category.facts.cons;
  const goodFit = category.facts.goodFitFor;
  const badFit = category.facts.badFitFor;
  return (
    <>
      <Navbar />
      <div className="categoryDisplay noise">
        <div className="txt">
          <h1>{category.name}</h1>
          <h3>{category.des}</h3>
          <h4>{category.longDes}</h4>
          <a href="#subcategoryPets" className="a">
            <p>Scroll To Read More</p>
          </a>
        </div>
        <div className="img-cont">
          <img src={category.img} alt="" />
        </div>
      </div>

      <div className="facts">
        <div className="facts-txt">
          <span className="note">Facts</span>
          <h1>What about {category.name} ?</h1>
          <p>Let's explore more about this category.</p>
        </div>
        <div className="info1 info">
          <div className="info-txt">
            <h2>Pros of having {category.name}</h2>
            {pros.map((pro, i) => (
              <h5 key={i}>{pro}</h5>
            ))}
          </div>
          <div className="info-img">
            <img src={category.img1} alt="pros" />
          </div>
        </div>

        <div className="info2 info">
          <div className="info-txt">
            <h2>Cons of having {category.name}</h2>
            {cons.map((cons, i) => (
              <h5 key={i}>{cons}</h5>
            ))}
          </div>
          <div className="info-img">
            <img src={category.img2} alt="cons" />
          </div>
        </div>
      </div>

      <div className="subcategoryPets" id="subcategoryPets">
        <span className="note">Simillar Pets</span>
        <h1>Pets under this category</h1>
        <p>
          Looking for a pet in the <span className="span">{category.name}</span>{" "}
          category?
        </p>
        <div className="pet-cont">
          {subCategoryPets.length > 0 ? (
            subCategoryPets.map((pet) => (
              <div key={pet.id} className="pet-card">
                <div className="img-cont">
                  <Link
                    className="a"
                    to={`/category/${category.name}/${pet.name}`}
                  >
                    <img src={pet.img} alt={pet.name} />
                  </Link>
                </div>
                <h3>{pet.name}</h3>
              </div>
            ))
          ) : (
            <p>No pets found in this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPet;
