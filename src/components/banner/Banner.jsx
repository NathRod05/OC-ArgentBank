import "./banner.css";
import PropTypes from "prop-types";

function Banner({ image, description }) {
  return <img src={image} alt={description} className="banner"></img>;
}

Banner.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
};
export default Banner;
