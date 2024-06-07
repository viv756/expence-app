import { Form, NavLink } from "react-router-dom";
import logoMark from "../assets/logomark.svg";
const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logoMark} alt="logo" />
        <span>HomeBudget</span>
      </NavLink>
      {
        userName && (
          <Form method="post" action="/logout">
            <button type="submit" className="btn btn--warning"><span>Delete User</span></button>
            
          </Form>
        )
      }
    </nav>
  );
};

export default Nav;
