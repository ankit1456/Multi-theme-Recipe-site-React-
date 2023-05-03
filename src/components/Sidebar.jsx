import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ pages, close }) => {
  const location = useLocation();
  return (
    <div className="sidebar" onClick={close}>
      {pages.map((page) => (
        <Link
          className={`${
            location.pathname === page.path
              ? "sidebar__link active"
              : "sidebar__link"
          }`}
          to={page.path}
          key={page.name}
        >
          <FontAwesomeIcon icon={page.icon} />
          {page.name}
        </Link>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  pages: PropTypes.array,
  close: PropTypes.func,
};
export default Sidebar;
