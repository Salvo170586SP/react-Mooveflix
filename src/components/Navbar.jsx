import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navabr = () => {
  return (
    <>
      <header className="z-50">
        <nav>
          <h3>MOOVEFLIX</h3>
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/chi-siamo"}>CHI SIAMO</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navabr;
