import "./ModelBackground.css";

import backgroundImage from "../../assets/Homepage-Model-3.avif";
import Button from "../button/Button";
function ModelBackGround({
  backgroundImage,
  header,
  price,
  description,
  text,
  zIndex,
}) {
  return (
    <div
      className="image-background"
      style={{ backgroundImage: `url(${backgroundImage})`, zIndex: zIndex }}
    >
      <div>
        <div className="tcl-hero-content">
          <div className="top-section">
            <h1>{header}</h1>

            <h3>{price}</h3>

            <p>{description}</p>
          </div>
          <div className="section-btom">
            <Button text="Order Now" />

            <p className="footer-text">{text}</p>
            <a href="#" className="link ">
              Learn about est. gas savings.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelBackGround;

ModelBackGround.defaultProps = {
  description: "After Federal Tax Credit & Est. Gas Savings",
};
