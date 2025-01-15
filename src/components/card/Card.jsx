import PropTypes from "prop-types";
import "./card.css";

function Card({ image, alt, title, description }) {
  return (
    <div className="features">
      <div className="feature-item">
        <img src={image} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
