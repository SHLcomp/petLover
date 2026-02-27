import React from "react";
import "./Break1.scss";

const Break1 = () => {
  return (
    <div className="break break1">
      <div className="break-txt">
        <div className="break-txt">
        <span className="note">Blog | Cat Care</span>
          <h1>Pet Anxiety</h1>
          <p>Everything you need to know about anxiety in cats.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quam
            eos officiis aut enim. Possimus nobis nostrum in a tempora, officia
            necessitatibus aliquid reprehenderit est voluptas eligendi,
            exercitationem, repellat voluptatum.
          </p>
          <div className="ctas">
            <h3 className="cta2">Read Article</h3>
          </div>
        </div>
      </div>
      <div className="break-img">
        <img
          src="https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Break1;
