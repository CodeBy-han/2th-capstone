import { useLocation, Link } from "react-router-dom";
import Icons from "../utils";
import "./header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav_icons">
        {Icons.map(({ path, default: defaultIcon, active, name }, index) => (
          <Link to={path} key={index} className="nav_icon">
            <img
              src={location.pathname === path ? active : defaultIcon}
              alt={`icon for ${path}`}
            />
            <p>{name}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
