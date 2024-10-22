import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>this is a header</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
