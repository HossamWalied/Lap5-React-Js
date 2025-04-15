// import { Container, Nav, Navbar } from "react-bootstrap";

// const Header = ()=>{
//     return(
//         <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
//           <Nav className="ms-auto">
//             <Nav.Link to="/">ProductsList</Nav.Link>
//             <Nav.Link to="/cart">Cart</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     );
// }
// export default Header;







// import { Badge, Container, Nav, Navbar } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const counter = useSelector(state => state.counter.counterVal);
//   const cartItems = useSelector(state => state.cart.items);
//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <Navbar bg="dark" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
//         <Nav className="ms-auto">
//           <Nav.Link as={Link} to="/">ProductsList</Nav.Link>
//           {/* <Nav.Link as={Link} to="/cart">Cart 🛒 <Badge bg="warning" pill>{totalItems}</Badge></Nav.Link> */}
//           <Nav.Link as={Link} to="/cart" style={{ position: 'relative' }}>
//             🛒
//             {totalItems > 0 && (
//               <Badge
//                 bg="danger"
//                 pill
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   right: 0,
//                   transform: 'translate(30%, -30%)',
//                   fontSize: '0.6rem',
//                   padding: '4px 6px',
//                 }}
//               >
//                 {totalItems}
//               </Badge>
//             )}
//           </Nav.Link>
//           <Nav.Link as={Link} to="/counter">Product Counter : {counter}</Nav.Link>

//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;



import { Container, Nav, Navbar, Badge, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Settings from './../pages/Settings';
import { useContext } from "react";
import ThemeContext from "../contexts/Theme";
import LangContext from "../contexts/Language";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const counter = useSelector(state => state.counter.counterVal);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { theme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext)

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">ProductsList</Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ position: "relative", paddingRight: "0.6rem" }}>
              🛒
              {totalItems > 0 && (
                <Badge
                  bg="danger"
                  pill
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    transform: "translate(50%, -30%)",
                    fontSize: "0.65rem",
                    padding: "4px 6px",
                    minWidth: "20px",
                    textAlign: "center",
                  }}
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/counter" className="ms-2">Product Counter : {counter}</Nav.Link>
            <Nav.Link as={Link} to="/register" className="ms-2">Register</Nav.Link>
            <Nav.Link as={Link} to="/settings" className="ms-2">Settings</Nav.Link>
            <span className="ms-2 nav-link">Theme : {theme}</span>


            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {lang}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLang("ar")}>Ar</Dropdown.Item>
                <Dropdown.Item onClick={() => setLang("en")}>En</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
