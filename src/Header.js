import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
function Header() {
  const user = JSON.parse(localStorage.getItem('admin_info'));
  const navigate = useNavigate();
  function logout()
  {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="red" variant="dark">
      <Container>
        
            {
              localStorage.getItem('admin_info') ?
                <>
                 <Link to ="/productlist">Product List</Link>
                 <Link to ="/update">Search</Link>
                  <Link to="/addProduct">Add Product</Link>
                  <button onClick={logout}>Logout</button>
                </>
                :
                <>
                  
                    <Link to ="/login"></Link>
                    <Link to ="/registratrion"></Link>
                </>
            }
          
            <NavDropdown title={user && user.name} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={logout} >Log out</NavDropdown.Item>
              <NavDropdown.Item href="/registratrion">Profile</NavDropdown.Item>
              </NavDropdown>
      </Container>
    </Navbar>
  );
}
export default Header