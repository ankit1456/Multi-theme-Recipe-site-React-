import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ChefCard = ({ chef }) => {
  return (
    <div className="chefcard">
      <img src={chef.img} alt="" />
      <div className="chefcard__info">
        <h3 className="chefcard__name">{chef.name}</h3>
        <p className="chefcard__recipe-count">
          Recipes: <b>{chef.recipesCount}</b>
        </p>
        <p className="chefcard__cuisine">
          Cuisine: <b>{chef.cuisine}</b>
        </p>
        <p className="chefcard__icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
};

ChefCard.propTypes = {
  chef: PropTypes.object,
};

export default ChefCard;
