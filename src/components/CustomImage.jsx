import PropTypes from "prop-types";

const CustomImage = ({ src, padTop }) => {
  return (
    <div style={{ paddingTop: padTop }} className="customImage">
      <img src={src} alt="" />
    </div>
  );
};

CustomImage.propTypes = {
  src: PropTypes.string,
  padTop: PropTypes.string,
};

export default CustomImage;
