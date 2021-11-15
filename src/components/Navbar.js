import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Navbar = (props) => {
  const { jerseys, setJerseys } = props;

  const history = useHistory();

  const handleLogout = () => {
    // console.log("HELLO THERE");
    props.setUser(null);
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
    // console.log("GENERAL KENOBI");
  };

  return (
    <div>
      <header>
      <div className="dropdown">
        <Link to="/"> Home </Link>
        <div class="dropdown-content">
          <h2>Categories</h2>
          <div class="dropdown-content">
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>Children</Link>
          </div>
        </div>
      </div>
     
      <Link to="/products">Shop Jerseys</Link>
      <Link to="/cart">My Cart</Link>
      {!props.user && <Link to="/login"> Login</Link>}
      {!props.user && <Link to="/register"> Register</Link>}
      {props.user && (
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      )}
      </header>
      
    </div>
  );
};

export default Navbar;
